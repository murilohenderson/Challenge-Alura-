    let amigos = [];
    let amigosSorteados = [];
    let amigosPresenteadores = [];
    let amigosPresenteados = [];

    function adicionarAmigo() {
        let amigo = document.querySelector("#amigo");
        if (amigo.value === "") {
            alert("Por favor, insira um nome.");
        } else {
            amigos.push(amigo.value);
            amigosPresenteadores.push(amigo.value);
            amigosPresenteados.push(amigo.value);
            amigo.value = "";
        }
        atualizarLista();
    }

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

    function sortearAmigos() {
        if (amigosPresenteadores.length == 0 || amigosPresenteados.length == 0) {
            alert("Não existem amigos suficientes para fazer o sorteio");
        } else {
        let indicePresenteador = parseInt(Math.random() * amigosPresenteadores.length);
        let amigoPresenteador = amigosPresenteadores.splice(indicePresenteador, 1)[0];    

        let indicePresenteado = parseInt(Math.random() * amigosPresenteados.length);
        let amigoPresentado = amigosPresenteados.splice(indicePresenteado, 1)[0];
        
        if (amigosPresenteados.length > 1) {
        while (amigoPresenteador === amigoPresentado) {
                // Coloca o amigo de volta na lista e sorteia novamente
                amigosPresenteados.push(amigoPresentado);
                indicePresenteado = parseInt(Math.random() * amigosPresenteados.length);
                amigoPresentado = amigosPresenteados.splice(indicePresenteado, 1)[0];
            }
        }

        amigosSorteados.push({presenteador: amigoPresenteador, presenteado: amigoPresentado});

        return {amigoPresenteador, amigoPresentado};
        }
       
    }

    function mostrarSorteio() { 
        let sorteio = sortearAmigos();
        if (sorteio) {
            let resultado = document.querySelector("#resultado");
            resultado.innerHTML = "O amigo " + sorteio.amigoPresenteador + " deverá presentear o amigo " + sorteio.amigoPresentado;
        }
    }