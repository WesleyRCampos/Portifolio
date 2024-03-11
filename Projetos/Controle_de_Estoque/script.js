document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("product-form");
    const displayContainer = document.getElementById("product-display-container");
    const printButton = document.getElementById("print-button")
    const filterButton = document.getElementById("filter-button");
    const resetButton = document.getElementById("reset-button");


    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const productName = document.getElementById("product-name").value;
      const barCode = document.getElementById("bar-code").value;
      const entryDate = document.getElementById("entry-date").value;
      const exitDate = document.getElementById("exit-date").value;
      const shelfNumber = document.getElementById("shelf-number").value;
      const shelfHeight = document.getElementById("shelf-height").value;
  
      if (productName && barCode && entryDate && exitDate && shelfNumber && shelfHeight ) {
        addProduct(productName, barCode, entryDate, exitDate, shelfNumber, shelfHeight);
        form.reset();
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });

    printButton.addEventListener("click", function() {
        printProducts();
      });
  
    function addProduct(productName, barCode, entryDate, exitDate, shelfNumber, shelfHeight) {
      const productGroup = document.createElement("div");
      productGroup.classList.add("product-group");
      productGroup.innerHTML = `
        <h3>Produto: ${productName}</h3>
        <p>Codigo de Barras: ${barCode}</p>
        <p>Data de Entrada: ${entryDate}</p>
        <p>Data de Validade: ${exitDate}</p>
        <p>Numero do Corredor: ${shelfNumber}</p>
        <p>Altura de Armazenamento: ${shelfHeight}</p>
        <br>
        <button class="delete-button">Excluir</button>
      `;
      displayContainer.appendChild(productGroup);

      const deleteButton = productGroup.querySelector(".delete-button");

      deleteButton.addEventListener("click", function() {
        // Implemente a lógica de exclusão aqui
        productGroup.remove();
      });
       
    }
    function printProducts() {
        const productList = document.querySelectorAll(".product-group");
        let printableContent = "";
    
        productList.forEach(product => {
            const deleteButton = product.querySelector(".delete-button");
            deleteButton.style.display = "none"; // Oculta o botão de excluir temporariamente
            printableContent += product.innerText + "\n\n";
          });
    
        // Simulando a impressão abrindo uma nova janela de impressão
        const printWindow = window.open("", "_blank");
        printWindow.document.open();
        printWindow.document.write(`<pre>${printableContent}</pre>`);
        printWindow.document.close();
        printWindow.print();
      }

    
  //logica abaca aqui

  filterButton.addEventListener("click", function() {
    filterProducts();
  });

  resetButton.addEventListener("click", function() {
    resetFilter();
  });


  function filterProducts() {
    const filterType = document.getElementById("filter-type").value;
    const filterValue = document.getElementById("filter-value").value.toLowerCase();

    const productList = document.querySelectorAll(".product-group");

    productList.forEach(product => {
      let match = false;
      let valueToMatch = "";

      switch (filterType) {
        case "product-name":
          valueToMatch = product.querySelector("h3").textContent.toLowerCase();
          break;
        case "bar-code":
          valueToMatch = product.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
          break;
        case "exit-date":
          valueToMatch = product.querySelector("p:nth-of-type(3)").textContent.toLowerCase();
          break;
        case "shelf-number":
          valueToMatch = product.querySelector("p:nth-of-type(4)").textContent.toLowerCase();
          break;
        default:
          break;
      }

      match = valueToMatch.includes(filterValue);

      if (match) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
    
filterButton.addEventListener("click", function() {
filterProducts();
});

resetButton.addEventListener("click", function() {
resetFilter();
});
}


  function resetFilter() {
    document.getElementById("filter-type").selectedIndex = 0;
    document.getElementById("filter-value").value = "";

    const productList = document.querySelectorAll(".product-group");

    productList.forEach(product => {
      product.style.display = "block";
    });
  }
});
