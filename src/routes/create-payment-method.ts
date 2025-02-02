import z from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

interface PaymentMethodType {
    name: string
    installment: number
}

export const registerPaymentMethod = async ({ name, installment }: PaymentMethodType) => {
    return await prisma.paymentMethod.create({
        data: {
            name,
            installment
        }
    })
}

export async function createPaymentMethod(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/paymentMethod', {
        schema: {
            body: z.object({
                name: z.string().min(4),
                installment: z.number().int()
            })
        }
    }, async (request) => {
        const { name, installment } = request.body

        try{
            await registerPaymentMethod({name, installment})
        } catch (error) {
            throw new Error("Could not create payment method, try again...")
        }
    })
}