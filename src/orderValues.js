// Adiciona evento de clique ao ícone de classificação
const sortIcon = document.querySelectorAll(".fa-sort");
let sortDirection = 'asc'; // Estado inicial: ordenação crescente

sortIcon.forEach(icon => {
    icon.addEventListener("click", function () {
        const columnIndex = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);

        // Obtém os valores de visitas da coluna clicada
        const visitsValues = Array.from(document.querySelectorAll(`.visits`)).map(cell => parseInt(cell.textContent));

        // Ordena as linhas com base nos valores de visitas e na direção da ordenação
        const sortedRows = Array.from(filteredRows).sort((a, b) => {
            const aValue = parseInt(a.children[columnIndex].textContent);
            const bValue = parseInt(b.children[columnIndex].textContent);

            if (sortDirection === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });

        // Atualiza as linhas na tabela com as linhas ordenadas
        table.querySelector("tbody").innerHTML = "";
        sortedRows.forEach(row => {
            table.querySelector("tbody").appendChild(row);
        });

        // Alterna a direção da ordenação para o próximo clique
        sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
    });
});
