function PorFileSytem(){    
    const fs = require("fs");

    fs.readFile("result.json", "utf-8", (err, dados) => {
        if (err) console.log(err);
        else console.log(dados.json());
    })

}

function PorFetch(){
    let div = document.querySelector("#resultados");

    fetch("result.json").then((response) => {
        response.json().then((resultados) => {
            console.log(resultados)
        })
    });
}

PorFileSytem()