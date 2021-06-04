var intentos;
var numeroIngresado;
var numeroSecreto;

var entrada = document.getElementById("entradaDelUsuario");
var cuadroAzul = document.getElementById("resultado");
var cuadroRojo = document.getElementById("contadorIntentos");
var genio = document.getElementById("imagenGenio");
var boton = document.getElementById("botonAdivinar");

intentos = 0;
numeroSecreto = Math.floor( Math.random() * 100 ) + 1;
entrada.maxlength = 2;

function adivinar ()
{
	genio.src = "img/desafio.png";
	numeroIngresado = parseInt(entrada.value);
	entrada.value = "";

		if ( isNaN( numeroIngresado ) ) // PUSO CUALQUIER COSA
		{
			cuadroAzul.innerText = "Eso no es un número";
		}
		else if (numeroSecreto == numeroIngresado)  // ADIVINO
		{
			boton.disabled = true;
			entrada.disabled = true;
			genio.src = "img/triste.png";
			cuadroAzul.innerText = ("Me ganaste ! El numero era: " + numeroSecreto);
			cuadroRojo.innerText = ("Adivinaste en " + (intentos) +" intentos.");
		}
			else // MOSTRAR AUMENTO DE INTENTOS
			{
				intentos = intentos + 1;				

				if (numeroSecreto > numeroIngresado )
				{
					cuadroAzul.innerText = ("No, es un número más alto");
				} 
				else 
				{
					cuadroAzul.innerText = ("No es por ahi, es un número más bajo");
				}
			}
		}
	
	if (tiempo == 0) // SE QUEDO SIN INTENTOS
	{
		cuadroRojo.innerText = ("Te quedaste sin tiempo");
		perder();
	}


function perder()
{
	genio.src = "img/feliz.png";
	cuadroAzul.innerText = ("Te gané ! El numero era: " + numeroSecreto);
	cuadroRojo.innerText = ("Te quedaste sin intentos");
}