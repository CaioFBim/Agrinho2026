/* ========================================== */
/* VARIÁVEIS PRINCIPAIS                       */
/* ========================================== */
// Pega os elementos de botão do HTML para podermos dar funções a eles
const btnIniciar = document.getElementById('btn-iniciar');
const btnIrPag3 = document.getElementById('btn-ir-pag3');
const btnIrPag4 = document.getElementById('btn-ir-pag4');
const btnVoltarInicio = document.getElementById('btn-voltar-inicio');

// Pega as "telas" (sessões) inteiras do site
const telaHome = document.getElementById('home');
const telaPag2 = document.getElementById('secao-definicoes');
const telaPag3 = document.getElementById('secao-importancia');
const telaPag4 = document.getElementById('secao-sustentabilidade');

// Pega os elementos do sistema de nome
const inputNome = document.getElementById('input-nome');
const spanNomeUsuario = document.getElementById('nome-usuario');


/* ========================================== */
/* LÓGICA DE NAVEGAÇÃO E NOME                 */
/* ========================================== */
// Quando clicar no botão da Tela Inicial...
btnIniciar.addEventListener('click', () => {
    
    // Pega o texto que a pessoa digitou e tira espaços em branco inúteis com o trim()
    const nomeDigitado = inputNome.value.trim(); 
    
    // Se a pessoa digitou alguma coisa, coloca o nome dela no título
    if (nomeDigitado !== "") {
        spanNomeUsuario.textContent = nomeDigitado; 
    } else {
        // Se ela não digitou nada e apertou o botão, chama ela de "visitante"
        spanNomeUsuario.textContent = "visitante";  
    }

    // Esconde a página 1, mostra a página 2 e joga a tela para o topo
    telaHome.classList.add('escondida');
    telaPag2.classList.remove('escondida');
    window.scrollTo(0, 0); 
});

// Navegação para a Página 3
btnIrPag3.addEventListener('click', () => {
    telaPag2.classList.add('escondida');
    telaPag3.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// Navegação para a Página 4
btnIrPag4.addEventListener('click', () => {
    telaPag3.classList.add('escondida');
    telaPag4.classList.remove('escondida');
    window.scrollTo(0, 0);
});

// Volta para o Menu Inicial e apaga o nome que estava na caixinha
btnVoltarInicio.addEventListener('click', () => {
    telaPag4.classList.add('escondida');
    telaHome.classList.remove('escondida');
    inputNome.value = ""; // Limpa o campo do nome
    window.scrollTo(0, 0);
});


/* ========================================== */
/* LÓGICA DO MODO ESCURO                      */
/* ========================================== */
// Pega o botão de modo escuro (ícone da Lua/Sol)
const btnModoEscuro = document.getElementById('btn-modo-escuro');

btnModoEscuro.addEventListener('click', () => {
    // O toggle funciona como um interruptor: se o body não tiver a classe 'modo-escuro', ele bota. Se já tiver, ele tira.
    document.body.classList.toggle('modo-escuro');
    
    // Troca o desenho do botão dependendo do modo ativado
    if (document.body.classList.contains('modo-escuro')) {
        btnModoEscuro.textContent = '☀️'; // Solzinho avisando que se clicar volta pro Claro
    } else {
        btnModoEscuro.textContent = '🌙'; // Lua avisando que se clicar vai pro Escuro
    }
});


/* ========================================== */
/* LÓGICA DE TAMANHO DA FONTE (ACESSIBILIDADE)*/
/* ========================================== */
const btnAumentar = document.getElementById('btn-aumentar-fonte');
const btnDiminuir = document.getElementById('btn-diminuir-fonte');
// Seleciona todos os parágrafos dentro das áreas de texto para mudar de uma vez só
const textosExplicacao = document.querySelectorAll('.texto-explicacao p');

let tamanhoAtualFonte = 22; // Memoriza que a fonte começa no tamanho 22

// Quando clica no A+
btnAumentar.addEventListener('click', () => {
    if (tamanhoAtualFonte < 34) { // Limite máximo para não estourar a tela
        tamanhoAtualFonte += 2;
        // Laço de repetição: vai em cada parágrafo e aplica o novo tamanho da letra
        textosExplicacao.forEach(paragrafo => {
            paragrafo.style.fontSize = tamanhoAtualFonte + 'px';
        });
    }
});

// Quando clica no A-
btnDiminuir.addEventListener('click', () => {
    if (tamanhoAtualFonte > 14) { // Limite mínimo para a letra não desaparecer
        tamanhoAtualFonte -= 2;
        textosExplicacao.forEach(paragrafo => {
            paragrafo.style.fontSize = tamanhoAtualFonte + 'px';
        });
    }
});