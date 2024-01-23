document.addEventListener("DOMContentLoaded", function () {
    const tableContentRows = {
        predefinedListTitle: [
            "I Know Why The Caged Bird Sings by Maya Angelou.",
            "East of Eden by John Steinbeck.",
            "The Sun Also Rises by Ernest Hemingway.",
            "Do Androids Dream of Electric Sheep? by Philip K. Dick.",
            "The Curious Incident of the Dog in the Night-Time by Mark Haddon.",
            "Cloudy with a Chance of Meatballs by Judi Barrett.",
            "Pride and Prejudice and Zombies by Seth Grahame-Smith.",
            "The House of Mirth by Edith Wharton.",
            "Are You There, Vodka? It's Me, Chelsea by Chelsea Handler.",
            "And Then There Were None by Agatha Christie.",
            "Their Eyes Were Watching God by Zora Neale Hurston.",
            "The Devil Wears Prada by Lauren Weisberger.",
            "Brave New World by Aldous Huxley.",
            "Bury My Heart at Wounded Knee by Dee Brown.",
            "The Man Who Was Thursday by G.K. Chesterton.",
            "Love in the Time of Cholera by Gabriel García Márquez.",
            "Buddy Holly Is Alive and Well on Ganymede by Bradley Denton.",
            "Everyone Poops by Taro Gomi.",
            "As I Lay Dying by William Faulkner.",
            "All Quiet on the Western Front by Erich Maria Remarque.",
            "The Particular Sadness of Lemon Cake by Aimee Bender.",
            "And Then There Were None by Agatha Christie.",
            "Fight Club by Chuck Palahniuk.",
            "The Man Who Was Thursday: A Nightmare by G.K. Chesterton.",
            "Hard-Boiled Wonderland and the End of the World by Haruki Murakami.",
            "The Catcher in the Rye by J.D. Salinger.",
            "The Moon Is a Harsh Mistress by Robert A. Heinlein.",
            "The Haunted Vagina by Carlton Mellick III.",
            "Fear and Loathing in Las Vegas by Hunter S. Thompson.",
            "American Psycho by Bret Easton Ellis.",
            "Requiem for a Dream by Hubert Selby Jr.",
            "The Importance of Being Earnest by Oscar Wilde.",
            "The Electric Kool-Aid Acid Test by Tom Wolfe.",
            "Brave New World by Aldous Huxley.",
        ],
        predefinedListData: [
            "January 9th, 2024 at 06:00 p.m.",
            "January 8th, 2024 at 05:00 p.m.",
            "January 8th, 2024 at 04:00 p.m.",
            "January 7th, 2024 at 03:00 p.m.",
            "January 7th, 2024 at 02:00 p.m.",
            "January 6th, 2024 at 01:00 p.m.",
            "January 6th, 2024 at 12:00 p.m.",
            "January 5th, 2024 at 07:00 p.m.",
            "January 5th, 2024 at 06:00 p.m.",
            "January 4th, 2024 at 05:00 p.m.",
            "January 4th, 2024 at 04:00 p.m.",
            "January 3th, 2024 at 03:00 p.m.",
            "January 3th, 2024 at 02:00 p.m.",
            "January 2th, 2024 at 01:00 p.m.",
            "January 2th, 2024 at 12:00 p.m.",
            "January 1th, 2024 at 12:00 p.m.",
            "January 1th, 2024 at 11:00 a.m.",
            "December 30th, 2023 at 06:00 p.m.",
            "December 30th, 2023 at 05:00 p.m.",
            "December 30th, 2023 at 04:00 p.m.",
            "December 29th, 2023 at 03:00 p.m.",
            "December 29th, 2023 at 02:00 p.m.",
            "December 28th, 2023 at 01:00 p.m.",
            "December 28th, 2023 at 12:00 p.m.",
            "December 27th, 2023 at 07:00 p.m.",
            "December 27th, 2023 at 06:00 p.m.",
            "December 27th, 2023 at 05:00 p.m.",
            "December 26th, 2023 at 04:00 p.m.",
            "December 26th, 2023 at 03:00 p.m.",
            "December 26th, 2023 at 02:00 p.m.",
            "December 26th, 2023 at 01:00 p.m.",
            "December 25th, 2023 at 05:00 p.m.",
            "December 25th, 2023 at 04:00 p.m.",
            "December 25th, 2023 at 03:00 p.m.",
        ],
        predefinedListVisits: [
            "200",
            "100",
            "90",
            "80",
            "400",
            "300",
            "200",
            "100",
            "90",
            "80",
            "400",
            "300",
            "200",
            "100",
            "90",
            "80",
            "300",
            "200",
            "100",
            "90",
            "80",
            "400",
            "300",
            "200",
            "100",
            "90",
            "80",
            "400",
            "300",
            "200",
            "100",
            "90",
            "80",
            "300",
        ],
    };

    const tableBody = document.getElementById("tablePostManager").getElementsByTagName('tbody')[0];
    
    for (let index = 0; index < tableContentRows.predefinedListTitle.length; index++) {
        const newRow = tableBody.insertRow(index);

        const columnTitle = newRow.insertCell(0);
        const columnData = newRow.insertCell(1);
        const columnVisits = newRow.insertCell(2);
        const columnPencil = newRow.insertCell(3);
        const columnTrashCan = newRow.insertCell(4);

        columnTitle.className = "tableTitle";
        columnTitle.setAttribute("data-select", "title");
        columnTitle.textContent = tableContentRows.predefinedListTitle[index] || '';

        columnData.className = "data";
        columnData.setAttribute("data-select", "data");
        columnData.textContent = tableContentRows.predefinedListData[index] || '';

        columnVisits.className = "visits";
        columnVisits.setAttribute("data-select", "visits");
        columnVisits.textContent = tableContentRows.predefinedListVisits[index] || '';

        columnPencil.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        columnTrashCan.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    }
});



/*// Definir quantidade máxima de caracteres
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
  checkAndTogglePagination();*/
