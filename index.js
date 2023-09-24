            const Caixadetexto = document.querySelector("#Caixa-de-texto");
            Caixadetexto.addEventListener("submit", adicionaDiv);

            const rolagem = document.querySelector('#Caixa-de-menssagens');
            
            rolagem.scrollTop = rolagem.scrollHeight;


            function adicionaDiv(event) {
                event.preventDefault();
            
                
                if (Caixadetexto !== " ") {

                const messagem = document.querySelector("#envia-menssagem").value;
                const novaDiv = document.createElement('div');
                novaDiv.innerHTML = `<div class="menssagem-item-menssagem-user">
                    <div class="titulo-menssagem"><strong>Você diz:</strong></div>
                    <div class="conteudo-menssagem">${messagem}</div>
                </div>`;
                rolagem.appendChild(novaDiv);
                 }
                Caixadetexto.reset();

                rolagem.scrollTop = rolagem.scrollHeight;
             }
         