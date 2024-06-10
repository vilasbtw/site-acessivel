var darkModeOn = false;
const body = document.body;
var header = document.getElementsByClassName("menu-paginas-links");
var footer = document.getElementsByClassName("rodape");

function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "yellow";
  
  header[0].style.backgroundColor = "black";

  document.getElementById("menuImg").style.backgroundColor = "white";
  
  let menuItems = document.querySelectorAll('.menu-paginas-links a'); 
  console.log(menuItems);
  menuItems.forEach(item => {
    item.style.color = "yellow"; 
  });
  
  footer[0].style.backgroundColor = "black";
  footer[0].style.color = "yellow";
  
  darkModeOn = true;
}

function lightMode() {
  body.style.backgroundColor = "";
  body.style.color = "";
  header[0].style.backgroundColor = "";
  let menuItems = document.querySelectorAll('.menu-paginas-links a'); 
  console.log(menuItems);
  menuItems.forEach(item => {
    item.style.color = ""; 
  });
  footer[0].style.backgroundColor = "";
  footer[0].style.color = "";
  darkModeOn = false;
}

function toggleMode() {
  console.log(darkModeOn);
  if (darkModeOn) {
    lightMode();
  } else {
    darkMode();
  }
}

document.getElementById("ac").addEventListener("click", toggleMode);