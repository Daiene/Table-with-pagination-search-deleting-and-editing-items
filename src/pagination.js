export function createPaginationButtons(config) {
    for (var i = 1; i <= config.totalPages; i++) {
        var button = document.createElement('button');
        button.classList.add('pag');
        if (i === config.currentPage) {
            button.classList.add('active');
        }
        button.innerText = i;
        button.addEventListener('click', function () {
            config.currentPage = parseInt(this.innerText);
            config.showRows(config);
            config.updatePaginationButtons(config);
        });
        config.paginationElement.insertBefore(button, config.paginationElement.querySelector('.next'));
    }
}

export function updatePaginationButtons(config) {
    let buttons = document.querySelectorAll('.pagination .pag');
    buttons.forEach(function (button) {
        var pageNumber = parseInt(button.innerText);
        if (pageNumber <= config.totalPages) {
            button.style.display = '';

            if (pageNumber === config.currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            } 
        } else {
            button.style.display = 'none';
        }
    });
}


export function prevButton(config) {
    document.querySelector('.pagination .previous').addEventListener('click', function () {
        if (config.currentPage > 1) {
            config.currentPage--;
            config.showRows(config);
            config.updatePaginationButtons(config);
        }
    });
}

export function nextButton(config) {
    document.querySelector('.pagination .next').addEventListener('click', function () {
        if (config.currentPage < config.totalPages) {
            config.currentPage++;
            config.showRows(config);
            config.updatePaginationButtons(config);
        }
    });
}

export function checkAndTogglePagination(config) {
    if (config.totalPages > 1) {
        config.paginationElement.style.display = "flex";
    } else {
        config.paginationElement.style.display = "none";
    }
}
