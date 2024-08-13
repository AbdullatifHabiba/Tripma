-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_paymentMethodId_fkey";

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "paymentMethodId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;
