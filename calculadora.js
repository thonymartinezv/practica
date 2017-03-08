var cifra="";
	var num1="";
	var operador="";
	var num2="0";
	
	//función para escribir con el teclado
	function imprimir(num){
		var midisplay=document.getElementById("display");
		midisplay.value=cifra+num;
		cifra=midisplay.value;
	}
	//Esta función borra el ultimo número escrito
	function borrar(){
		var midisplay=document.getElementById("display");
		cifra=midisplay.value;
		midisplay.value=cifra.substr(0,cifra.length-1);
	}
	//Esta función reinicia o reestablece los valores de la calculadora
	function borrar_todo(){
		var midisplay=document.getElementById("display");
		var midisplay2=document.getElementById("display2");
		var imprimir_signo=document.getElementById("operador");
		midisplay.value="";
		midisplay2.value="";
		imprimir_signo.value="";
		cifra="";
		num1="";
		operador="";
		num2="0";
	}
	//esta función se encarga de el calculo y sera llamada en otras funciones que la necesiten
	function resultado(){
		var midisplay=document.getElementById("display");
		var midisplay2=document.getElementById("display2");
		num2=midisplay.value;
		if((num2==""&&operador=="+")||(num2==""&&operador=="-")){num2="0"}
		else if((num2==""&&operador=="*")||(num2==""&&operador=="/")){num2="1"}else{}
		switch(operador){
			case "+":
				if(num1==""){num1="0"}else{}
				num1= parseFloat(num1)+parseFloat(num2);
			break;
			case "-":
				if(num1==""){num1=(parseFloat(num2)*2)}else{}
				num1= parseFloat(num1)-parseFloat(num2);
			break;
			case "*":
				if(num1==""){num1="1"}else{}
				num1= parseFloat(num1)*parseFloat(num2);
			break;
			case "/":
				if(num1==""){num1=(parseFloat(num2)*parseFloat(num2))}else{}
				num1= parseFloat(num1)/parseFloat(num2);
			break;
			default:
				alert("inserte una operación válida");
			break;
		}
		midisplay2.value=num1;
		midisplay.value="";
		cifra="";
	}
	//Esta se ejecuta al pulsar el signo igual
	function resultado_final(){
		resultado();
	}
	//Esta función se ejecutara cada vez que el usuario seleccione un signo de operación
	function operacion(signo){
		var midisplay=document.getElementById("display");
		var imprimir_signo=document.getElementById("operador");
		if(operador==""){operador=signo;}else{}
		resultado();
		operador=signo;
		imprimir_signo.value=operador;
		
	}
	//esta función no tiene importancia
	function prueba(){
		alert(operador);
	}
