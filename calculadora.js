	var cifra="";//variable que llevara las cifras escritas en cadena
	var num1="";//variable donde se acumulan los resultados
	var operador="";//variable creada para almacenar el signo de la operación ingresado en la calculadora
	var num2="0";//variable que almacena el numero ingresado en la calculadora
	
	//Esta calculadora consta de tres input tipo texto que tienen como id los siguientes:
	//display: input donde se vera cifra numérica ingresada
	//display2:input donde se vera el resultado aculmulado
	//operador:input donde se vera la operacion a realizar

	//función para escribir con el teclado
	function imprimir(num){
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		midisplay.value=cifra+num;
		cifra=midisplay.value;
	}
	//Esta función borra el ultimo número escrito
	function borrar(){
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		cifra=midisplay.value;
		midisplay.value=cifra.substr(0,cifra.length-1);
	}
	//Esta función reinicia o reestablece los valores de la calculadora
	function borrar_todo(){
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		var midisplay2=document.getElementById("display2");//display2:input donde se vera el resultado aculmulado
		var imprimir_signo=document.getElementById("operador");//operador:input donde se vera la operacion a realizar
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
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		var midisplay2=document.getElementById("display2");//display2:input donde se vera el resultado aculmulado
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
		if(num1!=""){alert(num1);}
	}
	//Esta función se ejecutara cada vez que el usuario seleccione un signo de operación donde lo recibira como parametro
	function operacion(signo){
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		var imprimir_signo=document.getElementById("operador");//operador:input donde se vera la operacion a realizar
		if(operador==""){operador=signo;}else{}
		resultado();
		operador=signo;
		imprimir_signo.value=operador;
		
	}
	//esta función no tiene importancia solo es de prueba y se acciona como evento de el boton P
	function prueba(){
		alert(operador);
	}
