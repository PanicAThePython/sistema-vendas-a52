import { prismaMock } from "../singleton"
import { getProductById } from "../src/utils/get-product-by-id"

test("should get product by id", async () => {
    const product = {
        id: "46e9868b-ce03-4766-851f-45ee4f292f82",
        name: "Product 1",
        quantity_of: 210,
        price: 18.9
    }

    prismaMock.product.create.mockResolvedValue(product)

    expect(getProductById(product.id)).resolves.toEqual(product)
})