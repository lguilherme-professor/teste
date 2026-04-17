// Função para simular o agendamento
function abrirModal() {
    alert("Redirecionando para o nosso WhatsApp de agendamento...");
    // Aqui você poderia usar: window.location.href = "https://wa.me";
}

// Manipulação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = this.querySelectorAll('input')[0].value;
    
    if(nome) {
        alert(`Obrigado, ${nome}! Recebemos sua mensagem e entraremos em contato em breve.`);
        this.reset(); // Limpa o formulário
    }
});

// Efeito de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
