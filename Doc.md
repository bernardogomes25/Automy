# Desafio Técnico - Automy

**Nome:** Bernardo Gomes   
**Número:** (31) 97151-5884  
**Email:** be.gpereira25@gmail.com  
**CPF:** 158.963.766-69

---

## 🧩 Descrição Geral

Esta aplicação consulta baterias (corridas) agendadas em um kartódromo a partir do **email do cliente**, consumindo uma API protegida via **proxy com autenticação JWT**. Os dados são tratados e exibidos de forma personalizada ao usuário, tanto via API quanto por uma interface web simples.

---

## 🚀 Como Executar a Aplicação

### Iniciar o servidor

node src/server.js

> A aplicação rodará em: **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Interface Web (Frontend)

http://localhost:3000

Digite o email do cliente e clique em **"Buscar"**. A resposta personalizada será exibida dinamicamente na tela.

---

## 🧠 Funcionalidades

* Autenticação automática via JWT (com renovação a cada requisição).
* Envio de query SQL personalizada com filtro por email.
* Separação entre baterias **agendadas** (futuras) e **passadas**.
* Retorno de mensagem personalizada com nome, horário, data e quantidade de pessoas.
* Interface web simples (HTML + JS) para consulta.

---

## 🛠 Estrutura de Pastas

src/
├── api.js         ← Funções para login e requisição SQL
├── config.js      ← Configuração da API e credenciais
├── server.js      ← Inicialização do servidor e rotas
├── service.js     ← Lógica de tratamento de dados e mensagens
└── public/
    └── index.html ← Frontend

---

## 📦 Build e Deploy

> A aplicação não depende de build nem container obrigatoriamente.

## ✅ Testes

Você pode testar manualmente:

1. No navegador:


   http://localhost:3000/mensagem?email=john.doe@gmail.com


2. Ou via frontend

---

## ✨ Diferenciais Implementados

* ✅ Frontend integrado
* ✅ Código modularizado (API, lógica, servidor)
* ✅ Mensagens com emojis e personalização

---

## 📌 Observações

* O token JWT expira a cada 15 minutos e é renovado automaticamente por chamada.
* A query executada é do tipo `SELECT`, sem `;` no final conforme orientação.

---