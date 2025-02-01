import z from 'zod'
import { prisma } from '../../lib/prisma.js'

export async function createProduct(app) {
    app.post('/product', {
        schema: {
            body: z.object({
                name: z.string().min(4),
                quantity: z.number().int(),
                price: z.number()
            })
        }
    }, async (request) => {
        const { name, quantity, price } = request.body

        await prisma.product.create({
            data: {
                name,
                quantityOf: quantity,
                price
            }
        })
    })
}