-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "short_description" DROP NOT NULL,
ALTER COLUMN "short_description" DROP DEFAULT;
