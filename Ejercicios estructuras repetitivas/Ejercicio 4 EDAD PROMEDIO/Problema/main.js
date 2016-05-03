//Escribe aquí tú código
function edprom(){
	var cantidad=prompt("Ingrese cuántos alumnos son: ");
	var edprom=0;
	var i=1;
	while (i<= cantidad){
		var number=prompt("Ingrese la edad "+i+": ");
		edprom= edprom+parseInt(number);
		i++;
	}
	var resultado= edprom/cantidad;
	alert("El promedio de las edades es : "+resultado);
}

edprom();