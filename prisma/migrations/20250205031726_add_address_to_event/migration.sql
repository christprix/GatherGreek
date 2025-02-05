-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "address1" TEXT,
ADD COLUMN     "address2" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "time" TEXT,
ADD COLUMN     "zipcode" TEXT,
ALTER COLUMN "priceInCents" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "chapterAccount" BOOLEAN NOT NULL DEFAULT false;
