// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");

    // Adiciona evento de envio do formulário
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede envio real

            // Captura os valores dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Verifica se todos os campos estão preenchidos
            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Validação simples de formato de e-mail
            const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
            if (!emailValido) {
                alert("Digite um e-mail válido.");
                return;
            }

            // Exibe mensagem de sucesso e limpa o formulário
            alert("Obrigada por entrar em contato! Retornarei em breve.");
            form.reset();
        });
    }
});
