import { appendFileSync } from "node:fs";

const SITE_URL =
  process.env.MONITOR_URL ||
  "https://lasya365.github.io/Syslatech-demo/";

const TIMEOUT_MS = 10_000;

async function monitorWebsite() {
  console.log("==================================");
  console.log(" Syslatech Website Monitoring");
  console.log("==================================");
  console.log(`Website: ${SITE_URL}`);

  const startTime = Date.now();
  const checkedAt = new Date().toISOString();

  let httpStatus = "Not received";
  let responseTime = 0;
  let contentCheck = "NOT CHECKED";
  let overallStatus = "DOWN";
  let failureReason = "";

  try {
    const response = await fetch(SITE_URL, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "User-Agent": "Syslatech-Monitor/1.0",
      },
    });

    httpStatus = response.status;

    const html = await response.text();
    responseTime = Date.now() - startTime;

    console.log(`HTTP Status: ${httpStatus}`);
    console.log(`Response Time: ${responseTime} ms`);

    if (!response.ok) {
      throw new Error(
        `Website returned HTTP ${response.status}`
      );
    }

    if (!html.includes("Syslatech")) {
      contentCheck = "FAILED";

      throw new Error(
        'Expected website content "Syslatech" was not found.'
      );
    }

    contentCheck = "PASSED";
    overallStatus = "UP";

    console.log("Content Check: PASSED");
    console.log("Overall Status: UP");
    console.log("Website is responding correctly.");
  } catch (error) {
    responseTime = Date.now() - startTime;
    failureReason = error.message;

    console.error(`HTTP Status: ${httpStatus}`);
    console.error(`Response Time: ${responseTime} ms`);
    console.error("Overall Status: DOWN");
    console.error(`Failure Reason: ${failureReason}`);

    process.exitCode = 1;
  }

  // Build the dashboard report.
  const summary = `
# Syslatech Website Monitoring

| Metric | Result |
|---|---|
| Overall Status | **${overallStatus}** |
| Website URL | ${SITE_URL} |
| HTTP Status | ${httpStatus} |
| Response Time | ${responseTime} ms |
| Content Check | ${contentCheck} |
| Checked At (UTC) | ${checkedAt} |
| Failure Reason | ${failureReason || "None"} |

${overallStatus === "UP"
    ? "### Website check passed"
    : "### Website check failed"}

${overallStatus === "UP"
    ? "The website responded successfully and the expected content was found."
    : `**Error:** ${failureReason || "Unknown error"}`}
`;

  // GitHub Actions displays this report in the run summary.
  // Local runs continue to show results in the terminal.
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(
      process.env.GITHUB_STEP_SUMMARY,
      summary
    );

    console.log("Dashboard summary added to GitHub Actions.");
  }
}

monitorWebsite();

