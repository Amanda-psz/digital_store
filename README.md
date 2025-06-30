# 🛍️ Projeto de Front-end - React + Vite + Tailwind

## 🧭 Visão Geral

Este projeto foi desenvolvido como parte da formação **Geração Tech 2.0**, com o objetivo de aplicar os conhecimentos adquiridos ao longo do curso. A proposta é construir uma aplicação web moderna utilizando **React** e outras tecnologias atuais do ecossistema JavaScript.

A aplicação simula uma loja virtual (catálogo de produtos), permitindo ao usuário visualizar, buscar e navegar por produtos de forma responsiva e intuitiva. Todo o desenvolvimento foi baseado em boas práticas de componentização, reutilização de código e organização de pastas.

O projeto foi guiado pela [documentação oficial do projeto Digital Store](https://github.com/digitalcollegebr/projeto-digital-store), mantida pela Digital College, e teve como base visual o [design no Figma](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30), que definiu a identidade visual, a estrutura de telas e o comportamento esperado da aplicação.

---

## 🚀 Funcionalidades
- Página inicial com destaques e navegação
- Listagem de produtos com busca e filtros
- Visualização detalhada do produto
- Carrinho persistente via Context API

---

## 🛠️ Tecnologias
- React, Vite  
- Tailwind CSS

---

## ▶️ Instalação e Execução

```bash
git clone https://github.com/Amanda-psz/digital_store.git
cd digital_store
npm install # ou yarn install
npm run dev # ou yarn dev
```
---

## 🚧 Estrutura do Projeto

```bash
├── public/                         # Arquivos estáticos
├── src/
│   ├── assets/                     # Imagens, ícones e recursos visuais
│
│   ├── components/                 # Componentes reutilizáveis
│   │   ├── AbaProdutos/
│   │   │   ├── ProductCardList.jsx
│   │   │   └── productListingList.jsx
│   │   ├── HomePage/
│   │   │   ├── productCard.jsx
│   │   │   └── productListing.jsx
│   │   ├── authLinks.jsx
│   │   ├── buyBox.jsx
│   │   ├── cartIcon.jsx
│   │   ├── filterGroup.jsx
│   │   ├── footer.jsx
│   │   ├── gallery.jsx
│   │   ├── header.jsx
│   │   ├── hero.jsx
│   │   ├── logo.jsx
│   │   ├── mainNave.jsx
│   │   ├── productOptions.jsx
│   │   ├── searchBar.jsx
│   │   └── section.jsx
│
│   ├── contexts/                  # Context API
│   │   └── cartContext.jsx
│
│   ├── data/                      # Dados estáticos
│   │   └── proucts.js
│
│   ├── pages/                     # Páginas principais da aplicação
│   │   ├── categoriasPage.jsx
│   │   ├── homePage.jsx
│   │   ├── layout.jsx
│   │   ├── meusPedidosPage.jsx
│   │   ├── productListingPage.jsx
│   │   ├── productPage.jsx 
│   │   └── productViewPage.jsx
│
│   ├── services/                  # Integrações com API ou dados externos
│   │   └── api.js
│
│   ├── app.jsx                    # Componente raiz
│   ├── index.css                  # Estilização global
│   └── main.jsx                   # Ponto de entrada da aplicação
│
├── package.json                   # Dependências e scripts
└── README.md                      # Documentação do projeto
```
