// Garante que o script só rode após o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {

    // 1. Atualiza o ano no rodapé automaticamente
    const anoSpan = document.getElementById("ano");
    if (anoSpan) {
        anoSpan.textContent = new Date().getFullYear();
    }

    // 2. Lógica para o cabeçalho e animações de scroll
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    const handleScroll = () => {
        // Adiciona uma classe ao header quando a página é rolada
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSection = '';

        // Animação de fade-in para as seções e identifica a seção atual
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
                section.classList.add('visible');
            }
        });

        // Adiciona a classe 'active' ao link de navegação correspondente
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Executa a função uma vez no carregamento para o caso da página carregar no meio
    handleScroll();

});

