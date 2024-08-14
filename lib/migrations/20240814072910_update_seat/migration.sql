/*
  Warnings:

  - Changed the type of `class` on the `Seat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "class",
ADD COLUMN     "class" BOOLEAN NOT NULL;
