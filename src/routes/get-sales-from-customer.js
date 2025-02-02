import z from 'zod'
import { prisma } from '../../lib/prisma.js'

export async function getSalesFromCustomer(app) {
    app.get('/sales/:customerId', {
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