let options = document.querySelectorAll('.button');
let palavra = document.querySelector('.palavra');
let imagem = document.querySelector('.imagem');

let qtdErros = 0, qtdAcertos = 0, nQuestao = 0;

const questoes = [
    {   
        imagem: '../../imgs/cavalo',
        palavra: "CAVA__",
        palavraCompleta: "CAVALO",
        opcoes: [
            "LO", "LE", "LU", "LE"
        ],
        opcao: "LO"
    },
    {
        imagem: '../../imgs/cachorro',
        palavra: "CA___RRO",
        palavraCompleta: "CACHORRO",
        opcoes: [
            "CHU", "CHI", "CHA", "CHO"
        ],
        opcao: "CHO"
    },
    {
        imagem: '../../imgs/gato',
        palavra: "__TO",
        palavraCompleta: "GATO",
        opcoes: [
            "GE", "GO", "GA", "GU"
        ],
        opcao: "GA"
    },
    {
        imagem: '../../imgs/macaco',
        palavra: "MACA__",
        palavraCompleta: "MACACO",
        opcoes: [
            "CO", "CU", "CI", "CE"
        ],
        opcao: "CO"
    },
    {
        imagem: '../../imgs/rato',
        palavra: "__TO",
        palavraCompleta: "RATO",
        opcoes: [
            "RE", "RA", "RI", "RO"
        ],
        opcao: "RA"
    },
    {
        imagem: '../../imgs/girafa',
        palavra: "GI__FA",
        palavraCompleta: "GIRAFA",
        opcoes: [
            "RU", "RA", "RO", "RI"
        ],
        opcao: "RA"
    },
    {
        imagem: '../../imgs/elefante',
        palavra: "__FANTE",
        palavraCompleta: "ELEFANTE",
        opcoes: [
            "ELE", "ELU", "ELA", "ELO"
        ],
        opcao: "ELE"
    },
    {
        imagem: '../../imgs/peixe',
        palavra: "PEI__",
        palavraCompleta: "PEIXE",
        opcoes: [
            "XE", "XU", "XI", "XO"
        ],
        opcao: "XE"
    },
    {
        imagem: '../../imgs/vaca',
        palavra: "__CA",
        palavraCompleta: "VACA",
        opcoes: [
            "VO", "VE", "VI", "VA"
        ],
        opcao: "VA"
    },
    {
        imagem: '../../imgs/lobo',
        palavra: "__BO",
        palavraCompleta: "LOBO",
        opcoes: [
            "LI", "LA", "LO", "LE"
        ],
        opcao: "LO"
    }
];

let questao;

setarQuestao(nQuestao);

//ver a certa
options.forEach((e) => {
    e.addEventListener('click', () => {
        if(e.innerHTML == questao.opcao) {
            qtdAcertos++;

            if(nQuestao + 1 === questoes.length) {
                window.location.href = '../resultado-game/resultado-game.html?erros=' + qtdErros + '&acertos=' + qtdAcertos
            } else {
                nQuestao++;
                setarQuestao(nQuestao);
            }
        } else {
            e.classList.add('button-err');
            e.setAttribute('disabled', '');

            qtdErros++;
        }
    })
})

function setarQuestao(i) {
    questao = questoes[i];

    imagem.setAttribute('src', questao.imagem + '.png');

    palavra.innerHTML = questao.palavra;

    for(j = 0; j < options.length; j++) {
        options[j].innerHTML = questao.opcoes[j];
    }

    options.forEach(e => {
        e.removeAttribute('disabled', '');
        e.classList.remove('button-err');
    })
}