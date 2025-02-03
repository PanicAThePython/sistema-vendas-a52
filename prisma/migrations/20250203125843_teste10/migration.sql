/*
  Warnings:

  - You are about to drop the column `address` on the `customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "address",
ADD COLUMN     "address_code" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "ceps" (
    "code" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,

    CONSTRAINT "ceps_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_address_code_fkey" FOREIGN KEY ("address_code") REFERENCES "ceps"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
