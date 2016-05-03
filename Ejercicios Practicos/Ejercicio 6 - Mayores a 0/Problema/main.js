//Escribe aquí tú código

function mayores_a_0(cantidad){
	var c=0;
	for(var i=1;i<=cantidad;i++){
		var numero=parseInt(prompt("Ingrese el número "+i+" para ser clasificado: "));
		if (numero>0) {
			c++;
		}
	}
	return c;
}
var cantidad=parseInt(prompt("Ingrese la cantidad de números a calcular: "));
var positivo=mayores_a_0(cantidad);
var negativo=cantidad - positivo;
alert("El total de números mayores a 0 es de: "+positivo+" .El total de números menores igual a 0 es de: "+negativo);
