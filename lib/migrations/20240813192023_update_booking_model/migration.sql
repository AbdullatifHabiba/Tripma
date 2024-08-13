/*
  Warnings:

  - You are about to drop the column `flightId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `guestUserId` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_flightId_fkey";

-- DropIndex
DROP INDEX "Booking_flightId_idx";

-- DropIndex
DROP INDEX "Booking_guestUserId_idx";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "flightId",
DROP COLUMN "guestUserId",
ADD COLUMN     "arriveFlightId" INTEGER,
ADD COLUMN     "departFlightId" INTEGER;

-- CreateIndex
CREATE INDEX "Booking_departFlightId_idx" ON "Booking"("departFlightId");

-- CreateIndex
CREATE INDEX "Booking_arriveFlightId_idx" ON "Booking"("arriveFlightId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_departFlightId_fkey" FOREIGN KEY ("departFlightId") REFERENCES "Flight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_arriveFlightId_fkey" FOREIGN KEY ("arriveFlightId") REFERENCES "Flight"("id") ON DELETE SET NULL ON UPDATE CASCADE;
