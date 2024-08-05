const { getJson } = require("serpapi");
require("dotenv").config();
const { env } = require("process");
const { Tratamento } = require("./tratamento");
const { CampVazio, TempEsg } = require("../errors/server-error");
const lingua = 'pt-br';
const quant = 12;
const segsEspera = 10;

async function Busca(req, res){
    let busca = req.body.Busca;
    let page = req.body.Pagina;
    let termo = busca + ' livro';

    getJson({
        api_key: env.API_KEY,
        engine: "google_scholar",
        q: termo,
        hl: lingua,
        num: quant,
        start: page*12
    }, (json) => {
        if (json.search_metadata.total_time_taken > segsEspera) TempEsg(); //estudar as paginas de erro
        else Tratamento(busca, json, page, res);
    });
}

module.exports = { Busca }