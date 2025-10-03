// const botao = document.getElementById('trocar-tema'); // corresponde ao botão
// botao.addEventListener('click', function() { // aqui captura o click
//     // Troca a classe 'tema-escuro' no body
//     document.body.classList.toggle('tema-escuro');
//     /* aqui ele pensa da seguinte forma, olha
//     vai ver se o body tem a classe tema-escuro
//     se tiver blz remove se nao tiver blz adiciona */
// });


// Botão de troca de tema
const botao = document.getElementById('trocar-tema'); // corresponde ao botão "Trocar Tema"
botao.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');
    // Alterna a classe 'tema-escuro' no body
});

// Botão do Portfólio
const abrirPortfolio = document.getElementById("portfolio"); // corrigido: id igual ao HTML

abrirPortfolio.addEventListener("click", function (event) {
    event.preventDefault(); // impede o comportamento padrão do botão

    // Abre uma nova janela para o portfólio
    const novaJanela = window.open("", "Portilofio", "width=800,height=600");

    // Escreve o conteúdo HTML da galeria na nova janela
    novaJanela.document.write(` 
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Portfólio</title>
            <style>
                body {
                    font-family: times new roman, serif;
                    text-align: center;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                    overflow-y: scroll;
                
                }
                h1 {
                    margin-bottom: 20px;
                }
                .galeria {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    justify-content: center;
                    padding: 10px;
                }
                .galeria img {
                    width: 220px;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                    transition: transform 0.3s;
                }
                .galeria img:hover {
                    transform: scale(1.1);
                }

                .p {
                    font-size: 16px;
                    color: #555;
                    margin-top: 5px;}
                    
            </style>
        </head>
        <body>
            <h1>Portfólio Certificados </h1> <!-- Corrigido: título exibido -->
            <div class="galeria">
                <img src="cursos/diopro1.jpg" alt="Imagem 1">
                <p><b> Ri Happy - Front-end do Zero</b></p> <!-- Descrição da imagem --><b>

                
                <img src="cursos/rihappy1.jpg" alt="Imagem 1">
                <p><b> Ri Happy -Bootcamp</b></p> <!-- Descrição da imagem --><b>
                
                
            </div>
        </body>
        </html>
    `);
});

// Comentários:
// - Corrigido o id do botão do portfólio para "abrir-portfolio" (igual ao HTML).
// - Adicionado título "Portfólio" na nova janela.
// - Comentários explicativos em cada parte alterada.