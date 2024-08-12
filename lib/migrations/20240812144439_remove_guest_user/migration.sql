/*
  Warnings:

  - You are about to drop the `GuestUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_guestUserId_fkey";

-- DropTable
DROP TABLE "GuestUser";
