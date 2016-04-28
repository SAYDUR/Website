$(document).ready(function(){

	$('.burger').click(function(){
    $('.nav .burger').toggleClass('cross');
    $('.nav ul').toggleClass('open');

		jQuery('html,body').animate({ scrollTop: jQuery(".nav").offset().top}, 800);
	});

});

//slider
var slideInt = 1;
var slideNext = 2;

$(document).ready(function(){
$('.slide').fadeIn(500);
startSlider();
});

function startSlider() {
count = $('.slider .slide').size();

loop = setInterval(function() {
  // check slideNext to make sure its less than count
  if (slideNext > count) {
    slideNext = 1;
    slideInt = 1;
  }
  // fade all out
  $('.slide').fadeOut(500)
  // fade in next slide
  $('.slide.' + slideNext).fadeIn(500);
  // update slideInt
  slideInt = slideNext;
  // update slideNext
  slideNext = slideNext + 1;
}, 5000);
}

function prev() {
var newSlide = slideInt - 1;
showSlide(newSlide);
}

function next() {
var newSlide = slideInt + 1;
showSlide(newSlide);
}

function stopLoop() {
window.clearInterval(loop);
}

function showSlide(slideIndex) {
  // stop loop interval
  stopLoop();

 if (slideIndex > count) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = count;
  }

  // fade all out
  $('.slide').fadeOut(300);
  // fade in next slide
  $('.slide.' + slideIndex).fadeIn(300);
  // update slideInt to match slideIndex number
  slideInt = slideIndex;
  // update slideIndex
  slideIndex = slideIndex + 1;

  // restart the slider loop interval
  startSlider();
}

$('.slide').hover(
function() {
  stopLoop();
},
function() {
  startSlider();
}
);
