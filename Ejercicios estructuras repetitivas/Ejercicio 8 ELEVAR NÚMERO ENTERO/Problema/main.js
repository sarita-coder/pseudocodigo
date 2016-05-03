//Escribe aquí tú código
function tabla(){
	var tabla= parseInt(prompt("Ingrese un número para calcular la potencia de 5:"));
	var i=1;
	var p=1;
	while (i<=5){
		p = tabla*p;
		i++;
	}
	alert("potencia de 5 de" +tabla+" es " +p);
}
tabla();

/*var nombre = prompt("Dame tu nombre, HUMANO");
alert("Enserio te llamas "+nombre )*/
