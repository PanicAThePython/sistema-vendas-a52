import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"

interface CEPType {
    code: string
    state: string
    city: string
    neighborhood: string
    street: string
}

export const registerCEP = async ({ code, state, city, neighborhood, street }: CEPType) => {
    return await prisma.cep.create({
        data: {
            code,
            state,
            city,
            neighborhood,
            street
        }
    })
}


export async function createCep(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/cep', {
        schema: {
            body: z.object({
                code: z.string().length(8),
                state: z.string().length(2),
                city: z.string().min(3),
                neighborhood: z.string().min(3),
                street: z.string().min(3)
            })
        }
    }, async (request) => {
        const { code, state, city, neighborhood, street } = request.body

        try{
            await registerCEP({ code, state, city, neighborhood, street })
        } catch (error) {
            throw new Error("Could not register CEP, try again...")
        }
    })
}