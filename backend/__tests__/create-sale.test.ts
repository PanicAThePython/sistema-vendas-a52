import { prismaMock } from "../singleton"
import { registerSale } from "../src/routes/create-sale"

test("should create new sale", async () => {

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

    await prismaMock.customer.create.mockResolvedValue(customer)

    const product = {
        id: "46e9868b-ce03-4766-851f-45ee4f292f82",
        name: "Product 1",
        quantity_of: 210,
        price: 18.9
    }

    await prismaMock.product.create.mockResolvedValue(product)

    const paymentMethod = {
        id: "46e9868b-ce03-4766-851f-45ee4f292f83",
        name: "Payment method 1",
        installment: 6
    }

    await prismaMock.paymentMethod.create.mockResolvedValue(paymentMethod)

    const quantityToRemove = 20
    const total = product.price * 20

    const sale = {
        customerId: customer.cpf,
        productId: product.id,
        quantityToRemove,
        paymentMethodId: paymentMethod.id,
        total
    }
    expect(registerSale(sale)).resolves.toEqual(sale)
})