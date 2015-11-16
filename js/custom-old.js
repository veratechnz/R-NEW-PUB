// Custom JS File
$(function() {

    //Initialiaze all functions
    function init(){
        parallaxGo();
     }

    init();

    //Parallax imagery plugin
    function parallaxGo(){
      $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }


}); //selfie ENDs