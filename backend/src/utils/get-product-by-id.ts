import { prisma } from '../../lib/prisma'

export async function getProductById(id: string) {
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