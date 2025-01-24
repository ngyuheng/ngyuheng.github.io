function showLanguages() {
    document.querySelector(".lang-dropdown").classList.toggle("show");
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
            changeDeutsch();
            break;
        default:
            changeEnglish();
    }
}

function changeEnglish() {
    document.getElementById("construction-msg").innerHTML = "Website is under construction";
}

function changeChinese() {
    document.getElementById("construction-msg").innerHTML = "网站正在建设中";
}

function changeDeutsch() {
    document.getElementById("construction-msg").innerHTML = "Website im Aufbau";
}