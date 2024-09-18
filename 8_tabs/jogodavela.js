
function tabe(evento, id) {
    var i, conteudo, MTClick;
  
    conteudo = document.getElementsByClassName("conteudo");
    for (i = 0; i < conteudo.length; i++) {
      conteudo[i].style.display = "none";
    }

    MTClick = document.getElementsByClassName("MTClick");
    for (i = 0; i < MTClick.length; i++) {
      MTClick[i].className = MTClick[i].className.replace(" active", "");
    }
  
    document.getElementById(id).style.display = "block";
      
  }

 function load() {
  document.getElementById("Jogo").style.display = "block";
 }
 