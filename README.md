# Capputeeno - Teste Técnico Resolve Energia Solar

Este repositório contém a implementação do teste técnico para a Resolve Energia Solar. O desafio consistia na construção de um e-commerce chamado **Capputeeno**, com as seguintes funcionalidades:

- Catálogo de produtos com paginação
- Filtragem de produtos por categoria
- Busca por nome do produto
- Adicionar e remover produtos do carrinho
- Finalizar compra

O projeto consome uma **Fake API em GraphQL**.

## 🛠 Tecnologias Utilizadas
- Next.js
- TypeScript
- Apollo Client (GraphQL)
- Styled Components

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/capputeeno.git
cd Capputeeno
```

### 2️⃣ Instalar as Dependências
- Frontend
```bash
 cd Frontend
 npm install
```
- Api
```bash
 cd api
 yarn install
```

### 3️⃣ Rodar o Servidor Fake API (GraphQL)
Este projeto utiliza uma Fake API GraphQL, então você precisa rodá-la antes de iniciar o frontend.

```bash
yarn start
```

### 4️⃣ Rodar o Projeto
Com a API rodando, inicie o frontend:
```bash
 npm run dev
```
O projeto estará disponível em `http://localhost:3000/`.

## 📌 Funcionalidades Implementadas
- Listagem de produtos com paginação
- Filtro por categoria
- Adição e remoção de produtos do carrinho
- Cálculo dinâmico do total da compra
- Layout responsivo

## 📜 Licença
Este projeto foi desenvolvido para fins de avaliação técnica.

