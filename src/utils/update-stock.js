import { prisma } from '../../lib/prisma.js'
import { getProductById } from './get-product-by-id.js'

const calculateNewValueInStock = (actualQuantity, quantityToRemove) => {
    return actualQuantity - quantityToRemove
}

export async function updateStock(request) {
    const { quantityToRemove, productId } = request.body

    const product = await getProductById(productId)

    if (!product){
        throw new Error("Could not update stock, product not found")
    }

    const newQuantityStock = calculateNewValueInStock(product.quantity_of, quantityToRemove)

    await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            quantity_of: newQuantityStock
        }
    })

}