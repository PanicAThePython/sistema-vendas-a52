# sistema-vendas-a52

## Stacks do projeto

* Banco de Dados: PostgreSQL (com Docker);
* Backend: NodeJS (fastify, zod, prisma) com TypeScript;
* Frontend: ReactJS com MaterialUI e styled-components.

## Como rodar?

`**ATENÇÃO** - a aplicação trata o cenário de cliente logado finalizando a compra. Logo, é necessário que exista clientes cadastrados na base. Como o sistema de login não foi implementado, o sistema considera o primeiro consumidor que vier do backend como o usuário logado.`

1. Vá até a raiz da pasta backend e execute `docker-compose up` para rodar o postgres (necessário ter o Docker instalado);
2. Depois, ainda na raiz da pasta backend, execute `npm i` para instalar todas as dependências necessárias;
3. Execute `npm start` para ativar o servidor;
4. Para cadastrar cliente, cep, produtos, formas de pagamento, execute as rotas pelo postgres/insomnia ou, se preferir, rode no terminal `npx prisma studio` para visualizar as tabelas e cadastrar manualmente;
**ATENÇÃO! - LEIA A DOCUMENTAÇÃO DAS ROTAS ANTES (dentro da pasta backend) !!**
5. Agora, na raiz da pasta frontend, execute `npm i` para instalar todas as dependências;
6. Rode `npm start` para subir o frontend.

## Bônus

* Testes unitários: execute `npm test` na raiz da pasta backend para rodar os testes.
    * ATENÇÃO! Rodar os testes cria instâncias no banco de dados.   
* Filtro de venda por cliente: seção Sales da documentação backend.
