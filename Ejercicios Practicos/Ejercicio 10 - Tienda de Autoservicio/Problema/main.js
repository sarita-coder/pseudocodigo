//Escribe aquí tú código
function ventas(){
	var ciudad=parseInt(prompt("Ingresa el número de sucursales:"));
	var total=0;
	var result = "";
	for(var i=1;i<=ciudad;i++){
		var porCiudad = 0;
		var tienda=parseInt(prompt("Ingresa el número de tiendas en la sucursal "+i+":"));
		for(var j=1;j<=tienda;j++){
			var empleados=parseInt(prompt("Ingresa el número de empleados que trabajan en la tienda "+j+":"));
			var suma=0;	
			for(var k=1;k<=empleados;k++){
				var vta_Empleado=parseInt(prompt("Ingresa la venta del empleado "+k+" de la tienda "+j+" y sucursal "+i));
				suma+=vta_Empleado;
				porCiudad+= suma;
				total+= suma;
			}
			result += "Venta Total: "+total+ ", Venta Total por la "+i+" ciudad: " +porCiudad+", Total de ventas por la tienda "+j+" : "+suma +". \n";
		}
	}
	return result;
}
alert("Informe del día: \n"+ventas());
