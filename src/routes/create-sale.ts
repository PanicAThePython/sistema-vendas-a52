import z from 'zod'
import { prisma } from '../../lib/prisma'

import { updateStock } from '../utils/update-stock'

import { getCustomerById } from '../utils/get-customer-by-id'
import { getProductById } from '../utils/get-product-by-id'
import { getPaymentMethodById } from '../utils/get-payment-by-id'

import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

interface SaleType {
    customerId: string,
    productId: string,
    quantityToRemove: number,
    paymentMethodId: string,
    total: number
}

export const registerSale = async({ customerId, productId, quantityToRemove, paymentMethodId, total }: SaleType) => {
    return await prisma.sale.create({
        data: {
            customer_id: customerId,
            product_id: productId,
            quantity_of: quantityToRemove,
            payment_method_id: paymentMethodId,
            total
        }
    })
}

export async function createSale(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/sale', {
        schema: {
            body: z.object({
                customerId: z.string().length(11),
                productId: z.string().uuid(),
                quantityToRemove: z.number().int(),
                paymentMethodId: z.string().uuid(),
                total: z.number()
            })
        }
    }, async (request) => {
        const { customerId, productId, quantityToRemove, paymentMethodId, total } = request.body

        const product = await getProductById(productId)
        const customer = await getCustomerById(customerId)
        const paymentMethod = await getPaymentMethodById(paymentMethodId)

        if (product && customer && paymentMethod){
            try {
                await registerSale({ customerId, productId, quantityToRemove, paymentMethodId, total })
                await updateStock(request)
            } catch(error) {
                throw new Error("Something went wrong when creating sale, try again...")
            }
        }
    })
}