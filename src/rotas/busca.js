const { getJson } = require("serpapi");
require("dotenv").config();
const { env } = require("process");
const { Tratamento } = require("./tratamento");
const { CampVazio, TempEsg } = require("../errors/server-error");
const lingua = 'pt-br';
const quant = 12;
const segsEspera = 10;

async function Busca(req, res){
    let { busca } = req.params;
    busca += ' livro';

    setTimeout(() => {
        if (!result) res.send(TempEsg); // preciso testar se chegou
    }, segsEspera * 1000);

    getJson({
        api_key: env.API_KEY,
        engine: "google_scholar",
        q: busca,
        hl: lingua,
        num: quant
    }, (json) => {
        Tratamento(json);
    });
}

module.exports = { Busca }