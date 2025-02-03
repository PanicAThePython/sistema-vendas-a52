import { prismaMock } from "../singleton"
import { registerProduct } from "../src/routes/create-product"

test("should create new product", async() => {
    const product = {
        id: "46e9868b-ce03-4766-851f-45ee4f292f82",
        name: "Product 1",
        quantity_of: 210,
        price: 18.9
    }

    prismaMock.product.create.mockResolvedValue(product)
    expect(registerProduct(product)).resolves.toBe(product)
})