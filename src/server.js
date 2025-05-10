const express = require("express");
const path = require('path');
const { runQuery } = require("./api");
const { gerarMensagem } = require("./service");


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get("/mensagem", async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).send("Email é obrigatório");

  try {
    const dados = await runQuery(email);
    if (dados.length === 0) return res.send("Nenhuma bateria encontrada.");

    const nome = dados[0].nome;
    const mensagem = gerarMensagem(nome, dados);
    res.send(mensagem);
  } catch (err) {
    res.status(500).send("Erro ao buscar dados: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
