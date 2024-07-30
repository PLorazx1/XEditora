const { getJson } = require("serpapi");
require("dotenv").config();
const { env } = require("process");
const { CampVazio, TempEsg } = require("../errors/server-error");
const lingua = 'pt-br';
const quant = 12;
const segsEspera = 10;

async function Busca(req, res){
    
    //Espaço para pegar o termo

    termo += 'livro';
    if (termo.length == 0 || termo == ' '){
        return CampVazio();
    }
    setTimeout(() => {
        res.send(TempEsg);
    }, segsEspera * 1000)
    getJson({
        api_key: env.API_KEY,
        engine: "google_scholar",
        q: termo,
        hl: lingua,
        num: quant
    }, (json) => {
        return json;
    });
}

module.exports = { Busca }