// Constante a seguir precisa definir para a execução normal
const IDbusca = 'Exemplo';

const { getJson } = require("serpapi");


// function CriarURL(pesquisa){
    //     let dominio = ;
    // }
    
function Busca(){
    let Busca, URL;
    // Busca = document.getElementById(IDbusca).value;
    Busca = 'café';
    if (Busca.length = 0){
        // função para erros - a definir
        console.log('Chegou aki');
    } else {
        // pagina indicadora de pesquisa
        // URL = CriarURL(Busca);
        getJson({
            engine: "google_scholar",
            q: Busca,
            api_key: "secret_api_key"
        }, (json) => {
            console.log(json["organic_results"]);
        });
    }
}

Busca()