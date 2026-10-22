
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const countryCode = formData.get("countryCode");
    const phone = formData.get("phone");
    const email = formData.get("email");

    // Basic server-side validation
    if (
      typeof name !== "string" ||
      typeof countryCode !== "string" ||
      typeof phone !== "string" ||
      typeof email !== "string" ||
      !name.trim() ||
      !countryCode.trim() ||
      !phone.trim() ||
      !email.trim()
    ) {
      return new Response("Please provide all required fields.", {
        status: 400,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      });
    }

    // Demonstration only: no email is sent or data permanently stored.
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Contact Form Submitted</title>
        </head>
        <body>
          <main>
            <h1>Form submitted successfully!</h1>
            <p>Your contact form was received through a POST request.</p>
            <a href="/">Return to home page</a>
          </main>
        </body>
      </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch {
    return new Response("Unable to process your submission.", {
      status: 400,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
};
