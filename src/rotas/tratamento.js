var page;

function Tratamento(busca, json, num, res) {
    // adicionando o titulo:
    let title = `<h2 class="ResPesq">RESULTADO DA PESQUISA</h2>
        <p class="ResLivro">"${busca}"</p>`;
    page = title;
    
    //criando cada resultado:
    const open_section1 = `<section id="ResGeral">`;
    page += open_section1;
    for(let i = 0; i<12; i++){
        let result = `<section class="ResEsquerda">
                <h1><a href="${json.organic_results[i].link}">${json.organic_results[i].title}</a></h1>
                <p>${json.organic_results[i].snippet}</p>
            </section>`;
        page += result;
    }

    //criando a paginação:
    const divisa_sections = `</section>

        <section id="NavPages">
            <button class="NumPages" onclick="Requisicao(${num-1>=0 ? num-1 : 0})">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>`;
    page += divisa_sections;
    //numeros:
    for(let i = 0; i<10; i++){
        let numero;
        if(i === num) {
            numero = `<button class="NumPagesAki" onclick="Requisicao(${i})>
                ${i+1}
            </button>`;
        } else {
            numero = `<button class="NumPages" onclick="Requisicao(${i})>
                ${i+1}
            </button>`;
        }
        page += numero;
    }
    //seta direita:
    const rodape = `<button class="NumPages" onclick="Requisicao(${num+1<=10 ? num+1 : 10})>
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </section>`;
    page += rodape;
    //enviando:
    res.send(page);
}

module.exports = { Tratamento };