import { prismaMock } from "../singleton"
import { registerCustomer } from "../src/routes/create-customer"

test("should create new customer", async () => {

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
    expect(registerCustomer(customer)).resolves.toEqual(customer)
})