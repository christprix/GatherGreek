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
  title,
  address1,
  description,
}: {
  email: string;
  ticketqrcode: string;
  name: string;
  title: string;
  address1: string;
  description?: string;
}) {
  try {
    await transporter.verify();

    const qrCodeBuffer = await QRCode.toBuffer(ticketqrcode, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    // Create a clean filename
    const safeName = (name || "Guest").replace(/[^a-z0-9]/gi, "_");
    const safeEvent = (title || "Event").replace(/[^a-z0-9]/gi, "_");
    const fileName = `MeetAndGreek_${safeEvent}_Ticket_${safeName}.png`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>🎟️ Your Ticket for ${title || "the event"}</h2>
        <p>Hi ${name || "there"},</p>
        <p>Thank you for purchasing your ticket!</p>
         <p>📍 <strong>${
           address1 || "Event location to be announced"
         }</strong></p>
        <p>Please present this QR code at the event entrance:</p>
        <img src="cid:qrcodeimage" alt="QR Code" style="width:200px; height:200px; margin:20px 0;" />
        <p style="margin-top:30px;">Enjoy the event,<br/>The MeetAndGreek Team</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: "<greeksgather@gmail.com>",
      to: email,
      subject: `🎫 Your Ticket for ${title || "Meet and Greek"}`,
      html,
      attachments: [
        {
          filename: fileName,
          content: qrCodeBuffer,
          cid: "qrcodeimage", // Must match the `cid:` in the HTML <img>
        },
      ],
    });
    console.log("Message Sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Something Went Wrong", error);
  }
}
