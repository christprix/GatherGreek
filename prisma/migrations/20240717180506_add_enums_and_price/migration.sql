/*
  Warnings:

  - Added the required column `priceInCents` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('COMMUNITY_SERVICE', 'SOCIAL', 'GOVERNMENT', 'EDUCATION', 'ECONOMICS', 'OTHER');

-- CreateEnum
CREATE TYPE "Oranization" AS ENUM ('PhiBetaSigma', 'ZetaPhiBeta', 'IotaPhiTheta', 'AlphaPhiAlpha', 'OmegaPsiPhi', 'AlphaKappaAlpha', 'KappaAlphaPsi', 'SigmaGammaRho', 'DeltaSigmaTheta');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "priceInCents" TEXT NOT NULL,
ADD COLUMN     "tag" "Tag" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "organization" "Oranization" NOT NULL;
