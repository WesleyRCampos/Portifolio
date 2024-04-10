document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("financiamento-form");
    const displayContainer = document.getElementById("financiamento-display-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
      
        const emprestimo = parseFloat(document.getElementById("financiamento-preco").value);
        const valorParcelas = parseInt(document.getElementById("financiamento-parcela").value);
        
        let parcelasEIndices = ""; // Variável para armazenar os valores das parcelas e índices

        for (let i = 1; i <= valorParcelas; i++) {
            let parcela = emprestimo / i;
            parcelasEIndices += `Parcela ${i}: ${parcela} R$ <br>- Pagamento `;
            
            let j = 0;
            while (j < i) {
                parcelasEIndices += `${j + 1}, `;
                j++;
            }
            parcelasEIndices = parcelasEIndices.slice(0, -2); // Remover a última vírgula e espaço
            parcelasEIndices += `<br>`;
        }

        if (emprestimo && valorParcelas) {
            addFinanciamento(emprestimo, valorParcelas, parcelasEIndices);
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    function addFinanciamento(emprestimo, valorParcelas, parcelasEIndices) {
        const financiamentoGrupo = document.createElement("div");
        financiamentoGrupo.classList.add("financiamento-grupo");
        financiamentoGrupo.innerHTML = `
            <h3>Valor do Produto: ${emprestimo} R$</h3>
            <h3>Quantidade de Parcelas: ${valorParcelas} X</h3>
            <br>
            <h3>Parcelas e Pagamentos:</h3>
            <div>${parcelasEIndices}</div>

            <br>
        `;
        displayContainer.appendChild(financiamentoGrupo);
    }
});

