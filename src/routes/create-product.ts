import z from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

interface ProductType {
    name: string
    quantity: number
    price: number
}

export const registerProduct = async({ name, quantity, price }: ProductType) => {
    return await prisma.product.create({
        data: {
            name,
            quantity_of: quantity,
            price
        }
    })
}

export async function createProduct(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/product', {
        schema: {
            body: z.object({
                name: z.string().min(4),
                quantity: z.number().int(),
                price: z.number()
            })
        }
    }, async (request) => {
        const { name, quantity, price } = request.body

        try{
            await registerProduct({ name, quantity, price })
        } catch (error) {
            throw new Error("Could not create product, try again...")
        }
    })
}