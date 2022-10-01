function executar(cavalo) {
    let promessabody = cavalo.json();
    return promessabody
}

function executar2(jumento) {
    lista.innerHTML = "";
    jumento.forEach(function (pessoa) {
        lista.innerHTML = lista.innerHTML + "<li>" + pessoa.nome + "</li>";
    }
    )
};

function atualizar() {
    let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
    promessa.then(executar).then(executar2)
}

function adicionar() {
    let nomeDaPessoa = nome.value;
    console.log(nomeDaPessoa);

    let requestPost = {
        method: "POST",
        //Ato de fé
        headers: {
            "content-type" : "application/json"
        },
        //conteudo que eu desejo enviar
        body: JSON.stringify({
            idade: 20,
            nome: nomeDaPessoa,
        }),
    };

    fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa", requestPost).then(function(resposta){
        console.log(resposta)
    })
}