//
// /* |=======================| */
// /* |  ZADANIE 2: Accordion | */
// /* |=======================| */
//

var accordion = function(){

	var accordions = document.getElementsByClassName('accordion-title');

	for(var i = 0; i < accordions.length; i++){

		accordions[i].addEventListener('click', function(){

			var clickedTitle = this;
			clickedTitle.classList.toggle('open');

			var content = clickedTitle.nextElementSibling;

				if (clickedTitle.classList.contains('open')) {
					content.style.display = 'block';

					var openedTitle = document.getElementsByClassName('accordion-title open');
					for (var j = 0; j < openedTitle.length; j++) {
						if (openedTitle[j] !== clickedTitle) {
							openedTitle[j].click();
						}
					}
				} else {
					content.style.display = 'none';
				}
			});
		}
		accordions[0].click();
	}

accordion();
