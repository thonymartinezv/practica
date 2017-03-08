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
		midisplay.value=cifra+num;//generando la cifra concatenado los numeros ingresados
		cifra=midisplay.value;//Imprimiendo en el input la cifra actual
	}
	//Esta función borra el ultimo número escrito
	function borrar(){
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		cifra=midisplay.value;//se asigna a cifra el valor actual de el input
		midisplay.value=cifra.substr(0,cifra.length-1);//Borrando el último valor de la cifra ingresado
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
		num2=midisplay.value;//se almacena el valor ingresado para realizar la operación
		//los siguientes if son para neutralizar las operaciones carente de numeros ingresados con el objetivo de no alterar el resultado almacendo
		if((num2==""&&operador=="+")||(num2==""&&operador=="-")){num2="0"}//Si el usuario no a ingresado numeros utiliza el elemento neutro de la suma y resta "0"
		else if((num2==""&&operador=="*")||(num2==""&&operador=="/")){num2="1"}else{}//Si el usuario no a ingresado numeros utiliza el elemento neutro de la multiplicación "1"
		//El siguiente switch evalua la operación a realizar
		switch(operador){
				/*Los siguientes if anidados en el switch son para neutralizar operaciones hasta que
			 	  el usuario ingrese almenos dos numeros*/
			case "+":
				//En caso de que no haya resultado almacenado asigname el elemento neutro de la suma
				if(num1==""){num1="0"}else{}
				num1= parseFloat(num1)+parseFloat(num2);//suma
			break;
			case "-":
				//En caso de que no haya resultado almacenado asigname un numero que al restarle el ingresado de igual 
				if(num1==""){num1=(parseFloat(num2)*2)}else{}
				num1= parseFloat(num1)-parseFloat(num2);//resta
			break;
			case "*":
				//En caso de que no haya resultado almacenado asigname el numero neutro de la multiplicación
				if(num1==""){num1="1"}else{}
				num1= parseFloat(num1)*parseFloat(num2);//multiplicación
			break;
			case "/":
				//En caso de que no haya resultado almacenado asigname un numero que al dividirlo entre el ingresado de igual
				if(num1==""){num1=(parseFloat(num2)*parseFloat(num2))}else{}				
				num1= parseFloat(num1)/parseFloat(num2);//división
			break;
			default:
				alert("inserte una operación válida");//En caso de que el operador no haya sido ingresado
			break;
		}
		midisplay2.value=num1;//se imprime el resultado en el input donde se pretende ver
		midisplay.value="";//vaciamos el imput donde se ve la cifra ingresada
		cifra="";//reiniciamos la cifra
	}
	//Esta se ejecuta al pulsar el signo igual
	function resultado_final(){
		resultado();//Se calcula la operación
		//if(num1!=""){alert(num1);}//por si quieren el resultado en una ventana de alerta
	}
	//Esta función se ejecutara cada vez que el usuario seleccione un signo de operación donde lo recibira como parametro
	function operacion(signo){
		var midisplay=document.getElementById("display");//display: input donde se vera cifra numérica ingresada
		var imprimir_signo=document.getElementById("operador");//operador:input donde se vera la operacion a realizar
		if(operador==""){operador=signo;}else{}//Para evitar errores en caso de que no haya signo asignado en el input
		resultado();//Se calcula la operación actual
		operador=signo;//guardando signo de operación
		imprimir_signo.value=operador;//imprimiendo signo de operación en el input asignado
		
	}
	//esta función no tiene importancia solo es de prueba y se acciona como evento de el boton P
	function prueba(){
		alert(operador);
	}
