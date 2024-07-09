//constantes iniciais:
const IDbusca = ''; //a definir
const chaveAPI = 'ca0de54a49d6977b45e9e6c8857ee028e996d04de7f95bcea9f1ada77bc99039'; //sujeito a alteração
const lingua = 'pt-br';
const segsEspera = 10; //em segundos
const msgTempEsg = 'Ops...\nPor algum motivo, sua pesquisa demorou muito, tente novamente mais tarde.';

const { getJson } = require("serpapi");

function tratamento(caminho) {
  fetch(caminho).then((response) => {
    response.json().then((dados) => {
      console.log(dados.organic_results)
    })
  })
}

function Busca() {
  let Busca;
  // Busca = document.getElementById(IDbusca).value;
  Busca = 'café';
  //verificação se o campo de busca está vazio:
  if (Busca.length == 0 || Busca == ' ') {
    alert("Erro!\nDigite algo no campo de pesquisa")
  } else {
    Busca += ' livro';
    // pagina indicadora de pesquisa
    //função de verificar o tempo:
    setTimeout(() => {
      if(localStorage.length == 0) alert(msgTempEsg);
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
      // função arrow para realizar o tratamento de dados
    });
  }
}