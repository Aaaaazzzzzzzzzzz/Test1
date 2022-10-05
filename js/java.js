function openFrame1() {
    document.getElementById("Overlay1").style.display = "block";
}

function closeFrame1() {
    document.getElementById("Overlay1").style.display = "none";
}
function openSearch1() {
    document.getElementById("Overlay3").style.display = "block";
    document.getElementById("Overlay2").style.display = "block";
}

function closeSearch1() {
    document.getElementById("Overlay3").style.display = "none";
    document.getElementById("Overlay2").style.display = "none";
}
function closeForms() {
    document.getElementById("Lay").style.display = "none";
}

function openForms() {
    document.getElementById("Lay").style.display = "block";
}

function openHelp() {
    document.getElementById("Typehelp").style.display = "block";
}
function closeHelp() {
    document.getElementById("Typehelp").style.display = "none";
}
function getValue() {
    var isChecked = document.getElementById("ur_or_fiz").checked;

    if (isChecked) {
        document.getElementById("ur_osoba").style.display = "none";
        document.getElementById("fiz_osoba").style.display = "block";
        console.log("Input is checked");
    } else {
        document.getElementById("ur_osoba").style.display = "block";
        document.getElementById("fiz_osoba").style.display = "none";
        console.log("Input is NOT checked");
    }
}
function openPay() {
    document.getElementById("Do").style.display = "none";
    document.getElementById("Pay").style.display = "block";
    document.getElementById("Clothes").style.display = "none";
    document.getElementById("Heart").style.display = "none";
}
function openDo() {
    document.getElementById("Do").style.display = "block";
    document.getElementById("Pay").style.display = "none";
    document.getElementById("Clothes").style.display = "none";
    document.getElementById("Heart").style.display = "none";
}
function openClothes() {
    document.getElementById("Do").style.display = "none";
    document.getElementById("Pay").style.display = "none";
    document.getElementById("Clothes").style.display = "block";
    document.getElementById("Heart").style.display = "none";
}
function openHeart() {
    document.getElementById("Do").style.display = "none";
    document.getElementById("Pay").style.display = "none";
    document.getElementById("Clothes").style.display = "none";
    document.getElementById("Heart").style.display = "block";
}
function openPay_second() {
    document.getElementById("Do_second").style.display = "none";
    document.getElementById("Pay_second").style.display = "block";
    document.getElementById("Clothes_second").style.display = "none";
    document.getElementById("Heart_second").style.display = "none";
}
function openDo_second() {
    document.getElementById("Do_second").style.display = "block";
    document.getElementById("Pay_second").style.display = "none";
    document.getElementById("Clothes_second").style.display = "none";
    document.getElementById("Heart_second").style.display = "none";
}
function openClothes_second() {
    document.getElementById("Do_second").style.display = "none";
    document.getElementById("Pay_second").style.display = "none";
    document.getElementById("Clothes_second").style.display = "block";
    document.getElementById("Heart_second").style.display = "none";
}
function openHeart_second() {
    document.getElementById("Do_second").style.display = "none";
    document.getElementById("Pay_second").style.display = "none";
    document.getElementById("Clothes_second").style.display = "none";
    document.getElementById("Heart_second").style.display = "block";
}



