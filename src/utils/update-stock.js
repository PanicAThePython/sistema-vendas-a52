import { prisma } from '../../lib/prisma.js'

export async function updateStock(request) {
    const { quantityToRemove, productId } = request.body

    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })

    if (!product){
        throw new Error("Could not update stock, product not found")
    }

    const newQuantityStock = product.quantity_of - quantityToRemove

    await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            quantity_of: newQuantityStock
        }
    })

}