# sistema-vendas-a52
Teste prático de entrevista

## routes

### Customers

* POST /customer - Register new customer

body:
```
{
    name: string
    cpf: string (unique)
    email: string
    address: string
}
```

* GET /customers - Get all customers

### Products

* POST /product - Register new product

body:
```
{
    name: string
    quantity_of: integer
    price: float
}
```

### Payment Methods

* POST /paymentMethod - Register new payment method

body:
```
{
    name: string
    installment: integer
}
```

### Sales

* POST /sale - Register new sale

body:
```
{
    customerId: string,
    productId: string,
    quantityToRemove: integer,
    paymentMethodId: string
}
```

* GET /sales - Get all sales

* GET /sales/:customerId - Get all sales from a customer

params:
```
    customerId: string
```