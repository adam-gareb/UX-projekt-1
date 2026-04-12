let popup = document.getElementById("confirmation-popup");
let overlay = document.getElementById("overlay");

function openPopup(){
    popup.style.visibility = 'visible';
    overlay.style.display = 'block';
}

function closePopup(){
    popup.style.visibility = 'hidden';
    overlay.style.display = 'none';
}