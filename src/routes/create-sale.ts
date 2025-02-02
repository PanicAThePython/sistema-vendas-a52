import z from 'zod'
import { prisma } from '../../lib/prisma.js'

import { updateStock } from '../utils/update-stock.js'

import { getCustomerById } from '../utils/get-customer-by-id.js'
import { getProductById } from '../utils/get-product-by-id.js'
import { getPaymentMethodById } from '../utils/get-payment-by-id.js'

import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

const calculateTotal = (product: any, quantity: number) => {
    return product.price * quantity
}

export async function createSale(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/sale', {
        schema: {
            body: z.object({
                customerId: z.string().length(11),
                productId: z.string().uuid(),
                quantityToRemove: z.number().int(),
                paymentMethodId: z.string().uuid()
            })
        }
    }, async (request) => {
        const { customerId, productId, quantityToRemove, paymentMethodId } = request.body

        const product = await getProductById(productId)
        const customer = await getCustomerById(customerId)
        const paymentMethod = await getPaymentMethodById(paymentMethodId)

        if (product && customer && paymentMethod){

            const total = calculateTotal(product, quantityToRemove)

            try {
                await prisma.sale.create({
                    data: {
                        customer_id: customerId,
                        product_id: productId,
                        quantity_of: quantityToRemove,
                        payment_method_id: paymentMethodId,
                        total
                    }
                })

                await updateStock(request)
            } catch(error) {
                throw new Error("Something went wrong when creating sale, try again...")
            }
        }
    })
}