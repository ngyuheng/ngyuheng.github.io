let readMore = "Read More";
let readLess = "Read Less";

try {
    var gallery = document.querySelector('.gallery-view');
    gallery.innerHTML = '<img src="/src/img/null.png" alt="Gallery image">';
} catch (error) {
    console.log("No gallery found");
}

var year = 2021;
var imageIndex = 0;

function showLanguages() {
    document.querySelector(".lang-dropdown").classList.toggle("show");

    console.log("Showing languages");

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.lang-button') && !event.target.matches('.lang-dropdown') && !event.target.matches('.lang') && document.querySelector('.lang-dropdown').classList.contains('show')) {
            console.log("Closing languages");
            const dropdowns = document.getElementsByClassName("lang-dropdown");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

async function changeChinese() {

    localStorage.setItem("language", "zh");

    // change readMore and readLess to Chinese
    readMore = "更多";
    readLess = "更少";

    // read json file in src/locale/zh.json

    const translations = await fetch('/src/locale/zh.json');
    const translationsJson = await translations.json();
    console.log(translationsJson);
    const texts = translationsJson.texts;
    console.log(texts);

    texts.forEach(entry => {
        const id = entry.id;
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = entry.text;
        }
    });

    // loop through all elements in class abstractButton, and change text to more/less
    const abstractButtons = document.getElementsByClassName("abstractButton");

    for (let i = 0; i < abstractButtons.length; i++) {
        const button = abstractButtons[i];
        console.log(button);
        console.log(button.style);
        if (button.classList.contains("readLess")) {
            console.log("Changing to readLess");
            button.innerHTML = "<p><u>" + readLess + "</u></p>";
            console.log(button.innerHTML);
        } else {
            button.innerHTML = "<p><u>" + readMore + "</u></p>";
        }
    }

    // Update the HTML <html> lang attribute for accessibility
    document.documentElement.lang = "zh";
}

async function changeEnglish() {

    localStorage.setItem("language", "en");

    // change readMore and readLess to English
    readMore = "Read More";
    readLess = "Read Less";

    // read json file in src/locale/en.json

    const translations = await fetch('/src/locale/en.json');
    const translationsJson = await translations.json();
    console.log(translationsJson);
    const texts = translationsJson.texts;
    console.log(texts);

    texts.forEach(entry => {
        const id = entry.id;
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = entry.text;
        }
    });

    // loop through all elements in class abstractButton, and change text to more/less
    const abstractButtons = document.getElementsByClassName("abstractButton");

    for (let i = 0; i < abstractButtons.length; i++) {
        const button = abstractButtons[i];
        console.log(button);
        console.log(button.style);
        if (button.classList.contains("readLess")) {
            console.log("Changing to readLess");
            button.innerHTML = "<p><u>" + readLess + "</u></p>";
            console.log(button.innerHTML);
        } else {
            button.innerHTML = "<p><u>" + readMore + "</u></p>";
        }
    }
}

async function changeGerman() {
    localStorage.setItem("language", "de");

    // change readMore and readLess to English
    readMore = "Mehr lesen";
    readLess = "Weniger lesen";

    // read json file in src/locale/en.json

    const translations = await fetch('/src/locale/de.json');
    const translationsJson = await translations.json();
    console.log(translationsJson);
    const texts = translationsJson.texts;
    console.log(texts);

    texts.forEach(entry => {
        const id = entry.id;
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = entry.text;
        }
    });

    // loop through all elements in class abstractButton, and change text to more/less
    const abstractButtons = document.getElementsByClassName("abstractButton");

    for (let i = 0; i < abstractButtons.length; i++) {
        const button = abstractButtons[i];
        console.log(button);
        console.log(button.style);
        if (button.classList.contains("readLess")) {
            console.log("Changing to readLess");
            button.innerHTML = "<p><u>" + readLess + "</u></p>";
            console.log(button.innerHTML);
        } else {
            button.innerHTML = "<p><u>" + readMore + "</u></p>";
        }
    }
}

function changeLanguage(language) {
    switch (language) {
        case "zh":
            changeChinese();
            break;
        case "en":
            changeEnglish();
            break;
        case "de":
            changeGerman();
            break;
        default:
            changeEnglish();
    }
}

function addCat() {
    console.log("Moving cat");
    const header = document.getElementsByTagName("header")[0];

    // if exists, remove .cat-animation class from header
    if (header.classList.contains("cat-animation")) {
        header.classList.remove("cat-animation");
        console.log("Removing cat");
    }

    void header.offsetWidth; // trigger reflow

    // add .cat-animation class to header
    header.classList.add("cat-animation");

}

function showOverlay() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // Calculate the width of the scrollbar
    document.getElementsByTagName("body")[0].style.paddingRight = scrollbarWidth + "px";
    document.getElementsByClassName("overlay")[0].style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.height = "100%";
}

function hideOverlay() {
    document.getElementsByTagName("body")[0].style.paddingRight = "0";
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementsByTagName("body")[0].style.height = "auto";
}

function showImage(event) {
    console.log("Showing image");
    console.log(event);
    const image = document.getElementById(event);
    const imageSrc = image.src;
    const overlayImage = document.getElementsByClassName("overlay-image")[0];
    overlayImage.src = imageSrc;
    showOverlay();
}

function showAbstract(source) {
    // parse source string to get the project number
    const projectType = source.split("-").slice(0, 1)[0];
    const projectNumber = source.split("-").slice(1, 2)[0];
    const projectText = document.getElementById(projectType + "-" + projectNumber + "-abstract");

    // get button element
    const button = document.getElementById(source);

    if (projectText.style.display === "block") {
        projectText.style.display = "none";
        button.innerHTML = "<p><u>" + readMore + "</u></p>";
        // add readLess class to button
        button.classList.remove("readLess");
    } else {
        projectText.style.display = "block";
        button.innerHTML = "<p><u>" + readLess + "</u></p>";
        button.classList.add("readLess");
    }
}

function changeTheme() {
    // check if dark-theme is set
    if (!document.documentElement.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark-theme");
        document.getElementById("theme-icon").src = "/src/icons/light-mode.svg";
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark-theme");
        document.getElementById("theme-icon").src = "/src/icons/dark-mode.svg";
    }
}

function prevGallery() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = 0;
    }
    showGallery();
}

async function nextGallery() {
    imageIndex++;

    const jsonDir = await fetch('/src/img/galleryImages.json');
    const imagesJson = await jsonDir.json();
    let imageFiles = imagesJson.galleryImages;
    let maxLength = imageFiles[year].length;

    if (imageIndex > maxLength - 1) {
        imageIndex = maxLength - 1;
    }
    showGallery();
}

async function showGallery() {
    // get images from src/img/{year} folder
    var images = [];
    // append all the file paths to the images array after reading the directory
    const jsonDir = await fetch('/src/img/galleryImages.json');
    const imagesJson = await jsonDir.json();

    let imageYear = year;
    // read json
    let imageFiles = imagesJson.galleryImages;

    images = imageFiles[year];

    console.log(images.length);

    var gallery = document.querySelector('.gallery-view');
    if (images.length === 0) {
        gallery.innerHTML = '<img src="/src/img/null.png" alt="Gallery image">';
    } else {
        gallery.innerHTML = '<img src="/src/img/' + year + '/' + images[imageIndex] + '" alt="Gallery image"' + ">"; //' onclick="showImage(this.id)" id="research-1-banner"' + '>';
    }
}

function updateGalleryYear(source) {
    year = source.split("-").slice(1, 2)[0];

    const galleryYear = document.getElementById("gallery-year");
    galleryYear.innerHTML = year;

    var gallery = document.querySelector('.gallery-view');
    imageIndex = 0;
    showGallery();
}

// check if localStorage has language key, then populate the page with the correct language
if (localStorage.getItem("language")) {
    changeLanguage(localStorage.getItem("language"));
} else {
    changeLanguage("en"); // default to English
}

// check if localStorage has theme key, then populate the page with the correct theme
if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-theme");
        document.getElementById("theme-icon").src = "/src/icons/light-mode.svg";
    }
}

// check if page is interactives, then temporarily set to light theme
if (window.location.pathname.includes("interactives")) {
    document.documentElement.classList.remove("dark-theme");
}

if (window.location.pathname.includes("more")) {

    let abstracts = document.getElementsByClassName("project-abstract");
    for (let i = 0; i < abstracts.length; i++) {
        abstracts[i].style.display = "block";
    }

    let readMoreButtons = document.getElementsByClassName("abstractButton");
    console.log(readMoreButtons);
    for (let i = 0; i < readMoreButtons.length; i++) {
        readMoreButtons[i].classList.add("readLess");
        readMoreButtons[i].innerHTML = "<p><u>" + readLess + "</u></p>";
        console.log(readMoreButtons[i]);
    }
}