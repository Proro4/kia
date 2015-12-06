$(document).ready(function(){


	//img show
	$('.left-preg img').on('click',function(){
		$('.lightbox').css({'display':'block'})
		$('.lightbox').append('<img src="'+$(this).attr("src")+'" alt="">');
		var imgIndex = $(this).index();
		var imgLength = $('.left-preg img:eq('+imgIndex+')').attr('src');
		$('.lightbox img').css({'max-width':"80%",'min-width':'30%'});
		$('.arrow-light-left').on('click',function(){
		var imageLength = $('.left-preg img').length;
			imgIndex = imgIndex-1;
			if(imgIndex <= 0){
				imgIndex = imageLength-1;
			}
			imgLength = $('.left-preg img:eq('+imgIndex+')').attr('src');
		$('.lightbox img').remove();
			$('.lightbox').append('<img src="'+imgLength+'" alt="">');
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
		})
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
		
	$('.lang').on('click',function(){
	if($('.lang').height() == 50){ 
		$('.lang').animate({'height':'17px'},200)
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

	$('.invest-project ul li a').mouseenter(function(){
		$(this).find('img').remove();
		$(this).append('<img src="img/other/arrow-menu-h.png" alt="">');
		$(this).find('img').animate({'left':'25px'},300);
	})
	$('.invest-project ul li a').mouseleave(function(){
		$(this).find('img').animate({'left':'5px'},300);
		$(this).find('img').remove();
		$(this).append('<img src="img/other/arrow-menu.png" alt="">');
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
 
		if($(this).scrollTop() >= 150) {
			 
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
		var heightMenu = $('.menu-head-popup li:eq(2)').height()*(itemsLi+1);
		$('.menu-head-popup').click(function(){
			if(
		$('.menu-head-popup').height() == 48){
 				$('.menu-head-popup').animate({'height':heightMenu},300);
 			 	$('.wrapper .slider').animate({'margin-top':heightMenu},300);
 			}
 			else{

		$('.menu-head-popup').animate({'height':"48px"},300);
 			 	$('.wrapper .slider').animate({'margin-top':'0'},300);
 			}
		})

		var slideImgHeight = $('.wrapper .slider .slider-container .item').height()
		$('.slider').css('height',slideImgHeight)//height empty-block
  		  var slideHeight = $('.slider ').height();
  		
		$('.empty-block').css('height',slideHeight+10);
		if($(window).width() <= 1440 ){		
			$('.slider').css('height','750px')		
			$('.empty-block').css('height','750px');		
		} 		
  		 if($(window).width() <= 1280 ){		
			$('.slider').css('height','700px')		
			$('.empty-block').css('height','700px');		
		}  		  		  
		if($(window).width() <= 1150 ){		
			$('.slider').css('height','680px')		
			$('.empty-block').css('height','680px');		
		} 		
		if($(window).width() <= 1024 ){		
			$('.slider').css('height','620px')		
			$('.empty-block').css('height','620px');		
		} 

  		  
	if($(window).width() <= 925 ){
		$('.slider').css('height','600px')
		$('.empty-block').css('height','600px');

	}
	if($(window).width() <= 800){
			$('.slider div').removeClass('containers');
		$('.empty-block').css('height','515px');
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
			$('.empty-block').css('height','750px');		
		} 		
  	 if($(window).width() <= 1280 ){		
			$('.slider').css('height','700px')		
			$('.empty-block').css('height','700px');		
		} 		
		if($(window).width() <= 1150 ){		
			$('.slider').css('height','680px')		
			$('.empty-block').css('height','680px');		
		} 		
		if($(window).width() <= 1024 ){		
			$('.slider').css('height','620px')		
			$('.empty-block').css('height','620px');		
		} 
  		  
	if($(window).width() <= 925 ){
		$('.slider').css('height','600px')
		$('.empty-block').css('height','600px');

	}
	if($(window).width() <= 800){
			$('.slider div').removeClass('containers');
		$('.empty-block').css('height','515px');
	}
	if($(window).width() <= 703){
		$('.slider').css('height','527px');
	}if($(window).width() <= 460){
		$('.slider').css('height','526px');
	}if($(window).width() <= 393){
		$('.slider').css('height','514px');
	}
})