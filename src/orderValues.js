// export function orderValues(config) {
//     const {
//         sortOrder,
//         updatePagination
        
//     } = config;
    
//     const sortIcon = document.getElementById("sortVisits");

//     sortIcon.addEventListener("click", function () {
//         config.sortOrder = config.sortOrder === "asc" ? "desc" : "asc";

//         sortRows(config);
//         updatePagination(config);
//     });
// }

// export function sortRows(config) {
//     const {
//         sortOrder,
//         filteredRows,
//         showRows,
//         updatePaginationButtons
//     } = config;
    
//     var sortedRows = Array.from(filteredRows);

//     sortedRows.sort(function (rowA, rowB) {
//         var visitsA = parseInt(rowA.querySelector(".visits").textContent);
//         var visitsB = parseInt(rowB.querySelector(".visits").textContent);

//         if (sortOrder === "asc") {
//             return visitsA - visitsB;
//         } else {
//             return visitsB - visitsA;
//         }
//     });

//     config.filteredRows = sortedRows;
    
//     showRows(config);
//     updatePaginationButtons(config);
// }

export function sortRows(config) {
    const { showRows, filteredRows } = config;
    const sortIcon = document.getElementById("sortVisits");

    let ascendingOrder = true;

    sortIcon.addEventListener("click", function () {
        const tableBody = document.getElementById("tablePostManager").getElementsByTagName('tbody')[0];

        const sortedRows = Array.from(config.filteredRows);

        sortedRows.sort((a, b) => {
            const numA = parseInt(a.querySelector('.visits').textContent);
            const numB = parseInt(b.querySelector('.visits').textContent);

            return ascendingOrder ? numA - numB : numB - numA;
        });

        ascendingOrder = !ascendingOrder;

        const fragment = document.createDocumentFragment();
        sortedRows.forEach(row => fragment.appendChild(row));

        tableBody.innerHTML = '';
        tableBody.appendChild(fragment);

        // Exibe as linhas paginadas após a ordenação
        config.showRows(config);
    });
}
