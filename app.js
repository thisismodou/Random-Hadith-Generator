let header = document.querySelector('#header');
let hadith = document.querySelector('#hadith-text');
let book = document.querySelector('#book');
let button = document.querySelector('button');

// Load Hadith Data from external JSON file 
function loadHadith() {
    let hadithText = JSON.parse(request.responseText);

    let randomHadith = Math.floor(Math.random() * hadithText.ahadith.length);
    header.innerHTML = hadithText.ahadith[randomHadith].header;
    hadith.innerHTML = hadithText.ahadith[randomHadith].hadith_english;
    book.innerHTML = hadithText.ahadith[randomHadith].book;
}

// Request Hadith Data from external JSON file
let request = new XMLHttpRequest();
request.open('GET', 'ahadith.json');

request.addEventListener('load', loadHadith);

request.send();

// Get a random hadith when button is clicked
function loadHadithOnButtonClick() {
    loadHadith();
}

// Get a random hadith when spacebar is pressed
function loadHadithOnSpacebarPress(e) {
    if (e.keyCode === 32) {
        loadHadith();
    }
}

button.addEventListener('click', loadHadithOnButtonClick);
window.addEventListener('keyup', loadHadithOnSpacebarPress);