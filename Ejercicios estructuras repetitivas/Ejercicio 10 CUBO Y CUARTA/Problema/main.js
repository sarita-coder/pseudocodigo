//Escribe aquí tú código
function ejercicio10() {
	var num=parseInt(prompt("Ingrese el número: "));
	var e=1;
	var c=1;
	for (var i=1; i<=4; i++){
		c=e;
		e=num*e;
		console.log(c,e);
	}
	alert("El expotencia a la cuarta es : "+e+" al cubo es : "+c);
}
ejercicio10();