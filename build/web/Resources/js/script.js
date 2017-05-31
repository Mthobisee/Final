$(document).ready(function() {
    //When clicking collapse card with external CTA
    $('.collapse-card-external-cta').on('click', function(event) {
        event.stopImmediatePropagation();
        $(this).removeClass('active');
    });
    /*
    	Toast close controller
    */
    // disable submit on enter button
    $("form").bind("keypress", function(e) {
        if (e.keyCode == 13) {
            return false;
        }
    });

    $("#landing #model").change(function() {
        setTimeout(function() {
            if ($('#landing #model').hasClass("valid") || $('#landing #model').hasClass("LV_valid_field")) {
                $('#landing #purchasePriceLabel').addClass("active");
                //$('#purchasePrice').val("123");
                $('#purchasePrice').formatCurrency();
            } else {}
        }, 200);
    });

    /*$('.st-menu :nth-child(2)').click(function() {
        $('.btn-cover').trigger('click');
        setTimeout(function() {
          $('.btn-cover').trigger('click');
          if($('#howMuchCanIearn').hasClass("expand")){
            $('#howMuchCanIearn .btn-close').trigger('click');
          }else{
          }
          $('#iKnowWhatIwant .chip').trigger('click');
      }, 200);
    });

    $('.st-menu :nth-child(3)').click(function() {
        $('.btn-cover').trigger('click');
        setTimeout(function() {
          if($('#iKnowWhatIwant').hasClass("expand")){
            $('#iKnowWhatIwant .btn-close').trigger('click');
          }else{
          }
          $('#howMuchCanIearn .chip').trigger('click');
      }, 200);
    });*/


    $(document).on('click', '#toast-container .toast .btn-close', function() {
        $(this).parent().fadeOut(function() {
            $(this).remove();
            //Count cars on manual close - See $('.my-current-remove-btn').on('click',function()
            var noProfileCars = false;
            $('.myCurrentCarItemWrap').each(function() {
                if ($(this).is(':visible'))
                    return noProfileCars = true;
            });
            if (!noProfileCars)
                $('#profile .my-current-car-subheader').html('You have no cars on your profile.');

            //Count applications remaining
            var noProfileApplication = false;
            $('.qqSavedApplicationDetails ').each(function() {
                if ($(this).is(':visible'))
                    return noProfileApplication = true;
            });
            if (!noProfileApplication) {
                $('#profile .applications-qq-subheader').html('You have no applications on your profile.');
                $('#profile #saved-applications .qqHeader, #profile #saved-applications .saved-app-buttons').hide();
            }
        });
    });

    /* Terms checkbox control */
    $('.overlay .btn-terms-popup-accept').click(function() {
        $('#terms-check-box-wrap .terms-check-box input[type="checkbox"]').prop('checked', true);
        $('.overlay-close.btn-close').trigger('click');
    });
    $('.overlay .btn-terms-popup-reject').click(function() {
        $('#terms-check-box-wrap .terms-check-box input[type="checkbox"]').prop('checked', false);
        $('.overlay-close.btn-close').trigger('click');
    });
    $('#terms-check-box-wrap .terms-check-box').click(function() {
        if ($('input[type="checkbox"]', this).prop('checked'))
            $('input[type="checkbox"]', this).prop('checked', false);
        else
            $('input[type="checkbox"]', this).prop('checked', true);
    });

    /* Chip control */

    if ($(".chip").parents("#userVerification").length == 1) {
        //allow chip to be toggled
        $('.chip').each(function() {
            $(this).on('click', function() {

                $(this).toggleClass('selected-chip');
            });
        });

    } else {
        //Don't allow chip to be toggled
        $('.chip').each(function() {
            $(this).on('click', function() {
                $(this).parent().children().each(function() {
                    $(this).removeClass('selected-chip');
                });
                $(this).toggleClass('selected-chip');
            });
        });

    }

    /*Overlay button close*/
    $('.btn-close-orange').click(function() {
        $('.overlay-close.btn-close').trigger('click');
    });


    $('#amount-goal-change .btn-close').click(function() {
        //alert('hi');
        //$('#amount-goal-change .overlay-contentscale').addClass('close');
    });


    /* Tooltip slide down display*/
    $('#page-pre-approval .interest-rate .fa-question-circle').click(function() {
        $(this).toggleClass('active');
        $('#page-pre-approval .tip-wrapper').toggleClass('closed');
    });

    $('#dealStructureChangesSettlement .interest-rate .fa-question-circle').click(function() {
        $(this).toggleClass('active');
        $('#dealStructureChangesSettlement .tip-wrapper').toggleClass('closed');
    });

    $('#dealStructureChangesSettlement #chooseAccountsToSettle, #page-pre-approval #chooseAccountsToSettle,#dealStructureChangesSettlement #chooseAccountsToSettle .btn-close, #page-pre-approval #chooseAccountsToSettle .btn-close, #settlementAccounts .collapse-card .btn-close').click(function() {
        if ($(this).hasClass("active")) {
            $("#dealStructureChangesSettlement #chooseAccountsToSettle .arrow-icon-right, #page-pre-approval #chooseAccountsToSettle .arrow-icon-right, #settlementAccounts .collapse-card .arrow-icon-right").addClass('hide');
        } else {
            $("#dealStructureChangesSettlement #chooseAccountsToSettle .arrow-icon-right, #page-pre-approval #chooseAccountsToSettle .arrow-icon-right, #settlementAccounts .collapse-card .arrow-icon-right").removeClass('hide');
        }
    });

    $('#page-pre-approval .interest-rate .fa-question-circle').click(function() {
        $(this).toggleClass('active');
        $('#page-pre-approval .tip-wrapper').toggleClass('closed');
    });

    //Finance aplucation address
    $('#financeApplication #financeApplicationAddressUsePhysical').trigger('click');
    $('#financeApplicationAddressUsePhysical.input-toggle').click(function() {
        if (!$(this).is(':checked'))
            $('#financeApplication #postalAddressDetailsWrap').slideDown(500);
        else
            $('#financeApplication #postalAddressDetailsWrap').slideUp();
    });

    //dropdown menu Toggle
    var count = 1;
    $('#dropdownForm').slideUp();
    $('.collapse-drawer-up-btn').hide();
    $("#dropdown_menu.input-toggle").click(function() {
        if (count == 1) {
            $('#dropdownForm').slideDown(500);
            $("#header-collapse-drawer.row").css("background-color", "#3c474e");
            $('.collapse-drawer-btn').hide();
            $('.collapse-drawer-up-btn').show();
            count = 0;
        } else {
            $('#dropdownForm').slideUp();
            $("#header-collapse-drawer.row").css("background-color", "#7c878e");
            $('.collapse-drawer-btn').show();
            $('.collapse-drawer-up-btn').hide();
            count = 1;
        }
    });

    $('#pushDownNotifications').hide();
    $('.pushDownNotifications-btn-close').click(function() {
        $('#pushDownNotifications').slideUp();
        $('.pushDownNotifications-btn-close').hide();
    });

    $('.btn-close.pushDownNotifications').click(function() {
        $('#pushDownNotifications').slideUp();
        $('.pushDownNotifications-btn-close').hide();
    });

    function pushDownNotifications() {        
        $('#page-pre-approval #pushDownNotifications').slideDown(300);    
    }    
    window.onload = pushDownNotifications();

    $(' .pushDownNotifications-btn-close').click(function() {
        $('#pushDownNotifications').slideUp();
        $('.pushDownNotifications-btn-close').hide();
    });

    //Car In Mind Toggle
    $('#carInMind.input-toggle').trigger('click');
    $('#carInMind.input-toggle').click(function() {
        if ($(this).is(':checked'))
            $('#carInMindForm').slideDown(500);
        else
            $('#carInMindForm').slideUp();
    });
    //Car In Mind 2 Toggle
    $('#carInMind2.input-toggle').trigger('click');
    $('#carInMind2.input-toggle').click(function() {
        if ($(this).is(':checked'))
            $('#carInMindForm').slideUp();
        else
            $('#carInMindForm').slideDown(500);
    });

    //sellingCurrentCarToggle Toggle

    if (!$('#sellingCurrentCarToggle.input-toggle').is(':checked')) {
        $('#sellingCurrentCarToggle.input-toggle').trigger('click');
    }

    //Cash offer Toggle
    $('#cashOffer.input-toggle').click(function() {
        if ($(this).is(':checked'))
            $('#cashOfferForm').slideDown(500);
        else
            $('#cashOfferForm').slideUp();

        if ($('#cashOfferForm').css('display') == 'block') {
            $('html, body').animate({
                scrollTop: $("#cashOfferForm").offset().top
            }, 500);
        }
    });

    //Sellng current car
    //$('#sellingCurrentCarToggle.input-toggle').trigger('click');
    $('.correctCarDetailsBtn').hide();
    $('#sellingCurrentCarToggle.input-toggle').click(function() {
        if ($(this).is(':checked')) {
            $('#correctCar').slideDown(500);
            $('#incorrectCar').slideUp();
            $('.sellingCurrentCarBtn').show();
        } else {
            $('#correctCar').slideUp();
            $('#incorrectCar').slideDown(500);
            $('#editCorrectCar').slideUp();
            $('.sellingCurrentCarBtn').hide();
            $('.correctCarDetailsBtn').show();
        }
    });

    $('#editCorrectCar').hide();
    $('#editSettlementAmounts').click(function() {
        $('#editCorrectCar').slideDown(500);
        $('#correctCar').slideUp();
        $('.sellingCurrentCarBtn').show();
    });

    $('#updateCurrentCar').click(function() {
        $('#editCorrectCar').slideUp();
        $('#correctCar').slideDown(500);
        $('.sellingCurrentCarBtn').show();
    });

    // sellingCarWesbankNonWesbank start
    $('#sellingCarVINNumber').hide();
    $('#enterVINNumber').click(function() {
        $('#sellingCarVINNumber').slideDown(500);
        $('#sellingCarLicencePlate').slideUp();
        $('#LicencePlate').show();
    });

    $('#LicencePlate').click(function() {
        $('#sellingCarVINNumber').slideUp();
        $('#sellingCarLicencePlate').slideDown(500);
        $('#enterVINNumber').show();
    });
    // sellingCarWesbankNonWesbank end

    //Chip

    $('#dealerSale.chip').click(function() {
        $('#dealerSaleForm').show();
        $('#dealerSaleDesc').hide();
        $('#dealerDealerDesc').show();
    });
    $('#privateSale.chip').click(function() {
        $('#dealerSaleForm').hide();
        $('#dealerSaleDesc').show();
        $('#dealerDealerDesc').hide();
    });

    $('select').material_select();

    /*
    	USER PROFILE - DETAILS
    */

    // VIEW ALL PROFILE DETAILS
    $('#page-profile .view-btn').on('click', function() {

        $('#page-profile .view-btn').each(function() {

            if ($(this).html() == 'VIEW ALL' || $(this).html().toLowerCase() == 'view all') {
                $(this).html('VIEW LESS');
                $('#profile .row-line-item.expanded-last-child').css('border-bottom', '1px solid #d8d8d8');
                $('#profile .row-line-item.expanded-last-child-disclaimer').css('border-bottom', 'none');
                $('#profile .external-profile-details-footer').hide();
            } else {
                $(this).html('VIEW ALL');
                $('#profile .row-line-item.expanded-last-child').css('border-bottom', 'none');
                $('#profile .external-profile-details-footer').show();
            }

            //Close editing
            $('#profile .profile-action-btn.cancel-btn').each(function() {

                var $profileCardBody = $(this).parent().parent().parent().parent().prev();

                $profileCardBody.find('.row-line-item').show();
                $profileCardBody.find('.row-line-item-editable').each(function() {
                    $('input', this).val($(this).prev().find('.text-right').html());
                });
                //Close fields
                $profileCardBody.find('.row-line-item').show();
                $profileCardBody.find('.row-line-item-editable').hide();

                $profileCardBody.next().find('.edit-btn').show();
                $profileCardBody.next().find('.view-btn').show();
                $profileCardBody.next().find('.update-btn').hide();
                $profileCardBody.next().find('.cancel-btn').hide();

                $('#page-profile .external-profile-details-footer .edit-btn, #page-profile .external-profile-details-footer .view-btn').show();
                $('#page-profile .external-profile-details-footer .update-btn, #page-profile .external-profile-details-footer .cancel-btn').hide();


            });


        });
        $('.extra-fields').slideToggle(200);
        $.scrollTo('#profile', 500);
    });



    $('#page-profile .profile-action-btn').click(function() {
        //Get collapse-card__body

        var $profileCardBody = $(this).parent().parent().parent().parent().prev();
        if ($profileCardBody.attr('class') == null || $profileCardBody.attr('class') == undefined)
            $profileCardBody = $('.profile-details');

        $profileCardBody.find('.row-line-item-editable').each(function() {
            //lugi start
            setTimeout(function() {
                validateProfileDetails($profileCardBody);
            }, 1000);
            //lugi end
            $('input', this).keyup(function() {
                validateProfileDetails($profileCardBody);
            });
            $('select', this).change(function() {
                validateProfileDetails($profileCardBody);
            });
        });

        //EDIT
        if ($(this).hasClass('edit-btn')) {

            $profileCardBody.find('.row-line-item-editable').show();
            $profileCardBody.find('.row-line-item').hide();

            $profileCardBody.next().find('.edit-btn').hide();
            $profileCardBody.next().find('.view-btn').hide();
            $profileCardBody.next().find('.update-btn').show();
            $profileCardBody.next().find('.cancel-btn').show();

            $('#page-profile .external-profile-details-footer .edit-btn, #page-profile .external-profile-details-footer .view-btn').hide();
            $('#page-profile .external-profile-details-footer .update-btn, #page-profile .external-profile-details-footer .cancel-btn').show();

            $.scrollTo($profileCardBody, {
                offset: {
                    'top': -180
                },
                duration: 500
            });
        }


        //CANCEL
        var counter = 0;
        if ($(this).hasClass('cancel-btn')) {
            $profileCardBody.find('.row-line-item').show();
            $profileCardBody.find('.row-line-item-editable').each(function() {
                $('input', this).val($(this).prev().find('.text-right').html());
                //lugi start
                $profileCardBody.find('.row-line-item-editable').each(function() {
                    ++counter;
                    if (counter == 49 || counter == 100) {
                        validateProfileDetails($profileCardBody);
                        $('select :nth-child(2)').attr('selected', true);
                        //alert(counter);
                        //alert($profileCardBody.attr("id"));
                        //var selectedValue = $('#marrital-label').text();
                        //$('select > option[value *= "'+selectedValue+'"] ').attr('selected',true);
                    }
                });
                //lugi end
            });
            //Close fields
            $profileCardBody.find('.row-line-item').show();
            $profileCardBody.find('.row-line-item-editable').hide();

            $profileCardBody.next().find('.edit-btn').show();
            $profileCardBody.next().find('.view-btn').show();
            $profileCardBody.next().find('.update-btn').hide();
            $profileCardBody.next().find('.cancel-btn').hide();

            $('#page-profile .external-profile-details-footer .edit-btn, #page-profile .external-profile-details-footer .view-btn').show();
            $('#page-profile .external-profile-details-footer .update-btn, #page-profile .external-profile-details-footer .cancel-btn').hide();

            $.scrollTo($profileCardBody, {
                offset: {
                    'top': -180
                },
                duration: 500
            });
        }

        //UPDATE
        if ($(this).hasClass('update-btn')) {

            var validForm = true;

            $profileCardBody.find('.row-line-item-editable').each(function() {

                validForm = validateProfileDetails($profileCardBody);

                if (!validForm) {
                    //$('input', this).addClass('LV_invalid_field');
                    return validForm = false;
                }

                $(this).prev().find('.text-right').html($('input', this).val());
            });

            if (!validForm) {
                return false;
            }


            $profileCardBody.find('.row-line-item').show();

            //Close fields
            $profileCardBody.find('.row-line-item').show();
            $profileCardBody.find('.row-line-item-editable').hide();

            $profileCardBody.next().find('.edit-btn').show();
            $profileCardBody.next().find('.view-btn').show();
            $profileCardBody.next().find('.update-btn').hide();
            $profileCardBody.next().find('.cancel-btn').hide();

            $('#page-profile .external-profile-details-footer .edit-btn, #page-profile .external-profile-details-footer .view-btn').show();
            $('#page-profile .external-profile-details-footer .update-btn, #page-profile .external-profile-details-footer .cancel-btn').hide();

            $.scrollTo($profileCardBody, {
                offset: {
                    'top': -180
                },
                duration: 500
            });

            // hide and show total amount of other income
            /*if(($('#reviewApplicationOvertime').val() == "R00,000.00" || $('#reviewApplicationOvertime').val() == "R0.00" || $('#reviewApplicationOvertime').val() == "") &&
            	($('#reviewApplicationTotalMonthlyCommission').val() == "R00,000.00" || $('#reviewApplicationTotalMonthlyCommission').val() == "R0.00" || $('#reviewApplicationTotalMonthlyCommission').val() == "")
            ){
            	$("#reviewApplicationTotalAmountOtherIncome-label").addClass("hide");
            }else{
            	$("#reviewApplicationTotalAmountOtherIncome-label").removeClass("hide");
            }*/

            // convert currency to numbers
            var reviewApplicationTotalMonthlyCommission = document.getElementById("reviewApplicationTotalMonthlyCommission").value;
            reviewApplicationTotalMonthlyCommission = reviewApplicationTotalMonthlyCommission.replace(/\D/g, '');
            reviewApplicationTotalMonthlyCommission = reviewApplicationTotalMonthlyCommission.substring(0, reviewApplicationTotalMonthlyCommission.length - 2);
            reviewApplicationTotalMonthlyCommission = parseInt(reviewApplicationTotalMonthlyCommission, 10);
            document.getElementById("reviewApplicationTotalMonthlyCommission-converted").value = reviewApplicationTotalMonthlyCommission;

            var reviewApplicationOvertime = document.getElementById("reviewApplicationOvertime").value;
            reviewApplicationOvertime = reviewApplicationOvertime.replace(/\D/g, '');
            reviewApplicationOvertime = reviewApplicationOvertime.substring(0, reviewApplicationOvertime.length - 2);
            reviewApplicationOvertime = parseInt(reviewApplicationOvertime, 10);
            document.getElementById("reviewApplicationOvertime-converted").value = reviewApplicationOvertime;

        }

        // hide and show Profile inputs based on certain selections - start
        setTimeout(function() {
            if ($("#page-profile #marrital-label").text() == "Married") {
                $("#page-profile .only_married").removeClass("hide");
            } else {
                $("#page-profile .only_married").addClass("hide");
            }

            if ($("#page-profile #property-label").text() == "Owner") {
                $("#page-profile .only_owner").removeClass("hide");
            } else {
                $("#page-profile .only_owner").addClass("hide");
            }

            if ($('#page-profile #additional-income-label').text() == 'Yes') {
                $('#page-profile .only-other-income').removeClass("hide");
            } else {
                $('#page-profile .only-other-income').addClass("hide");
            }
        }, 200);
        document.getElementById("reviewApplicationMaritalStatus").onchange = function(event) {
            if ($("#page-profile #reviewApplicationMaritalStatus").val() == "Married") {
                $("#page-profile .only_married").removeClass("hide");
            } else {
                $("#page-profile .only_married").addClass("hide");
            }
        }
        document.getElementById("reviewApplicationResidentialStatus").onchange = function(event) {
            if ($('#page-profile #reviewApplicationResidentialStatus').val() == "Owner") {
                $("#page-profile .only_owner").removeClass("hide");
            } else {
                $("#page-profile .only_owner").addClass("hide");
            }
        }
        document.getElementById("reviewApplicationOtherIncome").onchange = function(event) {
            if ($('#page-profile #reviewApplicationOtherIncome').val() == 'Yes') {
                $('#page-profile .only-other-income').removeClass("hide");
            } else {
                $('#page-profile .only-other-income').addClass("hide");
            }
        }
        // hide and show Profile inputs based on certain selections - end

    });

    // shrink name start
    if ($(".name_size").text().length >= 24) {
        $(".name_size").addClass("shrink");
    } else {
        $(".name_size").removeClass("shrink");
    }
    // shrink name end


    //EDIT PROFILE DETAILS
    /* $('#edit-btn').on('click', function() {
         $('#profile .profile-details .row-line-item-editable').show();
         $('#profile .profile-details .row-line-item').hide();
         $('#view-btn').hide();
         $('#edit-btn').hide();
         $('#update-btn').show();
         $('#cancel-btn').show();
         $.scrollTo('#profile', 500);
     });


     $('#cancel-btn').on('click', function() {
         //Update with old
         $('#profile .profile-details .row-line-item').show();
         $('#profile .profile-details .row-line-item-editable').each(function() {
             $('input', this).val($(this).prev().find('.text-right').html());
         });
         //Close fields
         $('#profile .profile-details .row-line-item').show();
         $('#profile .profile-details .row-line-item-editable').hide();
         $('#view-btn').show();
         $('#edit-btn').show();
         $('#update-btn').hide();
         $('#cancel-btn').hide();
         $.scrollTo('#profile', 500);
     });

     $('#update-btn').on('click', function() {
         if (validProfileDetailsForm()) {
             //Update visibility
             $('#profile .profile-details .row-line-item').show();
             $('#profile .profile-details .row-line-item-editable').each(function() {
                 $(this).prev().find('.text-right').html($('input', this).val());
             });
             //Close fields
             $('#profile .profile-details .row-line-item').show();
             $('#profile .profile-details .row-line-item-editable').hide();
             $('#view-btn').show();
             $('#edit-btn').show();
             $('#update-btn').hide();
             $('#cancel-btn').hide();
         }
     });*/

    /*$('#profile .profile-container input').on('keyup focus', function() {
        if (
            ($(this).val() == "") ||
            ($(this).attr('id') == 'cellphone' && !validProfileContact($(this).val())) ||
            ($(this).attr('id') == 'emailAddress' && !validProfileEmail($(this).val())) ||
            ($(this).attr('id') == 'postalCode' && !validProfilePostalCode($(this).val())) ||
            (($(this).attr('id') == 'grossIncome' || $(this).attr('id') == 'livingExpenses') && !validProfilePrice($(this).val()))
        ) {
            //$.scrollTo('#'+$(this).attr('id'), 500);
            $(this).addClass('invalid');
            $(this).removeClass('valid');
        } else {
            $(this).addClass('valid');
            $(this).removeClass('invalid');
        }
    });*/

    /*
    	USER PROFILE - MY CURRENT CAR
    */



    //Edit button
    $('.my-current-edit-btn').on('click', function() {

        var $this = $(this);
        var $detailsWrap = $this.parent().parent().parent(); //.myCurrentCarDetailsWrap

        $detailsWrap.find('.my-current-car-details').slideUp(400, 'swing', function() {
            $detailsWrap.find('.my-current-car-edit').slideDown(400, 'swing'); //display edit form
            $detailsWrap.find('.my-current-edit-btn,.my-current-remove-btn').hide();
            $detailsWrap.find('.my-current-add-save-btn,.my-current-add-cancel-btn').show();
        });

        //Cancel button
        $detailsWrap.find('.my-current-add-cancel-btn').click(function() {
            //Put back old values
            $detailsWrap.find('input.my-current-car-edit-make').val($detailsWrap.parent().find('.my-current-car-make').html());
            $detailsWrap.find('input.my-current-car-edit-model').val($detailsWrap.parent().find('.my-current-car-model').html());
            $detailsWrap.find('input.my-current-car-edit-year').val($detailsWrap.parent().find('.my-current-car-year').html());
            $detailsWrap.find('input.my-current-car-edit-market-value').val($detailsWrap.parent().find('.average-market-value').html());
            $detailsWrap.find('input.my-current-car-edit-settlement-value').val($detailsWrap.parent().find('.estimated-settlement-value').html());
            //Toggle layers
            $detailsWrap.find('.my-current-car-edit').slideUp(400, 'swing', function() {
                $detailsWrap.find('.my-current-car-details').slideDown(400, 'swing'); //display edit form
                $detailsWrap.find('.my-current-add-save-btn,.my-current-add-cancel-btn').hide();
                $detailsWrap.find('.my-current-edit-btn,.my-current-remove-btn').show();
            });
        });

        //Save button
        $detailsWrap.find('.my-current-add-save-btn').click(function() {

            var validForm = true;

            //Validate input fiends
            $detailsWrap.find('.my-current-car-edit input').each(function() {

                if (
                    ($(this).val() == "") ||
                    ($(this).hasClass('my-current-car-edit-year') && !validYear($(this).val())) ||
                    (($(this).hasClass('my-current-car-edit-market-value') || $(this).hasClass('my-current-car-edit-settlement-value')) && !validProfilePrice($(this).val()))
                ) {
                    $(this).addClass('invalid');
                    $(this).removeClass('valid');
                    return validForm = false;
                } else {
                    $(this).addClass('valid');
                    $(this).removeClass('invalid');
                    return validForm = true;
                }

            });

            if (validForm) {
                //Update static parts such as make, model, year
                $detailsWrap.parent().find('.my-current-car-make').html($detailsWrap.find('input.my-current-car-edit-make').val());
                $detailsWrap.parent().find('.my-current-car-model').html($detailsWrap.find('input.my-current-car-edit-model').val());
                $detailsWrap.parent().find('.my-current-car-year').html($detailsWrap.find('input.my-current-car-edit-year').val());
                $detailsWrap.parent().find('.average-market-value').html($detailsWrap.find('input.my-current-car-edit-market-value').val());
                $detailsWrap.parent().find('.estimated-settlement-value').html($detailsWrap.find('input.my-current-car-edit-settlement-value').val());
                //Toggle layers
                $detailsWrap.find('.my-current-car-edit').slideUp(400, 'swing', function() {
                    $detailsWrap.find('.my-current-car-details').slideDown(400, 'swing'); //display edit form
                    $detailsWrap.find('.my-current-add-save-btn,.my-current-add-cancel-btn').hide();
                    $detailsWrap.find('.my-current-edit-btn,.my-current-remove-btn').show();
                });
            }
        });
    });

    //Validate MyCurrent car form
    $('#profile .my-current-car-edit input').on('keyup focus', function() {
        if (
            ($(this).val() == "") ||
            ($(this).hasClass('my-current-car-edit-year') && !validYear($(this).val())) ||
            (($(this).hasClass('my-current-car-edit-market-value') || $(this).hasClass('my-current-car-edit-settlement-value')) && !validProfilePrice($(this).val()))
        ) {
            //$.scrollTo('#'+$(this).attr('id'), 500);
            $(this).addClass('invalid');
            $(this).removeClass('valid');
        } else {
            $(this).addClass('valid');
            $(this).removeClass('invalid');
        }
    });



    /*
    	USER PROFILE - APPLICATIONS AND QUICK QUOTES
    */

    //Edit button
    $('#saved-applications .applications-qq-edit-btn').on('click', function() {
        $('#saved-applications .applications-qq-edit-btn').hide();
        $('#saved-applications .qqDetailsWrap').each(function() {
            $(this).removeClass('l12 m12 s12').addClass('l10 m10 s10');
        });
        $('#saved-applications .qqSelectWrap, #saved-applications .applications-qq-remove-btn, #saved-applications .applications-qq-cancel-btn').show();

    });

    //Cancel button
    $('#saved-applications .applications-qq-cancel-btn').on('click', function() {
        $('#saved-applications .qqSelectWrap, #saved-applications .applications-qq-remove-btn, #saved-applications .applications-qq-cancel-btn').hide();
        $('#saved-applications .qqDetailsWrap').each(function() {
            $(this).removeClass('l10 m10 s10').addClass('l12 m12 s12');
        });
        $('#saved-applications .applications-qq-edit-btn').show();

    });

    //Remove button
    $('#saved-applications .applications-qq-remove-btn').on('click', function() {

        $('#saved-applications .qqSelectWrap').each(function() {

            if ($('input', this).is(':checked')) {

                var $detailsWrap = $(this).parent(); //Gets main wrapping div

                //Store application/quote removed
                $detailsWrap.clone(true, true);
                $detailsWrap.slideUp();

                Materialize.toast('<div id="toastNotificationAppicationQuote' + $detailsWrap.attr('rel') + '" class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>Removed application.</h4><p>You have removed an application for (a amount/car), if this was a mistake, you can <a href="javascript:undoRemoveApplicationQuote(' + $detailsWrap.attr('rel') + ')">ADD IT BACK HERE.</a></p>');

                undoRemoveApplicationQuote = function(appItem) {
                    $('#saved-applications .qqSavedApplicationDetails').each(function() {
                        var $rel = $(this).attr('rel');
                        //Put back the selected item
                        if ($rel == appItem) {
                            $(this).slideDown();
                            //Close notification before call back is triggered
                            $('#toast-container .toast #toastNotificationAppicationQuote' + appItem + '.btn-close').trigger('click');
                        }
                    });
                }









                return false;
            }

        });


    });







    //EDIT DOCUMENTS
    $('#edit-docs').hide();
    $('#edit-docs-btn').on('click', function() {
        $('#edit-docs').show();
        $('#edit-docs .accordion-item').show();
        $('#load-docs').hide();
        $('#load-docs .accordion-upload-item').hide();
    });

    $('#done-btn').on('click', function() {
        $('#edit-docs').hide();
        $('#edit-docs .accordion-item').hide();
        $('#load-docs').show();
        $('#load-docs .accordion-upload-item').show();
    });

    $('#cancel-btn').on('click', function() {
        $('#edit-docs').hide();
        $('#edit-docs .accordion-item').hide();
        $('#load-docs').show();
        $('#load-docs .accordion-upload-item').show();
    });

    //EDIT SAVE APPLICATION
    $('#saved-applications-edit').hide();
    $('#edit-app-btn').on('click', function() {
        $('#saved-applications').hide();
        $('#saved-applications-edit').show();
    });
    $('#cancel-app-btn').on('click', function() {
        $('#saved-applications').show();
        $('#saved-applications-edit').hide();
    });

    //EDIT EXTRA FIELDS
    $('#editable-extra-fields').hide();

    $('#edit-btn').on('click', function() {
        if ($('.collapsible.extra-field li').hasClass('active')) {
            $('#editable-extra-fields').show();
        }
    });
    $('#update-btn').on('click', function() {
        if ($('.collapsible.extra-field li').hasClass('active')) {
            $('#editable-extra-fields').hide();
            $('#extra-field').show();
        }
    });

    //EDIT MY CURRENT CAR
    $('#edit-my-current-car').hide();
    $('#edit-car-details-btn').on('click', function() {
        $('#my-current-car').hide();
        $('#edit-my-current-car').show();
    });
    $('#cancel-car-btn').on('click', function() {
        $('#my-current-car').show();
        $('#edit-my-current-car').hide();
    });

    //EDIT ALERTS
    $('#edit-alerts').hide();
    $('#edit-alerts-btn').on('click', function() {
        $('#edit-alerts').show();
        $('#alerts').hide();
    });

    $('#cancel-alerts-btn').on('click', function() {
        $('#edit-alerts').hide();
        $('#alerts').show();
    });

    //REVIEW_DETAILS ADDRESS PILL SELECT
    $('.complexAddress').hide();
    $('.estateAddress').hide();
    $('.manualHouseAddress').hide();
    $('.manualComplexAddress').hide();
    $('.manualEstateAddress').hide();
    $('#houseAdress').addClass('selected-chip');

    $('#complexAdress').on('click', function() {
        $('.complexAddress').show();
        $('.estateAddress').hide();
        $('.houseAddress').hide();
        $('.manualHouseAddress').hide();
        $('.manualComplexAddress').hide();
        $('.manualEstateAddress').hide();
        $('#houseAdress').removeClass('selected-chip');
        $('#estateAddress').removeClass('selected-chip');
    });

    $('#estateAddress').on('click', function() {
        $('.complexAddress').hide();
        $('.estateAddress').show();
        $('.houseAddress').hide();
        $('.manualHouseAddress').hide();
        $('.manualComplexAddress').hide();
        $('.manualEstateAddress').hide();
        $('#houseAdress').removeClass('selected-chip');
        $('#complexAdress').removeClass('selected-chip');
    });

    $('#houseAdress').on('click', function() {
        $('.complexAddress').hide();
        $('.estateAddress').hide();
        $('.houseAddress').show();
        $('.manualHouseAddress').hide();
        $('.manualComplexAddress').hide();
        $('.manualEstateAddress').hide();
        $('#estateAddress').removeClass('selected-chip');
        $('#complexAdress').removeClass('selected-chip');
    });

    $('#manualHouseAddress').on('click', function() {
        $('.complexAddress').hide();
        $('.estateAddress').hide();
        $('.houseAddress').hide();
        $('.manualHouseAddress').show();
        $('.manualComplexAddress').hide();
        $('.manualEstateAddress').hide();
        $('#estateAddress').removeClass('selected-chip');
        $('#complexAdress').removeClass('selected-chip');
        $('#houseAdress').addClass('selected-chip');
    });

    $('#manualComplexAddress').on('click', function() {
        $('.complexAddress').hide();
        $('.estateAddress').hide();
        $('.houseAddress').hide();
        $('.manualHouseAddress').hide();
        $('.manualComplexAddress').show();
        $('.manualEstateAddress').hide();
        $('#estateAddress').removeClass('selected-chip');
        $('#complexAdress').addClass('selected-chip');
        $('#houseAdress').removeClass('selected-chip');
    });

    $('#manualEstateAddress').on('click', function() {
        $('.complexAddress').hide();
        $('.estateAddress').hide();
        $('.houseAddress').hide();
        $('.manualHouseAddress').hide();
        $('.manualComplexAddress').hide();
        $('.manualEstateAddress').show();
        $('#estateAddress').addClass('selected-chip');
        $('#complexAdress').removeClass('selected-chip');
        $('#houseAdress').removeClass('selected-chip');
    });


    //REVIEW_DETAILS MARITAL DETAILS PILL SELECT
    $('.maritalDetails').hide();
    $('#married').on('click', function() {
        $('#widowed').removeClass('selected-chip');
        $('#divorced').removeClass('selected-chip');
        $('#single').removeClass('selected-chip');
        $('.maritalDetails').show();
    });
    $('#widowed').on('click', function() {
        $('#married').removeClass('selected-chip');
        $('#divorced').removeClass('selected-chip');
        $('#single').removeClass('selected-chip');
        $('.maritalDetails').hide();
    });
    $('#divorced').on('click', function() {
        $('#married').removeClass('selected-chip');
        $('#widowed').removeClass('selected-chip');
        $('#single').removeClass('selected-chip');
        $('.maritalDetails').hide();
    });
    $('#single').on('click', function() {
        $('#married').removeClass('selected-chip');
        $('#widowed').removeClass('selected-chip');
        $('#divorced').removeClass('selected-chip');
        $('.maritalDetails').hide();
    });

    //Deal Structure - Settle Accounts



    // Selling Current Car
    $('#page-selling-current-car #carInMind').on('click', function() {
        $.scrollTo('#licence', 500);
    });

    $('#licencePlateExpander .btn-close').hide();
    $('#vinNumberExpander .btn-close').hide();


    function vinNumberExpander() {
        $('#vinNumberExpander').toggleClass('z-forward');
        $('#vinNumberExpander').toggleClass('go-to-top');
        $('#vinNumberExpander .chip').toggleClass('selected-chip-grey');
        $("#sellingCarExpander").toggleClass('expander-height');
        $('#vinNumberExpander .btn-close').toggle();
    }

    function licencePlateExpander() {
        $('#licencePlateExpander').toggleClass('z-forward');
        $('#licencePlateExpander .chip').toggleClass('selected-chip-grey');
        $("#sellingCarExpander").toggleClass('expander-height');
        $('#licencePlateExpander .btn-close').toggle();
    }

    $('#licencePlateExpander .chip').click(function() {
        console.log(licencePlateExpander());
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
    });
    $('#vinNumberExpander .chip').click(function() {
        console.log(vinNumberExpander());
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');

    });
    $('#licencePlateExpander .btn-close').click(function(e) {
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
        $(this).toggle();
        $('#licencePlateExpander .chip').toggleClass('selected-chip-grey');
        $('#licencePlateExpander').toggleClass('z-forward');
        $("#sellingCarExpander").toggleClass('expander-height');
    });
    $('#vinNumberExpander .btn-close').click(function(e) {
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
        $(this).toggle();
        $('#vinNumberExpander .chip').toggleClass('selected-chip-grey');
        $('#vinNumberExpander').toggleClass('z-forward');
        $('#vinNumberExpander').toggleClass('go-to-top');
        $("#sellingCarExpander").toggleClass('expander-height');
    });

    $('#vinNumberExpander .cancel-pill-toggle').click(function(e) {
        $('#vinNumberExpander').toggleClass('expand');
        $('#vinNumberExpander').toggleClass('card');
        $('#vinNumberExpander .btn-close').toggle();
        $('#vinNumberExpander .chip').toggleClass('selected-chip-grey');
        $('#vinNumberExpander').toggleClass('z-forward');
        $('#vinNumberExpander').toggleClass('go-to-top');
        $("#sellingCarExpander").toggleClass('expander-height');
    });
    $('#licencePlateExpander .cancel-pill-toggle').click(function(e) {
        $('#licencePlateExpander').toggleClass('expand');
        $('#licencePlateExpander').toggleClass('card');
        $('#licencePlateExpander .btn-close').toggle();
        $('#licencePlateExpander .chip').toggleClass('selected-chip-grey');
        $('#licencePlateExpander').toggleClass('z-forward');
        $("#sellingCarExpander").toggleClass('expander-height');
    });


    //LANDING PAGE PILL EXPANDS
    $('#iKnowWhatIwant .btn-close').hide();
    $('#howMuchCanIearn .btn-close').hide();


    function howMuchCanIearnExpander() {
        $('#howMuchCanIearn').toggleClass('z-forward');
        $('#howMuchCanIearn .chip').toggleClass('selected-chip-white');
        $('#howMuchCanIearn .btn-close').toggle();
    }

    function iKnowWhatIwantExpander() {
        $('#iKnowWhatIwant').toggleClass('z-forward');
        $('#iKnowWhatIwant .chip').toggleClass('selected-chip-white');
        $('#iKnowWhatIwant .btn-close').toggle();
    }

    var count1 = 1;
    $("#iKnowWhatIwant .chip, #iKnowWhatIwant .btn-close, #howMuchCanIearn .chip, #howMuchCanIearn .btn-close").click(function() {
        if (count1 == 1) {
            $('#iKnowWhatIwant .chip').addClass('chip_change');
            $('#howMuchCanIearn .chip').addClass('chip_change');
            count1 = 0;
        } else {
            $('#iKnowWhatIwant .chip').removeClass('chip_change');
            $('#howMuchCanIearn .chip').removeClass('chip_change');
            count1 = 1;
        }
    });

    $('.expandedSpan').hide();
    $('#iKnowWhatIwant .chip').click(function() {
        //$('.chips-expander').css("background-color","red");
        console.log(iKnowWhatIwantExpander());
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
        if (window.matchMedia("(max-width:768px)").matches) {
            $('#iKnowWhatIwant').parent().toggleClass('l12 m12 s12');
        } else {
            $('#iKnowWhatIwant').parent().toggleClass('l6 m6 s6');
            $('#iKnowWhatIwant').parent().toggleClass('l12 m12 s12');
        }
        $('#howMuchCanIearn').hide();
        $('.toggleHeight').show();
        if (window.matchMedia("(max-width:768px)").matches) {
            $('.car-landing-svg').toggleClass('relative-positive');
        } else {
            $('.car-landing-svg').toggleClass('relative-positive');
            $('.car-landing-svg').toggleClass('relative-positive');
        }
        $('.collapsedSpan').hide();
        $('.expandedSpan').show();
        $('.selected-chip').addClass('greyBg');
    });
    $('#howMuchCanIearn .chip').click(function() {
        console.log(howMuchCanIearnExpander());
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
        if (window.matchMedia("(max-width:768px)").matches) {
            $('#howMuchCanIearn').parent().toggleClass('l12 m12 ');
        } else {
            $('#howMuchCanIearn').parent().toggleClass('l6 m6 s6');
            $('#howMuchCanIearn').parent().toggleClass('l12 m12 s12');
        }
        $('#iKnowWhatIwant').hide();
        $('.toggleHeight').show();
        if (window.matchMedia("(max-width:768px)").matches) {
            $('.car-landing-svg').toggleClass('relative-positive');
        } else {
            $('.car-landing-svg').toggleClass('relative-positive');
            $('.car-landing-svg').toggleClass('relative-positive');
        }
        $('.selected-chip').addClass('greyBg');

    });
    $('#iKnowWhatIwant .btn-close').click(function(e) {
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
        $(this).toggle();
        $('#iKnowWhatIwant .chip').removeClass('selected-chip');
        $('#iKnowWhatIwant .chip').toggleClass('selected-chip-white');
        $('#iKnowWhatIwant').toggleClass('z-forward');
        if (window.matchMedia("(max-width:768px)").matches) {
            $('#iKnowWhatIwant').parent().toggleClass('l12 m12 s12');
        } else {
            $('#iKnowWhatIwant').parent().toggleClass('l12 m12 s12');
            $('#iKnowWhatIwant').parent().toggleClass('l6 m6 s6');
        }
        $('#howMuchCanIearn').show();
        $('.toggleHeight').slideUp();
        if (window.matchMedia("(max-width:768px)").matches) {
            $('.car-landing-svg').toggleClass('relative-positive');
        } else {
            $('.car-landing-svg').toggleClass('relative-positive');
            $('.car-landing-svg').toggleClass('relative-positive');
        }
        $('.selected-chip').removeClass('greyBg');

    });
    $('#howMuchCanIearn .btn-close').click(function(e) {
        $(this).parent().toggleClass('expand');
        $(this).parent().toggleClass('card');
        $(this).toggle();
        $('#howMuchCanIearn .chip').removeClass('selected-chip');
        $('#howMuchCanIearn .chip').toggleClass('selected-chip-white');
        $('#howMuchCanIearn').toggleClass('z-forward');
        if (window.matchMedia("(max-width:768px)").matches) {
            $('#howMuchCanIearn').parent().toggleClass('l12 m12');
        } else {
            $('#howMuchCanIearn').parent().toggleClass('l12 m12');
            $('#howMuchCanIearn').parent().toggleClass('l6 m6 s6');
        }
        $('#iKnowWhatIwant').show();
        $('.toggleHeight').slideUp();
        if (window.matchMedia("(max-width:768px)").matches) {
            $('.car-landing-svg').toggleClass('relative-positive');
        } else {
            $('.car-landing-svg').toggleClass('relative-positive');
            $('.car-landing-svg').toggleClass('relative-positive');
        }
        $('.selected-chip').removeClass('greyBg');
    });

    $('#howMuchCanIearn .cancel-pill-toggle').click(function(e) {
        $('#howMuchCanIearn').toggleClass('expand');
        $('#howMuchCanIearn').toggleClass('card');
        $('#howMuchCanIearn .btn-close').toggle();
        $('#howMuchCanIearn .chip').toggleClass('selected-chip-white');
        $('#howMuchCanIearn').toggleClass('z-forward');
    });
    $('#iKnowWhatIwant .cancel-pill-toggle').click(function(e) {
        $('#iKnowWhatIwant').toggleClass('expand');
        $('#iKnowWhatIwant').toggleClass('card');
        $('#iKnowWhatIwant .btn-close').toggle();
        $('#iKnowWhatIwant .chip').toggleClass('selected-chip-white');
        $('#iKnowWhatIwant').toggleClass('z-forward');
    });

    //BASIC DETAILS SELLING ANOTHER CAR EXPANDS




    /*
    	REVIEW APPLICATIONS - EDIT ACTIONS
    */
    $('.collapse-card .actions-footer-btn').click(function() {
        //Get collapse-card__body
        var $collapseCardBody = $(this).parent().parent().parent().parent();

        //EDIT
        if ($(this).hasClass('edit-btn')) {

            $collapseCardBody.find('.row-line-item-editable').show();
            $collapseCardBody.find('.row-line-item').hide();

            $(this).hide(); //Hide edit button
            $collapseCardBody.find('.update-btn').show();
            $collapseCardBody.find('.cancel-btn').show();

            $.scrollTo($collapseCardBody, {
                offset: {
                    'top': -180
                },
                duration: 500
            });
        }

        //CANCEL
        if ($(this).hasClass('cancel-btn')) {

            $collapseCardBody.find('.row-line-item').show();
            $collapseCardBody.find('.row-line-item-editable').each(function() {
                $('input', this).val($(this).prev().find('.text-right').html());
            });
            //Close fields
            $collapseCardBody.find('.row-line-item').show();
            $collapseCardBody.find('.row-line-item-editable').hide();

            $collapseCardBody.find('.edit-btn').show();
            $collapseCardBody.find('.remove-btn').show();
            $collapseCardBody.find('.update-btn').hide();
            $collapseCardBody.find('.cancel-btn').hide();

            $.scrollTo($collapseCardBody, {
                offset: {
                    'top': -180
                },
                duration: 500
            });
        }

        //UPDATE
        if ($(this).hasClass('update-btn')) {

            $collapseCardBody.find('.row-line-item').show();
            $collapseCardBody.find('.row-line-item-editable').each(function() {
                $(this).prev().find('.text-right').html($('input', this).val());
            });
            //Close fields
            $collapseCardBody.find('.row-line-item').show();
            $collapseCardBody.find('.row-line-item-editable').hide();

            $collapseCardBody.find('.edit-btn').show();
            $collapseCardBody.find('.remove-btn').show();
            $collapseCardBody.find('.update-btn').hide();
            $collapseCardBody.find('.cancel-btn').hide();

            $.scrollTo($collapseCardBody, {
                offset: {
                    'top': -180
                },
                duration: 500
            });
        }

        //cancel car
        if ($(this).hasClass('cancel-car-btn')) {
            $collapseCardBody.find('.remove-footer').slideUp();
            $collapseCardBody.find('.actions-footer').slideDown();
            $collapseCardBody.find('.proceed-item').slideDown();
            $collapseCardBody.find('.remove-car-btn').show();
        }

        //Accept cart
        if ($(this).hasClass('accept-car-btn')) {
            $collapseCardBody.find('.remove-footer').slideUp();
            $collapseCardBody.find('.actions-footer').slideDown();
            $collapseCardBody.find('.proceed-item').slideDown();
            $collapseCardBody.find('.remove-car-btn').show();
            $collapseCardBody.find('.vehicle-item').remove();
        }

        //Remove car button
        if ($(this).hasClass('remove-car-btn')) {
            $(this).hide();
            $collapseCardBody.find('.actions-footer').slideUp();
            $collapseCardBody.find('.remove-footer').slideDown();
            $collapseCardBody.find('.proceed-item').slideUp();
        }

        //Remove aplication button
        if ($(this).hasClass('remove-btn')) {
            //$collapseCardBody.find('.cancel-btn').show();
            //$collapseCardBody.find('.actions-footer').slideUp();
            //$collapseCardBody.find('.remove-footer').slideDown();

            //Store car being removed
            $collapseCardBody.parent().clone(true, true);

            $collapseCardBody.parent().find('.collapse-card__heading').trigger('click');
            $collapseCardBody.parent().fadeOut();

            $.scrollTo('body', 500);

            if ($collapseCardBody.parent().parent().parent().parent().hasClass('vehicle-applications')) {

                Materialize.toast('<div id="notifiction-vehicle-' + $collapseCardBody.parent().attr('id') + '" class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>Deal Removed</h4><p>You can access this in removed items.<br /><a href="javascript:undoRemoveMyCurrentVehicle(\'' + $collapseCardBody.parent().attr('id') + '\')">ADD IT BACK</a></p>');

            } else {

                Materialize.toast('<div id="notifiction-quote-' + $collapseCardBody.parent().attr('id') + '" class="overlay-close btn-close"><i class="material-icons">&#xE5CD;</i></div><h4>Quick Removed</h4><p>You can access this in removed items.<br /><a href="javascript:undoRemoveMyCurrentQuote(\'' + $collapseCardBody.parent().attr('id') + '\')">ADD IT BACK</a></p>');
            }

            undoRemoveMyCurrentVehicle = function(vehicleItem) {
                $('#profile #collapseCardWithoutTick.vehicle-applications .collapse-card').each(function() {
                    var $rel = $(this).attr('id');

                    //Put back the selected item
                    if ($rel == vehicleItem) {
                        $(this).slideDown();
                        $.scrollTo($(this), {
                            offset: {
                                'top': -100
                            },
                            duration: 500
                        });
                        //Close notification before call back is triggered
                        $('#toast-container .toast #notifiction-vehicle-' + vehicleItem + '.btn-close').trigger('click');
                    }
                });
            }


            undoRemoveMyCurrentQuote = function(quoteItem) {
                $('#profile #collapseCardWithoutTick.vehicle-quotes .collapse-card').each(function() {
                    var $rel = $(this).attr('id');

                    //Put back the selected item
                    if ($rel == quoteItem) {
                        $(this).slideDown();
                        $.scrollTo($(this), {
                            offset: {
                                'top': -100
                            },
                            duration: 500
                        });
                        //Close notification before call back is triggered
                        $('#toast-container .toast #notifiction-quote-' + quoteItem + '.btn-close').trigger('click');
                    }
                });
            }


        }


    });

    $('#buyPrivate').click(function(e) {
        $('#buyPrivateSelected').css('display', 'block');
        $('#buyDealerSelected').css('display', 'none');
    });

    $('#buyDealer').click(function(e) {
        $('#buyDealerSelected').css('display', 'block');
        $('#buyPrivateSelected').css('display', 'none');
    });
    $('#congratulationsDealApproved .deal-dealer-details, #manualProcess .deal-dealer-details').slideUp();
    $('#page-deal-approved .dealer-details-btn, #congratulationsDealApprovedDealerLinked .dealer-details-btn, #congratulationsDealApproved .dealer-details-btn, #manualProcess .dealer-details-btn').click(function() {
        $('#page-deal-approved .deal-dealer-details, #congratulationsDealApprovedDealerLinked .deal-dealer-details, #congratulationsDealApproved .deal-dealer-details, #manualProcess .deal-dealer-details').slideToggle();

        if ($(this).html() == 'VIEW DEALER DETAILS' || $(this).html().toLowerCase() == 'view dealer details') {
            $(this).html('VIEW LESS DETAILS');
        } else {
            $(this).html('VIEW DEALER DETAILS');
        }

    });

    //Set "Agree with terms" active on initial load on profile page
    $('#page-profile #terms-check-box-wrap .btnState').trigger('click').addClass('activeBtnState');
    $('#page-profile #terms-check-box-wrap .btnState input').prop('checked', true);
});

//Validating functions
function validProfilePostalCode(value) {
    return /^\d{4,5}?$/.test(value);
}

function validYear(value) {
    return /^\d{4}?$/.test(value);
}

function validProfileEmail(value) {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
}

function validProfileContact(value) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
}

function validProfilePrice(value) {
    return /^R?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{2})?$/.test(value);
    //return /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{2})?$/.test(value);
}

function nospaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, '');
    }
}

function validNumeric(value) {
    return /^[0-9,]*$/i.test(value);
}

function validProfileDetailsForm() {
    var validForm = true;
    $('#profile .profile-container input').each(function() {
        if (
            ($(this).val() == "") ||
            ($(this).attr('id') == 'cellphone' && !validProfileContact($(this).val())) ||
            ($(this).attr('id') == 'emailAddress' && !validProfileEmail($(this).val())) ||
            ($(this).attr('id') == 'postalCode' && !validProfilePostalCode($(this).val())) ||
            (($(this).attr('id') == 'grossIncome' || $(this).attr('id') == 'livingExpenses') && !validProfilePrice($(this).val()))
        ) {
            $.scrollTo('#' + $(this).attr('id'), {
                offset: {
                    'top': -100
                },
                duration: 500
            });
            $(this).addClass('invalid');
            $(this).removeClass('valid');
            return validForm = false;
        } else {
            $(this).addClass('valid');
            $(this).removeClass('invalid');
            return validForm = true;
        }
    });

    return validForm;
}

$(function() {

    $("#accordionCollapseOver .collapse-card__heading").on("click", function() {
        $('#accordionCollapseOver .collapse-card__heading').each(function() {
            if ($(this).parent().find('.collapse-card__body').is(':hidden')) {
                $(this).parent().slideUp(50, 'swing');
            }
        });
        if (!$(this).parent().hasClass('active')) { //Show all cards again on close
            $('#accordionCollapseOver .collapse-card__heading').each(function() {
                if ($(this).parent().find('.collapse-card__body').is(':hidden')) {
                    $(this).parent().slideDown(50, 'swing');
                }
            });
        }
    });
    $(".chips-expander .btn-expander-cancel").on("click", function() {
        $(this).parent().parent().parent().parent().parent().find('.btn-close').trigger('click');
    });
});


$(function() {
    $("#financeApplication .btn-orange.btn-submit-all").click(function() {

        var financeApplicationCommission = document.getElementById("financeApplicationCommission").value; // a string

        if (financeApplicationCommission != '') {

            financeApplicationCommission = financeApplicationCommission.replace(/\D/g, ''); // a string of only digits, or the empty string
            var rands = financeApplicationCommission.substring(0, financeApplicationCommission.length - 2);
            var cents = financeApplicationCommission.slice(-2);
            financeApplicationCommission = rands + "." + cents;
            financeApplicationCommission = financeApplicationCommission.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; //Convert the number into a string, match the number up to the second decimal place
            financeApplicationCommission = parseInt(financeApplicationCommission, 10); // now it's a numeric value without .00, if you want .00 you should comment out this line

            //alert("Gross: " + gross + ", Net Income: " + netIncome);
            document.getElementById("financeApplicationCommission-converted").value = financeApplicationCommission;
            //alert("Gross: " + document.getElementById("gross-converted").value + ", Net Income: " + document.getElementById("netIncome-converted").value);

        }

    });

    // currency to numbers
    $("#page_basic_details_none .form-iputs #submit").click(function() {
        var gross = document.getElementById("gross").value; // a string
        gross = gross.replace(/\D/g, ''); // a string of only digits, or the empty string
        var rands = gross.substring(0, gross.length - 2);
        var cents = gross.slice(-2);
        gross = rands + "." + cents;
        gross = gross.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; //Convert the number into a string, match the number up to the second decimal place
        gross = parseInt(gross, 10); // now it's a numeric value without .00, if you want .00 you should comment out this line

        var netIncome = document.getElementById("netIncome").value; // a string
        netIncome = netIncome.replace(/\D/g, ''); // a string of only digits, or the empty string
        var rands = netIncome.substring(0, netIncome.length - 2);
        var cents = netIncome.slice(-2);
        netIncome = rands + "." + cents;
        netIncome = netIncome.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; //Convert the number into a string, match the number up to the second decimal place
        netIncome = parseInt(netIncome, 10); // now it's a numeric value without .00, if you want .00 you should comment out this line

        //alert("Gross: " + gross + ", Net Income: " + netIncome);
        document.getElementById("gross-converted").value = gross;
        document.getElementById("netIncome-converted").value = netIncome;
        //alert("Gross: " + document.getElementById("gross-converted").value + ", Net Income: " + document.getElementById("netIncome-converted").value);
    });

    // Review Application currency editables
    /* Application Terms */
    $("#page-review-application #collapse-card-6 .update-btn").click(function() {
        var reviewApplicationDeposit = document.getElementById("reviewApplicationDeposit").value;
        reviewApplicationDeposit = reviewApplicationDeposit.replace(/\D/g, '');
        reviewApplicationDeposit = reviewApplicationDeposit.substring(0, reviewApplicationDeposit.length - 2);
        reviewApplicationDeposit = parseInt(reviewApplicationDeposit, 10);
    });
    /* Financial Details */
    $("#page-review-application #collapse-card-7 .update-btn").click(function() {
        var reviewApplicationGrossIncome = document.getElementById("reviewApplicationGrossIncome").value; // a string
        var reviewApplicationNetIncome = document.getElementById("reviewApplicationNetIncome").value; // a string
        var reviewApplicationMonthlyExpenses = document.getElementById("reviewApplicationMonthlyExpenses").value; // a string
        var reviewApplicationTotalAmountOtherIncome = document.getElementById("reviewApplicationTotalAmountOtherIncome").value; // a string
        var reviewApplicationTotalMonthlyCommission = document.getElementById("reviewApplicationTotalMonthlyCommission").value; // a string
        var reviewApplicationOvertime = document.getElementById("reviewApplicationOvertime").value; // a string
        var reviewApplicationLivingExpenses = document.getElementById("reviewApplicationLivingExpenses").value; // a string
        var reviewApplicationSalaryDeductions = document.getElementById("reviewApplicationSalaryDeductions").value; // a string

        reviewApplicationGrossIncome = reviewApplicationGrossIncome.replace(/\D/g, ''); // a string of only digits, or the empty string
        reviewApplicationNetIncome = reviewApplicationNetIncome.replace(/\D/g, '');
        reviewApplicationMonthlyExpenses = reviewApplicationMonthlyExpenses.replace(/\D/g, '');
        reviewApplicationTotalAmountOtherIncome = reviewApplicationTotalAmountOtherIncome.replace(/\D/g, '');
        reviewApplicationTotalMonthlyCommission = reviewApplicationTotalMonthlyCommission.replace(/\D/g, '');
        reviewApplicationOvertime = reviewApplicationOvertime.replace(/\D/g, '');
        reviewApplicationLivingExpenses = reviewApplicationLivingExpenses.replace(/\D/g, '');
        reviewApplicationSalaryDeductions = reviewApplicationSalaryDeductions.replace(/\D/g, '');

        reviewApplicationGrossIncome = reviewApplicationGrossIncome.substring(0, reviewApplicationGrossIncome.length - 2);
        reviewApplicationNetIncome = reviewApplicationNetIncome.substring(0, reviewApplicationNetIncome.length - 2);
        reviewApplicationMonthlyExpenses = reviewApplicationMonthlyExpenses.substring(0, reviewApplicationMonthlyExpenses.length - 2);
        reviewApplicationTotalAmountOtherIncome = reviewApplicationTotalAmountOtherIncome.substring(0, reviewApplicationTotalAmountOtherIncome.length - 2);
        reviewApplicationTotalMonthlyCommission = reviewApplicationTotalMonthlyCommission.substring(0, reviewApplicationTotalMonthlyCommission.length - 2);
        reviewApplicationOvertime = reviewApplicationOvertime.substring(0, reviewApplicationOvertime.length - 2);
        reviewApplicationLivingExpenses = reviewApplicationLivingExpenses.substring(0, reviewApplicationLivingExpenses.length - 2);
        reviewApplicationSalaryDeductions = reviewApplicationSalaryDeductions.substring(0, reviewApplicationSalaryDeductions.length - 2);

        reviewApplicationGrossIncome = parseInt(reviewApplicationGrossIncome, 10);
        reviewApplicationNetIncome = parseInt(reviewApplicationNetIncome, 10);
        reviewApplicationMonthlyExpenses = parseInt(reviewApplicationMonthlyExpenses, 10);
        reviewApplicationTotalAmountOtherIncome = parseInt(reviewApplicationTotalAmountOtherIncome, 10);
        reviewApplicationTotalMonthlyCommission = parseInt(reviewApplicationTotalMonthlyCommission, 10);
        reviewApplicationOvertime = parseInt(reviewApplicationOvertime, 10);
        reviewApplicationLivingExpenses = parseInt(reviewApplicationLivingExpenses, 10);
        reviewApplicationSalaryDeductions = parseInt(reviewApplicationSalaryDeductions, 10);

    });


});
//$('.st-container-browser-height').css("height", $(window).height());
//$('html').css("height", $(window).height());
$('#credit-advisor .dashboard-card .btn-focus-more').on('click', function() {
    if ($(this).html() == 'VIEW MORE' || $(this).html().toLowerCase() == 'view more') {
        $(this).html('VIEW LESS');
        $(this).parent().parent().find('.focus-more').slideDown();
    } else {
        $(this).html('VIEW MORE');
        $(this).parent().parent().find('.focus-more').slideUp();
    }
});


$('#header-collapse-drawer .collapse-drawer-btn').on('click', function() {
    if (!$('#header-collapse-drawer .your-goal-wrap').is(':visible')) {
        $(this).html('<i class="fa fa-angle-double-up"></i>');
        $('#header-collapse-drawer .your-goal-wrap').slideDown();
        $('#header-collapse-drawer .your-goal img').hide();
        $('#header-collapse-drawer .your-goal .pull-right').show();
    } else {
        $(this).html('<i class="fa fa-angle-double-down"></i>');
        $('#header-collapse-drawer .your-goal-wrap').slideUp();
        $('#header-collapse-drawer .your-goal img').show();
        $('#header-collapse-drawer .your-goal .pull-right').hide();
    }
});

$('#header-collapse-drawer .btn-update-income').on('click', function() {
    if ($('#header-collapse-drawer .update-income').is(':visible')) {
        $('#header-collapse-drawer .update-income').slideUp();
        $('#header-collapse-drawer .update-income-form').slideDown();
    } else {
        $('#header-collapse-drawer .update-income').slideDown();
        $('#header-collapse-drawer .update-income-form').slideUp();
    }
});

$('#credit-advisor .card-grey .dashboard-card-heading').on('click', function() {
    if (!$('#credit-advisor .card-grey .qualify-for-wrap').is(':visible')) {
        $('#credit-advisor .card-grey .qualify-for-wrap').slideDown();
        $('#credit-advisor .card-grey .dashboard-card-icon-wrap .material-icons').hide();
        $('#credit-advisor .card-grey .dashboard-card-icon-wrap .btn-close').show();
    } else {
        $('#credit-advisor .card-grey .qualify-for-wrap').slideUp();
        $('#credit-advisor .card-grey .dashboard-card-icon-wrap .material-icons').show();
        $('#credit-advisor .card-grey .dashboard-card-icon-wrap .btn-close').hide();
    }
});

$('#car-goal-change .card-grey .dashboard-card-heading').on('click', function() {
    if (!$('#car-goal-change .card-grey .qualify-for-wrap').is(':visible')) {
        $('#car-goal-change .card-grey .qualify-for-wrap').slideDown();
        $('#car-goal-change .card-grey .dashboard-card-icon-wrap .material-icons').hide();
        $('#car-goal-change .card-grey .dashboard-card-icon-wrap .btn-close').show();
    } else {
        $('#car-goal-change .card-grey .qualify-for-wrap').slideUp();
        $('#car-goal-change .card-grey .dashboard-card-icon-wrap .material-icons').show();
        $('#car-goal-change .card-grey .dashboard-card-icon-wrap .btn-close').hide();
    }
});
$('#amount-goal-change .card-grey .dashboard-card-heading').on('click', function() {
    if (!$('#amount-goal-change .card-grey .qualify-for-wrap').is(':visible')) {
        $('#amount-goal-change .card-grey .qualify-for-wrap').slideDown();
        $('#amount-goal-change .card-grey .dashboard-card-icon-wrap .material-icons').hide();
        $('#amount-goal-change .card-grey .dashboard-card-icon-wrap .btn-close').show();
    } else {
        $('#amount-goal-change .card-grey .qualify-for-wrap').slideUp();
        $('#amount-goal-change .card-grey .dashboard-card-icon-wrap .material-icons').show();
        $('#amount-goal-change .card-grey .dashboard-card-icon-wrap .btn-close').hide();
    }
});
$('#header-collapse-drawer .btn-current-goal').on('click', function() {
    $('#header-collapse-drawer .collapse-drawer-btn').trigger('click');
});

$('#header-collapse-drawer .update-income-form input').on('focus', function() {
    $(this).parent().parent().find('.form-tool-tip').show();
});
$('#header-collapse-drawer .update-income-form input').on('blur', function() {
    $(this).parent().parent().find('.form-tool-tip').hide();
});

/*
	VALIDATION
*/
function validateEmptyField(id, errorMsg) {

    $('#' + id).removeClass('LV_invalid_field');
    $('.invalid' + id).remove();

    if ($('#' + id).val() == "") {
        $('#' + id).addClass('LV_invalid_field');
        $('<span class="pull-right LV_invalid invalid' + id + '">' + errorMsg + '</span>' + id).insertAfter($('#' + id));
        return false;
    } else
        return true;
}

function validateEmptyDropdown(id, errorMsg) {

    $('#' + id).parent().find('input.select-dropdown').removeClass('LV_invalid_field');
    $('.invalid' + id).remove();

    if ($('#' + id).val() == "select") {
        $('#' + id).parent().find('input.select-dropdown').addClass('LV_invalid_field');
        $('<span class="pull-right LV_invalid invalid' + id + '">' + errorMsg + '</span>' + id).insertAfter($('#' + id));
        return false;
    } else
        return true;
}

function validateContactNumber(id, errorMsg) {

    $('#' + id).removeClass('LV_invalid_field');
    $('.invalid' + id).remove();

    if (!validProfileContact($('#' + id).val())) {
        $('#' + id).addClass('LV_invalid_field');
        $('<span class="pull-right LV_invalid invalid' + id + '">' + errorMsg + '</span>' + id).insertAfter($('#' + id));
        return false;
    } else
        return true;
}

function validateEmailAddress(id, errorMsg) {

    $('#' + id).removeClass('LV_invalid_field');
    $('.invalid' + id).remove();

    if (!validProfileEmail($('#' + id).val())) {
        $('#' + id).addClass('LV_invalid_field');
        $('<span class="pull-right LV_invalid invalid' + id + '">' + errorMsg + '</span>' + id).insertAfter($('#' + id));
        return false;
    } else
        return true;
}

function validateNumeric(id, errorMsg) {

    $('#' + id).removeClass('LV_invalid_field');
    $('.invalid' + id).remove();

    if (!validNumeric($('#' + id).val())) {
        $('#' + id).addClass('LV_invalid_field');
        $('<span class="pull-right LV_invalid invalid' + id + '">' + errorMsg + '</span>' + id).insertAfter($('#' + id));
        return false;
    } else
        return true;
}

function validateProfileDetails($profileCardBody) {

    switch ($profileCardBody.attr('id')) {

        case 'profile-details-personal':

            validateEmptyDropdown($profileCardBody.find('#reviewApplicationTitle').attr('id'), 'Please select title.');
            validateEmptyField($profileCardBody.find('#reviewApplicationFirstname').attr('id'), 'Please enter name.');
            validateEmptyField($profileCardBody.find('#reviewApplicationSurname').attr('id'), 'Please enter surname.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationMaritalStatus').attr('id'), 'Please select marital status.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationMaritalContractType').attr('id'), 'Please select marital contract type.');
            validateContactNumber($profileCardBody.find('#reviewApplicationCellphone').attr('id'), 'Invalid cellphone number. Please enter a valid cellphone number.');
            validateEmailAddress($profileCardBody.find('#reviewApplicationEmailAddress').attr('id'), 'Invalid email address. Please enter a valid email address.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationContactMethod').attr('id'), 'Please select a preferred method of communication.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationHomeLanguage').attr('id'), 'Please select a home language.');

            if (
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationTitle').attr('id'), 'Please select title.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationFirstname').attr('id'), 'Please enter name.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationSurname').attr('id'), 'Please enter surname.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationMaritalStatus').attr('id'), 'Please select marital status.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationMaritalContractType').attr('id'), 'Please select marital contract type.') &&
                validateContactNumber($profileCardBody.find('#reviewApplicationCellphone').attr('id'), 'Invalid cellphone number. Please enter a valid cellphone number.') &&
                validateEmailAddress($profileCardBody.find('#reviewApplicationEmailAddress').attr('id'), 'Invalid email address. Please enter a valid email address.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationContactMethod').attr('id'), 'Please select a preferred method of communication.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationHomeLanguage').attr('id'), 'Please select a home language.')
            )
                return true;
            else
                return false;

            break;

        case 'profile-details-address':

            validateEmptyDropdown($profileCardBody.find('#reviewApplicationResidentialStatus').attr('id'), 'Please select a property status.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationResidentialBonded').attr('id'), 'Please select an option.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationResidentialType').attr('id'), 'Please select the type of residence.');
            validateEmptyField($profileCardBody.find('#reviewApplicationEstateName').attr('id'), 'Please enter estate name.');
            validateEmptyField($profileCardBody.find('#reviewApplicationUnit').attr('id'), 'Please enter unit/floor information.');
            validateEmptyField($profileCardBody.find('#reviewApplicationStreet').attr('id'), 'Please enter street information.');
            validateEmptyField($profileCardBody.find('#reviewApplicationSuburb').attr('id'), 'Please enter a suburb name.');
            validateEmptyField($profileCardBody.find('#reviewApplicationPostalCode').attr('id'), 'Please enter the postal code.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationPostalTimeAtCurrentYears').attr('id'), 'Please select the number of years spent at current address.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationPostalTimeAtCurrentMonths').attr('id'), 'Please select the number of months spent at current address.');
            validateEmptyField($profileCardBody.find('#reviewApplicationPostalAddress1').attr('id'), 'Please enter an address.');
            validateEmptyField($profileCardBody.find('#reviewApplicationPostalAddressSuburb').attr('id'), 'Please enter a suburb name.');
            validateEmptyField($profileCardBody.find('#reviewApplicationPostalCodePostal').attr('id'), 'Please enter the postal code.');

            if (
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationResidentialStatus').attr('id'), 'Please select a property status.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationResidentialBonded').attr('id'), 'Please select an option.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationResidentialType').attr('id'), 'Please select the type of residence.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationEstateName').attr('id'), 'Please enter estate name.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationUnit').attr('id'), 'Please enter unit/floor information.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationStreet').attr('id'), 'Please enter street information.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationSuburb').attr('id'), 'Please enter a suburb name.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationPostalCode').attr('id'), 'Please enter the postal code.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationPostalTimeAtCurrentYears').attr('id'), 'Please select the number of years spent at current address.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationPostalTimeAtCurrentMonths').attr('id'), 'Please select the number of months spent at current address.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationPostalAddress1').attr('id'), 'Please enter an address.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationPostalAddressSuburb').attr('id'), 'Please enter a suburb name.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationPostalCodePostal').attr('id'), 'Please enter the postal code.')
            )
                return true;
            else
                return false;

            break;

        case 'profile-details-accupation':

            validateEmptyDropdown($profileCardBody.find('#reviewApplicationOccupationStatus').attr('id'), 'Please select your type of employment.');
            validateEmptyField($profileCardBody.find('#reviewApplicationIndustry').attr('id'), 'Please enter the most relevant industry you work in.');
            validateEmptyField($profileCardBody.find('#reviewApplicationOccupation').attr('id'), 'Please enter your most relevant occupation.');
            validateEmptyField($profileCardBody.find('#reviewApplicationComapny').attr('id'), 'Please enter your current employer.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationComapnyYears').attr('id'), 'Please select number of years spent at current company.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicationComapnyMonths').attr('id'), 'Please select number of months spent at current company.');
            validateContactNumber($profileCardBody.find('#reviewApplicationWorkTelephone').attr('id'), 'Invalid telephone number. Please enter a valid telephone number.');

            if (
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationOccupationStatus').attr('id'), 'Please select your type of employment.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationIndustry').attr('id'), 'Please enter the most relevant industry you work in.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationOccupation').attr('id'), 'Please enter your most relevant occupation.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationComapny').attr('id'), 'Please enter your current employer.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationComapnyYears').attr('id'), 'Please select number of years spent at current company.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicationComapnyMonths').attr('id'), 'Please select number of months spent at current company.') &&
                validateContactNumber($profileCardBody.find('#reviewApplicationWorkTelephone').attr('id'), 'Invalid telephone number. Please enter a valid telephone number.')

            )
                return true;
            else
                return false;

            break;

        case 'profile-details-financial':

            validateEmptyField($profileCardBody.find('#reviewApplicationGrossIncome').attr('id'), 'Please enter a valid gross income amount.');
            validateEmptyField($profileCardBody.find('#reviewApplicationBank').attr('id'), 'Please indicate who you bank with.');
            validateEmptyField($profileCardBody.find('#reviewApplicationMonthlyExpenses').attr('id'), 'provide total living expenses.');
            validateEmptyDropdown($profileCardBody.find('#reviewApplicatioOtherIncome').attr('id'), 'Please select an option.');
            validateEmptyField($profileCardBody.find('#reviewApplicationSalaryDeductions').attr('id'), 'Please enter a valid total salary deductions.');

            if (
                validateEmptyField($profileCardBody.find('#reviewApplicationGrossIncome').attr('id'), 'Please enter a valid gross income amount.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationBank').attr('id'), 'Please indicate who you bank with.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationMonthlyExpenses').attr('id'), 'provide total living expenses.') &&
                validateEmptyDropdown($profileCardBody.find('#reviewApplicatioOtherIncome').attr('id'), 'Please select an option.') &&
                validateEmptyField($profileCardBody.find('#reviewApplicationSalaryDeductions').attr('id'), 'Please enter a valid total salary deductions.')
            )
                return true;
            else
                return false;

            break;

        default:
            ;
    }

}

//nonFinancedTradeIn
$('#nonFinanceTradeInVin').hide();

function toggleTradeInForms() {
    $('#nonFinanceTradeInLicencePlate').toggle();
    $('#nonFinanceTradeInVin').toggle();
}
$('#enterVINNumber').click(function() {
    console.log(toggleTradeInForms());
});
$('#enterLicencePlate').click(function() {
    console.log(toggleTradeInForms());
});

//flapping checkboxes
$('.dealerDetails').hide();
$('.vehicleRegistrationNumber').hide();
$('.buyThisCar .leftBtn .btnState').on('click', function() {
    $('.dealerDetails').slideDown(500);
    $('.vehicleRegistrationNumber').slideUp();
});
$('.buyThisCar .rightBtn .btnState').on('click', function() {
    $('.dealerDetails').slideUp();
    $('.vehicleRegistrationNumber').slideDown(500);
});

$('.rightBtn .btnState').each(function() {
    $(this).on('click', function() {
        $(this).addClass('activeBtnState');
        $(this).parent().parent().find('.rightBtn .btnState .checkmark').removeClass('hide');
        $(this).parent().parent().find('.leftBtn .btnState .checkmark').addClass('hide');
        $(this).parent().parent().find('.leftBtn .btnState').removeClass('activeBtnState');
        $(this).parent().parent().find('.rightBtn .flappy-dialog').addClass("hidden");
        $(this).parent().parent().find('.leftBtn .flappy-dialog').removeClass("hidden");
        $(this).parent().parent().find('.rightBtn .flappy-dialog input').attr('checked', true);

    });
});

$('.leftBtn .btnState').each(function() {
    $(this).on('click', function() {
        $(this).addClass('activeBtnState');
        $(this).parent().parent().find('.leftBtn .btnState .checkmark').removeClass('hide');
        $(this).parent().parent().find('.rightBtn .btnState .checkmark').addClass('hide');
        $(this).parent().parent().find('.rightBtn .btnState').removeClass('activeBtnState');
        $(this).parent().parent().find('.leftBtn .flappy-dialog').addClass("hidden");
        $(this).parent().parent().find('.rightBtn .flappy-dialog').removeClass("hidden");
        $(this).parent().parent().find('.leftBtn .flappy-dialog input').attr('checked', true);
    });
});

var count1 = 1;
$(".register-terms .btnState").click(function() {
    if (count1 < 3) {
        $(this).addClass('activeBtnState');
        $('.register-terms .flappy-dialog').addClass("hidden");
        setTimeout(function() {
            $('.register-terms .flappy-dialog').removeClass("hidden");
        }, 400);
        count1++;
    } else {
        $(this).removeClass('activeBtnState');
        $('.register-terms .flappy-dialog').addClass("hidden");
        setTimeout(function() {
            $('.register-terms .flappy-dialog').removeClass("hidden");
        }, 400);
        count1++;
        if (count1 == 5) {
            count1 = 1;
        }
    }
});

var count2 = 1;


function ham() {
    if (count2 == 1) {
        $("#userVerification .collapse-card ").css("z-index", "0");
        count2 = 0;
    } else {

        count2 = 1;
    }
}
/*
	TRADE IN
*/
$('#page-trade-in .btn-edit-col').on('click', function() {
    $('#tradeInSettlementAmountOne').val($('.tradein-amount-one').html());
    $('#tradeInMileageOne').val($('.tradein-mileage-one').html());
    $('#page-trade-in .edit-result-state').slideDown();
    $('#page-trade-in .show-result-state').slideUp();
});
$('#page-trade-in .btn-cancel-result-state').on('click', function() {
    $('#tradeInSettlementAmountOne').removeClass('LV_invalid_field');
    $('.invalidtradeInSettlementAmount').remove();
    $('#tradeInMileageOne').removeClass('LV_invalid_field');
    $('.invalidtradeInMileage').remove();
    $('#page-trade-in .edit-result-state').slideUp();
    $('#page-trade-in .show-result-state').slideDown();
});
$('#page-trade-in .btn-update-result-state').on('click', function() {
    if (
        validateEmptyField('tradeInSettlementAmountOne', 'Please enter settlement amount.') &&
        validateEmptyField('tradeInMileageOne', 'Please enter Km\'s on the clock.') &&
        validateNumeric('tradeInMileageOne', 'Please enter a valid number, e.g 64,000')
    ) {
        $('.tradein-amount-one').html($('#tradeInSettlementAmountOne').val());
        $('.tradein-mileage-one').html($('#tradeInMileageOne').val());
        $('#page-trade-in .edit-result-state').slideUp();
        $('#page-trade-in .show-result-state').slideDown();
    }

});


$('#page-trade-in .btn-edit-result-state-one').on('click', function() {
    $('#tradeInSettlementAmountOne').val($('.tradein-amount-one').html());
    $('#tradeInMileageOne').val($('.tradein-mileage-one').html());
    $('#page-trade-in .edit-result-state-one').slideDown();
    $('#page-trade-in .show-result-state-one').slideUp();
});
$('#page-trade-in .btn-edit-result-state-two').on('click', function() {
    $('#tradeInSettlementAmountTwo').val($('.tradein-amount-two').html());
    $('#tradeInMileageTwo').val($('.tradein-mileage-two').html());
    $('#page-trade-in .edit-result-state-two').slideDown();
    $('#page-trade-in .show-result-state-two').slideUp();
});
$('#page-trade-in .btn-cancel-result-state-one').on('click', function() {
    $('#tradeInSettlementAmountOne').removeClass('LV_invalid_field');
    $('.invalidtradeInSettlementAmount').remove();
    $('#tradeInMileageOne').removeClass('LV_invalid_field');
    $('.invalidtradeInMileage').remove();
    $('#page-trade-in .edit-result-state-one').slideUp();
    $('#page-trade-in .show-result-state-one').slideDown();
});
$('#page-trade-in .btn-cancel-result-state-two').on('click', function() {
    $('#tradeInSettlementAmountTwo').removeClass('LV_invalid_field');
    $('.invalidtradeInSettlementAmount').remove();
    $('#tradeInMileageTwo').removeClass('LV_invalid_field');
    $('.invalidtradeInMileage').remove();
    $('#page-trade-in .edit-result-state-two').slideUp();
    $('#page-trade-in .show-result-state-two').slideDown();
});
$('#page-trade-in .card-panel-wide .btn-update-result-state-one').on('click', function() {
    if (
        validateEmptyField('tradeInSettlementAmountOne', 'Please enter settlement amount.') &&
        validateEmptyField('tradeInMileageOne', 'Please enter Km\'s on the clock.') &&
        validateNumeric('tradeInMileageOne', 'Please enter a valid number, e.g 64,000')
    ) {
        $('.tradein-amount-one').html($('#tradeInSettlementAmountOne').val());
        $('.tradein-mileage-one').html($('#tradeInMileageOne').val());
        $('#page-trade-in .edit-result-state-one').slideUp();
        $('#page-trade-in .show-result-state-one').slideDown();
    }

});
$('#page-trade-in .btn-update-result-state-two').on('click', function() {
    if (
        validateEmptyField('tradeInSettlementAmountTwo', 'Please enter settlement amount.') &&
        validateEmptyField('tradeInMileageTwo', 'Please enter Km\'s on the clock.') &&
        validateNumeric('tradeInMileageTwo', 'Please enter a valid number, e.g 64,000')
    ) {
        $('.tradein-amount-two').html($('#tradeInSettlementAmountTwo').val());
        $('.tradein-mileage-two').html($('#tradeInMileageTwo').val());
        $('#page-trade-in .edit-result-state-two').slideUp();
        $('#page-trade-in .show-result-state-two').slideDown();
    }

});
$('#page-trade-in .card-panel-wide .btn-enter-vin-number').on('click', function() {
    $('#page-trade-in .card-panel-wide .vin-number-wrapper').show();
    $('#page-trade-in .card-panel-wide .plate-number-wrapper').hide();
});
$('#page-trade-in .card-panel-wide .btn-enter-plate-number').on('click', function() {
    $('#page-trade-in .card-panel-wide .plate-number-wrapper').show();
    $('#page-trade-in .card-panel-wide .vin-number-wrapper').hide();
});
$('#page-trade-in .card-panel-wide .btn-submit-correct-car-details').on('click', function() {
    if (
        validateEmptyField('tradeInCorrectCarYear', 'Please enter year.') &&
        validateEmptyField('tradeInCorrectCarMake', 'Please enter make.') &&
        validateEmptyField('tradeInCorrectCarModel', 'Please enter model.') &&
        validateEmptyField('tradeInCorrectCarPlateNumber', 'Please enter license plate number.')
    ) {
        window.location.href = 'tradeIn.html';
    }

});
/*$('.overlay.non-finances-correct-calculate-this-value .btn-orange').on('click', function() {

    if (
        validateEmptyField('nonFinanacedCorrectMileage', 'Please enter Km\'s on the clock.') &&
        validateNumeric('nonFinanacedCorrectMileage', 'Please enter a valid number, e.g 64,000')
    ) {
        //Close overlay
        //$('.overlay-close.btn-close').trigger('click');
    }

});*/
$('.accept').click(function() {
    $('#terms-check-box-wrap .btnState').find('input[type=checkbox]').prop("checked", !$(this).find('input[type=checkbox]').prop("checked"));
    $('#terms-check-box-wrap .btnState').addClass('activeBtnState');
});

$('#terms-check-box-wrap').click(function() {
    if (document.getElementById("terms-section").checked == true) {
        $('#terms-check-box-wrap .btnState').addClass('activeBtnState');
    } else {
        $('#terms-check-box-wrap .btnState').removeClass('activeBtnState');
    }
});

$('.cashOfferSlideNo,.cashOfferSlideYes,.cashOfferDisclaimer p').hide();

$('.buyThisCar .leftBtn .btnState').on('click', function() {
    $('.cashOfferSlideNo').hide();
    $('.cashofferNo').css("opacity", "0");
    $('.cashOfferSlideNo').removeClass("slide-down");

    $('.cashOfferSlideYes').show();
    $('.cashofferYes').css("opacity", "1");
    $('.cashOfferDisclaimer p').fadeIn();
    setTimeout(function() {
        $('.cashOfferSlideYes').addClass("slide-down");
    }, 10);

});
$('.buyThisCar .rightBtn .btnState').on('click', function() {
    $('.cashOfferSlideYes').hide();
    $('.cashofferYes').css("opacity", "0");
    $('.cashOfferSlideYes').removeClass("slide-down");
    $('.cashOfferDisclaimer p').fadeOut();

    $('.cashOfferSlideNo').show();
    $('.cashofferNo').css("opacity", "1");
    setTimeout(function() {
        $('.cashOfferSlideNo').addClass("slide-down");
    }, 10);
});

//Removed notification
$('#pushDownNotifications').hide();


$('#page-profile .remove-btn').click(function() {
    $('#pushDownNotifications').slideDown(500);
    $('.pushDownNotifications').show();
    $('html, body').animate({
        scrollTop: 0
    }, 'fast');
});

// Disables all input, select & textarea tags within the .dealerDetails div
$('#fromDealer,#throughPrivate,.btn-orange').click(function() {
    if ($('#fromDealer').is(':checked')) {
        $("input, select, textarea", $(".dealerDetails")).removeAttr("disabled");
    } else {
        $("input, select, textarea", $(".dealerDetails")).attr("disabled", "disabled");
    }
});


//superC svg-path version start
var animation,
    animation2,
    animateAlongPath;

var snapABC = Snap(".snap");
var path = snapABC.path("M0,10.7c0,0,15.6-1.4,29.5,7.6c13.9,9.1,36.3,17.2,53.3,12.4c17-4.7,26.6-11.8,44.5-10.6s32.3,5.5,56.7,10.2 s45.9-9.1,61.6-18.6s39.9-0.8,57,13.8").attr({
    /*id: "squiggle",
    fill: "none",
    strokeWidth: "0.4163",
    stroke: "#E2E5E7",
    strokeMiterLimit: "10",
    strokeDashOffset: "988.01"*/
    id: "squiggle",
    fill: "none",
    strokeWidth: "4",
    stroke: "#111111",
    strokeMiterLimit: "10",
    strokeDasharray: "9 9",
    strokeDashOffset: "988.01"
});
var len1 = path.getTotalLength();
path.attr({
    stroke: '#111111',
    strokeWidth: 1,
    fill: 'none',
    // Animate Path
    "stroke-dasharray": "12 0",
    "stroke-dashoffset": len1
}).animate({
    "stroke-dashoffset": 10
}, 2500, mina.linear);

var circle = snapABC.circle(-10, -10, 3); //change 22 to -10, 16 is the circumference of the circle
circle.attr({
    fill: "#68D1DB",
    stroke: "#ffffff",
    strokeWidth: 0.5 //white border on circle
});
var circleBorder = snapABC.circle(-10, -10, 4);
circleBorder.attr({
    fill: "rgba(255,255,255,0)",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: 1.5
});

var circle2 = snapABC.circle(-10, -10, 3);
circle2.attr({
    fill: "#68D1DB",
    stroke: "#ffffff",
    strokeWidth: 0.5
});
var circleBorder2 = snapABC.circle(-10, -10, 4);
circleBorder2.attr({
    fill: "rgba(255,255,255,0)",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: 1.5
});


animation = function() {
    circle.transform('t0,0');
    //animateAlongPath(path, circle, 0, 5000, mina.linear, animation);
    animateAlongPath(path, circle, circleBorder, 0, 14000, mina.linear, animation);
};
animation2 = function() {
    circle2.transform('t0,0');
    //animateAlongPath2(path, circle2, 200, 5000, mina.easeinout, animation2);
    animateAlongPath2(path, circle2, circleBorder2, 0, 10020, mina.linear, animation2);
};

animateAlongPath = function(path, el, elBorder, start, duration, easing, callback) {
    var len = Snap.path.getTotalLength(path),
        elBB = el.getBBox(),
        elCenter = {
            x: elBB.x + (elBB.width / 2),
            y: elBB.y + (elBB.height / 2),
        };

    Snap.animate(start, len, function(value) {
        var movePoint = Snap.path.getPointAtLength(path, value);
        el.transform('t' + (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
        elBorder.transform('t' + (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
    }, duration, easing, function() {
        if (callback) callback(path);
    });
};


animateAlongPath2 = function(path, el, elBorder, start, duration, easing, callback) {
    var len = Snap.path.getTotalLength(path),
        elBB = el.getBBox(),
        elCenter = {
            x: elBB.x + (elBB.width / 2),
            y: elBB.y + (elBB.height / 2),
        };

    Snap.animate(start, len, function(value) {
        var movePoint = Snap.path.getPointAtLength(path, value);
        el.transform('t' + (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
        elBorder.transform('t' + (movePoint.x - elCenter.x) + ',' + (movePoint.y - elCenter.y));
    }, duration, easing, function() {
        if (callback) callback(path);
    });
};

animation();
animation2();
//superC svg-path version end

//Allows 'enter' to taba dn submit forms ipad
$(function() {
    $('input,select').on('keypress', function(e) {
        e.which !== 13 || $('[tabIndex=' + (+this.tabIndex + 1) + ']')[0].focus();
    });
});
//Allows 'enter' to taba dn submit forms ipad end
