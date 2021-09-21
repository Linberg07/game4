$(document).ready(function(){
	$('.header-burger').click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$(this).toggleClass('active');
	})
	$('.burger-bg').click(function(){
		$('.burger-menu').removeClass('active');
		$('body').removeClass('lock');
		$('.header-burger').removeClass('active');
	})

	var burger_height = $('.burger-menu').outerHeight();
	jQuery.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
	}; 
	var w = $(window).width();
	if(w<768){
		var headerLink = $('.header-top__link');
		headerLink.each(function(){
			$(this).appendTo($('.burger-menu__list'));
		})
	}else{
		var headerLink = $('.header-top__link');
		headerLink.reverse().each(function(){
			$(this).prependTo($('.header-list'));
		})
	}
})
$(window).resize(function(){
	var w = $(window).width();
	if(w<768){
		var headerLink = $('.header-top__link');
		headerLink.each(function(){
			$(this).appendTo($('.burger-menu__list'));
		})
	}else{
		var headerLink = $('.header-top__link');
		headerLink.reverse().each(function(){
			$(this).prependTo($('.header-list'));
		})
	}
})

