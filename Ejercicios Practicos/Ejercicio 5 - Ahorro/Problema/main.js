//Escribe aquí tú código
function ahorro(){
	var ahorro_actual=0;
	for(var i=1;i<=12;i++){
		var mes = parseInt(prompt("Ingresa el ahorro del mes "+i+" : "));
		var ahorro_actual = ahorro_actual + mes;
		alert("Tu ahorro acumulado por "+i+"meses es de S/."+ahorro_actual+" monto de ahorro del presente mes fue de: S/."+mes);
	}
	return ahorro_actual;
}
alert("Felicidades tu ahorro del año es de  S/:"+ahorro());