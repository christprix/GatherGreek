/*
  Warnings:

  - A unique constraint covering the columns `[qrCodeData]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "qrCodeData" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_qrCodeData_key" ON "Ticket"("qrCodeData");
