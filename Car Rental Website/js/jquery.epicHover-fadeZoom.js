
(function ($) {
	

			$.fn.epicHoverFadeZoom = function (options) {
 
 			
			/*rollover defaults
			-----------------------------*/
			var defaults = {
				
				 overlayColor:'#000',						//Hex: #xxxx
				 fontColor:'#fff',							//Hex: #xxxx
				 captionDirection:'leftToRight', 			//String: caption slide in/out direction
				 opacity: 0.8,								//Integer: 0-1
				 transitionSpeed:1500,						//Integer: transitions speed, in milliseconds
				 easing:'swing',							//String: easing method - see http://jqueryui.com/demos/effect/easing.html
				 padding: 3,								//Integer: padding
				 mobileActive:false,						//Boolean: whether to activate/deactivate for mobile
				 zoom:50									//Integer: zoom factor
				
			};
			
			
			//overwrite or merge user options
			var options = $.extend({},defaults, options);
			
			
			/*mobile check
			-----------------------------*/
			
			var isMobile = false;
				
			if( navigator.userAgent.match(/Android/i) || 
				navigator.userAgent.match(/webOS/i) ||
				navigator.userAgent.match(/iPhone/i) || 
				navigator.userAgent.match(/iPad/i)|| 
				navigator.userAgent.match(/iPod/i) || 
				navigator.userAgent.match(/BlackBerry/i)){
					
				isMobile = true;
			
			}
			

			return this.each(function() {

			
			   /*internals
				-----------------------------*/
				var	thumb = $(this),
					thumbW,
					thumbH,
					overlay,
					image,
					ratio,
					newW,
					newH,
					captionContainer,
					captionContent,
					captionDistance=50;
							
	
				/*actions
				-----------------------------*/
	
				//check if device is mobile & if it should be active or not
				if(isMobile ==true && options.mobileActive == false) return false;
				
				/*construct*/
				thumb.children('a').append('<div class="thumb-rollover"></div>')
				thumb.children('a').children('.thumb-rollover').append('<div class="thumbInfo"></div>');
					
				//reset thumb height,width on resize
				$(window).bind('resize',function(){
												 
					thumb.css({height:'auto'});	
					thumb.children('a').css({width:'inherit',height:'auto'});
									 
				});

				/*actions*/
				thumb.on({
				
						 mouseenter: function () {
							 
							 
							//get size ref.
							thumbW = thumb.width();
							thumbH = thumb.height();	

							//set container height for when image zooms
							thumb.css({height:thumbH});	
							
							//calculate zoom scale
							ratio = options.zoom/thumbW
							newH = Math.floor(thumbH*(1+ratio))
							newW = thumbW+options.zoom
							
							//set ref.
							overlay = thumb.find('div.thumb-rollover');
							image = thumb.children('a')
							captionContainer = overlay.children('div.thumbInfo').css({paddingLeft:'0',paddingTop:'0',paddingBottom:'0',paddingRight:'0'});
								
							//get & push the caption
							if(thumb.find('a').attr('data-caption')){
								
								captionContent = '<span>'+thumb.find('a').attr('data-caption')+'</span>'
								
							}else if(thumb.find('a').attr('data-logo')){
								
								captionContent = '<img class="graphic" src="'+thumb.find('a').attr('data-logo')+'" />'
								
							}
							
							captionContainer.html(captionContent);
							

							//size the overlay
							overlay.css({width:thumbW-(options.padding*2)+'px',
										 height:thumbH-(options.padding*2)+'px',
										 left:options.padding+'px',
										 top: options.padding+'px',
										 backgroundColor:options.overlayColor,
										 color:options.fontColor
										 });		
						
							
							//make sure caption is not empty
						if (typeof captionContent !== 'undefined' && captionContent !== false) {


								//animate
								if(options.captionDirection=='leftToRight'){
								
									captionContainer
										.css({opacity:0,paddingRight:captionDistance+'px'})
										.stop()
										.animate({opacity:1,paddingRight:'0px'});
										
								}else if(options.captionDirection=='rightToLeft'){
									
									captionContainer
										.css({opacity:0,paddingLeft:captionDistance+'px'})
										.stop()
										.animate({opacity:1,paddingLeft:'0px'});
								
								}else if(options.captionDirection =='topToBottom'){
									
									captionContainer
										.css({opacity:0,paddingBottom:captionDistance+'px'})
										.stop()
										.animate({opacity:1,paddingBottom:'0px'});
								
								}else if(options.captionDirection=='bottomToTop'){
									
									captionContainer
										.css({opacity:0,paddingTop:captionDistance+'px'})
										.stop()
										.animate({opacity:1,paddingTop:'0px'});
								
								}else{
									
									captionContainer
										.css({opacity:0})
										.stop()
										.animate({opacity:1});
									
								}
								
								overlay
									.stop()
									.animate({opacity:options.opacity},options.transitionSpeed, options.easing);
									
								image
									.stop()
									.animate({height:newH+'px',width:newW+'px',marginLeft:-(newW-thumbW)/2+'px', marginTop:-(newH-thumbH)/2+'px'}, options.transitionSpeed/3, options.easing);
								
							}
							
						}, 
						
						  mouseleave: function () {
							  
							  
							 //animate 
							if(options.captionDirection=='leftToRight'){
								
									captionContainer.stop().animate({opacity:0,paddingLeft:captionDistance+'px'});
										
								}else if(options.captionDirection=='rightToLeft'){
									
									captionContainer.stop().animate({opacity:0,paddingRight:captionDistance+'px'});
								
								}else if(options.captionDirection =='topToBottom'){
									
									captionContainer.stop().animate({opacity:0,paddingTop:captionDistance+'px'});
								
								}else if(options.captionDirection=='bottomToTop'){
									
									captionContainer.stop().animate({opacity:0,paddingBottom:captionDistance+'px'});
								
								}else{
									
									captionContainer.stop().animate({opacity:0});
									
								}
							 
							 		
							   overlay
							 		.stop()
									.animate({opacity:0},options.transitionSpeed,options.easing,function(){
					
										//delete thumb content
									 	$(this).children('.thumbInfo').children().remove();
								   
									});
							 
							   image
									.stop()
									.animate({height:thumbH,width:thumbW,marginLeft:0,marginTop:0},options.transitionSpeed/1.5, options.easing); 
							
						
						 }
					
				 });
		
			});

	};
	
})(jQuery);