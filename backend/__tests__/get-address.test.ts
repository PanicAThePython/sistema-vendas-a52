import { prismaMock } from "../singleton"
import { getAddressByCEP } from "../src/utils/get-address-by-cep"

test("should get address by cep code", async () => {

    const address = {
        code: "89000123",
        state: "SC",
        city: "Blumenau",
        neighborhood: "Centro",
        street: "Rua XV"
    }

    prismaMock.cep.create.mockResolvedValue(address)
    expect(getAddressByCEP(address.code)).resolves.toEqual(address)
})

test("should not find cep", () => {
    expect(getAddressByCEP("89000123")).rejects.toEqual(new Error("CEP not found"))
})