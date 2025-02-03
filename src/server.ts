import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"

import { createCustomer } from "./routes/create-customer.js"
import { createProduct } from "./routes/create-product.js"
import { createPaymentMethod } from "./routes/create-payment-method.js"
import { createSale } from "./routes/create-sale.js"
import { getAllCustomers } from "./routes/get-all-customers.js"
import { getSalesFromCustomer } from "./routes/get-sales-from-customer.js"
import { getAllSales } from "./routes/get-all-sales.js"

export const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createCustomer)
app.register(createProduct)
app.register(createPaymentMethod)
app.register(createSale)

app.register(getAllCustomers)
app.register(getAllSales)
app.register(getSalesFromCustomer)

app.listen({ port: 3000 }).then(() => {
    console.log("server running...")
})