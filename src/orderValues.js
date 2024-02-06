export function sortRows(config) {
    let ascending = true;
    
    var sortBy = (criteria) => {
        let visitRowPairs = [];
        
        config.rows.forEach(row => {
            let visitElement = row.querySelector('.visits');
            let visitValue = parseInt(visitElement.textContent);
            visitRowPairs.push({ visit: visitValue, row: row });
        });

        visitRowPairs.sort((a, b) => {
            if (ascending) {
                return a.visit - b.visit;
            } else {
                return b.visit - a.visit;
            }
        });

        config.tableBody.innerHTML = '';

        visitRowPairs.forEach(pair => {
            config.tableBody.appendChild(pair.row);
        });

        config.filteredRows = visitRowPairs.map(pair => pair.row);
    }

    var columns = document.getElementById("sortVisits");

    columns.addEventListener("click", (event) => {
        var columnTitle = event.target.textContent;
        sortBy(columnTitle);
        ascending = !ascending;
        config.showRows(config);
    })
}
