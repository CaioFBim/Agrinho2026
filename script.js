document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Pegar os elementos que vamos interagir do HTML
    const btnProximo = document.querySelector('.btn-proximo');
    const telaHome = document.getElementById('home');
    const telaDefinicoes = document.getElementById('secao-definicoes');

    // 2. Escutar o momento exato em que o usuário clica no botão
    btnProximo.addEventListener('click', () => {
        
        // Esconde a tela inicial
        telaHome.classList.add('escondida');
        
        // Mostra a tela de definições
        telaDefinicoes.classList.remove('escondida');
        
        // Joga o scroll da tela automaticamente para o topo do novo slide
        window.scrollTo(0, 0);
    });
});