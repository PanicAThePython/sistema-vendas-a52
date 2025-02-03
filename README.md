# sistema-vendas-a52

## Stacks do projeto

* Banco de Dados: PostgreSQL (com Docker);
* Backend: NodeJS (fastify, zod, prisma) com TypeScript;
* Frontend: ReactJS com MaterialUI e styled-components.

## Como rodar?

1. Vá até a raiz da pasta backend e execute `docker-compose up` para rodar o postgres (necessário ter o Docker instalado);
2. Depois, ainda na raiz da pasta backend, execute `npm i` para instalar todas as dependências necessárias;
3. Execute `npm start` para ativar o servidor;
4. Para cadastrar cliente, cep, produtos, formas de pagamento, execute as rotas pelo postgres/insomnia ou, se preferir, rode no terminal `npx prisma studio` para visualizar as tabelas e cadastrar manualmente;
**ATENÇÃO! - LEIA A DOCUMENTAÇÃO DAS ROTAS ANTES (dentro da pasta backend) !!**
5. Agora, na raiz da pasta frontend, execute `npm i` para instalar todas as dependências;
6. Rode `npm start` para subir o frontend.

## Bônus - testes unitários no backend

Execute `npm test` para rodar os testes.