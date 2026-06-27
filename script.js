document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementos (As Páginas)
    const telaHome = document.getElementById('home');
    const telaDefinicoes = document.getElementById('secao-definicoes');
    const telaTopico3 = document.getElementById('secao-topico-3');

    // 2. Elementos (Os Botões)
    const btnIniciar = document.getElementById('btn-iniciar');
    const btnProximoTopico = document.getElementById('btn-proximo-topico');
    const btnVoltarInicio = document.getElementById('btn-voltar-inicio');

    // 3. Ação: Da Página 1 para a Página 2
    btnIniciar.addEventListener('click', () => {
        telaHome.classList.add('escondida');
        telaDefinicoes.classList.remove('escondida');
        window.scrollTo(0, 0);
    });

    // 4. Ação: Da Página 2 para a Página 3
    btnProximoTopico.addEventListener('click', () => {
        telaDefinicoes.classList.add('escondida');
        telaTopico3.classList.remove('escondida');
        window.scrollTo(0, 0);
    });

    // 5. Ação: Da Página 3 de volta para o Início
    btnVoltarInicio.addEventListener('click', () => {
        telaTopico3.classList.add('escondida');
        telaHome.classList.remove('escondida');
        window.scrollTo(0, 0);
    });
});