import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getAllProducts(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/products', async () => {
        const products = await prisma.product.findMany()
        return { products }
    })
}