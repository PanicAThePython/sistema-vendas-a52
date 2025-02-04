# sistema-vendas-a52
Teste prático de entrevista

## routes

### CEP

* POST /cep - Register new address 

body:
```
{
    "code": "89000000",
    "state": "SC",
    "city": "Blumenau",
    "neighborhood": "Centro",
    "street": "Rua XV"
}
```

* GET /cep/:code - Get address by CEP code

params:
```
    code: 89000111
```

### Customers

* POST /customer - Register new customer

`IMPORTANT!` - To create a customer, it is necessary to exists addresses in the database

body:
```
{
    "name": "John Doe",
    "cpf": "12345678900",
    "email": "john@doe.com",
    "address_code": "8900000"
}
```

* GET /customers - Get all customers

### Products

* POST /product - Register new product

body:
```
{
    "name": "Product 1",
    "quantity": 216,
    "price": 18.90
}
```

* GET /products - Get all products

### Payment Methods

* POST /paymentMethod - Register new payment method

body:
```
{
    "name": "Cartão de Crédito",
    "installment": 10
}
```

### Sales

* POST /sale - Register new sale

body:
```
{
    customerId: "12345678900",
    productId: (get uuid from database),
    quantityToRemove: 32,
    paymentMethodId: (get uuid from database),
    total: (comes from frontend => quantityToRemove * product price)
}
```

* GET /sales - Get all sales

* GET /sales/:customerId - Get all sales from a customer

params:
```
    customerId: 12345678900
```