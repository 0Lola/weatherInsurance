
$(document).ready(function(){
    var str,tmp,words = document.getElementsByTagName("TR").length;
    for(var w =0;w<=words;w++){
    str =document.getElementsByTagName("TD")[1+6*w].innerHTML;
    var tmp =str.substring(0,5)+"******";
    document.getElementsByTagName("TD")[1+6*w].innerHTML = tmp;
    str =document.getElementsByTagName("A")[5+w].innerHTML;
    var tmp =str.substring(0,8)+"...";
    document.getElementsByTagName("A")[5+w].innerHTML = tmp;
    str =document.getElementsByTagName("TD")[3+6*w].innerHTML;
    var tmp =str.substring(0,5)+"...";
    document.getElementsByTagName("TD")[3+6*w].innerHTML = tmp;}});

(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);
