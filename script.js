function executar(cavalo){
    return cavalo.json();
}

function executar2(jumento){
    console.log(jumento)
    document.write("<span>"+jumento[0].idade+"<span>")
    lista.innerHTML = "<li>allan2<li>"
}

let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
console.log(promessa);

let promessa2 = promessa.then(executar)

promessa2.then(executar2)

