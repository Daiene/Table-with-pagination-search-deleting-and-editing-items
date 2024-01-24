export function updatePagination(filteredRows, currentPage, rowsPerPage, updatePaginationButtons, checkAndTogglePagination) {
    showRows(filteredRows, currentPage, rowsPerPage);
    updatePaginationButtons(filteredRows, rowsPerPage, currentPage); // Ajuste na ordem dos argumentos
    checkAndTogglePagination(filteredRows, rowsPerPage);
}

export function createPaginationButtons(filteredRows, rowsPerPage, currentPage, updatePaginationButtons) {
    var totalRows = filteredRows.length;
    var totalPages = Math.ceil(totalRows / rowsPerPage);

    var paginationDiv = document.querySelector(".pagination");

    for (var i = 1; i <= totalPages; i++) {
        var button = document.createElement("button");
        button.classList.add("pag");
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.innerText = i;
        button.addEventListener("click", function () {
            currentPage = parseInt(this.innerText);
            showRows(filteredRows, currentPage, rowsPerPage);
            updatePaginationButtons();
        });
        paginationDiv.insertBefore(button, paginationDiv.querySelector(".next"));
    }
}

export function updatePaginationButtons(filteredRows, rowsPerPage, currentPage) {
    var buttons = document.querySelectorAll(".pagination .pag");
    var totalPages = Math.ceil(filteredRows.length / rowsPerPage);

    buttons.forEach(function (button) {
        var pageNumber = parseInt(button.innerText);
        if (pageNumber <= totalPages) {
            button.style.display = "";

            if (pageNumber === currentPage) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        } else {
            button.style.display = "none";
        }
    });
}

export function checkAndTogglePagination(filteredRows, rowsPerPage) {
    var totalRows = filteredRows.length;
    var totalPages = Math.ceil(totalRows / rowsPerPage);

    var paginationElement = document.querySelector(".pagination");

    if (totalPages > 1) {
        paginationElement.style.display = "flex";
    } else {
        paginationElement.style.display = "none";
    }
}
