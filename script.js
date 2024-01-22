// Definir quantidade máxima de caracteres
const characterLimit = 55;
var tableTitles = document.querySelectorAll('.tableTitle');

tableTitles.forEach(function (title) {
  var textContent = title.textContent;
  if (textContent.length > characterLimit) {
    title.textContent = textContent.substr(0, characterLimit) + '...';
  }
});

// Filtro de posts pelo input de busca
var filterInput = document.getElementById("site-search");
var paginationElement = document.querySelector(".pagination");

filterInput.addEventListener("input", function () {
  var filterValue = filterInput.value.trim().toLowerCase();
  var rowTitleSearch = document.querySelectorAll("tbody tr");

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
});

// Paginação
var table = document.getElementById("tablePostManager");
var rows = table.querySelectorAll("tr");
var filteredRows = Array.from(rows).filter(
  (row) => row.querySelectorAll("td").length > 0
);
var deleteIcon = document.querySelectorAll(".fa-trash-can");

var rowsPerPage = 11;
var currentPage = 1;

document
  .querySelector(".pagination .previous")
  .addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

document
  .querySelector(".pagination .next")
  .addEventListener("click", function () {
    var totalRows = filteredRows.length;
    var totalPages = Math.ceil(totalRows / rowsPerPage);

    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

//deletar
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

//Ordenar linhas
// Selecionar todas as células da coluna "Visits"
var visitsCells = document.querySelectorAll(".visits");

// Extrair os valores e armazená-los em um array
var visitsValues = Array.from(visitsCells).map(function (cell) {
  return cell.textContent;
});

// Imprimir os valores
console.log(visitsValues);


function updatePagination() {
  showRows();
  updatePaginationButtons();
  checkAndTogglePagination();
}

function showRows() {
  filteredRows = Array.from(table.querySelectorAll("tr")).filter(
    (row) => row.querySelectorAll("td").length > 0
  );

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

function createPaginationButtons() {
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
      showRows();
      updatePaginationButtons();
    });
    paginationDiv.insertBefore(button, paginationDiv.querySelector(".next"));
  }
}

function updatePaginationButtons() {
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

function checkAndTogglePagination() {
  var totalRows = filteredRows.length;
  var totalPages = Math.ceil(totalRows / rowsPerPage);

  var paginationElement = document.querySelector(".pagination");

  if (totalPages > 1) {
    paginationElement.style.display = "flex";
  } else {
    paginationElement.style.display = "none";
  }
}

createPaginationButtons();
updatePagination();
checkAndTogglePagination();