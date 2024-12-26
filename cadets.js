let cadetsData = [];

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
    
    cadets.forEach(cadet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cadet.name}</td>
            <td>${cadet.unit}</td>
            <td>${cadet.contingent}</td>
        `;
        tbody.appendChild(row);
    });
}

function searchCadets() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredCadets = cadetsData.filter(cadet => 
        cadet.name.toLowerCase().includes(searchTerm) ||
        cadet.unit.toLowerCase().includes(searchTerm) ||
        cadet.contingent.toString().includes(searchTerm)
    );
    displayCadets(filteredCadets);
}

// Add search on enter key press
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCadets();
    }
});