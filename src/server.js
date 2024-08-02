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

app.get('/pesq/:busca', (req, res) => Busca(req, res));

app.post('/pesquisa/:termo', (req, res) => {
  // req.is(express.json);
  const { termo } = req.params
  log(req.body);
  log(termo);
  // res.send(req);
  let resultados = Busca(req, res);

  // let resultados = Busca(termo)
})

//função que retorna uma pagina HTML ao acessar /home
app.use("/", express.static(path.join(__dirname, '\pages')));

//função listen - deixa o servidor preparado para chegadas
app.listen(env.PORT, (req, res) => {
  log("server on");
});