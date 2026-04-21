import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    // Send email via Resend
    await resend.emails.send({
      from: "Digital Envisioned <no-reply@yourdomain.com>", // replace with your verified domain
      to: email,
      subject: "Here’s your free preview chapter!",
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Thanks for grabbing your free preview of <strong>Grow Your Business with Digital Marketing</strong>.</p>
        <p>You can access it here: <a href="https://yourdomain.com/free-preview">Download Preview</a></p>
        <br/>
        <p>Best,<br/>Joshua Newton</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
