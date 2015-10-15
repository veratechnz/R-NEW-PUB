// Custom JS File

$(function() {

    //Initialiaze all functions
    function init(){
        superFishNav();
        parallaxGo();
        subNavMember();
        hoverSubNav();
        ftrNoWhere(); //To avoid scroll up when clicking menu items in footer
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





    //Testing for toggle of subnav
    function boxShadowCheck(){
        // if else for removing the box shadow with speed
        ($('#memberSubNav').hasClass('no-shadow')) ?
            $('#memberSubNav').toggleClass('no-shadow').promise()
            .done(function(){
            $('#memberSubNavB').slideToggle('linear');
          })
         :
          $('#memberSubNavB').slideToggle('linear', function(){
           $('#memberSubNav').toggleClass('no-shadow');
          });
        // if else ends
    }

    function subNavMember() {
      $('#mainLogo').click(function(event){
        event.stopPropagation();
        event.preventDefault();
        boxShadowCheck();
      });
    }


// Test functions
  function noWhere(element) {
    $(element).click(function(event) {
      event.preventDefault();
    });
  }
  function ftrNoWhere() {
    noWhere('.ftr-menu a');
  }


//Member Sub Nav Test

  function openSub(){
        // if else for removing the box shadow with speed

          $('#memberSubNavB').slideDown('linear');
          $('#memberSubNav').addClass('no-shadow');

        // if else ends
  }


  function closeSub(){
            $('#memberSubNavB').slideUp('linear');
            $('#memberSubNav').removeClass('no-shadow');
  }

    function hoverSubNav(){
      //Open the subNav
      $('#dataSub').mouseenter(function(){
        openSub();
      });
      unHoverSubNav();
    }


  function unHoverSubNav(){
      $('#dataSub').mouseleave(function(){
        if($('#memberSubNavB').is(':hover')) {
              isMemberSubNavB();
            }
            else {
              setTimeout(function(){
                closeSub();
              }, 100);
            }
      });

            function isMemberSubNavB(){
            if($('#memberSubNavB').is(':hover') || $('#dataSub').is(':hover')) {
              return;
              } else {

                $('#memberSubNavB').mouseleave(function(){
                  setTimeout(function(){
                    closeSub();
                  }, 100);
                });

            }

            }

  }





}); //selfie END
