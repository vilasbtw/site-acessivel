var darkModeOn = false;
var fontSizeBig = false;
const body = document.body;
var footer = document.getElementsByClassName("rodape");
var textElements = document.querySelectorAll("body, body *:not(script):not(style):not(header ul):not(iframe)");
var telInput = document.getElementById('tel');



function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "yellow";

  // DEIXA A IMAGEM COM FUNDO BRANCO PARA CONTINUAR APARECENDO
  document.getElementById("menuImg").style.backgroundColor = "white";

  footer[0].style.color = "yellow";
  
  darkModeOn = true;
}

function lightMode() {
  body.style.backgroundColor = "";
  body.style.color = "";
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


  function formataCampo(campo, Mascara, evento) { 
    var boleanoMascara; 
    
    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace( exp, "" ); 

    var posicaoCampo = 0;    
    var NovoValorCampo="";
    var TamanhoMascara = campoSoNumeros.length;; 
    
    if (Digitato != 8) {
            for(i=0; i<= TamanhoMascara; i++) { 
                    boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                            || (Mascara.charAt(i) == "/")) 
                    boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
                                                            || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
                    if (boleanoMascara) { 
                            NovoValorCampo += Mascara.charAt(i); 
                              TamanhoMascara++;
                    }else { 
                            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
                            posicaoCampo++; 
                      }              
              }      
            campo.value = NovoValorCampo;
              return true; 
    }else { 
            return true; 
    }
  }

    function mascaraInteiro(){
      if (event.keyCode < 48 || event.keyCode > 57){
              event.returnValue = false;
              return false;
      }
      return true;
}

function mascaraPhone(editPhone){
  if(mascaraInteiro(editPhone)==false){
  event.returnValue = false;
}       
return formataCampo(editPhone, '(00)0000-0000', event);
}


document.getElementById("ac").addEventListener("click", toggleDarkMode);
document.getElementById("af").addEventListener("click", toggleFontSize);