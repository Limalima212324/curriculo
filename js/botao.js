const botao = document.getElementById('trocar-tema'); // corresponde ao botão
botao.addEventListener('click', function() { // aqui captura o click
    // Troca a classe 'tema-escuro' no body
    document.body.classList.toggle('tema-escuro');
    /* aqui ele pensa da seguinte forma, olha
    vai ver se o body tem a classe tema-escuro
    se tiver blz remove se nao tiver blz adiciona */
});
