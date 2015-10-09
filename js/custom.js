// Custom JS File

$(function() {

    // Jquery ScrollTo Effect 
     function onePageScroll(){ 
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
     }


    //Public Website Black Navigation 
     function superFishNav(){
    	$(document).ready(function() {
    		$('ul.sf-menu').superfish({
    			delay:       1000,                            // one second delay on mouseout
    			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
    			speed:       'fast',                         // faster animation speed                          // disable generation of arrow mark-up
    		  cssArrows:   false
        });
    	});
     }


     //Member Sub Nav B Animation and Population
     function subNavB(){
      $('#mainLogo').click(function(){

          $('#memberSubNavB').slideDown(200, 'linear');
          $('.col-md-10').animate({'marginTop':'2.5em'}, 200, 'linear');

    });
    }


    function parallaxGo(){
      $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }

    //Initialiaze all functions
    function init(){
        onePageScroll();
        superFishNav();
        subNavB();
        parallaxGo();
     }

    init();
});