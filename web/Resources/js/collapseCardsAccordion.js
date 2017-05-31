$(document).ready(function() {

    var clearTitle = function() {
        $('.collapse-card .collapse-card__heading').each(function() {
            $('.expandedTitle', this).hide();
        });
    }

    clearTitle();

    /*
    	START NORMAL COLLAPSE CARD *****
    */

    $('#collapseCardWithoutTick .collapse-card .collapse-card__heading, #accordionCollapseOver .collapse-card .collapse-card__heading').on('click', function() {
        clearTitle();
        if ($('.collapse-card', this).hasClass('active')) {
            $('.collapsedTitle', this).hide();
            $('.collapsedSpan', this).hide();
            $('.expandedTitle', this).show();
        } else {
            $('.expandedTitle', this).hide();
            $('.collapsedTitle', this).show();
            $('.collapsedSpan', this).show();
        }
    });


    var clearIcons = function() {
        $('#collapseCardWithoutTick .collapse-card .collapse-card__heading, #accordionCollapseOver .collapse-card .collapse-card__heading').each(function() {
            $('.collapse-card__body .chips').hide();
            $('.material-icons,.fa,.arrow-icon-right', this).show();
            $('#drawerToggle').addClass('unhide');
            $('#drawerToggleUp').addClass('unhide');
        });
    }

    clearIcons();

    $('#collapseCardWithoutTick .collapse-card .collapse-card__heading, #accordionCollapseOver .collapse-card .collapse-card__heading').on('click', function() {
        clearIcons();
        if ($('.collapse-card').hasClass('active')) {
            $('.btn-close', this).show();
            $('.material-icons,.fa,.arrow-icon-right', this).hide();
        } else {
            $('.btn-close', this).hide();
            $('.material-icons,.fa,.arrow-icon-right', this).show();
            if ($('polyline').hasClass('success__check') && ($('.property-card .chip ').hasClass('selected-chip'))) {
                $('.material-icons,.fa,.arrow-icon-right', this).hide();
                $('.btn-close', this).hide();
                animate();
            } else {
                $('.btn-close', this).hide();
                $('.material-icons,.fa,.arrow-icon-right', this).show();
            }

        }
    });

    $('#continue-cash-offer').on('click', function() {
        $('#trade-in-car-offer-yes').show();
        if ($('.collapse-card').hasClass('active')) {
            $('.collapse-card').removeClass('active');
            $('.collapse-card .collapse-card__body').slideUp();

        }
    });
    $('#accordionCollapseOver .collapse-card__heading .btn-close', this).hide();
    $('#collapseCardWithoutTick .collapse-card__heading, #accordionCollapseOver .collapse-card__heading').each(function() {
        $(this).on('click', function() {
            $(this).parent().children().each(function() {
                $(this).removeClass('done');
            });
            $(this).toggleClass('done');
        });
    });

    var closeProfileCollapsables = function() {
        $('#collapseCardWithoutTick .collapse-card, #accordionCollapseOver .collapse-card ').each(function() {
            if ($('.collapse-card__body', this).is(':visible')) {
                $('.collapse-card__heading', this).trigger('click');
            }
        });
    }

    $('#collapseCardWithoutTick .collapse-card .collapse-card__heading, #accordionCollapseOver .collapse-card .collapse-card__heading').not('#collapseCardWithoutTick .collapse-card.collapse-card-external-cta .collapse-card__heading').on('click', function() {

        if ($(this).parent().find('.collapse-card__body').is(':visible')) {
            $('.btn-close', this).hide();
            $('.material-icons,.arrow-icon-right', this).show();
            $('.arrow-icon-right', this).show();
            /*
            	Close editable text fields
            */
            $(this).parent().find('.collapse-card__body .row-line-item').show();
            $(this).parent().find('.collapse-card__body .row-line-item-editable').each(function() {
                $('input', this).val($(this).prev().find('.text-right').html());
            });
            //Close fields
            $(this).parent().find('.collapse-card__body .row-line-item').show();
            $(this).parent().find('.collapse-card__body .row-line-item-editable').hide();

            $(this).parent().find('.collapse-card__body .edit-btn').show();
            $(this).parent().find('.collapse-card__body .update-btn').hide();
            $(this).parent().find('.collapse-card__body .cancel-btn').hide();

            /*
            	Profile page
            */
            $(this).parent().find('.collapse-card__heading .header-division').show();
            $(this).parent().find('.cancel-car-btn').trigger('click');
            $(this).parent().find('.collapse-card__heading .btn-close.vehicle-item-close').css('top', '-45px');

        } else {
            closeProfileCollapsables();
            $('.btn-close', this).show();
            $('.material-icons,.arrow-icon-right', this).hide();
            $('.arrow-icon-right', this).hide();
            /*
            	Profile page
            */
            $(this).parent().find('.collapse-card__heading .header-division').hide();
            //$(this).parent().find('.collapse-card__heading .icon-wrap').hide();
            $(this).parent().find('.collapse-card__heading .btn-close.vehicle-item-close').css('top', '-25px');
            $(this).parent().find('.collapse-card__heading .btn-close.quote-item-close').css('top', '-50px');
        }
    });


    /*
    	END NORMAL COLLAPSE CARD *****
    */

    /*
    	START COLLAPSE CARD WITH TICK *****
    */
    var clearTickIcons = function(submitAll) {
        var complete = false;
        $('#collapseCardWithTick .collapse-card .collapse-card__heading').each(function() {
            //$('.btn-close',this).hide();

            if ($('polyline', this).hasClass('success__check') && validateCardDetails($(this).parent().attr('id'))) {
                $(this).parent().removeClass('collapse-card-invalid'); //Action control on submission
                $('.material-icons,.arrow-icon-right', this).hide();
                $('.btn-close', this).hide();

                //animate() function
                if ($('polyline', this).attr('points')) {
                    $('polyline', this).css('stroke-dashoffset', '0');
                    $('polyline', this).attr('points', "33.9,57.3 48,71.7 74.8,36.3 ");
                } else {
                    var check = $('.success__check', this);
                    $('polyline', this).attr("points", "33.9,57.3 48,71.7 74.8,36.3 ");
                    Velocity(check, {
                        'stroke-dashoffset': 400
                    }, 0);
                    Velocity(check, {
                        'stroke-dashoffset': 0
                    }, {
                        duration: 500,
                        delay: 0,
                        easing: 'easeInQuint'
                    });
                }

                $('.card-text', this).show();
                $('.collapse-card__title', this).addClass('ticked');
                $('polyline', this).show();

				$(this).parent().removeClass('errorcard');

                return complete = true;
            } else {
                //Action control for highlighting multiple
                $tempParent = $(this).parent();
                $('input[type="text"],select', $(this).parent().find('.collapse-card__body')).each(function() {
                    if ($(this).val() != '' && $(this).val() != null && !$(this).hasClass('select-dropdown')) {
                        $tempParent.addClass('collapse-card-invalid');
                    }
                });
                //Action control on submission
                //$('#userVerification #pushDownNotifications').slideUp();
                if (submitAll) {
                    $(this).parent().addClass('collapse-card-invalid');
                    //Expand invalid card
                    $tmpCard = $(this).parent().attr('id');
                    //Open invalid card
                    if (!$(this).parent().hasClass('active')) {
                        $(this).trigger('click');
                        $('.btn-close', this).show();
                        //Trigger popup
                        //alert("hello");
                        /*$('#userVerification #pushDownNotifications').slideDown(300);*/
                        /*Materialize.toast('<div class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>You’ve missed something.</h4><p>Please complete the application before continuing on your road to finance.</p>', 5000);*/
                    }

                    return complete = false;
                } else
                    $('.btn-close', this).hide();

                if ($('polyline', this).attr('points')) {

                    //$('polyline',this).show();
                } else {
                    $('.material-icons,.fa,.arrow-icon-right', this).show();
                    $('.card-text', this).hide();
                }
            }
        });

        return complete;
    }

    clearTickIcons();
    //reviewDetails - open first card
    $('#reviewDetails .collapse-card:nth-child(1) .collapse-card__heading, #userVerification .collapse-card:nth-child(1) .collapse-card__heading').trigger('click');
    $('#reviewDetails .collapse-card:nth-child(1) .btn-close, #userVerification .collapse-card:nth-child(1) .btn-close').show();
    $('#reviewDetails .collapse-card:nth-child(1) .arrow-icon-right, #userVerification .collapse-card:nth-child(1) .arrow-icon-right, .fa').hide();
    //financeApplication - open first card
    if ($("success__check").css('display') != "none") {
        setTimeout(
            function() {
                $("#" + cardId + " .arrow-icon-right").addClass("hide");
            }, 500);

    } else {
        setTimeout(
            function() {
                $("#" + cardId + " .arrow-icon-right").removeClass("hide");
            }, 500);
    }
    $('#finance-app-financial-details').addClass('active');
    $('#finance-app-financial-details .btn-close').show();
    $('#finance-app-financial-details .arrow-icon-right,.fa').hide();
    $('#finance-app-financial-details polyline').hide();
    $('#finance-app-financial-details .card-text').hide();
    $('#finance-app-financial-details .collapse-card__body').slideDown();

    $('#collapseCardWithTick .collapse-card, #accordionCollapseOver .collapse-card').each(function() {

        $('.collapse-card__heading', this).on('click', function() {
            clearTickIcons();

            /*
            	Finance Application
            */

            if ($(this).parent().attr('id').indexOf("finance-app") != -1 && !$(this).parent().hasClass('active')) {
                $('.btn-close', this).show();
                $('.card-text', this).hide();
                $('.arrow-icon-right,.fa', this).hide();
                if (!!$('polyline', this).attr('points'))
                    $('polyline', this).hide();
            } else if ($(this).parent().attr('id').indexOf("finance-app") != -1) {
                $('.btn-close', this).hide();
                $('.arrow-icon-right,.fa', this).show();
                //$('polyline',this).show();
                if ($('polyline', this).hasClass('success__check') && validateCardDetails($(this).parent().attr('id'))) {
                    //$(this).parent().removeClass('collapse-card-invalid');
                    $('.arrow-icon-right', this).hide();
                    $('.btn-close', this).hide();
                    //animate() function
                    /*var check = $('.success__check',this);
                    $('polyline',this).attr("points", "33.9,57.3 48,71.7 74.8,36.3 ");
                    Velocity(check, { 'stroke-dashoffset': 400 }, 0);
                    Velocity(check, { 'stroke-dashoffset': 0 }, { duration: 500, delay: 0, easing: 'easeInQuint'});*/

                } else {
                    //$(this).parent().addClass('collapse-card-invalid');
                    $('.btn-close', this).hide();
                    $('.arrow-icon-right.fa', this).show();
                }
            } else if ($(this).parent().hasClass('active')) {
                $('.btn-close', this).show();
                /*lugi disabled this, it was conflicting with reviewDetail pages and i dont know why this was put
                $('.collapse-card__body .btn-orange').show();
                $('.collapse-card__body .chips').show();*/
                $('.card-text', this).hide();
                $('.arrow-icon-right,.fa', this).hide();
                if (!!$('polyline', this).attr('points'))
                    $('polyline', this).hide();
                    $('.button-wrapper', this).removeClass('hide').fadeIn(1000);
            } else {
                $('.btn-close', this).hide();
                $('.arrow-icon-right,.fa', this).show();
                /*lugi disabled this, it was conflicting with reviewDetail pages and i dont know why this was put
                $('.collapse-card__body .btn-orange').show();
                $('.collapse-card__body .chips').hide();*/

                //$('polyline',this).show();
                if ($('polyline', this).hasClass('success__check') && validateCardDetails($(this).parent().attr('id'))) {
                    //$(this).parent().removeClass('collapse-card-invalid');
                    $('.arrow-icon-right', this).hide();
                    $('.btn-close', this).hide();
                    /*lugi disabled this, it was conflicting with reviewDetails and i dont know why this was put
                    $('.collapse-card__body .btn-orange').hide();*/
                    //animate() function
                    /*var check = $('.success__check',this);
                    $('polyline',this).attr("points", "33.9,57.3 48,71.7 74.8,36.3 ");
                    Velocity(check, { 'stroke-dashoffset': 400 }, 0);
                    Velocity(check, { 'stroke-dashoffset': 0 }, { duration: 500, delay: 0, easing: 'easeInQuint'});*/

                } else {
                    //$(this).parent().addClass('collapse-card-invalid');
                    $('.btn-close', this).hide();
                    //$('#wrapper-one').addClass('hide').fadeIn(1000);
                    /*lugi disabled this, it was conflicting with reviewDetail pages and i dont know why this was put
                    $('.collapse-card__body .btn-orange').hide();*/
                    $('.arrow-icon-right,.fa', this).show();
                }
            }
        });

        /*
        	Orange button clicked - If validating per card
        */


        var cardId = $(this).attr('id');
        $('.btn-orange', this).on('click', function() {
            if ($(this).hasClass('btn-submit-all')) { //If submitting final button
                if (clearTickIcons(true)) { //If all valid then check terms and conditions
                    $('#' + cardId + ' .collapse-card__heading').trigger('click'); //Close last card
                    if (!$('#terms-check-box-wrap .terms-check-box input[type="checkbox"]').prop('checked')) {
                        //$('#terms-check-box-wrap .terms-additional a#trigger-overlay').trigger('click');
                        /*var triggerBttn2 = document.getElementById('trigger-overlay-terms');
                        triggerBttn2.addEventListener( 'click', toggleOverlay );
                        $('#trigger-overlay-terms').trigger('click');*/
                    } else
                        $('#collapseCardWithTick form').submit();
                }
            } else {
                //alert("cardId " + cardId);
                $('#' + cardId + ' .collapse-card__heading').trigger('click');
                var nextCard = $('#' + cardId).next().attr('id');
                //alert("nextCard " + nextCard);
                $('#' + nextCard + ' .collapse-card__heading').trigger('click');

            }

        });

        /*
        	If only one button for submit all and not validating per card
        */
        var cardId = $(this).attr('id');

    });

    $('.btn-orange.btn-submit-all').on('click', function() {
        if (clearTickIcons(true)) { //If all valid then check terms and conditions
            if ($('#terms-check-box-wrap .terms-check-box input[type="checkbox"]').prop('checked')) {
                //$('#terms-check-box-wrap .terms-additional a#trigger-overlay').trigger('click');
                /*var triggerBttn2 = document.getElementById('trigger-overlay-terms');
                triggerBttn2.addEventListener( 'click', toggleOverlay );*/

                var tmpModal = document.getElementById('trigger-overlay-review');
                tmpModal.click();

            }
            /*else
            	$('#collapseCardWithTick form').submit();*/

        }

        collapseCardOne();
        collapseCardTwo();
        collapseCardThree();
        collapseCardFour();
        collapseCardFive();
    });

    /*
    	END COLLAPSE CARD WITH TICK *****
    */

});


function validateCardDetails(cardId) {

    var valid = false;

    switch (cardId) {

        case 'review-property-card':
            valid = validateReviewPropertyCard(cardId);
            break;

        case 'review-address-details':
            valid = validateReviewAddressDetails(cardId);
            break;

        case 'review-marital-status':
            valid = validateReviewMaritalStatus(cardId);
            break;

        case 'review-occupation':
            valid = validateReviewOccupation(cardId);
            break;

        case 'review-financial-details':
            valid = validateReviewFinancialDetails(cardId);
            break;

        case 'finance-app-financial-details':
            valid = true; //validateFinanceAppFinancialDetails(cardId);
            break;
        case 'finance-app-employment-details':
            valid = validateFinanceAppEmploymentDetails(cardId);
            break;
        case 'finance-app-address-details':
            valid = validateFinanceAppAddressDetails(cardId);
            break;
        case 'finance-app-personal-details':
            valid = validateFinanceAppPersonalDetails(cardId);
            break;
        case 'user-verification-question-0':
            valid = validateVerificationVehicleAssetFinance(cardId);
            break;
        case 'user-verification-question-1':
            valid = validateVerificationStoreCards(cardId);
            break;
        case 'user-verification-question-2':
            valid = validateVerificationPersonalLoans(cardId);
            break;
        case 'user-verification-question-3':
            valid = validateVerificationCreditCards(cardId);
            break;
        case 'user-verification-question-4':
            valid = validateVerificationHomeLoans(cardId);
            break;

        default:
			/*
				2017-04-19 Added by Kamo
			*/
			valid = validateSettlementAccount(cardId);
 			break;
    }
    return valid;

}

function validateReviewPropertyCard(cardId) {

    if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip'))
        return true;

    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateReviewAddressDetails(cardId) {
    var addressAllHaveClass = $('.card-two .compulsory-field').length == $('.card-two .compulsory-field.LV_valid_field').length;
    if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        //Validate according to selected chip
        if ($('input[name=option-name-1]:checked').length > 0 || $('div[name=option-name-pill-1]').hasClass("selected-chip") ||
            ($('input[name=property]:checked').length > 0 && addressAllHaveClass == true))
            if ($('#years').val() != null && $('#months').val() != null)
                return true;
    }
    /*var allHaveClass = $('#form .compulsory-field').length == $('#form .compulsory-field.yourclass').length;
    alert(allHaveClass);*/

    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateReviewMaritalStatus(cardId) {

    if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        //Validate according to selected chip
        if ($('#' + cardId + ' .chips .chip.selected-chip').attr('id') == 'married') {
            if ($('#' + cardId + ' #maritalStatus').val() != "" && $('#' + cardId + ' #maritalStatus').val() != null)
                return true;
        }

        if ($('#' + cardId + ' .chips .chip.selected-chip').attr('id') == 'widowed' || $('#' + cardId + ' .chips .chip.selected-chip').attr('id') == 'divorced' || $('#' + cardId + ' .chips .chip.selected-chip').attr('id') == 'single')
            return true;

    }

    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateReviewOccupation(cardId) {
    var occupationAllHaveClass = $('.card-four .compulsory-field').length == $('.card-four .compulsory-field.LV_valid_field').length;
    if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip') ||
        ($('#' + cardId + ' #industryCategory').val() != "" && $('#' + cardId + ' #industryCategory').val() != null &&
            $('#' + cardId + ' #industry').val() != "" && $('#' + cardId + ' #industry').val() != null &&
            $('#' + cardId + ' #occupation').val() != "" && $('#' + cardId + ' #occupation').val() != null &&
            occupationAllHaveClass == true)) {
        //Validate according to selected chip
        return true;
    }

    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateReviewFinancialDetails(cardId) {
    var financeAllHaveClass = $('.card-five .compulsory-field').length == $('.card-five .compulsory-field.LV_valid_field').length;
    if ($('#' + cardId + ' #bank').val() != "" && $('#' + cardId + ' #bank').val() != null && $('#' + cardId + ' #expenses').val() != "") {
        if ($('#' + cardId + ' #settling_credit').is(':checked') && $('#' + cardId + ' #amountOfIncome').val() == "") {

            //$('#' + cardId + ' polyline').hide();
            //return false;
        } else {
            if ($('input[name=option-name-4]:checked').length > 0 || $('div[name=option-name-pill-4]').hasClass("selected-chip") ||
                ($('#bank').val() != null && financeAllHaveClass == true)) {
                return true;
            }
        }
    }


    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateFinanceAppFinancialDetails(cardId) {
    /*var financeApplicationCommissionNumber = $('#'+cardId+' #financeApplicationCommission').val();
	financeApplicationCommissionNumber = financeApplicationCommissionNumber.replace(/\D/g, '');
	financeApplicationCommissionNumber = financeApplicationCommissionNumber.substring(0, financeApplicationCommissionNumber.length - 2);
	financeApplicationCommissionNumber = parseInt(financeApplicationCommissionNumber, 10);
	if ($('#'+cardId+' #financeApplicationCommission').val()=="" || financeApplicationCommissionNumber >= 100000000){
		$('#'+cardId+' polyline').hide();
		return false;
	}
	else{
		return true;


	$('#'+cardId+' polyline').hide();
	$('#'+cardId+' polyline').removeAttr('points');
}
	return false;*/
}


function validateFinanceAppEmploymentDetails(cardId) {
    if (
        $('#' + cardId + ' #financeApplicationCompany').val() == "" ||
        ($('#' + cardId + ' #financeApplicationEmploymentYears').val() == "" || $('#' + cardId + ' #financeApplicationEmploymentYears').val() == null) ||
        ($('#' + cardId + ' #financeApplicationEmploymentMonths').val() == "" || $('#' + cardId + ' #financeApplicationEmploymentMonths').val() == null) ||
        $('#' + cardId + ' #financeApplicationWorkTelephone').val() == ""
    ) {
        $('#' + cardId + ' polyline').hide();
        return false;
    } else
        return true;


    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateFinanceAppAddressDetails(cardId) {
    if (
        ($('#' + cardId + ' #financeApplicationTimeAtCurrentAddress').val() == "" || $('#' + cardId + ' #financeApplicationTimeAtCurrentAddress').val() == null) ||
        ($('#' + cardId + ' #financeApplicationAddressMonths').val() == "" || $('#' + cardId + ' #financeApplicationAddressMonths').val() == null) ||
        (!$('#' + cardId + ' #financeApplicationAddressUsePhysical').is(':checked') &&
            ($('#' + cardId + ' #financeApplicationPostalAddress1').val() == "" ||
                $('#' + cardId + ' #financeApplicationPostalAddressSuburb').val() == "" ||
                $('#' + cardId + ' #financeApplicationPostalAddressCode').val() == "")
        )
    ) {
        $('#' + cardId + ' polyline').hide();
        return false;
    } else
        return true;


    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateFinanceAppPersonalDetails(cardId) {
    if (
        ($('#' + cardId + ' #financeApplicationPersonalTitle').val() == "" || $('#' + cardId + ' #financeApplicationPersonalTitle').val() == null) ||
        $('#' + cardId + ' #financeApplicationPersonalHomeTelephone').val() == "" ||
        $('#' + cardId + ' #financeApplicationPersonalCountry').val() == "" ||
        ($('#' + cardId + ' #financeApplicationPersonalEthnicGroup').val() == "" || $('#' + cardId + ' #financeApplicationPersonalEthnicGroup').val() == null) ||
        ($('#' + cardId + ' #financeApplicationPersonalLanguage').val() == "" || $('#' + cardId + ' #financeApplicationPersonalLanguage').val() == null)
    ) {
        $('#' + cardId + ' polyline').hide();
        return false;
    } else
        return true;


    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

function validateCompuscanSecurityQuestions(cardId) {
    if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {

        return true;
    } else {
        $('#' + cardId + ' polyline').hide();
        return false;
    }

    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;
}

/* --- start userVerification page trigger functions -- */
$('#userVerification input[type="radio"]').prop('checked', false);

function validateVerificationVehicleAssetFinance(cardId) {
    //Desktop radio selection validation
    if ($("input[name='option-name-0']").is(':checked')) {
        return true;
    } else if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        return true;
    } else {
        $('#' + cardId + ' polyline').hide();
        $('#' + cardId + ' polyline').removeAttr('points');
        return false;
    }

}

function validateVerificationStoreCards(cardId) {
    //Desktop radio selection validation
    if ($("input[name='option-name-1']").is(':checked')) {
        return true;
    } else if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        return true;
    } else {
        $('#' + cardId + ' polyline').hide();
        $('#' + cardId + ' polyline').removeAttr('points');
        return false;
    }

}

function validateVerificationPersonalLoans(cardId) {
    //Desktop radio selection validation
    if ($("input[name='option-name-2']").is(':checked')) {
        return true;
    } else if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        return true;
    } else {
        $('#' + cardId + ' polyline').hide();
        $('#' + cardId + ' polyline').removeAttr('points');
        return false;
    }

}

function validateVerificationCreditCards(cardId) {
    //Desktop radio selection validation
    if ($("input[name='option-name-3']").is(':checked')) {
        return true;
    } else if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        return true;
    } else {
        $('#' + cardId + ' polyline').hide();
        $('#' + cardId + ' polyline').removeAttr('points');
        return false;
    }

}

function validateVerificationHomeLoans(cardId) {
    //Desktop radio selection validation
    if ($("input[name='option-name-4']").is(':checked')) {
        return true;
    } else if ($('#' + cardId + ' .chips .chip').hasClass('selected-chip')) {
        return true;
    } else {
        $('#' + cardId + ' polyline').hide();
        $('#' + cardId + ' polyline').removeAttr('points');
        return false;
    }

}

/* --- end userVerification page trigger functions -- */

/* page-selling-car-not-financed-only disable header clicking */
var count = 1;
$("#page-selling-car-not-financed-only .chips-expander .chip, #page-selling-car-not-financed-only .chips-expander .btn-close, #page-selling-car-not-financed-only .chips-expander .cancel-pill-toggle").click(function() {
    if (count == 1) {
        $("#page-selling-car-not-financed-only #sellingCarExpander .chips-expander .chip").addClass("chip_change");
        count = 0;
    } else {
        $("#page-selling-car-not-financed-only #sellingCarExpander .chips-expander .chip").removeClass("chip_change");
        count = 1;
    }
});
/*
	2017-04-19 Commented out by Kamo
*/
/* settlementAccounts disable header clicking */
/*var count1 = 1;
$("#settlementAccounts .collapse-card__heading .collapse-card__title, #settlementAccounts .collapse-card__heading .card-text, #settlementAccounts .collapse-card__heading .btn-close").click(function() {
    if (count1 == 1) {
        $("#settlementAccounts .collapse-card__heading .collapse-card__title, #settlementAccounts .collapse-card__heading .card-text").addClass("chip_change");
        count1 = 0;
    } else {
        $("#settlementAccounts .collapse-card__heading .collapse-card__title, #settlementAccounts .collapse-card__heading .card-text").removeClass("chip_change");
        count1 = 1;
    }
});*/
/* landing page button size issue */
var count2 = 1;
$("#landing .landingPagePills .chip, #landing .landingPagePills .btn-close").click(function() {
    if (count2 == 1) {
        $("#landing .landingPagePills .chip .expandedSpan").css("font-size", "20px");
        count2 = 0;
    } else {
        $("#landing .landingPagePills .chip .expandedSpan").css("font-size", "16px");
        count2 = 1;
    }
});

/* lugi */
// selecting one chip @ a time
$('div[name=option-name-pill-0]').on('click', function() {
    $(this).addClass('selected-chippy').siblings('').removeClass('selected-chippy selected-chip');
});
$('div[name=option-name-pill-1]').on('click', function() {
    $(this).addClass('selected-chippy').siblings('').removeClass('selected-chippy selected-chip');
});
$('div[name=option-name-pill-2]').on('click', function() {
    $(this).addClass('selected-chippy').siblings('').removeClass('selected-chippy selected-chip');
});
$('div[name=option-name-pill-3]').on('click', function() {
    $(this).addClass('selected-chippy').siblings('').removeClass('selected-chippy selected-chip');
});
$('div[name=option-name-pill-4]').on('click', function() {
    $(this).addClass('selected-chippy').siblings('').removeClass('selected-chippy selected-chip');
});
/* lugi */
/* get id of clicked button */
function get_id(clicked_id) {
    if (clicked_id == "btn-question-one") {
        collapseCardOne();
    }
    if (clicked_id == "btn-question-two") {
        collapseCardTwo();
    }
    if (clicked_id == "btn-question-three") {
        collapseCardThree();
    }
    if (clicked_id == "btn-question-four") {
        collapseCardFour();
    }
    if (clicked_id == "btn-question-five") {
        collapseCardFive();
    }
}
//
$("#addressHouseStreet").change(function() {
    cardOneInputs1();
});
$("#suburb").change(function() {
    cardOneInputs2();
});
$("#years.addressYears").change(function() {
    cardOneInputs3();
});
$("#months.addressMonths").change(function() {
    cardOneInputs4();
});
//
$("#maritalStatus").change(function() {
    collapseCardTwo();
});
//
$("#industryCategory").change(function() {
    cardThreeInputs1();
});
$("#industry").change(function() {
    cardThreeInputs2();
});
$("#occupation").change(function() {
    cardThreeInputs3();
});
$("#years.occupationYears").change(function() {
    cardThreeInputs4();
});
$("#months.occupationMonths").change(function() {
    cardThreeInputs5();
});
$("#telephone").change(function() {
    cardThreeInputs6();
});
//
$("#bank").change(function() {
    cardFourInputs1();
});
$("#gross").change(function() {
    cardFourInputs2();
});
$("#netIncome").change(function() {
    cardFourInputs3();
});
$("#expenses").change(function() {
    cardFourInputs4();
});
//
function cardOneInputs1() {
    if ($('#addressHouseStreet').val() != "" || $('#addressHouseStreet').hasClass("valid") || $('#addressHouseStreet').hasClass("LV_valid_field")) {
        $('#addressHouseStreet').css("border-bottom", "1px solid #4CAF50");
        $('#addressHouseStreet').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('#addressHouseStreet').css("border-bottom", "1px solid #ce3e26");
        $('#addressHouseStreet').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardOneInputs2() {
    setTimeout(function() {
        if ($('#suburb').hasClass("valid")) {
            $('#suburb').css("border-bottom", "1px solid #4CAF50");
            $('#suburb').css("box-shadow", "0 1px 0 0 #4CAF50");
        } else {
            $('#suburb').css("border-bottom", "1px solid #ce3e26");
            $('#suburb').css("box-shadow", "0 1px 0 0 #ce3e26");
        }
    }, 200);
}

function cardOneInputs3() {
    if ($('#years.addressYears').val() != null) {
        $('.collapse-card:nth-child(1) .years .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(1) .years .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(1) .years .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(1) .years .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardOneInputs4() {
    if ($('#months.addressMonths').val() != null) {
        $('.collapse-card:nth-child(1) .months .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(1) .months .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(1) .months .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(1) .months .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}
//
function cardTwoInputs1() {
    if ($('#maritalStatus').val() != null || $('#maritalStatus').hasClass("valid") || $('#maritalStatus').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(2) .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(2) .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(2) .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(2) .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}
//
function cardThreeInputs1() {
    if ($('#industryCategory').val() != null || $('#industryCategory').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(3) .industryCategory .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(3) .industryCategory .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(3) .industryCategory .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(3) .industryCategory .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardThreeInputs2() {
    if ($('#industry').val() != null || $('#industry').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(3) .industry .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(3) .industry .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(3) .industry .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(3) .industry .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardThreeInputs3() {
    if ($('#occupation').val() != null || $('#occupation').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(3) .occupation .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(3) .occupation .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(3) .occupation .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(3) .occupation .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardThreeInputs4() {
    if ($('#years.occupationYears').val() != null || $('.occupationYears').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(3) .years .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(3) .years .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(3) .years .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(3) .years .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardThreeInputs5() {
    if ($('#months.occupationMonths').val() != null || $('.occupationMonths').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(3) .months .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(3) .months .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(3) .months .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(3) .months .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardThreeInputs6() {
    if ($('#telephone').val() != "" || $('#telephone').hasClass("valid") || $('#telephone').hasClass("LV_valid_field")) {
        $('#telephone').css("border-bottom", "1px solid #4CAF50");
        $('#telephone').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('#telephone').css("border-bottom", "1px solid #ce3e26");
        $('#telephone').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}
//
function cardFourInputs1() {
    if ($('#bank').val() != null || $('#bank').hasClass("LV_valid_field")) {
        $('.collapse-card:nth-child(4) .select-dropdown').css("border-bottom", "1px solid #4CAF50");
        $('.collapse-card:nth-child(4) .select-dropdown').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('.collapse-card:nth-child(4) .select-dropdown').css("border-bottom", "1px solid #ce3e26");
        $('.collapse-card:nth-child(4) .select-dropdown').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardFourInputs2() {
    if ($('#gross').val() != "" || $('#gross').hasClass("valid") || $('#gross').hasClass("LV_valid_field")) {
        $('#gross').css("border-bottom", "1px solid #4CAF50");
        $('#gross').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('#gross').css("border-bottom", "1px solid #ce3e26");
        $('#gross').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardFourInputs3() {
    if ($('#netIncome').val() != "" || $('#netIncome').hasClass("valid") || $('#netIncome').hasClass("LV_valid_field")) {
        $('#netIncome').css("border-bottom", "1px solid #4CAF50");
        $('#netIncome').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('#netIncome').css("border-bottom", "1px solid #ce3e26");
        $('#netIncome').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}

function cardFourInputs4() {
    if ($('#expenses').val() != "" || $('#expenses').hasClass("valid") || $('#expenses').hasClass("LV_valid_field")) {
        $('#expenses').css("border-bottom", "1px solid #4CAF50");
        $('#expenses').css("box-shadow", "0 1px 0 0 #4CAF50");
    } else {
        $('#expenses').css("border-bottom", "1px solid #ce3e26");
        $('#expenses').css("box-shadow", "0 1px 0 0 #ce3e26");
    }
}


function collapseCardOne() {
    var addressAllHaveClass = $('.collapse-card:nth-child(1) .compulsory-field').length == $('.collapse-card:nth-child(1) .compulsory-field.LV_valid_field').length;
    if ($('input[name=option-name-0]:checked').length > 0 || $('div[name=option-name-pill-0]').hasClass("selected-chip") ||
        ($('input[name=property]:checked').length > 0 && addressAllHaveClass == true) ) {
        $('.collapse-card:nth-child(1)').css("border-left", "6px solid #68d1db");

        if ($('#reviewDetails #suburb').val() != "" && $('#reviewDetails #years').val() != null && $('#reviewDetails #months').val() != null) {
            $('#reviewDetails .collapse-card:nth-child(1)').css("border-left", "6px solid #68d1db");
        } else {
            $('#reviewDetails .collapse-card:nth-child(1)').addClass('errorcard');
        }
        cardOneInputs1();
        cardOneInputs2();
        cardOneInputs3();
        cardOneInputs4();
    }
	else {
        $('.collapse-card:nth-child(1)').addClass('errorcard');
        cardOneInputs1();
        cardOneInputs2();
        cardOneInputs3();
        cardOneInputs4();
		/*
			2017-04-19 Added by Kamo
		*/
		if (validateSettlementAccount($('.collapse-card:nth-child(1)').attr('id')))
			 $('#settlementAccounts .collapse-card:nth-child(1)').removeClass('errorcard');
    }
}

function collapseCardTwo() {
    if ($('input[name=option-name-1]:checked').length > 0 || $('div[name=option-name-pill-1]').hasClass("selected-chip") ||
        $('input[name=maritalStatus]:checked').length > 0) {
        $('.collapse-card:nth-child(2)').css("border-left", "6px solid #15a3b2");

        if ($('input[name=maritalStatus]:checked').val() == "married" && $('#maritalStatus').val() != null) {
            $('.collapse-card:nth-child(2)').css("border-left", "6px solid #15a3b2");
            cardTwoInputs1();
        } else if ($('input[name=maritalStatus]:checked').val() == "married" && $('#maritalStatus').val() == null) {
            $('.collapse-card:nth-child(2)').addClass('errorcard');
            cardTwoInputs1();
        } else if ($('.maritalDetails').css('display') == 'none') {
            $('.collapse-card:nth-child(2)').css("border-left", "6px solid #15a3b2");
            cardTwoInputs1();
        } else {}
    } else {
        $('.collapse-card:nth-child(2)').addClass('errorcard');
		/*
			2017-04-19 Added by Kamo
		*/
		if (validateSettlementAccount($('.collapse-card:nth-child(2)').attr('id')))
			 $('#settlementAccounts .collapse-card:nth-child(2)').removeClass('errorcard');
    }
}

function collapseCardThree() {
    var occupationAllHaveClass = $('.card-four .compulsory-field').length == $('.card-four .compulsory-field.LV_valid_field').length;
    if ($('input[name=option-name-2]:checked').length > 0 || $('div[name=option-name-pill-2]').hasClass("selected-chip") ||
        ($('#industryCategory').val() != null && $('#industry').val() != null && $('#occupation').val() != null && occupationAllHaveClass == true)) {
        $('.collapse-card:nth-child(3)').css("border-left", "6px solid #007582");
        cardThreeInputs1();
        cardThreeInputs2();
        cardThreeInputs3();
        cardThreeInputs4();
        cardThreeInputs5();
        cardThreeInputs6();
    } else {
        $('.collapse-card:nth-child(3)').addClass('errorcard');
        cardThreeInputs1();
        cardThreeInputs2();
        cardThreeInputs3();
        cardThreeInputs4();
        cardThreeInputs5();
        cardThreeInputs6();
		/*
			2017-04-19 Added by Kamo
		*/
		if (validateSettlementAccount($('.collapse-card:nth-child(3)').attr('id')))
			$('#settlementAccounts .collapse-card:nth-child(3)').removeClass('errorcard');
    }
}

function collapseCardFour() {
    var financeAllHaveClass = $('.card-five .compulsory-field').length == $('.card-five .compulsory-field.LV_valid_field').length;
    if ($('input[name=option-name-3]:checked').length > 0 || $('div[name=option-name-pill-3]').hasClass("selected-chip") ||
        ($('#bank').val() != null && financeAllHaveClass == true)) {
        $('.collapse-card:nth-child(4)').css("border-left", "6px solid #7b878e");
        cardFourInputs1();
        cardFourInputs2();
        cardFourInputs3();
        cardFourInputs4();
    } else {
        $('.collapse-card:nth-child(4)').addClass('errorcard');
        cardFourInputs1();
        cardFourInputs2();
        cardFourInputs3();
        cardFourInputs4();
		/*
			2017-04-19 Added by Kamo
		*/
		if (validateSettlementAccount($('.collapse-card:nth-child(4)').attr('id')))
			$('#settlementAccounts .collapse-card:nth-child(4)').removeClass('errorcard');
    }
}

function collapseCardFive() {
    if ($('input[name=option-name-4]:checked').length > 0 || $('div[name=option-name-pill-4]').hasClass("selected-chip")) {
        $('.collapse-card:nth-child(5)').css("border-left", "6px solid #3c474e");
    } else {
        $('.collapse-card:nth-child(5)').addClass('errorcard');
		/*
			2017-04-19 Added by Kamo
		*/
		if (validateSettlementAccount($('.collapse-card:nth-child(5)').attr('id')))
			$('#settlementAccounts .collapse-card:nth-child(5)').removeClass('errorcard');
    }
}
//REVIEW_DETAILS VALIDATION

/*(if ($('#ownedProp').is(':checked')) {
    $('#owned').addClass('selected-chip');
}

if ($('#tenantProp').is(':checked')) {
    $('#tenant').addClass('selected-chip');
}
if ($('#lodgerProp').is(':checked')) {
    $('#lodger').addClass('selected-chip');
}*/
/*
	2017-04-19 Added by Kamo
*/
function validateSettlementAccount(cardId) {

    if ($('#' + cardId + ' input[type="radio"]').is(':checked')) {
      	 return true;
    }

    $('#' + cardId + ' polyline').hide();
    $('#' + cardId + ' polyline').removeAttr('points');

    return false;

}
