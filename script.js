// Selecionando os botões
const btnIniciar = document.getElementById('btn-iniciar');
const btnIrPag3 = document.getElementById('btn-ir-pag3');
const btnIrPag4 = document.getElementById('btn-ir-pag4');
const btnVoltarInicio = document.getElementById('btn-voltar-inicio');

// Selecionando as telas
const telaHome = document.getElementById('home');
const telaPag2 = document.getElementById('secao-definicoes');
const telaPag3 = document.getElementById('secao-importancia');
const telaPag4 = document.getElementById('secao-sustentabilidade');

// Navegação Pág 1 -> Pág 2
btnIniciar.addEventListener('click', () => {
    telaHome.classList.add('escondida');
    telaPag2.classList.remove('escondida');
    window.scrollTo(0, 0); // Faz a página voltar pro topo
});

// Navegação Pág 2 -> Pág 3
btnIrPag3.addEventListener('click', () => {
    telaPag2.classList.add('escondida');
    telaPag3.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// Navegação Pág 3 -> Pág 4
btnIrPag4.addEventListener('click', () => {
    telaPag3.classList.add('escondida');
    telaPag4.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// Navegação Pág 4 -> Volta para Home (Início)
btnVoltarInicio.addEventListener('click', () => {
    telaPag4.classList.add('escondida');
    telaHome.classList.remove('escondida');
    window.scrollTo(0, 0);
});