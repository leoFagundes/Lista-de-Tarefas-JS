// Verificar se existem tarefas salvas
var tarefasSalvas = localStorage.getItem('tarefas');
var tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];

// Adicionar as tarefas ao DOM
var container = document.querySelector('.container');
tarefas.forEach(function(tarefa) {
    var divTarefa = document.createElement('div');
    divTarefa.classList.add('tarefa');

    var divDescricao = document.createElement('div');
    divDescricao.classList.add('descricao');

    var divSubTarefa = document.createElement('div');
    divSubTarefa.classList.add('sub-tarefa');

    var titulo = document.createElement('h1');
    titulo.setAttribute('align', 'center');
    titulo.textContent = tarefa.titulo;

    var imgLixeira = document.createElement('img');
    imgLixeira.classList.add('icon');
    imgLixeira.setAttribute('src', './style/images/lata-de-lixo.png');

    /*
    var descricao = document.createElement('p');
    descricao.textContent = tarefa.descricao;
    */

    var descricao = document.createElement('div');
    descricao.classList.add('descricao');
    descricao.innerHTML = tarefa.descricao.replace(/\n/g, '<br>');

    divSubTarefa.appendChild(titulo);
    divSubTarefa.appendChild(imgLixeira);

    divTarefa.appendChild(divSubTarefa);
    divTarefa.appendChild(divDescricao);

    divDescricao.appendChild(descricao);

    container.appendChild(divTarefa);

    // Adicionar o evento de clique ao ícone da lixeira
    imgLixeira.addEventListener('click', function () {
        // Remover a tarefa do DOM
    divTarefa.remove();

    // Remover a tarefa do array de tarefas
    var index = tarefas.indexOf(tarefa);
    tarefas.splice(index, 1);

    // Atualizar o valor do localStorage com as tarefas atualizadas
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    });
});