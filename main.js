function Tarefa(titulo, descricao, cor) {
    this.titulo = titulo;
    this.descricao = descricao;
}

var MAX_CARACTERES_TITULO = 50;
var MAX_CARACTERES_DESCRICAO = 999;

document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
  
    // Verificar o limite máximo de caracteres para o título
    if (titulo.length > MAX_CARACTERES_TITULO) {
        alert('O título deve ter no máximo ' + MAX_CARACTERES_TITULO + ' caracteres.');
        return;
    }

    // Verificar o limite máximo de caracteres para a descrição
    if (descricao.length > MAX_CARACTERES_DESCRICAO) {
        alert('A descrição deve ter no máximo ' + MAX_CARACTERES_DESCRICAO + ' caracteres.');
        return;
    }

    var tarefa = new Tarefa(titulo, descricao);
  
    // Verificar se já existem tarefas salvas
    var tarefasSalvas = localStorage.getItem('tarefas');
    var tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  
    // Adicionar a nova tarefa ao array de tarefas
    tarefas.push(tarefa);
  
    // Salvar as tarefas atualizadas no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  
    // Redirecionar para a página inicial (index.html)
    window.location.href = 'index.html';
  });
