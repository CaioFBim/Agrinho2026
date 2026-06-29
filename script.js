// --- NAVEGAÇÃO ENTRE PÁGINAS ---
const btnIniciar = document.getElementById('btn-iniciar');
const btnIrPag3 = document.getElementById('btn-ir-pag3');
const btnIrPag4 = document.getElementById('btn-ir-pag4');
const btnVoltarInicio = document.getElementById('btn-voltar-inicio');

const telaHome = document.getElementById('home');
const telaPag2 = document.getElementById('secao-definicoes');
const telaPag3 = document.getElementById('secao-importancia');
const telaPag4 = document.getElementById('secao-sustentabilidade');

btnIniciar.addEventListener('click', () => {
    telaHome.classList.add('escondida');
    telaPag2.classList.remove('escondida');
    window.scrollTo(0, 0); 
});

btnIrPag3.addEventListener('click', () => {
    telaPag2.classList.add('escondida');
    telaPag3.classList.remove('escondida');
    window.scrollTo(0, 0);
});

btnIrPag4.addEventListener('click', () => {
    telaPag3.classList.add('escondida');
    telaPag4.classList.remove('escondida');
    window.scrollTo(0, 0);
});

btnVoltarInicio.addEventListener('click', () => {
    telaPag4.classList.add('escondida');
    telaHome.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// --- CONTROLE DE TAMANHO DA FONTE ---
const btnAumentar = document.getElementById('btn-aumentar-fonte');
const btnDiminuir = document.getElementById('btn-diminuir-fonte');
const textosExplicacao = document.querySelectorAll('.texto-explicacao p');

let tamanhoAtualFonte = 22; // Tamanho original do CSS

btnAumentar.addEventListener('click', () => {
    if (tamanhoAtualFonte < 34) { 
        tamanhoAtualFonte += 2;
        textosExplicacao.forEach(paragrafo => {
            paragrafo.style.fontSize = tamanhoAtualFonte + 'px';
        });
    }
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoAtualFonte > 14) { 
        tamanhoAtualFonte -= 2;
        textosExplicacao.forEach(paragrafo => {
            paragrafo.style.fontSize = tamanhoAtualFonte + 'px';
        });
    }
});