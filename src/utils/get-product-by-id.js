import { prisma } from '../../lib/prisma.js'

export async function getProductById(id) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })

    if (!product){
        throw new Error("Product not found")
    }

    return product

}