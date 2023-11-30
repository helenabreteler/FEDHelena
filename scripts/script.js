// JavaScript Document
console.log("hi");



var openButton = document.querySelector("header > button");
var deNav = document.querySelector("header nav");


openButton.onclick = openMenu;

function openMenu() {
  deNav.classList.add("open");
}



var sluitButton = document.querySelector("header nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("open");
}


// ***********/////
// zoek
// ******////

var deForm = document.querySelector("header form");

var zoekButton = document.querySelector("header button:nth-of-type(4)");
console.log(zoekButton);
zoekButton.onclick = sluitOpenZoek;

function sluitOpenZoek() {
  deForm.classList.toggle("onderheader");
}