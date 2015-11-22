/*------------------------------------------------------------------------

//GENERAL FUNCTONS ///////////////////////////////////////////////////////

-------------------------------------------------------------------------*/

$(document).ready(function(){
						   
	
	/*vars used throughout*/
	var toggleMenu =$('.mobileMenuToggle'),			//Mobile menu ref.
	    menuLink=$('ul.navigation li'),
		lightboxTransition = 'fade',				//Fancybox transition type
	 	overlayOpacity =0.8,						//Fancybox overlay opacity
	 	overlayColor = '#000',						//Fancybox overlay color	
	 	videoWidth = 663,							//Fancybox video width
	 	videoHeight = 374;							//Fancybox video height
		lazyload = true;							//Whether to use lazy load or not


	
	//MOBILE MENU ---------------------------------------------------------------------------/


	/* Clone navigation for mobile */
	
	$('#header-inner header nav').clone().addClass('mobile-nav').appendTo('#header-inner header').find('.navigation').addClass('mobile-navigation');
	
	/* Use mobile navigation on iPad Landscape */
	
	if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i)){
		$('#header-inner').addClass('is_tablet');
		$('#header-inner .mobile-nav').css('display','block');
		$('#header-inner ul.navigation, #header-inner ul.mobile-navigation').css('display','none');
		$('#header-inner .mobileMenuToggle').css('display','block');
	}

	$('.mobileMenuToggle').on('click', function() {
		if($(this).hasClass('open')) {
			$('ul.mobile-navigation').slideUp('normal','easeInOutQuint');
			$(this).removeClass('open');
		} else {
			$('ul.mobile-navigation').slideDown('normal','easeInOutQuint');
			$(this).addClass('open');
		}
		return false;
	});
	
	//SUB MENU ------------------------------------------------------------------------------/
	

	
	menuLink.on({
							 
		mouseenter: function () {
			
			if($(this).children('ul').length && $(window).width() > 767){
				
				$(this).children('ul').css({display:'block',opacity:0,top:'43px'}).stop().animate({opacity:1,top:'45px'},400);
				
			}

		}, 
	
		 mouseleave: function () {
			 
			if($(this).children('ul').length  && $(window).width() > 767){
				
				$(this).children('ul').stop().animate({opacity:0,top:'43px'},400,function(){
																					  
					
					$(this).hide();
					
					
				});
				
			}
		}
		
	});
				

	//LIGHTBOX SPECIFIC ---------------------------------------------------------------------/

	/*lightbox-img
	-------------------------------*/
	
	$('a.lightbox').fancybox({
										   
			'transitionIn'		: lightboxTransition,
			'transitionOut'		: lightboxTransition,
			'titlePosition' 	: 'over',
			'padding'			: '0',																		
			'overlayOpacity'    : overlayOpacity,
			'overlayColor'      : overlayColor,
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {  
						
		
			var obj = currentArray[ currentIndex ] //get current image
			var target = $(obj).parent();		   //get its container	
		
		
			//CASE 1: thumb has associated html content
			if($(target).next().hasClass('fancybox-html')){
					
					
				//check if stack order should be displayed
									
				if ($(target).next().length && $(obj).attr('rel')){
										
						return  '<span id="fancybox-title-over">' + '<div class="fancybox-num"> Image:'+(currentIndex + 1) + ' / ' + currentArray.length+'</div>'+($(target).next().html()) + '</span>';
										
				}else {
											
						return  '<span id="fancybox-title-over">' + ($(target).next().html()) + '</span>';
										
				}
									
								
			//CASE 2:  thumb is a part of a group and has a title only
			} else if($(obj).attr('rel') && $(obj).attr('title')){
		
					return  '<span id="fancybox-title-over">' + '<div class="fancybox-num"> Image:'+ (currentIndex + 1) + ' / ' + currentArray.length + '</div> '+ (title.length?''+title:'') + '</span>';
									
								
			//CASE 3: thumb has no info but belongs to group
			} else if($(obj).attr('rel')) {
								
					return  '<span id="fancybox-title-over">' + '<div class="fancybox-num" style="margin-bottom:0px"> Image:'+(currentIndex + 1) + ' / ' + currentArray.length+'</div>'+'</span>';
								
								
			//CASE 4: thumb has a title only
			} else if($(obj).attr('title')) {
								
				//if image is not associated with group, hide image numbering
				return  '<span id="fancybox-title-over">' +(title.length ?''+title :'') + '</span>';
									
								
				//CASE 5: no info & does not belong to group
				}else{
									
				// hide title overlay
				$('#fancybox-title-over').hide();
									
				}
							
			},
						
						
			//animate image info on complete
			'onComplete':function(){
						
				//check for smallest breakpoints		
				if($(window).width()<=767){
	
			
					$('.fancybox-title-over').css({display:'none'});
					
				}else{
				
					$('.fancybox-title-over').hide().fadeIn('slow');
				
				}
						
			}
						
			});
	
	
	/*lightbox-media
	-------------------------------*/
	
	$('a.media').fancybox({
								   
        'transitionIn'        : lightboxTransition,
        'transitionOut'       : lightboxTransition,
		'padding'			  : '0',	
		'titlePosition'		  : 'outside',
		'width'			      : videoWidth,
		'height'			  : videoHeight,
		'overlayOpacity'      : overlayOpacity,
		'overlayColor'        : overlayColor,
        'autoscale'           : false,
        'type'                : 'iframe',
		'swf'           	  : {
		'wmode'               : 'transparent',
		'allowfullscreen'  	: 'true'},
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {  
						
		
			var obj = currentArray[ currentIndex ] //get current image
			var target = $(obj).parent();		   //get its container	
		
			if($(target).next().hasClass('fancybox-html')){
					
	
				return  '<span>' + ($(target).next().html()) + '</span>';
						
			
			};
		},
		
		//animate image info on complete
		'onComplete':function(){
						
				//check for smallest breakpoints		
				if($(window).width()<=767){
			
					$('.fancybox-title-outside').css({display:'none'});
					
				}else{
				
					$('.fancybox-title-outside').hide().fadeIn('slow');
					
				}
						
			}

       }); 
	
	
	
});