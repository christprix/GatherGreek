"use server";

import nodemailer from "nodemailer";
import QRCode from "qrcode";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "greeksgather@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function sendMail({
  email,
  ticketqrcode,
  name,
}: {
  email: string;
  ticketqrcode: string;
  name: string;
}) {
  try {
    const isVerified = await transporter.verify();

    const qrCodeDataURL = await QRCode.toDataURL(ticketqrcode, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });
    console.log("QR Code Data URL starts with:", qrCodeDataURL.slice(0, 50));

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>🎟️ Your Ticket</h2>
        <p>Hi ${name || "there"},</p>
        <p>Thank you for purchasing your ticket!</p>
        <p>Please present this QR code at the event entrance:</p>
        <img src="${qrCodeDataURL}" alt="QR Code" style="width:200px; height:200px; margin:20px 0;" />



        <p style="margin-top:30px;">Enjoy the event,<br/>The MeetAndGreek Team</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: "<greeksgather@gmail.com>",
      to: email,
      subject: "Your Ticket from Meet and Greek!",
      html,
    });
    console.log("Message Sent", info.messageId);
    return info;
  } catch (error) {
    console.error(
      "Something Went Wrong",
      process.env.GOOGLE_APP_PASSWORD,
      error
    );
  }
}
