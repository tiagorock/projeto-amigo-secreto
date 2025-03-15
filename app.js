//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); 
    const nomeAmigo = inputAmigo.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.'); 
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.'); 
        return;
    }

    listaAmigos.push(nomeAmigo); 
    inputAmigo.value = ''; 

    atualizarListaAmigos();
}


function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos');
    listaAmigosElemento.innerHTML = ''; 

    listaAmigos.forEach(amigo => {
        const itemLista = document.createElement('li'); 
        itemLista.textContent = amigo; 
        listaAmigosElemento.appendChild(itemLista); 
    });
}


function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.'); 
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    const amigoSorteado = listaAmigos[indiceSorteado]; 

    exibirResultado([`O amigo secreto sorteado é: ${amigoSorteado}`]); 
}


function exibirResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ''; 

    resultado.forEach(par => {
        const itemResultado = document.createElement('li'); 
        itemResultado.textContent = par; 
        resultadoElemento.appendChild(itemResultado); 
    });
}

