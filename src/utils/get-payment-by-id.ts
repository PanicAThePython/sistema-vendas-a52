import { prisma } from '../../lib/prisma'

export async function getPaymentMethodById(id: string) {
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