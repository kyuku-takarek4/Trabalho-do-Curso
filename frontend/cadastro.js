document.getElementById('senhaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores das senhas
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Selecionando o elemento onde a mensagem será exibida
    const mensagem = document.getElementById('mensagem');

    // Verificando se as senhas são iguais
    if (senha === confirmarSenha) {
        mensagem.textContent = 'Senhas confirmadas com sucesso!';
        mensagem.style.color = 'green'; // Mensagem de sucesso
        // Aqui você pode prosseguir com o envio do formulário ou outra lógica
    } else {
        mensagem.textContent = 'As senhas não coincidem. Tente novamente.';
        mensagem.style.color = 'red'; // Mensagem de erro
    }
});
