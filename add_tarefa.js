var tituloInput = document.getElementById('titulo');
var contadorTitulo = document.getElementById('contador-titulo');

tituloInput.addEventListener('input', function() {
var caracteresDigitados = tituloInput.value.length;
var caracteresRestantes = MAX_CARACTERES_TITULO - caracteresDigitados;
contadorTitulo.textContent = caracteresRestantes + ' caracteres restantes';
});

var descricaoInput = document.getElementById('descricao');
var contadorDescricao = document.getElementById('contador-descricao');

descricaoInput.addEventListener('input', function() {
var caracteresDigitados = descricaoInput.value.length;
var caracteresRestantes = MAX_CARACTERES_DESCRICAO - caracteresDigitados;
contadorDescricao.textContent = caracteresRestantes + ' caracteres restantes';
});

var descricaoInput = document.getElementById('descricao');

descricaoInput.addEventListener('input', function(event) {
var key = event.inputType;

if (key === 'insertParagraph') {
    descricaoInput.value = descricaoInput.value.replace(/\n$/, '') + '<br>';
}
});