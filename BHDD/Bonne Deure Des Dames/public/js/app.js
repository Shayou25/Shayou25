/********   loading    ***********/

var random = Math.floor((Math.random() * 2000)) + 2000;
$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, random);
});


/*******      burger      *********/
$('.m-nav-toggle').click(function(e){
  e.preventDefault();
  $('.m-right').toggleClass('is-open');
  $('.m-nav-toggle').toggleClass('is-open');
});
