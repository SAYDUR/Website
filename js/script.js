$(document).ready(function(){

	$('.burger').click(function(){
    $('.nav .burger').toggleClass('cross');
    $('.nav ul').toggleClass('open');

		jQuery('html,body').animate({ scrollTop: jQuery(".nav").offset().top}, 800);
	});

});


$(function(){


$('.btn').click(function(){

	var btnId = $(this).attr('data-btn')
	$(btnId).fadeToggle(1000)

});


});
