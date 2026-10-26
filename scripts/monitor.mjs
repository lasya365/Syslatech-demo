
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

  try {
    const response = await fetch(SITE_URL, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "User-Agent": "Syslatech-Monitor/1.0",
      },
    });

    const responseTime = Date.now() - startTime;

    console.log(`HTTP Status: ${response.status}`);
    console.log(`Response Time: ${responseTime} ms`);

    if (!response.ok) {
      throw new Error(
        `Website returned HTTP ${response.status}`
      );
    }

    const html = await response.text();

    if (!html.includes("Syslatech")) {
      throw new Error(
        'Expected website content "Syslatech" was not found.'
      );
    }

    console.log("Content Check: PASSED");
    console.log("Overall Status: UP");
    console.log("Website is responding correctly.");
  } catch (error) {
    const responseTime = Date.now() - startTime;

    console.error(`Response Time: ${responseTime} ms`);
    console.error("Overall Status: DOWN");
    console.error(`Failure Reason: ${error.message}`);

    process.exitCode = 1;
  }
}

monitorWebsite();
