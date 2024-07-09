//constantes iniciais:
const IDbusca = ''; //a definir
const IDPagResult = ''; //a definir
const pagInicial = ''; //a definir
const chaveAPI = 'ca0de54a49d6977b45e9e6c8857ee028e996d04de7f95bcea9f1ada77bc99039'; //sujeito a alteração
const lingua = 'pt-br';
const segsEspera = 10; //em segundos
const msgTempEsg = 'Ops...\nPor algum motivo, sua pesquisa demorou muito, tente novamente mais tarde.';
const msgCampVazio = 'Erro!\nDigite algo no campo de pesquisa';

const { getJson } = require("serpapi");

//função para criar a pagina de resultados:
function PagResult(){
  let div = document.getElementById(IDPagResult);
  for(i=0; i<12; i++){
    let resultado = JSON.parse(localStorage.getItem('resultados'))[i];
    let CodHTML = ``; //Codigo para criar cada resultado
    div.innerHTML += CodHTML;
  }
}

function Busca() {
  let Busca;
  // Busca = document.getElementById(IDbusca).value;
  Busca = 'café';
  //verificação se o campo de busca está vazio:
  if (Busca.length == 0 || Busca == ' ') {
    alert(msgCampVazio);
  } else {
    Busca += ' livro';
    // pagina indicadora de pesquisa??
    //função de verificar o tempo:
    setTimeout(() => {
      if(localStorage.length == 0) {
        alert(msgTempEsg);
        window.location = pagInicial;
      }
    }, segsEspera * 1000);
    //chamada da API:
    getJson({
      api_key: chaveAPI,
      engine: "google_scholar",
      q: Busca,
      hl: lingua,
      num: "12"
    }, (json) => {
      //salvando o json no client-side:
      localStorage.setItem('resultados', JSON.stringify(json.organic_results));
      localStorage.setItem('paginacao', JSON.stringify(json.serpapi_pagination));
      PagResult();
    });
  }
}