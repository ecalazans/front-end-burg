# 🍔 Casa do Hambúrguer — Front-end

<div align="center">

  <img src="./public/logo.png" alt="Casa do Hambúrguer" width="120" />

</div>

## 📌 Sobre o projeto

Aplicação web desenvolvida para uma hamburgueria, com funcionalidades de autenticação de usuários, visualização de produtos e gerenciamento de carrinho de compras.

O projeto foi desenvolvido utilizando **React, TypeScript e Tailwind CSS**, consumindo uma API REST desenvolvida com Node.js, Express, Prisma ORM e PostgreSQL.

O desenvolvimento tem como objetivo aplicar conceitos de desenvolvimento front-end, componentização, gerenciamento de estados, navegação entre páginas e integração com uma API.

## 🛠️ Tecnologias

<div align="center">

  <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind,nodejs&theme=dark" />

</div>

- **React:** desenvolvimento de interfaces utilizando componentes.
- **TypeScript:** tipagem estática e organização do código.
- **Vite:** ferramenta de desenvolvimento e build.
- **Tailwind CSS:** estilização da aplicação.
- **React Router:** gerenciamento de rotas.
- **Lucide React:** biblioteca de ícones.

## 📋 Funcionalidades

### 👤 Usuários e autenticação

- Cadastro de usuários.
- Login com e-mail e senha.
- Autenticação integrada com o backend.
- Gerenciamento de informações do usuário.
- Proteção de rotas.

### 🍔 Produtos

- Exibição do catálogo de produtos.
- Visualização das informações dos produtos.
- Integração com a API para obtenção dos dados.

### 🛒 Carrinho de compras

- Adição de produtos ao carrinho.
- Gerenciamento dos itens selecionados.
- Controle de quantidade dos produtos.
- Integração com o backend para persistência dos itens.

## 🔗 Integração com o backend

O front-end se comunica com uma API REST desenvolvida utilizando:

<div align="center">

  <img src="https://skillicons.dev/icons?i=nodejs,express,typescript,postgres,prisma&theme=dark" />

</div>

A integração permite realizar operações relacionadas à autenticação de usuários, consulta de produtos e gerenciamento do carrinho de compras.

Atualmente, o front-end e o backend estão funcionando e se comunicando localmente.

## 📂 Estrutura do projeto

```text
front-end-burg/
│
├── public/
│   ├── logo.png
│   └── imagens/
│
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   ├── Product.tsx
│   │   ├── Cart.tsx
│   │   └── CartItem.tsx
│   │
│   ├── context/
│   │   ├── CartItemsContext.tsx
│   │   └── UserContext.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Cardapio.tsx
│   │   └── Pedidos.tsx
│   │
│   ├── types/
│   │   ├── CartItem.tsx
│   │   ├── Product.ts
│   │   └── User.ts
│   │
│   ├── router.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js
- npm
- Backend do Casa do Hambúrguer configurado e executando localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/ecalazans/front-end-burg.git
```

### 2. Acesse a pasta do projeto

```bash
cd front-end-burg
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

O Vite disponibilizará o endereço local da aplicação no terminal.

> Para utilizar as funcionalidades que dependem da API, o backend também precisa estar em execução e corretamente configurado no front-end.

## 🚀 Próximos passos

- Hospedagem do front-end.
- Hospedagem do backend.
- Configuração da comunicação entre os ambientes de produção.

## 👨‍💻 Desenvolvedor

**Erick Calazans**

Projeto desenvolvido para praticar e aprimorar conhecimentos em desenvolvimento web, utilizando React, TypeScript e integração com API REST.
