
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
});

function myFunction() {
    document.querySelector(".main-container").classList.toggle("dark-theme");
}
