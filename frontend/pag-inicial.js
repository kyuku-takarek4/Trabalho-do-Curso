// Funções para alternar a visibilidade dos sidebars
function toggleSidebar() {
    const sidebar = document.getElementById("menu-sidebar");
    sidebar.classList.toggle("open");
    atualizaresponsividade(sidebar.classList.contains("open"));
}

function sidebarPerfil() {
    const sidebarPerfil = document.getElementById("perfil-sidebar");
    sidebarPerfil.classList.toggle("open");
  
}

// Função para atualizar a classe 'active' no elemento #esponsividade
function atualizaresponsividade(ativo) {
    const esponsividade2 = document.querySelector("#esponsividade");
    if (ativo) {
        esponsividade2.classList.add("active");
    } else {
        esponsividade2.classList.remove("active");
    }
}

// Evento de clique unificado para fechar os sidebars ao clicar fora
document.addEventListener('click', function(event) {
    const menuSidebar = document.getElementById("menu-sidebar");
    const perfilSidebar = document.getElementById("perfil-sidebar");
    const menuButton = document.querySelector('.menu-botao');
    const perfilButton = document.getElementById("perfil");

    // Verifica se o clique foi fora do menu lateral
    if (menuSidebar.classList.contains('open') && !menuSidebar.contains(event.target) && !menuButton.contains(event.target)) {
        menuSidebar.classList.remove('open');
        atualizaresponsividade(false); // Remove a classe 'active' ao fechar
    }

    // Verifica se o clique foi fora do sidebar do perfil
    if (perfilSidebar.classList.contains('open') && !perfilSidebar.contains(event.target) && !perfilButton.contains(event.target)) {
        perfilSidebar.classList.remove('open');
         // Remove a classe 'active' ao fechar
    }
});
/*function Carrossel()
    document.addEventListener('click', function(carros){
    const Carrossel= document.getElementById('carrossel');
    if (Carrossel.contains(carros.target));
    
    
    
});*/