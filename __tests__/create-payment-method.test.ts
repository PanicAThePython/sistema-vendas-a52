import { prismaMock } from "../singleton"
import { registerPaymentMethod } from "../src/routes/create-payment-method"

test("should create new payment method", () => {
    const paymentMethod = {
        id: "46e9868b-ce03-4766-851f-45ee4f292f83",
        name: "Payment method 1",
        installment: 6
    }

    prismaMock.paymentMethod.create.mockResolvedValue(paymentMethod)

    const result = expect(registerPaymentMethod(paymentMethod)).resolves
    result.toHaveProperty("name")
    result.toHaveProperty("installment")
})