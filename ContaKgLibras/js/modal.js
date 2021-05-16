var modal = "";
var span = document.getElementsByClassName("close")[0];

function abrirModal(idModal) {
	modal = document.getElementById(idModal);
	modal.style.display = "block";
	
}

span.onclick = function() {
  modal.style.display = "none";
}

//Fechar o modal ao clicar fora
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}