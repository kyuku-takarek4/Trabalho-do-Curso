function toggleSidebar() {
    var sidebar = document.getElementById("menu-sidebar");
    sidebar.classList.toggle("open");
}

function sidebarPerfil() {
    var sidebarPerfil = document.getElementById("perfil-sidebar");
    sidebarPerfil.classList.toggle("open");
}

// Evento de clique unificado para fechar os sidebars ao clicar fora
document.addEventListener('click', function(event) {
    var menuSidebar = document.getElementById("menu-sidebar");
    var perfilSidebar = document.getElementById("perfil-sidebar");
    var menuButton = document.querySelector('.menu-botao');
    var perfilButton = document.getElementById("perfil");

    // Verifica se o clique foi fora do menu lateral
    if (menuSidebar.classList.contains('open') && !menuSidebar.contains(event.target) && !menuButton.contains(event.target)) {
        menuSidebar.classList.remove('open');
    }

    // Verifica se o clique foi fora do sidebar do perfil
    if (perfilSidebar.classList.contains('open') && !perfilSidebar.contains(event.target) && !perfilButton.contains(event.target)) {
        perfilSidebar.classList.remove('open');
    }
});