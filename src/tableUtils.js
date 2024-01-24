export function limitTitleCharacters(tableTitles, characterLimit) {
    tableTitles.forEach(function (title) {
        var textContent = title.textContent;
        if (textContent.length > characterLimit) {
            title.textContent = textContent.substr(0, characterLimit) + '...';
        }
    });
}

export function showRows(filteredRows, currentPage, rowsPerPage) {
    if (filteredRows.length < (currentPage - 1) * rowsPerPage) {
        currentPage = Math.ceil(filteredRows.length / rowsPerPage);
    }

    var startIndex = (currentPage - 1) * rowsPerPage;
    var endIndex = startIndex + rowsPerPage;

    filteredRows.forEach(function (row, index) {
        if (index >= startIndex && index < endIndex) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

export function filterPostsByTitle(rowTitleSearch, filterValue, paginationElement, updatePagination) {
    rowTitleSearch.forEach((row, index) => {
        var titleValue = row.querySelector(".tableTitle");

        if (titleValue) {
            const titleText = titleValue.textContent.trim().toLowerCase();
            if (titleText.includes(filterValue)) {
                row.style.display = "";
                paginationElement.style.display = "none";
            } else {
                row.style.display = "none";
            }
        }
    });

    if (filterValue === "") {
        updatePagination();
    }
}
