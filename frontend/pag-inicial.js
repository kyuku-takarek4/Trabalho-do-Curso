function toggleSidebar() {
    var sidebar = document.getElementById("menu-sidebar");
    sidebar.classList.toggle("open"); 
}
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("menu-sidebar");
    var menuButton = document.querySelector('.menu-botao');
    
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});