document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar as imagens do banco de dados
    function carregarImagens() {
        fetch(`http://localhost:3000/api/usuarios`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar as imagens.");
                }
                return response.json();
            })
            .then(data => {
                const carrossel = document.getElementById("carrossel");
                // Limpa o carrossel antes de adicionar novas imagens
                carrossel.innerHTML = '';

                // Itera sobre cada usuário e cria um elemento de imagem
                data.forEach(usuario => {
                    if (usuario.imagem) { // Verifica se a imagem existe
                        const imagemDiv = document.createElement("div");
                        imagemDiv.classList.add("imagem");
                        const img = document.createElement("img");
                        img.src = usuario.imagem; // Adiciona o link da imagem
                        img.alt = `imagem de ${usuario.nome}`; // Acessibilidade
                        img.dataset.usuario = JSON.stringify(usuario); // Armazena os dados do usuário na imagem
                        imagemDiv.appendChild(img);
                        carrossel.appendChild(imagemDiv);

                        // Adiciona evento de clique na imagem
                        img.addEventListener("click", function() {
                            abrirImagemSidebar(usuario);
                        });
                    }
                });
            })
            .catch(error => {
                console.error(error.message);
            });
    }

    // Chama a função para carregar as imagens ao iniciar a página
    carregarImagens();
});

// Função para abrir a sidebar com a imagem e as informações do usuário
function abrirImagemSidebar(usuario) {
    // Preenche a sidebar com os dados do usuário
    document.getElementById("imagem-modal").src = usuario.imagem;
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("telefone").value = usuario.telefone;
    document.getElementById("endereco").value = usuario.endereco;
    document.getElementById("representante").value = usuario.representante;
    document.getElementById("descricao").value = usuario.descricao || ''; // Se descrição existir

    // Mostra a sidebar
    document.getElementById("imagem-sidebar").style.display = "block";
}

// Função para fechar a sidebar
function fecharImagemSidebar() {
    document.getElementById("imagem-sidebar").style.display = "none";
}
