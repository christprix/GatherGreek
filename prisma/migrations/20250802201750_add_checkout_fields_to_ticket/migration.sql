/*
  Warnings:

  - A unique constraint covering the columns `[checkoutSessionId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "checkoutSessionId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_checkoutSessionId_key" ON "Ticket"("checkoutSessionId");
