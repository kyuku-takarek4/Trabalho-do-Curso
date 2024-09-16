
function toggleSidebar() {
    const sidebar = document.getElementById("menu-sidebar");
    sidebar.classList.toggle("open");
    atualizaresponsividade(sidebar.classList.contains("open"));
}

function sidebarPerfil() {
    const sidebarPerfil = document.getElementById("perfil-sidebar");
    sidebarPerfil.classList.toggle("open");
  
}


function atualizaresponsividade(ativo) {
    const esponsividade2 = document.querySelector("#esponsividade");
    if (ativo) {
        esponsividade2.classList.add("ativado");
    } else {
        esponsividade2.classList.remove("ativado");
    }
}


document.addEventListener('click', function(event) {
    const menuSidebar = document.getElementById("menu-sidebar");
    const perfilSidebar = document.getElementById("perfil-sidebar");
    const menuButton = document.querySelector('.menu-botao');
    const perfilButton = document.getElementById("perfil");

    if (menuSidebar.classList.contains('open') && !menuSidebar.contains(event.target) && !menuButton.contains(event.target)) {
        menuSidebar.classList.remove('open');
        atualizaresponsividade(false);
    }


    if (perfilSidebar.classList.contains('open') && !perfilSidebar.contains(event.target) && !perfilButton.contains(event.target)) {
        perfilSidebar.classList.remove('open');
     
    }
});
function mover()
    document.addEventListener('click', function(carros){
    const Carrossel= document.getElementById('carrossel');
    if (mover.contains(carros.target));
    
    
    
    
});