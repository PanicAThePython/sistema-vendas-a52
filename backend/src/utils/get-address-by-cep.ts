import { prisma } from '../../lib/prisma'

export async function getAddressByCEP(cep: string) {
    const address = await prisma.cep.findUnique({
        where: {
            code: cep
        }
    })

    if (!address){
        throw new Error("CEP not found")
    }

    return address

}