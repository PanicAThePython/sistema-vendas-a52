import { prisma } from '../../lib/prisma.js'

export async function getAllCustomers(app) {
    app.get('/customers', async () => {

        const customers = await prisma.customer.findMany()
        return { customers }
    })
}