$(document).ready(function(){

	$('.play').click(function(){
		$(this).toggleClass('pause');
	});

	$('.button').click(function(){
		$(this).toggleClass('play');
	});

});
