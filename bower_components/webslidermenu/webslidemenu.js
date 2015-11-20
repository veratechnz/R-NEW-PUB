$(function() {
	var items = $('.overlapblackbg, .slideLeft');
	var wsmenucontent = $('.wsmenucontent');
	
	var menuopen = function() {
	$(items).removeClass('menuclose').addClass('menuopen');
						}
	var menuclose = function() { 
	$(items).removeClass('menuopen').addClass('menuclose');
	}

	//Initiator for menuopen
	$('#navToggle').on('click', function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
		else {$(menuopen)}
	});
	wsmenucontent.on('click', function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
	});
	
	$('#navToggle,.overlapblackbg').on('click', function(){
	$('.wsmenucontainer').toggleClass( "mrginleft" );
	});

	$('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	
	$('.wsmenu-list li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
		
	$('.wsmenu-mobile').on('click', function(){
		$('.wsmenu-list').slideToggle('slow');
	});


	//Mobile Menu Arrow targeting. 
	function menuMobilePublic(){
		$('.wsmenu-arrow').on('click', function(e){
				e.preventDefault();
				//grabs inital clicked target element(arrow icon)
				var homeInit = $(e.target);
				//grabs list parent of target arrow icon	
				var homeBase = homeInit.closest('li');
				//Traverses down the DOM to first child .wsmenu-submenu
			 	homeBase.children('.wsmenu-submenu').slideToggle('slow');
			 	$('.wsmenu-click').children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
			});
	}
	
	menuMobilePublic();

});