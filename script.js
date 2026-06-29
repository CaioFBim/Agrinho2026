// 1. Armazenando os botões do HTML em variáveis para podermos "escutar" os cliques neles
const btnIniciar = document.getElementById('btn-iniciar');
const btnIrPag3 = document.getElementById('btn-ir-pag3');
const btnIrPag4 = document.getElementById('btn-ir-pag4');
const btnVoltarInicio = document.getElementById('btn-voltar-inicio');

// 2. Armazenando as telas inteiras do site em variáveis para podermos mostrá-las ou escondê-las
const telaHome = document.getElementById('home');
const telaPag2 = document.getElementById('secao-definicoes');
const telaPag3 = document.getElementById('secao-importancia');
const telaPag4 = document.getElementById('secao-sustentabilidade');

// Evento: Quando clicar no botão da Página 1
btnIniciar.addEventListener('click', () => {
    telaHome.classList.add('escondida');     // Adiciona classe para esconder a página 1
    telaPag2.classList.remove('escondida');  // Remove classe para mostrar a página 2
    window.scrollTo(0, 0);                   // Rola o navegador de volta para o topo da página
});

// Evento: Quando clicar no botão da Página 2
btnIrPag3.addEventListener('click', () => {
    telaPag2.classList.add('escondida');
    telaPag3.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// Evento: Quando clicar no botão da Página 3
btnIrPag4.addEventListener('click', () => {
    telaPag3.classList.add('escondida');
    telaPag4.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// Evento: Quando clicar no botão da Página 4 (Voltar ao início)
btnVoltarInicio.addEventListener('click', () => {
    telaPag4.classList.add('escondida');
    telaHome.classList.remove('escondida');  // Volta a exibir o vídeo e a página inicial
    window.scrollTo(0, 0);
});

// Seleciona os botões de A+ e A-
const btnAumentar = document.getElementById('btn-aumentar-fonte');
const btnDiminuir = document.getElementById('btn-diminuir-fonte');

// Seleciona todos os parágrafos (apenas os textos de explicação) de todas as páginas
const textosExplicacao = document.querySelectorAll('.texto-explicacao p');

// Tamanho base original (22px) que está configurado lá no arquivo CSS
let tamanhoAtualFonte = 22; 

// Evento: Quando clicar no botão de Aumentar (A+)
btnAumentar.addEventListener('click', () => {
    // Verifica se a fonte ainda não atingiu o limite máximo (34px) para não quebrar o layout
    if (tamanhoAtualFonte < 34) { 
        tamanhoAtualFonte += 2; // Aumenta a variável em 2 pixels
        
        // Passa por todos os parágrafos alterando o CSS deles dinamicamente
        textosExplicacao.forEach(paragrafo => {
            paragrafo.style.fontSize = tamanhoAtualFonte + 'px';
        });
    }
});

// Evento: Quando clicar no botão de Diminuir (A-)
btnDiminuir.addEventListener('click', () => {
    // Verifica se a fonte ainda não atingiu o limite mínimo (14px) para não ficar ilegível
    if (tamanhoAtualFonte > 14) { 
        tamanhoAtualFonte -= 2; // Diminui a variável em 2 pixels
        
        // Passa por todos os parágrafos aplicando o novo tamanho
        textosExplicacao.forEach(paragrafo => {
            paragrafo.style.fontSize = tamanhoAtualFonte + 'px';
        });
    }
});