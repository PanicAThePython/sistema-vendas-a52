/*
  Warnings:

  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `customers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_customer_id_fkey";

-- AlterTable
ALTER TABLE "customers" DROP CONSTRAINT "customers_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("cpf");

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
