"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "greeksgather@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function sendMail({ email }: { email: string }) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      process.env.GOOGLE_APP_PASSWORD,
      error
    );
  }
  const info = await transporter.sendMail({
    from: "<greeksgather@gmail.com>",
    to: email,
    subject: "Your Ticket!",
    text: "This is a nodemailer test",
    html: "<b>Hello world?</b>",
  });
  console.log("Message Sent", info.messageId);
  return info;
}
