/* Credit Advisor Tips */	
$(function() {
	var selectedClass = "";
	
	selectedClass = $('.selected-chip').attr("data-rel"); 
		setTimeout(function() {
		  $("."+selectedClass).fadeIn().addClass('scale-anm');
		  $("#tips").fadeTo(0, 1);
		}, 0); 
		$("#tips div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
	
	$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
		 $("#tips").fadeTo(0, 0.1);
			$("#tips div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
		setTimeout(function() {
		  $("."+selectedClass).fadeIn().addClass('scale-anm');
		  $("#tips").fadeTo(0, 1);
		}, 0); 
	});
	
});