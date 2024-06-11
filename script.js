var darkModeOn = false;
var fontSizeBig = false;
const body = document.body;
var footer = document.getElementsByClassName("rodape");
var textElements = document.querySelectorAll("body, body *:not(script):not(style):not(header ul):not(iframe)");


function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "yellow";

  // DEIXA A IMAGEM COM FUNDO BRANCO PARA CONTINUAR APARECENDO
  document.getElementById("menuImg").style.backgroundColor = "white";
  
  footer[0].style.backgroundColor = "black";
  footer[0].style.color = "yellow";
  
  darkModeOn = true;
}

function lightMode() {
  body.style.backgroundColor = "";
  body.style.color = "";
  footer[0].style.backgroundColor = "";
  footer[0].style.color = "";
  darkModeOn = false;
}

function toggleDarkMode() {
  console.log(darkModeOn);
  if (darkModeOn) {
    lightMode();
  } else {
    darkMode();
  }
}

function increaseFontSize(){
  document.body.style.fontSize = 'xx-large';
  footer[0].style.fontSize = 'x-large';
  fontSizeBig = true
}

function reduceFontSize(){
  textElements.forEach(element => {
      element.style.fontSize = "";
  });
  fontSizeBig = false;
}

function toggleFontSize(){
  if (fontSizeBig){
    reduceFontSize();
  } else {
    increaseFontSize();
  }
  }


document.getElementById("ac").addEventListener("click", toggleDarkMode);
document.getElementById("af").addEventListener("click", toggleFontSize);