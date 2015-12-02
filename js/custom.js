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
			if (document.documentElement.clientWidth < 1440) {
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


		// Possible media Query for mobile and smaller device Detection 
		function mobileChecker(){
		 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 1281 ) {
		 	window.location.replace("/public-home-page");
			}
		}



}); //selfie ENDs