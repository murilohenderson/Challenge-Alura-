let amigos = [];
let amigosSorteados = [];

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; 
        // Adicione o item i, ou seja, o nome que está alocado naquela posição dentro da array, dentro da tag "li"
        lista.appendChild(li); 
        // Coloca o item "li" dentro de <ul>
    }
}

function adicionarAmigo() {
    let amigo = document.querySelector("#amigo");
    if (amigo.value === "") {
        alert("Por favor, insira um nome.");
    } else { 
        amigos.push(amigo.value);
        amigo.value = "";
    }
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione ao menos dois amigos para fazer um sorteio.");
    }
    else {
        let indicePresenteador = parseInt(Math.random() * amigos.length); 
        let amigoPresenteador = amigos.splice(indicePresenteador, 1)[0];

        let indicePresenteado = parseInt(Math.random() * amigos.length); 
        let amigoPresentado = amigos.splice(indicePresenteado, 1)[0];

        amigosSorteados.push({presenteador: amigoPresenteador, presenteado: amigoPresentado});

 
        atualizarLista();

        // mostrar o resultado
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = "O amigo " + amigoPresenteador + " deverá presentear o amigo " + amigoPresentado;
    }
}
