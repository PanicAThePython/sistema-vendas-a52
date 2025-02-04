import Fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"

import { createCustomer } from "./routes/create-customer"
import { createProduct } from "./routes/create-product"
import { createPaymentMethod } from "./routes/create-payment-method"
import { createSale } from "./routes/create-sale"
import { getAllCustomers } from "./routes/get-all-customers"
import { getSalesFromCustomer } from "./routes/get-sales-from-customer"
import { getAllSales } from "./routes/get-all-sales"
import { createCep } from "./routes/create-cep"
import { getAllProducts } from "./routes/get-all-products"
import { getAddress } from "./routes/get-address"

import cors from "@fastify/cors"
import { getAllPaymentMethods } from "./routes/get-all-payment-methods"

export const app = Fastify()
await app.register(cors, {})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createCep)
app.register(createCustomer)
app.register(createProduct)
app.register(createPaymentMethod)
app.register(createSale)

app.register(getAllProducts)
app.register(getAllPaymentMethods)
app.register(getAllCustomers)
app.register(getAllSales)

app.register(getAddress)
app.register(getSalesFromCustomer)

app.listen({ port: 3333 }).then(() => {
    console.log("server running...")
})