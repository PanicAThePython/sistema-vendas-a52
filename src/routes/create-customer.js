import z from 'zod'
import { prisma } from '../../lib/prisma.js'

export async function createCustomer(app) {
    app.post('/customer', {
        schema: {
            body: z.object({
                name: z.string().min(4),
                cpf: z.string().length(11),
                email: z.string().email(),
                address: z.string()
            })
        }
    }, async (request) => {
        const { name, cpf, email, address } = request.body

        await prisma.customer.create({
            data: {
                name,
                cpf,
                email,
                address
            }
        })
    })
}