export function showRows(config) {
    let startIndex = (config.currentPage - 1) * config.rowsPerPage;
    let endIndex = startIndex + config.rowsPerPage;

    config.filteredRows.forEach(function (row, index) {
        if (index >= startIndex && index < endIndex) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    config.checkAndTogglePagination(config);
}

export function characters(config) {
    if (config.tableTitles) { 
        config.tableTitles.forEach(function (title) {
            const textContent = title.textContent;
            const newTextContent = textContent.substr(0, config.characterLimit) + '...';

            function sizeOfThings() {
                let windowWidth = screen.width;

                if (windowWidth < 992) {
                    if (textContent.length > config.characterLimit) {
                        title.textContent = newTextContent;
                    }
                } else {
                    title.textContent = textContent;
                }
            }

            window.addEventListener('resize', function () {
                sizeOfThings();
            });
        });
    }
}

export function inputSearch(config) {
    config.filterInput.addEventListener('input', function () {
        if (config.filterInput.value !== '') {
            let filterValue = config.filterInput.value.trim().toLowerCase();

            config.rows.forEach((row, index) => {
                const titleCell = row.querySelector('.tableTitle');
                const titleText = titleCell.textContent.trim().toLowerCase();

                if (titleText.includes(filterValue)) {
                    row.style.display = '';
                    config.paginationElement.style.display = "none";
                } else {
                    row.style.display = 'none';
                }
            });
        } else {
            config.showRows(config);
            config.paginationElement.style.display = '';
        }
    });
}
