/* |=============================| */
/* |  ZADANIE 3: Scroll do góry  | */
/* |=============================| */

var scrollAnimationTimer;
var scrollAnimationValue;

var startScrollAnimation = function(event){
	event.preventDefault();
	scrollAnimationValue = window.scrollY;
	scrollAnimationTimer = setInterval(scrollAnimationStep, 25);
};


var scrollAnimationStep = function(){
	scrollAnimationValue -= 100;

	// var scrollDemoText = document.getElementById('scroll-demo');
	// scrollDemoText.innerHTML = 'current value: ' + scrollAnimationValue;
	window.scrollTo(0, scrollAnimationValue);

	if(scrollAnimationValue <= 0){
		clearInterval(scrollAnimationTimer);
	}
};


var scrollToTopButtons = document.getElementsByClassName('button-top');
for(var i = 0; i < scrollToTopButtons.length; i++){
	scrollToTopButtons[i].addEventListener('click', startScrollAnimation);
}

/*
Teraz czas na Twoje zadanie, które składa się z dwóch części:
1. Początkową wartość musisz zmienić tak, aby byłą równa wartości window.scrollY,
   która podaje aktualną wartość scrolla.

2. Druga część zadania, to przewijanie strony zamiast wyświetlania aktualnej wartości.
   W tym celu musisz poprawnie wykorzystać funkcję window.scrollTo, której opis
   znajdziesz w dokumentacji:
   https://developer.mozilla.org/pl/docs/Web/API/Window/scrollTo

Powodzenia!
*/
