import { prismaMock } from "../singleton"
import { getCustomerById } from "../src/utils/get-customer-by-id"

test("should get customer by id", async () => {

    const address = {
        code: "89000123",
        state: "SC",
        city: "Blumenau",
        neighborhood: "Centro",
        street: "Rua XV"
    }

    await prismaMock.cep.create.mockResolvedValue(address)

    const customer = {
        cpf: "12345670901",
        name: "Customer Test 1",
        email: "customer1@test.com",
        address_code: "89000123"
    }

    prismaMock.customer.create.mockResolvedValue(customer)

    expect(getCustomerById(customer.cpf)).resolves.toEqual(customer)
})