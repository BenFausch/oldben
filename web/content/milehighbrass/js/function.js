function include(filename, onload) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	script.onload = script.onreadystatechange = function() {
		if (script.readyState) {
			if (script.readyState === 'complete' || script.readyState === 'loaded') {
				script.onreadystatechange = null;
				onload();
			}
		} else {
			onload();
		}
	};
	head.appendChild(script);
}

include('http://code.jquery.com/jquery-latest.js', function() {
			$(document).ready(function() {


				// function opacFun(el, offset) {
				// 		// var position = window.pageYOffset;
				// 		// var band = $('#band').offset().top;
				// 		if(offset > el) {
				// 				$(el).find('p').css('opacity',1);
				// 		}
				// };
				//
				//  var position = window.pageYOffset;
				// $(window).on('scroll', opacFun('#band', position));


					// end docready
				});
				// end include
			});
