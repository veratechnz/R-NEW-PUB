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


//Member Sub Interaction
  function openSub(){
        // if else for removing the box shadow with speed
          $('#memberSubNavB').slideDown('linear');
          $('#memberSubNav').addClass('no-shadow');
          return;
       
        // if else ends
  }

  function closeSub(){
            $('#memberSubNavB').slideUp('linear');
            $('#memberSubNav').removeClass('no-shadow');
            return;
  }

  function hoverSubNav(){
    //Open the subNav
    $('#membershipSub').mouseenter(function(){
      console.log('1');
      openSub(); 
      unHoverSubNav();
    }); 
  }

  function unHoverSubNav(){
      $('#membershipSub').mouseleave(function(){
          //Tiny setTimeout milisecond interval to combat IE and Firefox bug.
        setTimeout(function() {         
          if ($('#memberSubNavB:hover').length > 0) {
              isMemberSubNavB();
            } else if ($('#membershipSub:hover').length > 0){
              console.log('4');
              return;
            } else {
              setTimeout(function(){
                console.log('2');
                closeSub();  
              }, 300);  
            }}, 
            //Tiny milisecond interval to combat IE and Firefox bug. 
            500);
      });

            //Function to check once hover state is on MemberSubNavB
              function isMemberSubNavB(){
                  $('#memberSubNavB').mouseleave(function(){
                    if ($('#membershipSub:hover').length > 0) {
                      return;
                    } else {
                    setTimeout(function(){
                      console.log('3');
                      closeSub();
                      return;
                    }, 300);
                    }
                  });
              }
  }







}); //selfie END