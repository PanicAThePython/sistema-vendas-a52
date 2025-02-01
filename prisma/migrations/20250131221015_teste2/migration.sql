/*
  Warnings:

  - Added the required column `quantityOf` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "quantityOf" INTEGER NOT NULL;
