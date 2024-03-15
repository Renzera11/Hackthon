let params = location.search.slice(1).split('&');

let dados = [];

params.forEach(e => {
    var chaveValor = e.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    dados[chave] = valor;
});

let acertos = document.querySelector('.acertos')
let erros = document.querySelector('.erros')

acertos.innerHTML = dados['acertos']
erros.innerHTML = dados['erros']