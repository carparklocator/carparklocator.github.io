const carparkLocations = {
    "A": "https://maps.app.goo.gl/gNHWUmL2YWdjYPtBA",
    "B1": "https://maps.app.goo.gl/jsnq1kouoooWW2dS6",
    "B2": "https://maps.app.goo.gl/mYtD9eR7Cc3p63fW6",
    "C": "https://maps.app.goo.gl/12vxik8dYGHKibr36",
    "D": "https://maps.app.goo.gl/PYEdTyL3V6hrZ2PL8",
    "E": "https://maps.app.goo.gl/dAX6vmtDkabTHG6u7",
    "F": "https://maps.app.goo.gl/DAugXA3Qq1RP6XxEA",
    "H": "https://maps.app.goo.gl/djdMkk7kMjCF2S5u5",
    "I": "https://maps.app.goo.gl/mA6nQ7HoPPEhWmws8",
    "J": "https://maps.app.goo.gl/PupqzjB3XK8a218PA",
    "K": "https://maps.app.goo.gl/ZFKAnnxQZdU7FXzM8",
    "L": "https://maps.app.goo.gl/KF9FQ9PnweGXoyjQ6",
    "M": "https://maps.app.goo.gl/313ZM6fN6ZjceydT9",
    "N": "https://maps.app.goo.gl/jN9JD8hKjvyqMBoFA",
    "G": "https://maps.app.goo.gl/Hs62JFpxhBCa3JKh7",
    "O": "https://maps.app.goo.gl/NDVCuhbRZ5C7c1e58",
    "P": "https://maps.app.goo.gl/HLj7TSkcxmwD3g2Z7",
    "V": "https://maps.app.goo.gl/Lq1zuDnovC252gbP8",
    "Q": "https://maps.app.goo.gl/qDS9jqwvk5L76dWk7",
    "Leaders Square": "https://maps.app.goo.gl/VwWLogWQUdrxKC1u8"
};

const coordinates = {
    "A": `1.334554814921108,103.66886177046631`,
    "B1": `1.3337710603079413, 103.67064068036701`,
    "B2": `1.3346744713952527, 103.67022414233425`,
    "C": `1.3355244960217811, 103.67091778299144`,
    "D": `1.3340264592590654, 103.67119507055219`,
    "E": `1.3322208592580989, 103.67499932944773`,
    "F": `1.3333049296293458, 103.67516804110451`,
    "H": "1.3360264592602051, 103.67402779999996",
    "I": "1.3362506703699626, 103.67102780000005",
    "J": "1.335943729630065, 103.67205492944774",
    "K": "1.3355819592599234, 103.67499999999998",
    "L": "1.33594305926014, 103.67250134110454",
    "M": "1.336278470369963, 103.67352511779096",
    "N": "1.3363590888904837, 103.67577780000002",
    "G": "1.334497196296674, 103.67355630010391",
    "O": "1.335804259260044, 103.67252779999995",
    "P": "1.333608418517624, 103.67297287055223",
    "V": "1.3311651865200362, 103.67336289362099",
    "Q": "1.334527, 103.671412",
    "Leaders Square": "1.3324676145042336, 103.672638233269"
};

function getRouteUrl(from, to) {
    return `https://www.google.com/maps/dir/${coordinates[from]}/${coordinates[to]}`;
}

window.onload = function() {
    const storedSchool = localStorage.getItem('storedSchool');
    if (storedSchool) {
        document.getElementById('schoolSelect').value = storedSchool;
        document.querySelector('#inputCarpark').style.display = "none";
    } else {
        document.querySelector('#findCarpark').style.display = "none";
    }
    retrieveValue();
};

function storeValue() {
    const selectedSchool = document.getElementById('schoolSelect').value;
    if (selectedSchool === '') {
        alert('Please select a carpark!');
        return;
    }
    localStorage.setItem('storedSchool', selectedSchool);
    // alert('School stored successfully!');
    document.querySelector('#saveText').style.display = "block";
    document.querySelector('#inputCarpark').style.display = "none";
    document.querySelector("#findCarpark").style.display = "block";
    retrieveValue();
}

function retrieveValue() {
    const storedSchool = localStorage.getItem('storedSchool');
    if (storedSchool && carparkLocations.hasOwnProperty(storedSchool)) {
        document.getElementById('displayValue').innerHTML = `
            <div class="route-buttons">
                <button onclick="window.open('${getRouteUrl(storedSchool, "Leaders Square")}', '_blank')" class="route-btn">
                    Route: Carpark ${storedSchool} → Leaders Square
                </button>
                <button onclick="window.open('${getRouteUrl("Leaders Square", storedSchool)}', '_blank')" class="route-btn">
                    Route: Leaders Square → Carpark ${storedSchool}
                </button>
            </div>
        `;
        document.getElementById('displayValue').style.display = 'block';
    } else {
        document.getElementById('displayValue').innerHTML = '<p>No school stored yet.</p>';
    }
}

function reset() {
    localStorage.removeItem('storedSchool');
    location.reload();
}
