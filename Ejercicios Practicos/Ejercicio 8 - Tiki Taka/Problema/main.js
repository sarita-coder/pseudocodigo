//Escribe aquí tú código
function tiki_taka(){
	var cantidad=parseFloat(prompt("Ingrese el total de ventas"));
	var ventas_1=0;
	var ventas_2=0;
	var ventas_3=0;
	var total1=0;
	var total2=0;
	var total3=0;
	for(var i=1;i<=cantidad;i++){
		var ventas=parseFloat(prompt("Ingrese el monto de la venta"));
			if (ventas>1000) {
				var venta=ventas;
				ventas_1=ventas_1+1;
				total1=total1+venta;
			}
			if (ventas<=1000 && ventas>500) {
				var venta=ventas;
				ventas_2=ventas_2+1;
				total2=total2+venta;
			} else{
				var venta=ventas;
				ventas_3=ventas_3+1;
				total3=total3+venta;
			}
	}
	var resultado=total1+total2+total3;
	alert("Ventas mayores a mil: "+ventas_1+" ventas, monto total: "+total1+" . Ventas < 500 & <= 1000 :"+ventas_2+" ventas, monto total: "+total2+" . Ventas menores a 500: "+ventas_3+" ventas, monto total: "+ total3+". Ventas del día: "+resultado);
}
tiki_taka();
