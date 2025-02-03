import z from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getSalesFromCustomer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/sales/:customerId', {
        schema: {
            params: z.object({
                customerId: z.string().length(11)
            })
        }
    }, async (request) => {
        const { customerId } = request.params

        const sales = await prisma.sale.findMany({
            where: {
                customer_id: customerId
            }
        })

        return { sales }
    })
}