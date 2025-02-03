import { prisma } from '../../lib/prisma'

export async function getCustomerById(id: string) {
    const customer = await prisma.customer.findUnique({
        where: {
            cpf: id
        }
    })

    if (!customer){
        throw new Error("Customer not found")
    }

    return customer

}