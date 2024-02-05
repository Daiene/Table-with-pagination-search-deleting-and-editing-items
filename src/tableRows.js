import { tableContentRows } from "./predefinedList.js";

export function tableRows(tableBody) {
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

        const data = newRow.querySelector('.data');
        if (data) {
            const currentDate = new Date();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

            data.textContent = currentDate.toLocaleDateString('pt-BR', options) + ' às ' + hours + ':' + minutes;
        }
    }
}
