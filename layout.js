const main = document.querySelector(".pdfs");

fetch("/pdfs").then(response => response.json()).then(response => console.log(response));

// main.appendChild
