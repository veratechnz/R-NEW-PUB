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


		var magnificGallery = function(){
		    $('.popup-gallery').magnificPopup({
		        delegate: 'a',
		        type: 'image',
		        tLoading: 'Loading image #%curr%...',
		        mainClass: 'mfp-img-mobile',
		        gallery: {
		            enabled: true,
		            navigateByImgClick: true,
		            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		        },
		        image: {
		            tError: '&lt;a href="%url%"&gt;The image #%curr%&lt;/a&gt; could not be loaded.'
		        }
		    });
		}();




}); //selfie ENDs