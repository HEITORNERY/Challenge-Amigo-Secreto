// variável para armazenar os nomes dos amigos para o sorteio
let nomes = [];

// função para coletar os nomes adicionados pelo usuário
function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    // obter o nome do amigo desconsiderando espaços em branco
    let nomeAmigo = campoNome.value.trim(); 

    // verificar se o nome inserido é válido
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.');
        return;
    }

    // verificar se esse nome já não foi adicionado
    if (nomes.includes(nomeAmigo)){
        alert('Esse nome já foi adicionado');
        campoNome.value = '';
        campoNome.focus();
        return;
    }

    // adicionar o nome a lista de amigos
    nomes.push(nomeAmigo);

    // limpar o campo de entrada depois de ser adicionado o nome do amigo
    campoNome.value = '';

    // atualizar a exibição da lista de amigos
    atualizarListaAmigos();

    // voltar o foco para o campo de amigos para adicionar um novo nome
    campoNome.focus();
}

// função para atualizar a exibição da lista de amigos 
function atualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    // limpar a lista para adicionar novos nomes
    listaAmigos.innerHTML = '';

    // adicionar amigo na lista
    nomes.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        listaAmigos.appendChild(item);
    });
}

// função para sortear o nome do amigo secreto
function sortearAmigo(){
    // precisa de pelo menos 2 nomes para fazer o sorteio
    if (nomes.length < 2){
        alert('Para o sorteio iniciar precisa de pelo menos dois nomes!');
        return;
    }

    let indexAmigoSorteado = Math.floor(Math.random() * nomes.length);
    let nomeAmigoSorteado = nomes[indexAmigoSorteado];

    // mostrar o amigo sorteado
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${nomeAmigoSorteado}</strong></li>`
}
