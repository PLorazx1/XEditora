// Constante a seguir precisa definir para a execução normal
const IDbusca = 'Exemplo';

const { getJson } = require("serpapi");

function tratamento(caminho){
  fetch(caminho).then((response) => {
    response.json().then((dados) => {
      console.log(dados.organic_results)
    })
  })
}

function Busca(){
  let Busca;
  // Busca = document.getElementById(IDbusca).value;
  Busca = 'café';
  if (Busca.length == 0 || Busca == ' ') {
    alert("Erro!\nDigite algo no campo de pesquisa")
  } else {
    Busca += ' livro';
    // pagina indicadora de pesquisa
    getJson({
      api_key: "ca0de54a49d6977b45e9e6c8857ee028e996d04de7f95bcea9f1ada77bc99039",
      engine: "google_scholar",
      q: Busca,
      hl: "pt-br",
      num: "12"
    }, (json) => { 
      // função arrow para realizar o tratamento de dados
    });
  }
}

tratamento("result.json");