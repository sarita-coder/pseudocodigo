//Escribe aquí tú código
function suma(){
	var suma=0;
	for (i=1; i<=10; i++){
		var number=prompt("Ingrese número "+i+": ");
		suma=suma+parseInt(number);
	}

	alert("La suma de los números ingresados es: "+ suma);
}

suma();