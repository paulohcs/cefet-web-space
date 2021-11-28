// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector("#calcular");

botaoCalcular.addEventListener("click", function() {
	let m1 = document.querySelector("#massa1").value;
    let m2 = document.querySelector("#massa2").value;
    let d = document.querySelector("#distancia").value;
    let resultado = document.querySelector("#resultado");

    resultado.value = ((6.67*Math.pow(10,-11)*m1*m2)/Math.pow(d,2))
});