// ==========================================
// GLOBAL.JS - ATELIÊ JOSYLINHAS
// Lógica compartilhada em todas as páginas
// ==========================================

// Usamos o DOMContentLoaded para garantir que o JS só rode 
// depois que todo o HTML do Header já foi carregado na tela.
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Capturamos o botão do menu e a lista de links
    const menuBtn = document.querySelector('.menu-hamb-button');
    const navBar = document.querySelector('.navbar-links');

    // 2. Trava de segurança (Best Practice)
    // Só tenta adicionar o evento de clique se o botão realmente existir na página
    if (menuBtn && navBar) {
        menuBtn.addEventListener('click', () => {
            // 3. A mágica: toggle adiciona a classe 'active' se ela não existir, 
            // e remove se ela já estiver lá.
            navBar.classList.toggle('active');
            
            // Log para você acompanhar no console F12
            console.log('Menu mobile alternado!');
        });
    }
});