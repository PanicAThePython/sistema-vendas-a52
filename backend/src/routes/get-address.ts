import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { getAddressByCEP } from '../utils/get-address-by-cep'
import { z } from 'zod'

export async function getAddress(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/cep/:code', {
        schema: {
             params: z.object({
                code: z.string().length(8)
            })
        }
    },
        async (request) => {
            const { code } = request.params
            const address = await getAddressByCEP(code)
            return { address }
    })
}