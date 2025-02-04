import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getAllPaymentMethods(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/payments', async () => {
        const payments = await prisma.paymentMethod.findMany()
        return { payments }
    })
}