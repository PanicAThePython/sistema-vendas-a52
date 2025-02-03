import { prismaMock } from "../singleton"
import { registerCEP } from "../src/routes/create-cep"

test("should create new address", () => {

    const address = {
        code: "89000123",
        state: "SC",
        city: "Blumenau",
        neighborhood: "Centro",
        street: "Rua XV"
    }

    prismaMock.cep.create.mockResolvedValue(address)
    expect(registerCEP(address)).resolves.toEqual(address)
})