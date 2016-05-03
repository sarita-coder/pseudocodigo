//Escribe aquí tú código
function suma(){
	var suma=0;
	var i=1;
	while (i<=10){
		var number=prompt("Ingrese número "+i+": ");
		suma=suma+parseInt(number);
		i++;
	}

	alert("La suma de los números ingresados es: "+ suma);
}

suma();