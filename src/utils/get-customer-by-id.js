import { prisma } from '../../lib/prisma.js'

export async function getCustomerById(id) {
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