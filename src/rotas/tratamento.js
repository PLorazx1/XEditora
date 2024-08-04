const cabeçalho = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Este site tem o intuito de ser uma grande biblioteca online totalmente gratuita!">
    <meta name="keywords" content="biblioteca, livros, livro, leitura, editora, artigos, google academico, editora, biblioteca online, ler">
    <meta name="author" content="Yuri Costa Matsuzaki e Paulo Sergio da Silva Loraschi">

    <title>X Editora</title>

    <link rel="shortcut icon" href="imagens/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../pages/estilo/style.css">
    <link rel="stylesheet" href="../pages/estilo/style-midia.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body onresize="MudouTamanho()">
    <header id="cabeca">
        <div  id="LogoTopo"><img src="imagens/logo-xeditora-200px.png" alt="Logo da empresa X Editora"></div>
    </header>
    
    <menu>
        <div id="NavMenu1">
            <a href="index.html">Home</a>
            <a href="#DesQS">Quem somos?</a>
            <a href="contato.html" rel="next">Fale Conosco</a>
        </div>
        
        <div id="PesqGeral">
            <input type="search" name="PesqLivro" id="AreaPesq">
            <input type="button" value="&#x1F50D" id="PesqLupa">
            <span id="MenuBurger" class="material-symbols-outlined" onclick="ClickMenu()">menu</span>
        </div>

        <div id="NavMenu2">
            <a href="index.html">Home</a>
            <a href="#DesQS">Quem somos?</a>
            <a href="contato.html" rel="next">Fale Conosco</a>
        </div>
    
    <main id="resultado">`;
const rodape = `
    </main>
    <footer>
        <div id="LogoBaixo"><img src="imagens/logo-xeditora-100px.png" alt=""></div>
        <div id="Contatos">
            <p>E-mail: xeditora@gmail.com</p>
            <p>Contato: (91) 99999-0000</p>
        </div>
        <div id="TermUso"><a href="termosdeuso.html" rel="next">Todos os direitos reservados a Xeditora</a></div>
    </footer>


    <script>
        let menu1 = document.getElementById('NavMenu1')
        let menu2 = document.getElementById('NavMenu2')
        let pesq = document.getElementById('PesqGeral')

        function ClickMenu(){
            if(menu2.style.display == 'block'){
                menu2.style.display = 'none'
            } else{
                menu2.style.display = 'block'
            }
        }

        function MudouTamanho(){
            if (window.innerWidth >= 768) {
                menu2.style.display = 'block'
                menu2.style.display = 'none'
            } else {
                menu2.style.display = 'none'
            }
        }
    </script>
</body>
</html>`; //vou mudar ainda
var page;

function Tratamento(busca, json, res) {
    // adicionando o titulo:
    let title = `<h2 class="ResPesq">RESULTADO DA PESQUISA</h2>
        <p class="ResLivro">"${busca}"</p>`;
    page = cabeçalho + title;
    
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

        <section id="NavPages">`;
    page += divisa_sections;
    //seta esquerda:

    //numeros:
    for(let i = 0; i<10; i++){}
    //seta direita:

    //rodapé:
    page += rodape;
    res.send(page);
}

module.exports = { Tratamento };