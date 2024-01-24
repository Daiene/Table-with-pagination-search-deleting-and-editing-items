import { tableContentRows } from "./predefinedList.js";
import { limitTitleCharacters, showRows, filterPostsByTitle } from "./tableUtils.js";
import { updatePagination, createPaginationButtons, updatePaginationButtons, checkAndTogglePagination } from "./pagination.js";
import { deletePost } from "./deleteRows.js";

document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("tablePostManager");
    var rows = table.querySelectorAll("tr");
    var filteredRows = Array.from(rows).filter((row) => row.querySelectorAll("td").length > 0);
    var deleteIcon = document.querySelectorAll(".fa-trash-can");
    var characterLimit = 55;
    var tableTitles = document.querySelectorAll('.tableTitle');
    var filterInput = document.getElementById("site-search");
    var paginationElement = document.querySelector(".pagination");
    var rowTitleSearch = document.querySelectorAll("tbody tr");
    var rowsPerPage = 11;
    var currentPage = 1;

    filterInput.addEventListener("input", function () {
        const filterValue = filterInput.value.trim().toLowerCase();
        filterPostsByTitle(rowTitleSearch, filterValue, paginationElement, updatePagination);
    });

    document.querySelector(".pagination .previous").addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    document.querySelector(".pagination .next").addEventListener("click", function () {
        var totalRows = filteredRows.length;
        var totalPages = Math.ceil(totalRows / rowsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    limitTitleCharacters(tableTitles, characterLimit);
    showRows(filteredRows, currentPage, rowsPerPage);
    updatePagination(filteredRows, currentPage, rowsPerPage, updatePaginationButtons, checkAndTogglePagination);
    createPaginationButtons(filteredRows, rowsPerPage, currentPage, updatePaginationButtons);
    deletePost(deleteIcon, filteredRows, currentPage, rowsPerPage, updatePagination);
    updatePaginationButtons(filteredRows, rowsPerPage, currentPage);
    checkAndTogglePagination(filteredRows, rowsPerPage);
});
