//
// /* |=======================| */
// /* |  ZADANIE 1: Podstawy  | */
// /* |=======================| */
//

var numberA = 1; // definiujemy zmienną o nazwie "liczbaA" i wartości 1
var numberB = 2; // zwróć uwagę, że zmienną musimy najpierw (raz) zadeklarować słowem var
var textA = 'Cześć!'; // teksty zawsze zamykamy w cudzysłowach

var divDemo = document.getElementById('basics-demo');

divDemo.innerHTML = 'To jest demo skryptu JS.';

divDemo.innerHTML += '<br>I jeszcze jedno demo.';

divDemo.innerHTML += '<br>Liczba: ' + numberA + ', tekst: ' + textA;

var addText = function(textToAdd){
	var targetDiv = document.getElementById('basics-demo');
	targetDiv.innerHTML += '<br>' + textToAdd;
};


addText('To jest demo naszej pierwszej funkcji!');


var buttonHello = document.getElementById('say-hello');

var savedName;
var userName = false;

var sayHello = function(event){

	event.preventDefault();

	if(userName == false) {
		savedName = prompt("Jak masz na imię?");
		userName = true;
	}

	addText('Cześć ' + savedName + '! Miło Cię poznać!');

};


buttonHello.addEventListener('click', sayHello);
