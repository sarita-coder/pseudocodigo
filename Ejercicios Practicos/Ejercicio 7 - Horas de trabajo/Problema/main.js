//Escribe aquí tú código
function calcular_horas(){
	var total_horas=0;
	for(var i=1;i<=6;i++){
		var horas = parseInt(prompt("Ingrese las horas trabajadas el día de hoy:"))
		total_horas=total_horas+horas;
	}
	return total_horas;
}
var sueldo_x_hora=parseInt(prompt("Sueldo por hora es de: "));
var total_horas=calcular_horas();
var salario=total_horas*sueldo_x_hora;
alert("Total de horas trabajadas es: "+total_horas+". Sueldo de la semana es de: "+salario);