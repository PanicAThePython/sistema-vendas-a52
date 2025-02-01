import z from 'zod'
import { prisma } from '../../lib/prisma.js'
import { updateStock } from '../utils/update-stock.js'

export async function createSale(app) {
    app.post('/sale', {
        schema: {
            body: z.object({
                customerId: z.string().uuid(),
                productId: z.string().uuid(),
                quantityToRemove: z.number().int(),
                paymentMethodId: z.string().uuid()
            })
        }
    }, async (request) => {
        const { customerId, productId, quantityToRemove, paymentMethodId } = request.body

        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        })

        const customer = await prisma.customer.findUnique({
            where: {
                id: customerId
            }
        })

        const paymentMethod = await prisma.paymentMethod.findUnique({
            where: {
                id: paymentMethodId
            }
        })

        if (product && customer && paymentMethod){
            await prisma.sale.create({
                data: {
                    customer_id: customerId,
                    product_id: productId,
                    quantity_of: quantityToRemove,
                    payment_method_id: paymentMethodId
                }
            })

            await updateStock(request)
        }
    })
}