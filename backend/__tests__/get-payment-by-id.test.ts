import { prismaMock } from "../singleton"
import { getPaymentMethodById } from "../src/utils/get-payment-by-id"

test("should get payment method by id", async () => {

    const paymentMethod = {
        id: "46e9868b-ce03-4766-851f-45ee4f292f83",
        name: "Payment method 1",
        installment: 6
    }

    prismaMock.paymentMethod.create.mockResolvedValue(paymentMethod)

    expect(getPaymentMethodById(paymentMethod.id)).resolves.toEqual(paymentMethod)
})