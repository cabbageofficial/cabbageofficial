import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/components";

//Email Template
import ConfirmTemplate from "@/Helpers/ConfirmTemplate";
import ReplyTemplate from "@/Helpers/ReplyTemplate";

//Setup resend
const resend = new Resend(process.env.RESEND_MAILER_KEY);

export async function POST(req: Request) {
    const data = await req.json();
    const confirmHtml = render(ConfirmTemplate({ name: data.name, email: data.email, subject: data.subject, message: data.message }));
    const replyHtml = render(ReplyTemplate());

    await resend.sendEmail({
        from: "Cabbage <client@cabbageweb.com>",
        to: "siamahnaf198@gmail.com",
        cc: "cabbageofficial@outlook.com",
        subject: `New message from ${data.name}`,
        html: confirmHtml
    });
    await resend.sendEmail({
        from: "Cabbage <noreply@cabbageweb.com>",
        to: data.email,
        subject: `Thank you for your message ${data.name}`,
        html: replyHtml
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
}