/*
  Warnings:

  - You are about to drop the column `quantityOf` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod_id` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `quantityOf` on the `sales` table. All the data in the column will be lost.
  - Added the required column `payment_method_id` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity_of` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_paymentMethod_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "quantityOf",
ADD COLUMN     "quantity_of" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "paymentMethod_id",
DROP COLUMN "quantityOf",
ADD COLUMN     "payment_method_id" TEXT NOT NULL,
ADD COLUMN     "quantity_of" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "paymentMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
