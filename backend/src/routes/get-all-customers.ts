import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getAllCustomers(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/customers', async () => {
        const customers = await prisma.customer.findMany()
        return { customers }
    })
}