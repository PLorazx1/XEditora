const { log } = require("console"); //importar apenas uma instancia da biblioteca console
const express = require("express");
const path = require("path");
const cors = require("cors");
const { Busca } = require("./rotas/busca");
const { env } = require("process");
require("dotenv").config();

const app = express(); //criação da const da função express

app.use(express.json());
app.use(cors({
  origin: env.API_BASE_URL
}));

app.post('/pesquisa', (req, res) => Busca(req, res));

//função que retorna uma pagina HTML ao acessar /home
app.use("/", express.static(path.join(__dirname, '\pages')));

//função listen - deixa o servidor preparado para chegadas
app.listen(env.PORT, (req, res) => {
  log("server on");
});

//codigo dentro do html:

async function Requisicao(page) {
  const header = new Headers({
      "Content-Type": "application/json"
  });
  const url = "http://localhost:3000/pesquisa"
  const response = await fetch(url, {
      method: "POST",
      headers: header,
      mode: "cors",
      body: JSON.stringify({
          "Busca": String(document.querySelector("#AreaPesq").value),
          "Pagina": String(page)
      })
  });
  const html = await response.text();
  const main = document.querySelector("main");
  main.id = "resultados";
  main.innerHTML = html;
}