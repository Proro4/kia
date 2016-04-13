$(document).ready(function(){
			
		//liks-head	
		$('.head-links:eq(2),.head-links:eq(3)').addClass('no-800');
		//map

		$('#testMap').parent().css({'position':'relative','top':'10px'});

		// tables map
		$('#list-of-counties tr ').each(function(){
			$(this).find('td:eq(0)').css({'width':'285px','display':'inline-block'})
		})
		//info-block
		var maxHeight = 0;
		$('.info-block').each(function(){
			if($(this).height() > maxHeight){
				maxHeight = $(this).height();
			}
		});
		$('.info-block').css('height',maxHeight);

		setTimeout(function(){
			$('div#jivo-iframe-container').addClass('noprint')
			
		},5000)


		var windowHeight = $(window).height();
		var infoeight = $('.foot-info').height();
		var heightCenter = (windowHeight /2) - (infoeight/2);
		$('.foot-info').css({'top':heightCenter},600);


	if($('.foot-info p').hasClass('danger-info') || $('.foot-info p').hasClass('success-info')){ 
		var bodyWidth = $('body').width();
		var infoWidth = $('.foot-info').width();
		var widthCenter = (bodyWidth /2) - (infoWidth/2);
		$('.foot-info').animate({'right':widthCenter},600);
		setTimeout(function () {
			$('.foot-info').animate({'right':-5000},600);
		}, 3000);
		}

	$('.foot-info-exit').on('click',function(){
			$('.foot-info').animate({'right':-5000},600);
	});

	$('.releases-block.press-page:eq(0)').css('padding-top','50px');
	$('.releases-right .releases-block.press-page:eq(0)').css('padding-top','15px');

	$('.delivery-block input[type="submit"]').on('click',function(){
		$('.inform-window').animate({'top':'150px'},500);
		setTimeout(function () {
	          $('.inform-window').animate({'top':'-250px'},500);
		}, 2000);
	})

	$('.map-menu-close').on('click',function(){
		if($('.menu-map').width() === 300){
			$('.menu-map').animate({'left':'-300px'})
			$(this).css('transform','rotate(180deg)')
		}else if($('.menu-map').width() === 245){
			$('.menu-map').animate({'left':'-215px'})
			$(this).css('transform','rotate(180deg)')
		}
	})
		$('.map-menu-close').on('click',function(){
			if($('.menu-map').css('left') != "0px"){
			$('.menu-map').animate({'left':'0px'})
			$(this).css('transform','rotate(0deg)')
		}
		})
	$('.menu-map>li>span').on('click',function(){
		if($(this).parent().find('ul>li').height() == 0){
			var heightP = $(this).parent().find('ul>li>p').height()
			$(this).parent().find('ul>li').animate({'height':heightP+10,'padding':'5px 2px'},100);
			$(this).parent().find('ul>li').css('border-bottom', '1px solid white')
			}
			else{
			$(this).parent().find('ul>li').animate({'height':'0','padding':'0'},100);
			$(this).parent().find('ul>li').css('border-bottom', '0')
			}
	})

	$('.gm-style-iw').parent().css({'border':'1px solid rgb(17, 123, 185) !important','border-radius':'0 0 7px 7px !important'})
	$('.gm-style-iw .title').css({'color':'#6ea3cd !important','text-transform':'uppercase !important'});
	$('.gm-style-iw .link a').css({'text-decoration':'none !important','font-size':'12px !important','color':'#828282 !important'})
	$('.gm-style-iw').parent().find('div:eq(3) img').attr('src');

	$('.block-12 br').css('display','none');

	// lightbox for document
	$('.review-link').on('click',function(){
		var textReview = $(this).parent().find('span').text()
		$('.lightbox span').text(textReview);
		$('.lightbox').css('display','block')
	})
	$('.lightbox i').on('click',function(){
		var textReview = $(this).parent().find('span').text(' ')
		$('.lightbox').css('display','none')
	})




	//img show
	$('.left-preg img').on('click',function(){

		$('.lightbox').css({'display':'block'})
		$('.lightbox').append('<img src="'+$(this).attr("src")+'" alt="">');
		var imgIndex = $(this).index();
		var imgLength = $('.left-preg img:eq('+imgIndex+')').attr('src');
		$('.lightbox img').css({'max-width':"80%",'max-height':'90%'});
		$('.arrow-light-left').on('click',function(){
		var imageLength = $('.left-preg img').length;
			imgIndex = imgIndex-1;
			if(imgIndex <=-1){
				imgIndex = imageLength-1;
			}
			imgLength = $('.left-preg img:eq('+imgIndex+')').attr('src');
		$('.lightbox img').remove();
			$('.lightbox').append('<img src="'+imgLength+'" alt="">');
				var heightBlock = $(window).height();
			 	var LightImg = $('.lightbox img').height();
			 	var topHeight = (heightBlock / 2) - (LightImg / 2);
			 	console.log(LightImg)
			 	$('.lightbox').css('padding-top',topHeight)
		})
		$('.arrow-light-right').on('click',function(){
		var imageLength = $('.left-preg img').length;
			imgIndex = imgIndex+1;
			if(imgIndex == imageLength){
				imgIndex = 0;
			}
			imgLength = $('.left-preg img:eq('+imgIndex+')').attr('src');
		$('.lightbox img').remove();
			$('.lightbox').append('<img src="'+imgLength+'" alt="">');
				var heightBlock = $(window).height();
			 	var LightImg = $('.lightbox img').height();
			 	var topHeight = (heightBlock / 2) - (LightImg / 2);
			 	console.log(LightImg)
			 	$('.lightbox').css('padding-top',topHeight)
		})
				var heightBlock = $(window).height();
			 	var LightImg = $('.lightbox img').height();
			 	var topHeight = (heightBlock / 2) - (LightImg / 2);
			 	console.log(LightImg)
			 	$('.lightbox').css('padding-top',topHeight)

	})
	$('.lightbox p').on('click',function(){
		$('.lightbox').css('display','none');
		$('.lightbox img').remove();
	})
	//pop-up leng
	$('.arrow-to-top, .block-links-two,.block-links-one, .block-links-three,.block-links-four').fadeOut();


	$('.arrow-to-top').fadeOut();

$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 17){ 
		$('.lang').animate({'height':'50px'},200)
		$('.lang-but').css('display','none');
		}
	})
$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 25){ 
		$('.lang').animate({'height':'65px'},200)
		$('.lang-but').css('display','none');
		}
	})
		
	$('.lang').on('click',function(){
	if($('.lang').height() == 50){ 
		$('.lang').animate({'height':'17px'},200)
		$('.lang-but').css('display','block');
		}
	})
	$('.lang').on('click',function(){
	if($('.lang').height() == 65){ 
		$('.lang').animate({'height':'25px'},200)
		$('.lang-but').css('display','block');
		}
	})
	//SLIDER
	var sliderlength = $('.item').length;
	var allWidth = 0;
	var id = 0;
	$('.slide-text-block').css('width',100/sliderlength+'%')
	$('.slide-all-text').css('width',sliderlength+'00%');

	$('.item').css('width',100/sliderlength+'%')
	$('.slider-container').css('width',sliderlength+'00%');

	for(var i =1; i <= sliderlength; ++i){
		$('.pagin').append('<div class="pag-block"></div>')
	}
	$('.pag-block:eq(0)').addClass('active');

	 slideInterval = setInterval(function (){
		  if(id != sliderlength-1){
		id +=1;
		$('.slider-container').animate({left:'-'+id+'00%'},400);
		$('.slide-all-text').animate({left:'-'+id+'00%'},400);

		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+id+')').addClass('active');
		}
		else{
			id = 0;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
			}
		},5000)
		 $('.slider').mouseover(function(){
			clearInterval(slideInterval);
		})
		 $('.slider').mouseleave(function(){
		slideInterval = setInterval(function (){
		  if(id != sliderlength-1){
		id +=1;
		$('.slider-container').animate({left:'-'+id+'00%'},400);
		$('.slide-all-text').animate({left:'-'+id+'00%'},400);

		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+id+')').addClass('active');		}
		else{
			id = 0;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
			}
		},5000)
		})
	$('.pag-block').click(function(){
		var numbSlide = $(this).index()
		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+numbSlide+')').addClass('active');
		$('.slider-container').animate({left:'-'+numbSlide+'00%'},400);
		$('.slide-all-text').animate({left:'-'+numbSlide+'00%'},400);
		allWidth = numbSlide+'00';
		id = numbSlide;
	})

	$('.arrow-prev').click(function(){
	 if(id != 0){
			id -=1;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
		}
	else{
			id = sliderlength-1;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
		}
	})
	$('.arrow-next').click(function(){
	 if(id != sliderlength-1){
		id +=1;
		$('.slider-container').animate({left:'-'+id+'00%'},400);
		$('.slide-all-text').animate({left:'-'+id+'00%'},400);

		$('.pag-block').removeClass('active');
		$('.pag-block:eq('+id+')').addClass('active');
		}
		else{
			id = 0;
			$('.slider-container').animate({left:'-'+id+'00%'},400);
			$('.slide-all-text').animate({left:'-'+id+'00%'},400);

			$('.pag-block').removeClass('active');
			$('.pag-block:eq('+id+')').addClass('active');
		}
		
	
	})
	//parallax slider
	$(window).scroll(function(){
		var scroll = $(window).scrollTop()
		$('.item img').css('top',scroll); 
	})
	//SLIDER END

	//Project hover

	var arromImg = $('.arrow-s').attr('src')
	var arromImgHover = $('.arrow-s-h').attr('src')
	$('.invest-project ul li a img').attr('src',arromImg);
	$('.invest-project ul li a').mouseenter(function(){
		$(this).find('img').attr('src',arromImgHover);
		$(this).find('img').animate({'left':'25px'},300);
	})
	$('.invest-project ul li a').mouseleave(function(){
		$(this).find('img').animate({'left':'5px'},300);
		$(this).find('img').attr('src',arromImg);
	})

	

	//CARUSEL

	var caruselLength = $('.carusel-block').length;
	$('.all-carusel').css('width',caruselLength+'00%');
	$('.carusel-block').css('width',(100/caruselLength)+'%');
	var carId = 0;
	$('.carusel-arrow-next').click(function(){
		if(carId != caruselLength-1)
		carId += 1;
		$('.all-carusel').animate({left:-carId+'00%'});
	})
	$('.carusel-arrow-prev').click(function(){
		if(carId != 0)
		carId -= 1;
		$('.all-carusel').animate({left:-carId+'00%'});
	})
	//ARROW TO TOP

		$(window).scroll(function() {
 
		if($(this).scrollTop() >= 50) {
			 
			$('.arrow-to-top').fadeIn();
			if($('body').width() >= 1100){ 
				$('.block-links-two,.block-links-one, .block-links-three,.block-links-four').fadeIn();

			 }
		} else {
		 
		$('.arrow-to-top, .block-links-two,.block-links-one, .block-links-three,.block-links-four').fadeOut();
		 
		}
		 
		});
		 
		$('.arrow-to-top').click(function() {
		 
		$('body,html').animate({scrollTop:0},800);
		 
		});
		//popUp menu
		var itemsLi = $('.menu-head-popup li').length;
		var heightli = $('.menu-head-popup li:eq(1)').height()
		$('.menu-head-popup').css('height',"48px");
		var heightMenu = (44*(itemsLi)+15);
		$('.menu-head-popup').click(function(){
			if(
		$('.menu-head-popup').height() == 48){
 				$('.menu-head-popup').animate({'height':heightMenu+5},300);
 			 	$('.wrapper .slider').animate({'margin-top':heightMenu+5},300);
 				if($(window).width() <=450){
	 				$('.menu-head-popup').animate({'height':heightMenu+10},300);
	 			 	$('.wrapper .slider').animate({'margin-top':heightMenu+10},300);
 				}
 				if($(window).width() <=400){
	 				$('.menu-head-popup').animate({'height':heightMenu+15},300);
	 			 	$('.wrapper .slider').animate({'margin-top':heightMenu+15},300);
 				}
 				if($(window).width() <=350){
	 				$('.menu-head-popup').animate({'height':heightMenu+18},300);
	 			 	$('.wrapper .slider').animate({'margin-top':heightMenu+18},300);
 				}
 				if($(window).width() <=320){
	 				$('.menu-head-popup').animate({'height':heightMenu+25},300);
	 			 	$('.wrapper .slider').animate({'margin-top':heightMenu+25},300);
 				}
 			}
 			else{

		$('.menu-head-popup').animate({'height':"48px"},300);
 			 	$('.wrapper .slider').animate({'margin-top':'0'},300);
 			}
		})

		var slideImgHeight = $('.wrapper .slider .slider-container .item').height()
		$('.slider').css('height',slideImgHeight)//height empty-block
  		  var slideHeight = $('.slider ').height();
  		
		$('.empty-block').css('height',slideHeight-60);
		if($(window).width() <= 1440 ){		
			$('.slider').css('height','730px')		
			$('.empty-block').css('height','655px');	
		} 		
  		 if($(window).width() <= 1280 ){		
			$('.slider').css('height','700px')		
			$('.empty-block').css('height','620px');		
		}  		  		  
		if($(window).width() <= 1150 ){		
			$('.slider').css('height','680px')		
			$('.empty-block').css('height','590px');		
		} 		
		if($(window).width() <= 1024 ){		
			$('.slider').css('height','620px')		
			$('.empty-block').css('height','560px');		
		} 

  		  
	if($(window).width() <= 925 ){
		$('.slider').css('height','600px')
		$('.empty-block').css('height','550px');

	}
	if($(window).width() <= 800){
		$('.info-invest-page:eq(0)').css({'margin-top':'55px'})
			$('.header-contant').removeClass('containers');
			$('.invest-project ul li span img').remove()
		$('.empty-block').css('height','515px');
	}else{
			$('.header-contant').addClass('containers');
	}
	if($(window).width() <= 703){
		$('.slider').css('height','527px');
	}if($(window).width() <= 460){
		$('.slider').css('height','526px');
	}if($(window).width() <= 393){
		$('.slider').css('height','514px');
	}
})
$(window).load(function(){
	//paralaks slider
	$(window).scroll(function(){
		var scroll = $(window).scrollTop()
		$('.item img').css('top',scroll);
	})
})
$(window).resize(function(){
	var slideImgHeight = $('.wrapper .slider .slider-container .item').height()
		$('.slider').css('height',slideImgHeight)//height empty-block
  		  var slideHeight = $('.slider ').height();
  		
		$('.empty-block').css('height',slideHeight+10);
		if($(window).width() <= 1440 ){		  		  
			$('.slider').css('height','750px')		
			$('.empty-block').css('height','700px');		
		} 		
  	 if($(window).width() <= 1280 ){		
			$('.slider').css('height','700px')		
			$('.empty-block').css('height','630px');		
		} 		
		if($(window).width() <= 1150 ){		
			$('.slider').css('height','680px')		
			$('.empty-block').css('height','620px');		
		} 		
		if($(window).width() <= 1024 ){		
			$('.slider').css('height','620px')		
			$('.empty-block').css('height','560px');		
		} 
  		  
	if($(window).width() <= 925 ){
		$('.slider').css('height','600px')
		$('.empty-block').css('height','550px');

	}
	if($(window).width() <= 800){
			$('.header-contant').removeClass('containers');
		$('.empty-block').css('height','515px');
	}else{
			$('.header-contant').addClass('containers');
	}
	if($(window).width() <= 703){
		$('.slider').css('height','527px');
	}if($(window).width() <= 460){
		$('.slider').css('height','526px');
	}if($(window).width() <= 393){
		$('.slider').css('height','514px');
	}
})
