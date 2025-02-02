import z from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

interface CustomerType {
    name: string
    cpf: string
    email: string
    address: string
}

export const registerCustomer = async ({name, cpf, email, address}: CustomerType) => {
    return await prisma.customer.create({
        data: {
            name,
            cpf,
            email,
            address
        }
    })
}

export async function createCustomer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/customer', {
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

        try {
            await registerCustomer({name, cpf, email, address})
        } catch (error) {
            throw new Error("Could not create customer, try again...")
        }
    })
}