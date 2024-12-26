let cadetsData = [];
let currentPage = 1;
const itemsPerPage = 30;

// Fetch and parse the CSV data
fetch('cadet_names.csv')
    .then(response => response.text())
    .then(data => {
        // Parse CSV
        const rows = data.split('\n');
        // Skip header row and empty rows
        cadetsData = rows.slice(1).filter(row => row.trim()).map(row => {
            const [name, unit, contingent] = row.split(',');
            return { name, unit, contingent };
        });
        displayCadets(cadetsData);
    })
    .catch(error => console.error('Error loading cadet data:', error));

function displayCadets(cadets) {
    const tbody = document.getElementById('cadetsTableBody');
    tbody.innerHTML = '';
    
    const totalPages = Math.ceil(cadets.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedCadets = cadets.slice(start, end);
    
    paginatedCadets.forEach(cadet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cadet.name}</td>
            <td style="text-align: center;">${cadet.unit}</td>
            <td style="text-align: center;">${cadet.contingent}</td>
        `;
        tbody.appendChild(row);
    });

    updatePagination(totalPages, cadets.length);
}

function updatePagination(totalPages, totalItems) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('pagination-info');

    const pageInfo = document.createElement('span');
    pageInfo.classList.add('page-info');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages} (${totalItems} items)`;
    infoContainer.appendChild(pageInfo);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&laquo; Previous';
    prevButton.classList.add('pagination-btn');
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            searchCadets();
        }
    };
    buttonContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next &raquo;';
    nextButton.classList.add('pagination-btn');
    nextButton.disabled = currentPage >= totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            searchCadets();
        }
    };
    buttonContainer.appendChild(nextButton);

    paginationContainer.appendChild(infoContainer);
    paginationContainer.appendChild(buttonContainer);
}

function searchCadets() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredCadets = cadetsData.filter(cadet => 
        cadet.name.toLowerCase().includes(searchTerm) ||
        cadet.unit.toLowerCase().includes(searchTerm) ||
        cadet.contingent.toString().includes(searchTerm)
    );

    // Reset to page 1 if current page would be empty
    const totalPages = Math.ceil(filteredCadets.length / itemsPerPage);
    if (currentPage > totalPages) {
        currentPage = 1;
    }

    displayCadets(filteredCadets);
}

// Add search on enter key press
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCadets();
    }
});
