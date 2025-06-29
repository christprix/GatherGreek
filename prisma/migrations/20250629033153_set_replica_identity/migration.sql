-- AlterTable
ALTER TABLE "_UserScheduledEvents" ADD CONSTRAINT "_UserScheduledEvents_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_UserScheduledEvents_AB_unique";
ALTER TABLE "_UserScheduledEvents" REPLICA IDENTITY FULL;
