$(function(){

	$('.burger').click(function(){
    $('.nav .burger').toggleClass('cross');
    $('.nav ul').toggleClass('open');

		jQuery('html,body').animate({ scrollTop: jQuery(".nav").offset().top}, 800);
	});






$('.btn').click(function(){

	var btnId = $(this).attr('data-btn')
	$(btnId).fadeToggle(500);

});
    
    
    age = prompt('Please enter your age?');
    
    
    if(age < 16){
        $('.box h3').html('Still Young To Drive');
    }else if(age == 16){
        $('.box h3').html('Finally Ready To drive');
    } else{
        $('.box h3').html('You are already a pro');
    };


});
