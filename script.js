const carparkLocations = {
    "A": "https://maps.app.goo.gl/689bvTyzUZN6N8YJ7","https://maps.app.goo.gl/hCM5KhiDMtH93qdj7",
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
    "Leaders Square": "https://maps.app.goo.gl/VwWLogWQUdrxKC1u8"
};

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
        alert('Please select a school!');
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
        const carpark_link = carparkLocations[storedSchool];
        const leadersSquare = carparkLocations["Leaders Square"];
        document.getElementById('displayValue').innerHTML = `
            <p>Carpark ${storedSchool}: <a href=${carpark_link}>View Carpark Location</a></p>
            <p><a href=${leadersSquare}>Specialist Cadet Course Graduation Parade Square Location</a></p>
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
