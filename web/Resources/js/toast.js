//HIDE NOTIFICATIONS
	$('.hamburger').on('click',function() {
		$('#toast-container').slideUp();
	});

	$('#toast-container .toast .btn-close').on('click',function() {
		$('#toast-container').hide();
	});

	$('.hamburger').on('click',function() {
		notifications();
		if ($('.st-container').removeClass('st-menu-open')){
			$('#toast-container',this).show();
		}
	});

//NOTIFICATIONS
$(document).ready(function(){
$(document).on('click', '#toast-container .toast .btn-close', function() {
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
});

//Default load
function defaultTriggerNotification(){
  Materialize.toast('<div class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>Congratulations</h4><p>Your account is now activated.</p>');
}
});

function triggerNotification(){
	Materialize.toast('<div class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>Great, you’ve been verified!</h4><p>You can now continue with pre-approval</p>');
}

function triggerSettleAccountsNotification(){
	 Materialize.toast('<div class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>We’ve updated your deal</h4><p>Review changes below.</p>');
}
