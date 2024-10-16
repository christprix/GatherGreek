/*
  Warnings:

  - The `organization` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "backroundPicUrl" TEXT,
ADD COLUMN     "chapter" TEXT,
ADD COLUMN     "greekId" TEXT,
ADD COLUMN     "profilePicUrl" TEXT,
ADD COLUMN     "university" TEXT,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
DROP COLUMN "organization",
ADD COLUMN     "organization" TEXT,
ALTER COLUMN "location" DROP NOT NULL;
