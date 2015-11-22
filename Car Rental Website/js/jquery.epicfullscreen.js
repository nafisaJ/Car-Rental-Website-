
(function ($) {
	
	
   	$.fn.epicFullscreen = function (options) {
 
 			/*fullscreen img defaults
			-----------------------------*/
			var defaults = {
				
				opacity : 0.4,			//Integer: 0-1
				pattern: true, 			//Boolean: use overlay pattern or not
				background:'#ff5400',	//String: hex value
				delay:100,				//Numeric: delay before fade in
				callback: function(){}	//Callback

				
			};
			
			//overwrite or merge user options
			var options = $.extend({},defaults, options);
			

		   /*internals
			-----------------------------*/
			var	selector = $(this).find('img'),
				winW,
				winH,
				winRatio,
				imgW,
				imgH,
				imgRatio,
				newW,
				newH;
	

			/*check options
			-----------------------------*/
			
			selector.parent().css({background:options.background});
			if(options.pattern==true) selector.parent().append('<div id="epic-overlay"></div>');
			
			
			/*fullscreen/resizing
			-----------------------------*/	
						
			function resize(){
				
				winW	= $(window).width();
				winH	= $(window).height();
				winRatio	= winH / winW;
				imgW	=  selector.width();
				imgH	=  selector.height();
				imgRatio	= imgH / imgW;
							
				if(winRatio > imgRatio){
					
					newH	= winH;
					newW	= winH / imgRatio;
					
				}else{
						
					newH	= winW * imgRatio;
					newW	= winW;
						
				};
					
							
					/*set width, height and position of image*/
					selector.css({width: newW + 'px',height: newH + 'px',left: (winW - newW) / 2 + 'px',top: (winH - newH) / 2 + 'px'});

			};
				
				
			/*window resize action
			-----------------------------*/
			
			$(window).bind('resize',function(){
				
					resize();
				
			});	
			
			//resize();

			/*preload
			-----------------------------*/
			
	        selector.each(function(){
											 
				//create image object
                var img = new Image();
                            
				//store currentSlide image src 
                var path = $(this).attr('src');
                       
                 $(img).load(function(){
									  
						resize();	//call resize
						selector.css({opacity:0,display:'block'}).delay(options.delay).animate({opacity:options.opacity}); //animate
						options.callback.call(this);

                  })
					.attr('src',path)
					.error(function(){
										
							alert('check image path or connection');
							
					 });

             });
			
    };
	
})(jQuery);