import z from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { getAddressByCEP } from '../utils/get-address-by-cep'

interface CustomerType {
    name: string
    cpf: string
    email: string
    address_code: string
}

export const registerCustomer = async ({name, cpf, email, address_code}: CustomerType) => {
    return await prisma.customer.create({
        data: {
            name,
            cpf,
            email,
            address_code
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
                addressCode: z.string().length(8)
            })
        }
    }, async (request) => {
        const { name, cpf, email, addressCode } = request.body

        try {
            const cep = await getAddressByCEP(addressCode)
            if (cep) await registerCustomer({name, cpf, email, address_code: addressCode})
        } catch (error) {
            throw new Error("Could not create customer, try again...")
        }
    })
}