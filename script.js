document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailValido) {
                alert("Digite um e-mail válido.");
                return;
            }
            alert("Obrigada por entrar em contato! Retornarei em breve.");
            form.reset();
        });
    }
});