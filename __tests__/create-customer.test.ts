import { prismaMock } from "../singleton"
import { registerCustomer } from "../src/routes/create-customer"

test("should create new customer", () => {
    const customer = {
        cpf: "12345670901",
        name: "Customer Test 1",
        email: "customer1@test.com",
        address: "Test Street n 123"
    }

    prismaMock.customer.create.mockResolvedValue(customer)
    expect(registerCustomer(customer)).resolves.toEqual(customer)
})