//Escribe aquí tú código
function tabla(){
	var tabla= parseInt(prompt("Ingrese un número a multiplicar:"));
	var i=0;
	while (i<=12){
		var resultado = tabla*i;
		document.write("\n" +tabla+ " x " +i+ " es: " +resultado);
		i++;
	}
}

tabla();