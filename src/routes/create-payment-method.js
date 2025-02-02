import z from 'zod'
import { prisma } from '../../lib/prisma.js'

export async function createPaymentMethod(app) {
    app.post('/paymentMethod', {
        schema: {
            body: z.object({
                name: z.string().min(4),
                installment: z.number().int()
            })
        }
    }, async (request) => {
        const { name, installment } = request.body

        try{
            await prisma.paymentMethod.create({
                data: {
                    name,
                    installment
                }
            })
        } catch (error) {
            throw new Error("Could not create payment method, try again...")
        }
    })
}