//Escribe aquí tú código
function tabla(){
	var nota= parseInt(prompt("Ingrese la nota del alumno 1 : "));
	var i=1;
	var s=nota;
	while (i<40){
		i++;
		var nota1= parseInt(prompt("Ingrese la nota del alumno "+i+":"));
		s=s+nota1;
		if (nota>nota1){
			nota=nota1;
		}
		console.log(s,nota,i);
	}
	var pf=s/40;
	alert("nota mínima"+nota+" promedio es: "+pf);
}

tabla();