// Botão de troca de tema
const botao = document.getElementById('trocar-tema'); // Seleciona o botão com o ID 'trocar-tema'
if (botao) {
    botao.addEventListener('click', function() { // Adiciona um "ouvinte" de evento para o clique no botão
        document.body.classList.toggle('tema-escuro'); // Alterna a classe 'tema-escuro' no <body> para trocar o tema
    });
}

// Botão do Portfólio
const abrirPortfolio = document.getElementById("portfolio"); // Seleciona o link/botão com o ID 'portfolio'

if (abrirPortfolio) {
    abrirPortfolio.addEventListener("click", function (event) { // Adiciona um "ouvinte" de evento para o clique no botão do portfólio
        event.preventDefault(); // Impede que o link/botão execute seu comportamento padrão (como navegar para outra página)

        // Abre uma nova janela (pop-up) para exibir o portfólio
        const novaJanela = window.open("", "Portilofio", "width=900,height=700");

        // Escreve todo o conteúdo HTML da galeria de certificados na nova janela
        novaJanela.document.write(` 
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Portfólio Certificados</title>
                <style>
                    /* --- ESTILOS GERAIS --- */

                    body {
                        font-family: Arial, sans-serif; /* Fonte limpa e legível */
                        text-align: center; /* Centraliza o texto */
                        background-color: #f9f9f9; /* Cor de fundo clara */
                        margin: 0; /* Remove margens padrão */
                        padding: 20px; /* Espaçamento interno */
                        box-sizing: border-box; /* Inclui padding e border na largura/altura total */
                        overflow-y: scroll; /* Permite rolagem vertical se houver muitos certificados */ 
                    }

                    h1 {
                        margin-bottom: 30px; /* Espaçamento abaixo do título */
                        color: #333; /* Cor do texto do título */
                    }

                    /* --- ESTILOS DA GALERIA --- */
                    .galeria { 
                        display: flex; /* Habilita o Flexbox para alinhamento e distribuição */ 
                        flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
                        gap: 25px; /* Espaçamento entre os itens da galeria */ 
                        justify-content: center; /* Centraliza os itens horizontalmente */
                        padding: 10px; /* Espaçamento interno da galeria */
                    }
                    
                    /* Contêiner para definir o tamanho FIXO para todos os certificados */
                    .certificado-item {
                        /* Dimensões uniformes: Todos os cards terão este tamanho */
                        width: 320px; 
                        height: 250px; 
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        overflow: hidden; /* Garante que nada 'saia' do contêiner */
                        transition: transform 0.3s, box-shadow 0.3s;
                        display: flex; 
                        flex-direction: column; /* Organiza a imagem e o texto verticalmente */
                        align-items: center;
                        background-color: #fff; 
                        border: 1px black solid 
                    }

                    /* Efeito de hover (passar o mouse) no card */
                    .certificado-item:hover {
                        transform: translateY(-5px); /* Move o card levemente para cima */
                        box-shadow: 0 8px 15px rgba(0,0,0,0.3); /* Aumenta a sombra */
                    }

                    /* Ajusta a imagem dentro do contêiner FIXO */
                    .certificado-item img {
                        width: 100%; /* Ocupa 100% da largura do contêiner */
                        height: 80%; /* Ocupa 80% da altura total do contêiner, deixando 20% para a descrição */
                        object-fit: cover; 
                        /* 'cover' faz a imagem preencher o espaço inteiro, cortando as bordas se a proporção for diferente. 
                           Isso força todas a terem a mesma dimensão visual. */
                        border-radius: 10px 10px 0 0; /* Arredonda só os cantos superiores */
                    }
                    
                    /* Estilo para o parágrafo de descrição */
                    .p {
                        font-size: 16px;
                        color: #333;
                        font-weight: bold;
                        padding: 5px 10px;
                        margin: auto 0 0 0; /* Alinha o texto na parte de baixo do contêiner */
                        height: 20%; /* Ocupa os 20% restantes da altura */
                        display: flex;
                        align-items: center; /* Centraliza o texto verticalmente */
                        justify-content: center; /* Centraliza o texto horizontalmente */
                        text-align: center;
                    }
                    
                    /* --- AQUI IRIA A MEDIA QUERY SIMPLIFICADA (para celular), se você quisesse --- */
                    
                </style>
            </head>
            <body>
                <h1>Portfólio Certificados</h1>
                <div class="galeria">

                    <div class="certificado-item">
                        <img src="cursos/diopro.jpg" alt="Certificado Dio Pro">
                        <p>Dio Pro</p>
                    </div>

                    <div class="certificado-item">
                        <img src="cursos/diopro1.jpg" alt="Certificado Ri Happy Front-end do Zero">
                        <p>Ri Happy - Front-end do Zero</p>
                    </div>

                    <div class="certificado-item">
                        <img src="cursos/diopro2.jpg" alt="Certificado Ri Happy Bootcamp">
                        <p>Ri Happy - Bootcamp (DB e Estrutura)</p>
                    </div>
                    
                    <div class="certificado-item">
                        <img src="cursos/rihappy1.jpg" alt="Certificado Ri Happy Bootcamp">
                        <p>Ri Happy - Bootcamp (Front-end)</p>
                    </div>
                        
                    
                </div> </body>
            </html>
        `);
    });
}