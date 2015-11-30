// Custom JS File
$(function() {

	if (document.documentElement.clientWidth < 1050) {

		$(window).ready(function(){

			$(document).one('mousemove', function(e){
			    menuHelper();
			});

			$(window).on("touchstart", function(ev) {
				menuHelper();
			});

			function menuHelper(){
				$('#navToggle').tooltip('show');
					setTimeout(finishTooltip, 6000)
				$('#navToggle').on('click', function(){
					finishTooltip();
				});
			}

			function finishTooltip(){
				$('#navToggle').tooltip('hide');
			}

		});
	
	}


	// https://responsivedesign.is/develop/javascript/conditionally-load-javascript-based-on-media-query

}); //selfie ENDs