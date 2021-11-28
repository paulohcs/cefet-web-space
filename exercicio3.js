// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botoesExpandir = document.querySelectorAll(".botao-expandir-retrair");

botoesExpandir.forEach(function(e) {
	e.addEventListener('click', function(e) { 
        let botaoClicado = e.currentTarget;
        let pPaiBotao = botaoClicado.parentNode;
        pPaiBotao.classList.toggle("expandido");
        botaoClicado.innerHTML = (pPaiBotao.classList.value=='expandido') ? '-': '+';
    });
});