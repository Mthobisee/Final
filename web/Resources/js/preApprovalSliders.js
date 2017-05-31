/*
	PRE-APPROVAL SLIDERS
	Sliders: http://refreshless.com/nouislider/
	Number format: http://refreshless.com/wnumb/
*/
var globalCashPrice = 198803.0;
var globalRetailPrice = 232500.0;
var globalInitiationFees = 1197.0;
var globalInitialInstallment = 0;
var globalInterestRate;
var globalNACD;
var globalBalloonAmt;
var spifMaxPercentage;
var loopCount = 0;

/*
	Remove test dates
*/
//var globalStartDate = moment().subtract(7, "days");
//var globalStartDate = moment().add(20, "days");
var globalStartDate = moment();
var globalStartDateFormat = moment(globalStartDate.format("YYYY-MM-DD"));
var globalStartDateMonth = ("0"+(globalStartDate.month()+1)).slice(-2);
var globalInstallmentDefaultDate = globalStartDate.year()+"-"+globalStartDateMonth+"-"+"28";
var installmentDate = nextInstalmentDate = moment(globalInstallmentDefaultDate);

var nextInstalmentDateFormat = moment(nextInstalmentDate.format("YYYY-MM-DD"));

//Retrieve scoring grid
var scoringGrid = $.getJSON("Resources/scoreGridJsonFile.json");
var globalTermItems, globalDepositItems, globalBalloonItems, globalTotalPVFactors, globalMonthlyPayment;
var globalMaxTerm, globalMinTerm, globalMaxDeposit, globalMinDeposit, globalMaxBalloon, globalMinBalloon;

/*
	DEAL STRUCTURE PAGE
	AMOUNT SLIDER
*/
var stepSliderAmount = $('#slider-step-amount .slider-details-wrap')[0];

if (typeof stepSliderAmount!=='undefined' && stepSliderAmount!==null){

	var numberFormat = wNumb({
		decimals: 2,
		thousand: ',',
		prefix: 'R',
	});
	noUiSlider.create(stepSliderAmount, {
		start: [ globalInitialInstallment ],
		connect: 'lower',
		step: 0.01,
		range: {
			'min': [ 0 ],
			'max': [ globalCashPrice ]
		},
		format: numberFormat,
		/*pips: {
			mode: 'range',
			density: 400000,
			format: numberFormat
		}*/
	});

	var stepSliderValueAmountElement = $('#slider-step-amount .slider-step-header .slider-amount span');
	stepSliderAmount.noUiSlider.on('update', function( values, handle ) {
		$('#slider-step-amount .slider-details').detach().insertAfter('#slider-step-amount .noUi-origin');
		stepSliderValueAmountElement.html(values[handle]);
	});

	enableTapClick('#slider-step-amount',stepSliderAmount,numberFormat);


	/*
		DEAL STRUCTURE PAGE
		MONTHLY PAYMENT SLIDER
	*/

	var stepSliderMonths = $('#slider-step-months .slider-details-wrap')[0];

	var monthsFormat = wNumb({
		decimals: 0,
		postfix: ' Months',
	});
	noUiSlider.create(stepSliderMonths, {
		start: [ 54 ],
		connect: 'lower',
		snap: true,
		range: {
			'min': 12,
			'20%': 24,
			'40%': 36,
			'60%': 48,
			'70%': 54,
			'80%': 60,
			'max': 72
		},
		format: monthsFormat,
		/*pips: {
			mode: 'range',
			density: 72,
			format: monthsFormat
		}*/
	});

	var stepSliderValueMonthsElement = $('#slider-step-months .slider-step-header .slider-amount span');
	stepSliderMonths.noUiSlider.on('update', function( values, handle ) {
		$('#slider-step-months .slider-details').detach().insertAfter('#slider-step-months .noUi-origin');
		stepSliderValueMonthsElement.html(values[handle]);
	});

	//enableTapClick('#slider-step-months',stepSliderMonths,monthsFormat);


	/*
		DEPOSIT
	*/
	var stepSliderDeposit = $('#slider-step-deposit .slider-details-wrap')[0];

	var depositFormat = wNumb({
		decimals: 2,
		thousand: ',',
		prefix: 'R',
	});
	noUiSlider.create(stepSliderDeposit, {
		start: [ 0 ],
		connect: 'lower',
		step: 10,
		range: {
			'min': [ 0 ],
			'max': [ globalCashPrice ]
		},
		format: depositFormat,
		/*pips: {
			mode: 'range',
			density: 100000,
			format: depositFormat
		}*/
	});

	var stepSliderValueDepositElement = $('#slider-step-deposit .slider-step-header .slider-amount span');
	stepSliderDeposit.noUiSlider.on('update', function( values, handle ) {
		$('#slider-step-deposit .slider-details').detach().insertAfter('#slider-step-deposit .noUi-origin');
		stepSliderValueDepositElement.html(values[handle]);
	});

	enableTapClick('#slider-step-deposit',stepSliderDeposit,depositFormat);

	/*
		BALLOON
	*/
	var stepSliderBalloonPayment = $('#slider-step-payment .slider-details-wrap')[0];

	var balloonPaymentFormat = wNumb({
		decimals: 2,
		postfix: '%',
	});
	noUiSlider.create(stepSliderBalloonPayment, {
		start: [ 20 ],
		connect: 'lower',
		step: 2.5,
		range: {
			'min': [ 0 ],
			'max': [ 100 ]
		},
		format: balloonPaymentFormat,
		/*pips: {
			mode: 'range',
			density: 100,
			format: balloonPaymentFormat
		}*/
	});

	var stepSliderValuePaymentElement = $('#slider-step-payment .slider-step-header .slider-amount span');
	stepSliderBalloonPayment.noUiSlider.on('update', function( values, handle ) {
		$('#slider-step-payment .slider-details').detach().insertAfter('#slider-step-payment .noUi-origin');
		stepSliderValuePaymentElement.html(values[handle]);
	});

	enableTapClick('#slider-step-payment',stepSliderBalloonPayment,balloonPaymentFormat);

	/*
		EVENTS
		Callbacks: http://refreshless.com/nouislider/events-callbacks/
		Get/Set: http://refreshless.com/nouislider/slider-read-write/
	*/
	//When updating monthly payment only affects deposit
	stepSliderAmount.noUiSlider.on('slide', function( values, handle ) {
		/*
			Update Deposit
		*/
		/* Retrive Scoring Grid */
		scoringGrid.then(function(data) {
			var months = monthsFormat.from(stepSliderMonths.noUiSlider.get());//months
			var deposit = depositFormat.from(stepSliderDeposit.noUiSlider.get());//deposit
			var balloonPerc = balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get());//balloon perc
			var monthlyPayment = numberFormat.from(stepSliderAmount.noUiSlider.get());//monthly payment

			var totalPVFactors = getTotalPVFactors(balloonPerc,deposit,months,false);//PV factors
			var globalDeposit = getDeposit(monthlyPayment,balloonPerc,months,totalPVFactors,false);
			stepSliderDeposit.noUiSlider.set(globalDeposit);
		});
	});

	stepSliderMonths.noUiSlider.on('update', function( values, handle ) {
		/* Retrive Scoring Grid */
		scoringGrid.then(function(data) {
			var termItems = data.term;
			loadScoringGridItems(termItems);
			setMonthlySliderLimits();
		}).done(function(data) {
			/*
				Set min & max on deposit
			*/
			stepSliderDeposit.noUiSlider.updateOptions({
				range: {
					'min': 0,
					'max': globalMaxDeposit
				}
			});
			/* DEBUG */
			/*var months = monthsFormat.from(stepSliderMonths.noUiSlider.get());//months
			var deposit = depositFormat.from(stepSliderDeposit.noUiSlider.get());//deposit
			var balloonPerc = balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get());//balloon perc
			var monthlyPayment = numberFormat.from(stepSliderAmount.noUiSlider.get());//monthly payment

			var totalPVFactors = getTotalPVFactors(balloonPerc,deposit,months,true);//PV factors
			getDeposit(monthlyPayment,balloonPerc,months,totalPVFactors,true);*/
		});
	});

	stepSliderDeposit.noUiSlider.on('slide', function( values, handle ) {
		/* Retrive Scoring Grid */
		scoringGrid.then(function(data) {
			setDepositSliderLimits();
		});
	});

	stepSliderBalloonPayment.noUiSlider.on('update', function( values, handle ) {
		/* Retrive Scoring Grid */
		scoringGrid.then(function(data) {
			setBalloonSliderLimits();
		});
	});

}

/*
	SLIDER TAP TOUCH ANIMATION
*/
function enableTapClick(objId,sliderObj,sliderFormat){

	var objHtmlDesc = $(objId+' .slider-step-header .slider-desc span').html();

	$(objId+' .slider-step-header .slider-amount span').click(function(){
		enableTouchAnimation(objId,sliderObj,sliderFormat);
	});

	$(objId+' .slider-input-wrap input').blur(function(){
		disableTouchAnimation(objId,objHtmlDesc);
	});

	$(objId+' .slider-input-wrap input').on('keyup',function(){
		var price = $(this).val();
		var validatePrice = function(price) {
		  return /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{2})?$/.test(price);
		}
		if (validatePrice(price)){
			$(this).addClass('valid');
			$(this).removeClass('invalid');
			sliderObj.noUiSlider.set($(this).val());
		}
		else{
			$(this).addClass('invalid');
			$(this).removeClass('valid');
		}

		switch (objId){
			case "#slider-step-deposit":
				scoringGrid.then(function(data) {
					setBalloonSliderLimits();
				});
			break;
			case "#slider-step-amount":
				scoringGrid.then(function(data) {
					var months = monthsFormat.from(stepSliderMonths.noUiSlider.get());//months
					var deposit = depositFormat.from(stepSliderDeposit.noUiSlider.get());//deposit
					var balloonPerc = balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get());//balloon perc
					var monthlyPayment = numberFormat.from(stepSliderAmount.noUiSlider.get());//monthly payment

					var totalPVFactors = getTotalPVFactors(balloonPerc,deposit,months,false);//PV factors
					var globalDeposit = getDeposit(monthlyPayment,balloonPerc,months,totalPVFactors,false);
					stepSliderDeposit.noUiSlider.set(globalDeposit);
				});
			break;
			default : ;
		}
	});

	$(objId+' .slider-input-wrap input').bind('keypress', function(e){
		var code=(e.keyCode ? e.keyCode : e.which);
		if (code==13)
			$(this).trigger('blur');
	});

	$(objId+' .slider-input-wrap input .slider-input-submit').click(function(){

		$(objId+' .slider-input-wrap input').trigger('blur');
	});

}

function enableTouchAnimation(objId,sliderObj,sliderFormat){
	//Hide slider
	$(objId+' .noUi-pips').hide();
	$(objId+' .slider-details-wrap, '+objId+' .noUi-background, '+objId+' .noUi-handle').toggleClass('show-input');
	$(objId+' .slider-step-header .slider-desc, '+objId+' .slider-step-header .slider-amount').toggleClass('show-input-text');
	$(objId+' .slider-step-header .slider-amount span').hide();

	$(objId+' .slider-input-wrap input').val(sliderFormat.from(sliderObj.noUiSlider.get()));
	//Show Input
	setTimeout(function(){
		$(objId+' .slider-step-header .slider-desc span').html('&nbsp;');
		$(objId+' .slider-input-wrap').show();
		$(objId+' .slider-input-wrap input').focus();
	}, 250);
}

function disableTouchAnimation(objId,objHtmlDesc){
	//Hide Input
	$(objId+' .slider-step-header .slider-desc span').html(objHtmlDesc);
	$(objId+' .slider-input-wrap').hide();
	//Show slider
	$(objId+' .slider-step-header .slider-amount span').show();
	$(objId+' .noUi-pips').show();
	$(objId+' .slider-details-wrap, '+objId+' .noUi-background, '+objId+' .noUi-handle').toggleClass('show-input');
	$(objId+' .slider-step-header .slider-desc, '+objId+' .slider-step-header .slider-amount').toggleClass('show-input-text');
}


/*
	CALCULATIONS
*/
//((((1 + p_interest_rate / 1200)**(12 / 365)) - 1) * 36500);
function getNACD(){
	BigNumber.config({ DECIMAL_PLACES: 40, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

	var baseNacd = globalInterestRate.dividedBy(new BigNumber(1200)).plus(1).toFixed(40);
	var expNacd = new BigNumber(12).dividedBy(new BigNumber(365)).toFixed(40);

	Decimal.set({ precision: 40 });
	var nacd = new Decimal(baseNacd).pow(expNacd);
	nacd = new BigNumber(nacd).minus(1);
	nacd = new BigNumber(nacd).times(36500);

	return new BigNumber(nacd).toFixed(40);
}
//v_pv_factor := (1 /(1 + v_nacd_orig_agreed_rate / 36500) ** v_no_days);
function getPVFactor(numberOfDays){
	BigNumber.config({ DECIMAL_PLACES: 40, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

	var pvFactorBase = new BigNumber(globalNACD).dividedBy(new BigNumber(36500)).plus(1).toFixed(40);

	Decimal.set({ precision: 40 });
	var pvFactor = new Decimal(pvFactorBase).pow(numberOfDays);
	pvFactor = new BigNumber(1).dividedBy(new BigNumber(pvFactor)).toFixed(40);

	return new BigNumber(pvFactor).toFixed(40);
}
//b_pv_factor= ballon_amount/ (1 + v_nacd_orig_agreed_rate / 36500) ** v_no_days;
function getBallonPVFactor(numberOfDays,ballonAmt){

	BigNumber.config({ DECIMAL_PLACES: 40, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

	var pvFactorBase = new BigNumber(globalNACD).dividedBy(new BigNumber(36500)).plus(1).toFixed(40);

	Decimal.set({ precision: 40 });
	var pvFactor = new Decimal(pvFactorBase).pow(numberOfDays);
	var ballonPVFactor = new BigNumber(ballonAmt).dividedBy(new BigNumber(pvFactor)).toFixed(40);

	return new BigNumber(ballonPVFactor).toFixed(40);
}
//Calculate accumilated PV Factors according to the number of installments (months)
function getTotalPVFactors(balloonPerc,deposit,numberOfInstalments,debug){

	BigNumber.config({ DECIMAL_PLACES: 40, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

	var numDays = 0;
	var balloonPVFactors = 0;
	var tmpStartDate,tmpNextInstalmentDate;
	var depositPerc = (deposit/globalCashPrice)*100;

	//Check if balloon payment > 0 then exclude 1 month
	if (balloonPerc>0)
		numberOfInstalments--;

	/* DEBUG */
	if (debug){
		document.write('Principle Debt: '+globalCashPrice+"<br />");
		document.write('Loan Amount: '+getLoanAmount(deposit)+"<br />");
		document.write('Deposit: '+deposit+' ('+depositPerc+"%)<br />");
		document.write('Balloon: '+globalBalloonAmt+' ('+balloonPerc+"%)<br />");
		document.write('Interest Rate: '+globalInterestRate+"<br />");
		document.write('NACD: '+globalNACD+"<br /><br />");
	}

	/*if (debug){
		document.write('Principle Debt: '+globalCashPrice+"<br />");
		document.write('Set Installment: '+globalInitialInstallment+"<br />");
		document.write('Balloon: '+globalBalloonAmt+' ('+balloonPerc+"%)<br />");
		document.write('Interest Rate: '+globalInterestRate+"<br />");
		document.write('NACD: '+globalNACD+"<br /><br />");
	}*/

	//Calculate first month
	numDays = nextInstalmentDateFormat.diff(globalStartDateFormat,'days');

	if (numDays<15){
		nextInstalmentDate = moment(installmentDate).add(1,'M');

		globalStartDateFormat = moment(globalStartDate.format("YYYY-MM-DD"));
		nextInstalmentDateFormat = moment(nextInstalmentDate.format("YYYY-MM-DD"));

		numDays += nextInstalmentDateFormat.diff(globalStartDateFormat,'days');
	}

	var totalPVFactors = pvFactor = new BigNumber(getPVFactor(numDays)).toFixed(40);

	/* DEBUG */
	if (debug){
		document.write('Number Of Instalments: '+numberOfInstalments+'<br/>');
		document.write('Number Of Days: '+numDays+'<br/>');
		document.write('Start Date: '+globalStartDate.toDate()+'<br/>');
		document.write('Installment Date: '+nextInstalmentDate.toDate()+'<br/>');
		document.write('PV Factor: '+pvFactor+'<br/><br/>');
	}

	tmpNextInstalmentDate = nextInstalmentDate;

	for (var i=1;i<numberOfInstalments;i++){ //Have already calculated initial

		tmpStartDate = moment(tmpNextInstalmentDate);
		tmpStartDateFormat = moment(tmpStartDate.format("YYYY-MM-DD"));

		tmpNextInstalmentDate = moment(tmpStartDate).add(1,'M');
		tmpNextInstalmentDateFormat = moment(tmpNextInstalmentDate.format("YYYY-MM-DD"));

		numDays += tmpNextInstalmentDateFormat.diff(tmpStartDateFormat,'days');

		pvFactor = new BigNumber(getPVFactor(numDays)).toFixed(40);
		totalPVFactors = new BigNumber(totalPVFactors).plus(pvFactor).toFixed(40);

		/* DEBUG */
		if (debug){
			document.write('Number Of Instalments: '+parseInt(numberOfInstalments-i)+'<br/>');
			document.write('Number Of Days: '+numDays+'<br/>');
			document.write('Start Date: '+tmpStartDate.toDate()+'<br/>');
			document.write('Installment Date: '+tmpNextInstalmentDate.toDate()+'<br/>');
			document.write('PV Factor: '+pvFactor+'<br/><br/>');
		}
	}

	//Calculate accumilated PV Factors according to the number of installments (months)
	if (balloonPerc>0){

		tmpStartDate = moment(tmpNextInstalmentDate);
		tmpStartDateFormat = moment(tmpStartDate.format("YYYY-MM-DD"));

		tmpNextInstalmentDate = moment(tmpStartDate).add(1,'M');
		tmpNextInstalmentDateFormat = moment(tmpNextInstalmentDate.format("YYYY-MM-DD"));

		var balloonNumDays = numDays + tmpNextInstalmentDateFormat.diff(tmpStartDateFormat,'days');
		var ballonAmt = getBalloonAmount(balloonPerc);//Get balloon amount
		balloonPVFactors = getBallonPVFactor(balloonNumDays,ballonAmt);

	}

	/* DEBUG */
	if (debug){
		document.write('Total PV Factors: '+totalPVFactors+'<br/>');
		document.write('Total Balloon Factor: '+balloonPVFactors+'<br/>');
		document.write('Monthly Installment: '+globalMonthlyPayment+'<br/>');
		document.write('Final Monthly Installment: '+numberFormat.from(stepSliderAmount.noUiSlider.get()).toFixed(2)+'<br/><br/>');
		document.write('COMPLETE');
	}

	/*if (debug){
		document.write('Total PV Factors: '+totalPVFactors+'<br/>');
		document.write('Total Balloon Factor: '+balloonPVFactors+'<br/>');
	}*/

	return [numDays,totalPVFactors,balloonPVFactors];
}


//Get monthly installment
function getInstallment(balloonPerc,totalPVFactors,deposit,months,debug){

	BigNumber.config({ DECIMAL_PLACES: 40, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

	var principleDebt = 0;
	var balloonPVFactor = 0;
	var numberOfDays = totalPVFactors[0]; //Total number of days
	var totalPV = totalPVFactors[1]; //Total PV factors
	var loanAmount = getLoanAmount(deposit); //Loan amount
	var ballonAmt = globalBalloonAmt = getBalloonAmount(balloonPerc); //Balloon Amount

	if (ballonAmt>0){
		balloonPVFactor = totalPVFactors[2];
		principleDebt = loanAmount - parseFloat(balloonPVFactor);
	}
	else
		principleDebt = loanAmount - ballonAmt; //New principle debt

	var divide = parseFloat(principleDebt / totalPV);

	return divide;
}

function getLoanAmount(deposit){
	var loanAmount = (globalCashPrice-deposit) + globalInitiationFees;
	return loanAmount;
}

/*function getBalloonAmount(balloonPerc,deposit){
	var loanAmount = getLoanAmount(deposit);
	var balloonAmount = (loanAmount*balloonPerc)/100;
	return balloonAmount;
}*/
function getBalloonAmount(balloonPerc){
	var balloonAmount = (globalRetailPrice*balloonPerc)/100;
	return balloonAmount;
}

function getDeposit(monthlyPayment,balloonPerc,months,totalPVFactors,debug){

	var balloonPVFactor = 0;
	var numberOfDays = totalPVFactors[0];
	var totalPV = totalPVFactors[1];
	var balloonPVFactor = totalPVFactors[2];

	/*
		Get principle debt
	*/
	var reversePrincipleDebt = monthlyPayment*totalPV;
	/*
		Get loan amount
	*/
	var reverseLoanAmount = (Math.floor(reversePrincipleDebt)).toFixed(1);
	if (reverseLoanAmount!=globalCashPrice)
		reverseLoanAmount = (Math.floor(reversePrincipleDebt/1)*1).toFixed(1);
	if (reverseLoanAmount!=globalCashPrice)
		reverseLoanAmount = (Math.ceil(reversePrincipleDebt)).toFixed(1);
	if (reverseLoanAmount!=globalCashPrice)
		reverseLoanAmount = (Math.ceil(reversePrincipleDebt/1)*1).toFixed(1);
	if (reverseLoanAmount!=globalCashPrice)
		reverseLoanAmount = (Math.round(reversePrincipleDebt)).toFixed(1);
	if (reverseLoanAmount!=globalCashPrice)
		reverseLoanAmount = (Math.round(reversePrincipleDebt/1)*1).toFixed(1);

	var reverseDeposit = (globalCashPrice - reverseLoanAmount) + globalInitiationFees;
	reverseDeposit = reverseDeposit-balloonPVFactor;
	reverseDeposit = (Math.round(reverseDeposit/10)*10).toFixed(2);

	if (debug){
		var depositPerc = (reverseDeposit/globalCashPrice)*100;
		document.write('Deposit: '+reverseDeposit+' ('+depositPerc+"%)<br /><br />");
		document.write('COMPLETE<br/>');
	}

	//Max
	if (reverseDeposit<0){
		var minDepositInstallment = getInstallment(balloonPerc,totalPVFactors,0,months,false);
		stepSliderAmount.noUiSlider.set(minDepositInstallment);

		$('#slider-step-amount .slider-popup-wrap .popup-value').html('above '+stepSliderAmount.noUiSlider.get());
		$('#slider-step-amount .slider-popup-wrap').show();
		//Fade out
		setTimeout(function(){ $('#slider-step-amount .slider-popup-wrap').fadeOut(); }, 5000);
	}

	if (reverseDeposit>globalMaxDeposit){
		var maxDepositInstallment = getInstallment(balloonPerc,totalPVFactors,globalMaxDeposit,months,false);
		stepSliderAmount.noUiSlider.set(maxDepositInstallment);

		$('#slider-step-amount .slider-popup-wrap .popup-value').html('below '+stepSliderAmount.noUiSlider.get());
		$('#slider-step-amount .slider-popup-wrap').show();
		//Fade out
		setTimeout(function(){ $('#slider-step-amount .slider-popup-wrap').fadeOut(); }, 5000);
	}

	return reverseDeposit;
}

function loadScoringGridItems(termItems){
	/*
		Get Term Items
	*/
	globalTermItems = termItems;

	if (loopCount==0)
		updateSliderRange();

	var scoreGridTerm = globalTermItems[0].months;

	//Set term range
	$.each( globalTermItems, function(key,value) {
		if (monthsFormat.from(stepSliderMonths.noUiSlider.get())>=globalTermItems[0].months)
			scoreGridTerm = globalTermItems[0].months;
		else if (monthsFormat.from(stepSliderMonths.noUiSlider.get())<=globalTermItems[globalTermItems.length-1].months)
			scoreGridTerm = globalTermItems[globalTermItems.length-1].months;
		else if (monthsFormat.from(stepSliderMonths.noUiSlider.get())<globalTermItems[key].months)
			scoreGridTerm = globalTermItems[key+1].months;
		//else
			//scoreGridTerm = globalTermItems[key].months;
	});

	$.each( globalTermItems, function(key,value) {

		if (globalTermItems[key].months==scoreGridTerm){
			/*
				Get Deposit Items
			*/
			//alert(globalTermItems[key].months);
			globalDepositItems = globalTermItems[key].deposit;
			spifMaxPercentage = globalTermItems[key].spifMaxPercentage;
		}
	});

}

function setMonthlySliderLimits(){

	globalMaxTerm = globalTermItems[0].months;
	globalMinTerm = globalTermItems[globalTermItems.length-1].months;

	/*
		Set Months Limits
	*/
	if ( monthsFormat.from(stepSliderMonths.noUiSlider.get()) < globalMinTerm ) {//Show popups
		$('#slider-step-months .slider-popup-wrap .popup-value').html('below '+monthsFormat.to(parseInt(globalMinTerm)));
		$('#slider-step-months .slider-popup-wrap').show();
		//Fade out
		setTimeout(function(){ $('#slider-step-months .slider-popup-wrap').fadeOut(); }, 5000);
	}
	else if ( monthsFormat.from(stepSliderMonths.noUiSlider.get()) > globalMaxTerm ) {//Show popups
		$('#slider-step-months .slider-popup-wrap .popup-value').html('above '+monthsFormat.to(parseInt(globalMaxTerm)));
		$('#slider-step-months .slider-popup-wrap').show();
		//Fade out
		setTimeout(function(){ $('#slider-step-months .slider-popup-wrap').fadeOut(); }, 5000);
	}
	/*else if ( monthsFormat.from(stepSliderMonths.noUiSlider.get()) > globalMinTerm ) {//Hide popups
		$('#slider-step-months .slider-popup-wrap').hide();
	}*/

	//Cap limits on sliders
	if ( monthsFormat.from(stepSliderMonths.noUiSlider.get()) < globalMinTerm ) {
		stepSliderMonths.noUiSlider.set(globalMinTerm);
	} else if ( monthsFormat.from(stepSliderMonths.noUiSlider.get()) > globalMaxTerm ) {
		stepSliderMonths.noUiSlider.set(globalMaxTerm);
	}

	/*
		Set Deposit Limits
	*/
	setDepositSliderLimits();

}

function setDepositSliderLimits(){

	/*
		Get Deposit Items
	*/
	$.each( globalDepositItems, function(key,value) {

		globalMaxDeposit = globalDepositItems[0].percentage;
		//Calculate max deposit value for slider
		globalMaxDeposit = (globalMaxDeposit*globalCashPrice)/100;

		globalMinDeposit = globalDepositItems[globalDepositItems.length-1].percentage;
		//Calculate min deposit value for slider
		globalMinDeposit = (globalMinDeposit*globalCashPrice)/100;

		/*
			Set Deposit Limits
		*/
		if ( depositFormat.from(stepSliderDeposit.noUiSlider.get()) > globalMaxDeposit ) {//Show popups
			$('#slider-step-deposit .slider-popup-wrap .popup-value').html('The amount of '+depositFormat.to(parseFloat(globalMaxDeposit))+' is the maximum');
			$('#slider-step-deposit .slider-popup-wrap').show();
			//Fade out
			setTimeout(function(){ $('#slider-step-deposit .slider-popup-wrap').fadeOut(); }, 5000);
		}
		else if ( depositFormat.from(stepSliderDeposit.noUiSlider.get()) < globalMinDeposit ) {//Show popups
			$('#slider-step-deposit .slider-popup-wrap .popup-value').html('The amount of '+depositFormat.to(parseFloat(globalMinDeposit))+' is the minimum');
			$('#slider-step-deposit .slider-popup-wrap').show();
			//Fade out
			setTimeout(function(){ $('#slider-step-deposit .slider-popup-wrap').fadeOut(); }, 5000);
		}
		/*else if ( depositFormat.from(stepSliderDeposit.noUiSlider.get()) < globalMaxDeposit ) {//Hide popups
			$('#slider-step-deposit .slider-popup-wrap').hide();
		}*/

		/*
			Set Deposit Limits
		*/
		if ( depositFormat.from(stepSliderDeposit.noUiSlider.get()) < globalMinDeposit ) {
			stepSliderDeposit.noUiSlider.set(globalMinDeposit);
		} else if ( depositFormat.from(stepSliderDeposit.noUiSlider.get()) > globalMaxDeposit ) {
			stepSliderDeposit.noUiSlider.set(globalMaxDeposit);
		}

		/*
			Get Deposit Percentage
		*/
		var depositPercentage = (depositFormat.from(stepSliderDeposit.noUiSlider.get())/globalCashPrice)*100;
		//Calculate deposit percentage max to match to score grid - rounded to one decimal place
		var maxDepositPercentage = (Math.floor(depositPercentage / 2.5) * 2.5).toFixed(1);

		/*
			Set Balloon Limits - check current deposit percentage
		*/
		if (parseFloat(globalDepositItems[key].percentage)<=maxDepositPercentage){
			globalBalloonItems = globalDepositItems[key].balloon;
			return false;
		}
	});

	/*
		Set Balloon Limits
	*/
	setBalloonSliderLimits();

}


function setBalloonSliderLimits(){

	loopCount++;

	BigNumber.config({ DECIMAL_PLACES: 40, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

	$.each( globalBalloonItems, function(key,value) {

		//Calculate max balloon value for slider
		globalMaxBalloon = globalBalloonItems[0].percentage;

		if (spifMaxPercentage !== "undefined" && spifMaxPercentage !== null && spifMaxPercentage < globalMaxBalloon )
			globalMaxBalloon = spifMaxPercentage;

		//Calculate min balloon value for slider
		globalMinBalloon = globalBalloonItems[globalBalloonItems.length-1].percentage;

		if (spifMaxPercentage !== "undefined" && spifMaxPercentage !== null && spifMaxPercentage > globalMinBalloon && spifMaxPercentage < globalMaxBalloon )
			globalMinBalloon = spifMaxPercentage;

		/*
			Set Balloon Limits
		*/
		if ( balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get()) > globalMaxBalloon ) {//Show popups
			$('#slider-step-payment .slider-popup-wrap .popup-value').html('On this deal '+balloonPaymentFormat.to(parseFloat(globalMaxBalloon))+' is the maximum');
			$('#slider-step-payment .slider-popup-wrap').show();
			//Fade out
			setTimeout(function(){ $('#slider-step-payment .slider-popup-wrap').fadeOut(); }, 5000);
		}
		else if ( balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get()) < globalMinBalloon ) {//Show popups
			$('#slider-step-payment .slider-popup-wrap .popup-value').html('On this deal '+balloonPaymentFormat.to(parseFloat(globalMinBalloon))+' is the minimum');
			$('#slider-step-payment .slider-popup-wrap').show();
			//Fade out
			setTimeout(function(){ $('#slider-step-payment .slider-popup-wrap').fadeOut(); }, 5000);
		}
		/*else if ( balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get()) < globalMaxBalloon ) {//Hide popups
			$('#slider-step-payment .slider-popup-wrap').hide();
		}*/

		//Cap limits on sliders
		if ( balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get()) < globalMinBalloon ) {
			stepSliderBalloonPayment.noUiSlider.set(globalMinBalloon);
		} else if ( balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get()) > globalMaxBalloon ) {
			stepSliderBalloonPayment.noUiSlider.set(globalMaxBalloon);
		}

		/*
			Get Ballon Percentage
		*/
		var balloonPercentage = balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get());
		//Calculate deposit percentage max to match to score grid - rounded to one decimal place
		var maxBalloonPercentage = (Math.floor(balloonPercentage / 2.5) * 2.5).toFixed(1);

		/*
			Get interest rate to update new NACD
		*/
		if (parseFloat(globalBalloonItems[key].percentage)<=maxBalloonPercentage){

			//Update on content page
			if ($("#linkedInterestRate").is(':checked')){
				globalInterestRate = new BigNumber(globalBalloonItems[key].linkedRate);
				//Set interest to "Linked" active on initial load on deal structure pages
    			$('#page-pre-approval .interest-rate .leftBtn .btnState input, #dealStructureChangesSettlement .interest-rate .leftBtn .btnState input').prop('checked',true);
				$('#page-pre-approval .interest-rate .leftBtn .btnState, #dealStructureChangesSettlement .interest-rate .leftBtn .btnState').addClass('activeBtnState');
			}
			else{
				globalInterestRate = new BigNumber(globalBalloonItems[key].fixedRate);
				//Set interest to "Linked" active on initial load on deal structure pages
    			$('#page-pre-approval .interest-rate .rightBtn .btnState input, #dealStructureChangesSettlement .interest-rate .rightBtn .btnState input').prop('checked',true);
				$('#page-pre-approval .interest-rate .rightBtn .btnState, #dealStructureChangesSettlement .interest-rate .rightBtn .btnState').addClass('activeBtnState');
			}

			globalNACD = getNACD();

			return false;
		}

	});

	/*
		Set min & max on monthly payment
	*/
	if (loopCount==1){
		//Max
		var tempTotalPVFactors = getTotalPVFactors(globalMinBalloon,globalMinDeposit,globalMinTerm,false);//PV factors
		var tempMaxInstallment = getInstallment(globalMinBalloon,tempTotalPVFactors,globalMinDeposit,globalMinTerm,false);
		//var tempMaxInstallment = (Math.ceil(tempMaxInstallment / 1000) * 1000);

		//Min
		var tempTotalPVFactors = getTotalPVFactors(globalMaxBalloon,globalMaxDeposit,globalMaxTerm,false);//PV factors
		var tempMinInstallment = getInstallment(globalMaxBalloon,tempTotalPVFactors,globalMaxDeposit,globalMaxTerm,false);
		//var tempMinInstallment = (Math.floor(tempMinInstallment / 1000) * 1000);

		stepSliderAmount.noUiSlider.updateOptions({
			range: {
				'min': tempMinInstallment,
				'max': tempMaxInstallment
			}
		});
	}

	/*
		Update Monthly Payment
	*/
	var tempMonths = monthsFormat.from(stepSliderMonths.noUiSlider.get());//months
	var tempDeposit = depositFormat.from(stepSliderDeposit.noUiSlider.get());//deposit
	var balloonPerc = balloonPaymentFormat.from(stepSliderBalloonPayment.noUiSlider.get());//balloon perc

	globalTotalPVFactors = getTotalPVFactors(balloonPerc,tempDeposit,tempMonths,false);//PV factors
	globalMonthlyPayment = getInstallment(balloonPerc,globalTotalPVFactors,tempDeposit,tempMonths,true);

	stepSliderAmount.noUiSlider.set(globalMonthlyPayment.toFixed(2));
}


function updateSliderRange(){

	var scoreGridValues = Array();

	//Defaulf values - dont check min and max
	var defaultRanges = [24, 36, 48, 54, 60];
	var defaultRangeValues = ['20%','40%','60%','70%','80%'];

	$.each( globalTermItems, function(key,value) {
		if ($.inArray(globalTermItems[key].months,defaultRanges)){
			scoreGridValues.push(globalTermItems[key].months);
		}
	});

	scoreGridValues.sort(function(a, b) {
		return a - b;
	});

	//Add minimums
	var rangeObject = { 'min':12 };

	for(var key in defaultRanges) {
		if (defaultRanges[key]<scoreGridValues[0]){
			var valuePos = defaultRanges.indexOf(parseInt(defaultRanges[key]));
			if (valuePos!=-1){
				rangeObject[defaultRangeValues[valuePos]] = parseInt(defaultRanges[key]);
			}
		}
	}

	//Add scoregrid values
	for(var key in scoreGridValues) {
		if ($.inArray(scoreGridValues[key],defaultRanges)){
			var valuePos = defaultRanges.indexOf(parseInt(scoreGridValues[key]));
			if (valuePos!=-1){
				rangeObject[defaultRangeValues[valuePos]] = parseInt(scoreGridValues[key]);
			}
		}
	}

	//Add maximum
	rangeObject['max'] = 72;

	stepSliderMonths.noUiSlider.updateOptions({
		range: rangeObject
	});
}

$(document).ready(function() {
	$('#page-pre-approval #dealStructureCashPrice, #dealStructureChangesSettlement #dealStructureCashPrice').html(globalCashPrice.toFixed(2)).formatCurrency({useHtml: true});

	/*
		Set default interest rate on LINKED
	*/
	$('#page-pre-approval .interest-rate .leftBtn .btnState, #dealStructureChangesSettlement .interest-rate .leftBtn .btnState').trigger('click').addClass('activeBtnState');
	/*
		Set default interest rate on FIXED
	*/
	//$('#page-pre-approval .interest-rate .rightBtn .btnState, #dealStructureChangesSettlement .interest-rate .rightBtn .btnState').trigger('click').addClass('activeBtnState');
	/*
		Overlay button close
	*/
    $('.btn-close-orange').click(function() {
        $('.overlay-close.btn-close').trigger('click');
    });
	/*
		On change of interest rate between Fixed/Linked
	*/
	$("#page-pre-approval .interest-rate .btnState, #dealStructureChangesSettlement .interest-rate .btnState").click(function(){
		scoringGrid.then(function(data) {
			setMonthlySliderLimits();
		});
	});
	/*
		Reset Slider
	*/
	$('#trigger-reset').click(function(){
		//stepSliderDeposit.noUiSlider.reset();
		stepSliderMonths.noUiSlider.set( 72 );
		stepSliderDeposit.noUiSlider.set( 0 );
		stepSliderBalloonPayment.noUiSlider.set( 0 );
	});
});
