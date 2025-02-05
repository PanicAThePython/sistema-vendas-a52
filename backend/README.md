# sistema-vendas-a52
Teste prático de entrevista

## routes

### CEP

* POST /cep - Cadastra novo endereço

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

* GET /cep/:code - Pega endereço pelo CEP

params:
```
    code: 89000111
```

response:
```
{
    "address" : {
        "code": "89000000",
        "state": "SC",
        "city": "Blumenau",
        "neighborhood": "Centro",
        "street": "Rua XV"
    }
}
```

### Customers

* POST /customer - Cadastra novo consumidor

`IMPORTANT!` - Para criar um consumidor, é necessário que o endereço dele exista no banco de dados.

body:
```
{
    "name": "John Doe",
    "cpf": "12345678900",
    "email": "john@doe.com",
    "address_code": "8900000"
}
```

* GET /customers - Pega todos os consumidores

response:
```
{
    "customers" : [
        {
            "name": "John Doe",
            "cpf": "12345678900",
            "email": "john@doe.com",
            "address_code": "8900000"
        }
    ]
}
```

### Products

* POST /product - Cadastra novo produto

body:
```
{
    "name": "Product 1",
    "quantity": 216,
    "price": 18.90
}
```

* GET /products - Pega todos os produtos

response:
```
{
    "products" : [
        {
            "name": "Product 1",
            "quantity": 216,
            "price": 18.90
        }
    ]
}
```
### Payment Methods

* POST /paymentMethod - Cadastra nova forma de pagamento

body:
```
{
    "name": "Cartão de Crédito",
    "installment": 10
}
```

* GET /payments - Pega todas as formas de pagamento

response:
```
{
    "payments" : [
        {
            "name": "Cartão de Crédito",
            "installment": 10
         }
    ]
}
```
### Sales

* POST /sale - Cadastra nova compra

body:
```
{
    "customerId": "12345678900",
    "productId": (get uuid from database),
    "quantityToRemove": 32,
    "paymentMethodId": (get uuid from database),
    "total": (comes from frontend => quantityToRemove * product price)
}
```

* GET /sales - Pega todas as compras

response:
```
{
    "sales" : [
        {
            "customerId": "12345678900",
            "productId": (get uuid from database),
            "quantityToRemove": 32,
            "paymentMethodId": (get uuid from database),
            "total": (comes from frontend => quantityToRemove * product price)
         }
    ]
}
```

* GET /sales/:customerId - Pega as compras de um determinado consumidor

params:
```
    customerId: 12345678900
```

response:
```
{
    "sales" : [
        {
            "customerId": "12345678900",
            "productId": (get uuid from database),
            "quantityToRemove": 32,
            "paymentMethodId": (get uuid from database),
            "total": (comes from frontend => quantityToRemove * product price)
         }
    ]
}
```
