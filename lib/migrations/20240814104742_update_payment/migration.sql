/*
  Warnings:

  - Added the required column `ccv` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.
  - Made the column `cardNumber` on table `PaymentMethod` required. This step will fail if there are existing NULL values in that column.
  - Made the column `expiryDate` on table `PaymentMethod` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PaymentMethod" ADD COLUMN     "ccv" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "cardNumber" SET NOT NULL,
ALTER COLUMN "expiryDate" SET NOT NULL;
