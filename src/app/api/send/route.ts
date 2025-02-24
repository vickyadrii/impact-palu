import { createElement } from "react";
import { Resend } from "resend";

import EmailTemplate from "@/components/common/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "From <onboarding@resend.dev>",
      to: ["impactpalu@gmail.com"],
      replyTo: email,
      subject: "New Message From Website!",
      react: createElement(EmailTemplate, {
        name: name,
        message: message,
      }),
    });

    if (error) {
      return Response.json(error);
    }

    return Response.json({
      message: "Message sent successfully!",
      data: data,
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({
    message: "Hello World!",
  });
}
