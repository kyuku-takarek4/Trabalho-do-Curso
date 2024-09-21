
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
const carrossel = document.querySelector('.carrossel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalImagens = 18; // Total de imagens
const larguraImagem = 110; // Largura da imagem + margens
const imagensVisiveis = 6; // Número de imagens visíveis de cada vez
let scrollAmount = 0;

nextButton.addEventListener('click', () => {
    scrollAmount += larguraImagem * imagensVisiveis; // Aumenta a posição do scroll

    // Se passar do limite, retorna ao início
    if (scrollAmount >= totalImagens * larguraImagem) {
        scrollAmount = 0; // Retorna ao início
    }

    carrossel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () => {
    scrollAmount -= larguraImagem * imagensVisiveis; // Diminui a posição do scroll

    // Se estiver antes do início, vai para o final
    if (scrollAmount < 0) {
        scrollAmount = (Math.ceil(totalImagens / imagensVisiveis) - 1) * larguraImagem * imagensVisiveis; // Vai para a última posição visível
    }

    carrossel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
})



const carrossel2 = document.querySelector('.carrossel2');
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');
const totalImagens2 = 18; // Total de imagens
const larguraImagem2 = 110; // Largura da imagem + margens
const imagensVisiveis2 = 6; // Número de imagens visíveis de cada vez
let scrollAmount2 = 0;

nextButton2.addEventListener('click', () => {
    scrollAmount2 += larguraImagem2 * imagensVisiveis2; // Aumenta a posição do scroll

    // Se passar do limite, retorna ao início
    if (scrollAmount2 >= totalImagens2 * larguraImagem2) {
        scrollAmount2 = 0; // Retorna ao início
    }

    carrossel2.scrollTo({
        left: scrollAmount2,
        behavior: 'smooth'
    });
});

prevButton2.addEventListener('click', () => {
    scrollAmount2 -= larguraImagem2 * imagensVisiveis2; // Diminui a posição do scroll

    // Se estiver antes do início, vai para o final
    if (scrollAmount2 < 0) {
        scrollAmount2 = (Math.ceil(totalImagens2 / imagensVisiveis2) - 1) * larguraImagem2 * imagensVisiveis2; // Vai para a última posição visível
    }

    carrossel2.scrollTo({
        left: scrollAmount2,
        behavior: 'smooth'
    });
})