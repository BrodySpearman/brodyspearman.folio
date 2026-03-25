import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodeMailer from 'nodemailer';
import Email from "../../components/info-page/body/contact/email-actions/email";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { email, message } = body;

        if (!email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const emailHtml = await render(Email({ name: "Contact Form", email, message }));

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_OWNER,
            subject: `New portfolio message from ${email}`,
            html: emailHtml,
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}