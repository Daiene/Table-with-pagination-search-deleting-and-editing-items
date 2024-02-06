import { tableRows } from "./tableRows.js";
import { showRows, characters, inputSearch } from "./tableUtils.js";
import { createPaginationButtons, updatePaginationButtons, prevButton, nextButton, checkAndTogglePagination } from "./pagination.js";
import { deleteRows } from "./deleteRows.js";
import { sortRows } from "./orderValues.js";

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("tablePostManager").getElementsByTagName('tbody')[0];
    tableRows(tableBody);

    const rowsPerPage = 12;
    const characterLimit = 32;
    let currentPage = 1;
    let rows = tableBody.querySelectorAll('tbody tr');
    let filteredRows = Array.from(rows).filter(row => row.querySelectorAll('td').length > 0);
    let totalRows = filteredRows.length;
    let totalPages = Math.ceil(totalRows / rowsPerPage);
    let paginationElement = document.querySelector(".pagination");
    let deleteIcon = document.querySelectorAll('.fa-trash-can');
    let tableTitles = document.querySelectorAll('.tableTitle');
    let filterInput = document.getElementById('site-search');

    const config = {
        tableBody,
        currentPage,
        rowsPerPage,
        rows,
        filteredRows,
        totalRows,
        totalPages,
        paginationElement,
        deleteIcon,
        showRows,
        updatePaginationButtons,
        checkAndTogglePagination,
        tableTitles,
        characterLimit,
        filterInput
    };

    showRows(config);
    createPaginationButtons(config);
    updatePaginationButtons(config);
    prevButton(config);
    nextButton(config);
    checkAndTogglePagination(config);
    characters(config);
    inputSearch(config);
    deleteRows(config);
    sortRows(config);
});
