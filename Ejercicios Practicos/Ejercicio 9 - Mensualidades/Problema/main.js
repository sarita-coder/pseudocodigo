//Escribe aquí tú código
function anualidades(){
	var mensualidad=10;
	alert("Mes 1 pagar $10.00");
	var total=0;
	for(var i=1; i<=20;i++){
		mensualidad=mensualidad*2;
		total=mensualidad+total;
		alert("Mes "+(i+1)+" pagar: $ "+mensualidad+".00")
	}
	alert("Monto total que Usted pagará: $ "+total+".00")
}
anualidades();