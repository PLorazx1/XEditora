// Constante a seguir precisa definir para a execução normal
const IDbusca = 'Exemplo';

function CriarURL(pesquisa){
    let dominio = 'https://serpapi.com/search?engine=google_scholar&';
    let pag = '&hl=pt-br&lr=pt-br&num=12';
    let url = dominio + pesquisa + pag;
    return url;
}

async function ChamadaAPI(url){
    let resultado = await fetch(url);
    console.log(resultado);
}

function Busca(){
    let Busca, URL;
    // Busca = document.getElementById(IDbusca).value;
    Busca = 'café';
    if (Busca.length == 0 || Busca == ' '){
        // função para erros - a definir
        console.log('Chegou aki');
    } else {
        // pagina indicadora de pesquisa
        URL = CriarURL(Busca);
        ChamadaAPI(URL);
    }
}

Busca();