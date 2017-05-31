//HIDE TOOL TIP ON INPUT FOCUS
	$(document).ready(function(){
			$('#dealerOrPvt').change(function(){
					if ($('option:selected',this).val()=='' || $('option:selected',this).val()=='select' ){
							$('#landing_car_form .form-tool-tip').fadeIn();
					}
					else{
						$('#landing_car_form .form-tool-tip').fadeOut();
					}
			});
	});
  //FORM TOOLTIP

  $('.approve-form .gross.form-tool-tip').hide();
  	if($('input[id="gross"]').focus(function() {
  			$('.approve-form .gross.form-tool-tip').show();
  		})
  	);
  	if($('input[id="gross"]').on('blur', function() {
  		$('.approve-form .gross.form-tool-tip').hide();
  	})
  );

  $('.approve-form .netIncome.form-tool-tip').hide();
  	if($('input[id="netIncome"]').focus(function() {
  		$('.approve-form .netIncome.form-tool-tip').show();
  	})
  );
  if($('input[id="netIncome"]').on('blur', function() {
  	$('.approve-form .netIncome.form-tool-tip').hide();
  })
  );

	$('.vin.form-tool-tip').hide();
	$('#page-selling-car-not-financed-only .approve-form .vin.form-tool-tip').hide();
	  	if($('input[id="vin"]').focus(function() {
	  		$('.vin.form-tool-tip').show();
			$('#vinNumberExpander .chips-exapander .expand').addClass('enlarge-height');
			$('#page-selling-car-not-financed-only #sellingCarExpander').addClass('enlarge-height');
			$('#vinNumberExpander .approve-form').addClass('enlarge-height');
	  	})
	  );
	  if($('input[id="vin"]').on('blur', function() {
	  	$('.vin.form-tool-tip').hide();
		$('#page-selling-car-not-financed-only .chips-exapander .expand').removeClass('enlarge-height');
			$('#page-selling-car-not-financed-only #sellingCarExpander').removeClass('enlarge-height');
			$('#vinNumberExpander .approve-form').removeClass('enlarge-height');
	  })
	  );


  	/*
  		TOOLTIP
  	*/
  	$(document).ready(function(){
  		$('.tooltipped').tooltip({
  			delay: 100,
  			position:'top',
  			html:true
  		});
  	});
