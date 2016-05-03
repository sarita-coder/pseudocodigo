//Escribe aquí tú código
function sucesion_fibonaci(numero) {
	// body...
	var a=-1;
	var b=1;
	
	var resultado = '';
	for(var i=1;i<=numero;i++){
		var c;
		c = a + b;
		a = b;
		b = c;
		resultado += c + " ";
	}
	return resultado;
}
var numero = parseInt(prompt("Ingrese la cantidad de numeros: "));
alert(sucesion_fibonaci(numero));

