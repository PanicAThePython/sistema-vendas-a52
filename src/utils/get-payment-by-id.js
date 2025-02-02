import { prisma } from '../../lib/prisma.js'

export async function getPaymentMethodById(id) {
    const paymentMethod = await prisma.paymentMethod.findUnique({
        where: {
            id
        }
    })

    if (!paymentMethod){
        throw new Error("Payment method not found")
    }

    return paymentMethod

}