function PorFetch(){
    let div = document.querySelector("#resultados");

    fetch("https://dummyjson.com/c/9fa8-2872-4fb2-82e3").then((response) => {
        response.json().then((resposta) => {
            localStorage.setItem('resultados', JSON.stringify(resposta.organic_results));
            localStorage.setItem('paginacao', JSON.stringify(resposta.serpapi_pagination));
        })
    });

    let variavel = JSON.parse(localStorage.getItem('resultados'));
    div.innerHTML = variavel[1].snippet;
}