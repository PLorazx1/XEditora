const { getJson } = require("serpapi");
require("dotenv").config();
const { env } = require("process");
const { Tratamento } = require("./tratamento");
const { CampVazio, TempEsg } = require("../errors/server-error");
const lingua = 'pt-br';
const quant = 12;
const segsEspera = 10;

async function Busca(req, res){
    const { busca } = req.params;
    let termo = busca + ' livro';

    getJson({
        api_key: env.API_KEY,
        engine: "google_scholar",
        q: termo,
        hl: lingua,
        num: quant
    }, (json) => {
        if (json.search_metadata.total_time_taken > segsEspera) TempEsg(); //estudar as paginas de erro
        else Tratamento(busca, json, res);
    });
}

module.exports = { Busca }