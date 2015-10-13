// Custom JS File

$(function() {

    //Initialiaze all functions
    function init(){
        superFishNav();
        parallaxGo();
        subNavMember();
     }

    init();


    //Public Website Black Navigation 
     function superFishNav(){
    	$(document).ready(function() {
    		$('ul.sf-menu').superfish({
    			delay:       600,                             // one second delay on mouseout
    			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
    			speed:       200,                          // faster animation speed                          
    		  cssArrows:   false                            // disable generation of arrow mark-up
        });
    	});
     }

    //Parallax imagery plugin
    function parallaxGo(){
      $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }

    //Member Sub Nav B Animation
    function subNavMember() {
      $('#mainLogo').click(function(event) {
        event.stopPropagation();
        $('.member-sub-nav-b').slideToggle(400, 'linear');
      });

      // Hide SubNav menu if click happens outside logo and any SubNav icon
       $(document).click(function() {
         $('.member-sub-nav-b').slideUp(400, 'linear');
       });
    }


});