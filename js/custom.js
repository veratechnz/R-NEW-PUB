// Custom JS File
$(function() {

	checkFirstVisit();

		//Uses local storage to only trigger navIndicator function on users first visit. 
		function checkFirstVisit(){
			if (!localStorage.reinzCheck) {
			    navIndicator();
			    localStorage.reinzCheck = 'yes';
			}
		}

		function navIndicator(){
			if (document.documentElement.clientWidth < 1050) {
				$(document).one('scroll touchstart', function(e){
				    menuHelper();
				});
			}
		} //navIndicator function ends.

		function menuHelper(){
			$('#navToggle').tooltip('show');
				setTimeout(finishTooltip, 6000);
			$('#navToggle').on('click', function(){
				finishTooltip();
			});
		}

		function finishTooltip(){
			$('#navToggle').tooltip('hide');
		}


}); //selfie ENDs