$(document).ready(function(){

	$('.burger').click(function(){
    $('.nav .burger').toggleClass('cross');
    $('.nav ul').toggleClass('open');

		jQuery('html,body').animate({ scrollTop: jQuery(".nav").offset().top}, 800);
	});

});
