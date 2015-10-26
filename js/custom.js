// Custom JS File

$(function() {

    //Initialiaze all functions
    function init(){
        superFishNav();
        parallaxGo();
        // subNavMember();
        hoverSubNav();
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








}); //selfie ENDs