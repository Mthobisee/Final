$(".loading-page").addClass("hide");

function setSpinnerMessage(mainHeader,mainHeaderMobile,subHeader){
	$(".loading-page").append(
	'<div id="loadingDiv"><h3 class="turquoise-text text-center no-margin-mobile mobile-hide">'+mainHeader+'</h3><h3 class="turquoise-text text-center no-margin-mobile mobile-only">'+mainHeaderMobile+'</h3><div id="sub-header"><h4>'+subHeader+'</h4></div><div class="loader-svg"><div id="svgContainer"></div></div></div>'
	);
}

function loadSpinner(mainHeader,mainHeaderMobile,subHeader){
	
	setSpinnerMessage(mainHeader,mainHeaderMobile,subHeader);
	
	(function detectIE() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		var trident = ua.indexOf('Trident/');
		var edge = ua.indexOf('Edge/');
		if (msie > 0) {
			// IE 10 or older
			//Do some stuff
			$(".loader-svg").addClass("loader-svg-size");
			$("#loadingDiv").css("top", "20%");
		} else if (trident > 0) {
			// IE 11
			//alert("IE 11");
			//Do some stuff
		} else if (edge > 0) {
			// Edge
			//alert("Edge");
			//Do some stuff
		} else
			//alert("other browser");
			// other browser
			return false;
	})();
	
	var svgContainer = {
		wrapper: document.getElementById('svgContainer'),
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: 'resources/simple-spinner.json'
	};
	var anim = bodymovin.loadAnimation(svgContainer);
	window.onresize = anim.resize.bind(anim);
	
	$(".loading-page").fadeIn(500, function() {
		$(".header, .floating-container, .st-container").addClass("blurEffect");
		$(".loading-page").removeClass("hide");
		$(".header").attr("tabindex", -1).focus();
		$("body").addClass("stop-scrolling");
	});
	/*setTimeout(function() {
		removeLoader();
		$(".header, .floating-container, .st-container").removeClass("blurEffect");
		$(".loading-page").fadeOut(500, function() {
			$(".loading-page").addClass("hide");
			$("body").removeClass("stop-scrolling");
		});
	}, 45000); //wait for page load.*/

	var counter = 1;
	var myIntervalFadeOut = setInterval(function() {
		$("#loadingDiv h4").fadeOut(500);
		setTimeout(function() {
			if (counter == 1) {
				$("#loadingDiv h4").text("Double checking all the red tape");
				$("#loadingDiv h4").fadeIn(500);
			} else if (counter == 2) {
				$("#loadingDiv h4").text("Cross-referencing the complicated stuff");
				$("#loadingDiv h4").fadeIn(500);
			} else if (counter == 3) {
				$("#loadingDiv h4").text("Validating your information");
				$("#loadingDiv h4").fadeIn(500);
			} else if (counter == 4) {
				$("#loadingDiv h4").text("Wondering when it will be done");
				$("#loadingDiv h4").fadeIn(500);
			} else if (counter == 5) {
				$("#loadingDiv h4").text("Still there? Almost done!");
				$("#loadingDiv h4").fadeIn(500);
			} else if (counter == 6) {
				$("#loadingDiv h4").text("Just a few more seconds");
				$("#loadingDiv h4").fadeIn(500);
				clearInterval(myIntervalFadeOut);
			}
			counter++;
		}, 500);
	}, 5000);
}

function removeLoader() {
	$("#loadingDiv").fadeOut(500, function() {
		// fadeOut complete. Remove the loading div
		$("#loadingDiv").remove(); //makes page more lightweight
	});
}
