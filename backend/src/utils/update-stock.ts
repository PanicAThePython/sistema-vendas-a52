import { prisma } from '../../lib/prisma'
import { getProductById } from './get-product-by-id'

const calculateNewValueInStock = (actualQuantity: number, quantityToRemove: number) => {
    return actualQuantity - quantityToRemove
}

interface BodyType {
    quantityToRemove: number
    productId: string
}
interface RequestType {
    body: BodyType
}

export async function updateStock(request: RequestType) {
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