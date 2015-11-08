// Custom JS File
$(function() {

    //Initialiaze all functions
    function init(){
        parallaxGo();
        layoutMarginTop();
     }

    init();

    //Parallax imagery plugin
    function parallaxGo(){
      $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }

    // function layoutMarginTop(){
    //     if ($('div.member-nav').length) {
    //         alert('on page');
    //       $('body').css( "padding-top", "165px" );
    //   } 
    // }


}); //selfie ENDs