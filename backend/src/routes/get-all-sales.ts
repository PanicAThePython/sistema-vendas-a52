import z from 'zod'
import { prisma } from '../../lib/prisma.js'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getAllSales(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/sales', async () => {
        const sales = await prisma.sale.findMany()
        return { sales }
    })
}