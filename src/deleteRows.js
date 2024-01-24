export function deletePost(deleteIcon, filteredRows, currentPage, rowsPerPage, updatePagination) {
    deleteIcon.forEach(function (remove) {
        remove.addEventListener("click", function (e) {
            const target = e.target;
            const confirmDelete = confirm("Tem certeza que quer deletar esse post?");

            if (confirmDelete) {
                const row = target.closest("tr");
                const index = filteredRows.indexOf(row);
                filteredRows.splice(index, 1);

                currentPage = Math.ceil((index + 1) / rowsPerPage);
                row.remove();

                updatePagination();
            }
        });
    });
}
