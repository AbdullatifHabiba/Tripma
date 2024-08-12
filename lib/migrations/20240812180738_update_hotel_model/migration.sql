/*
  Warnings:

  - You are about to drop the column `location` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Hotel` table. All the data in the column will be lost.
  - Added the required column `description` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "location",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "location",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
