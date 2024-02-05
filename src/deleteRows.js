export function deleteRows(config) {
    const {
        deleteIcon,
        filteredRows,
        totalRows,
        totalPages,
        rowsPerPage,
        currentPage,
        showRows,
        updatePaginationButtons,
        checkAndTogglePagination
    } = config;

    config.deleteIcon.forEach(function (remove) {
        remove.addEventListener('click', function (e) {
            const target = e.target;
            const confirmDelete = confirm('Tem certeza que quer deletar esse post?');

            if (confirmDelete) {
                const row = target.closest('tr');
                const index = config.filteredRows.indexOf(row);
                config.filteredRows.splice(index, 1);

                config.totalRows = config.filteredRows.length;
                config.totalPages = Math.ceil(config.totalRows / config.rowsPerPage);

                config.currentPage = Math.min(config.currentPage, config.totalPages);

                row.remove();

                config.showRows(config);
                config.updatePaginationButtons(config);
                config.checkAndTogglePagination(config);
            }
        });
    });
}
