function CampVazio(){
    return 'Erro!\nDigite algo no campo de pesquisa';
}

function TempEsg(){
    return {'mesage': 'Ops...\nPor algum motivo, sua pesquisa demorou muito, tente novamente mais tarde.'};
}

module.exports = { CampVazio, TempEsg };