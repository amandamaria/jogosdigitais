$(document).ready(function() {
	adicionarConteudo("modulos/inicio.html");			
});

function adicionarConteudo(pagina) {
	$("#divConteudo").load(pagina);
}

function adicionarMenu() {
	if (typeof($("#divMenu")) !== "undefined") {
		$("#divMenu").load("modulos/menu/menu.html");
	}
}