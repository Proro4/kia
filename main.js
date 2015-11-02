$(document).ready(function(){
	//pop-up leng
	$('.lang-select:eq(0)').css('display','block');
	$('.lang-select').on('click',function(){
		$('.lang-select').css('display','block');

		$('.lang-select').click(function(){
			$('.lang-select').css('display','none');
			$(this).css('display','block');
			
			
		})
	})
	//SLIDER
	var sliderlength = $('.item').length;
	var allWidth = 0;
	var id = 0;
	$('.slide-text-block').css('width',100/sliderlength+'%')
	$('.slide-all-text').css('width',sliderlength+'00%');

	$('.item').css('width',100/sliderlength+'%')
	$('.slider-container').css('width',sliderlength+'00%');
	console.log($('.slider-container').css('width'));

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
		console.log(allWidth);
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
		$('.pag-block:eq('+id+')').addClass('active');
		console.log(allWidth);
		}
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
		console.log(allWidth);
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

	//height empty-block
    var slideHeight = $('.slider ').height();
	$('.empty-block').css('height',slideHeight);

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

})
$(window).load(function(){
	//paralaks slider
	$(window).scroll(function(){
		var scroll = $(window).scrollTop()
		$('.item img').css('top',scroll);
	})
})