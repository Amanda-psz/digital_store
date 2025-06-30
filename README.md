# 🛍️ Projeto de Front-end - React + Vite + Tailwind

## 🧭 Visão Geral
Aplicação de catálogo de produtos com React + Vite, utilizando componentes modulares, Context API (carrinho) e styled com Tailwind CSS.

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
