-- CreateTable
CREATE TABLE "_UserScheduledEvents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserScheduledEvents_AB_unique" ON "_UserScheduledEvents"("A", "B");

-- CreateIndex
CREATE INDEX "_UserScheduledEvents_B_index" ON "_UserScheduledEvents"("B");

-- AddForeignKey
ALTER TABLE "_UserScheduledEvents" ADD CONSTRAINT "_UserScheduledEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserScheduledEvents" ADD CONSTRAINT "_UserScheduledEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
