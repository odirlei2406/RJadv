// Abrir formulário de contato
document.querySelectorAll('a[href="#contato"]').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('contactFormModal').style.display = 'flex';
    });
});

// Fechar modal
function closeContactForm() {
    document.getElementById('contactFormModal').style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
    let modal = document.getElementById('contactFormModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Submeter formulário
document.getElementById('quickContactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
    closeContactForm();
});
