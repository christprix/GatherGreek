-- CreateTable
CREATE TABLE "DraftEvent" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "short_description" TEXT,
    "imagePath" TEXT,
    "eventDate" TIMESTAMP(3),
    "totalSeats" INTEGER,
    "location" TEXT,
    "tags" TEXT[] DEFAULT ARRAY['all']::TEXT[],
    "private" BOOLEAN NOT NULL DEFAULT false,
    "time" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipcode" TEXT,
    "priceInCents" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "DraftEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DraftEvent" ADD CONSTRAINT "DraftEvent_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
