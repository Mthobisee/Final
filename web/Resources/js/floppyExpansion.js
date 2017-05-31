//LANDING PAGE PILL EXPANDS
    $('#sellingCar-section2').hide();


    var count1 = 1;
    $("#sellingAnotherCar .chip, #sellingCar-section2").click(function() {
        if (count1 == 1) {
            $('#sellingAnotherCar .chip').addClass('chip_change');
            
            count1 = 0;
        } else {
            $('#sellingAnotherCar .chip').removeClass('chip_change');
            
            count1 = 1;
        }
    });

    $('.expandedSpan').hide();

    
    $('.trigger-selling-another-car').click(function() {
        //$('.flappy-expander').css("background-color","red");
        $('#sellingAnotherCar .chip').parent().addClass('expand');
        $('#sellingAnotherCar .chip').parent().addClass('card');
        
        //Set to know if changing car    
        $('#sellingCarNo').parent().addClass('activeBtnState');
        $('#sellingCarYes').parent().removeClass('activeBtnState');
        $('#sellingCarNo').parent().addClass("hidden");
        $('#sellingCarYes').parent().removeClass("hidden");
        $('#sellingCarNo').attr('checked', true);
            
        if (window.matchMedia("(max-width:768px)").matches) {
            $('#sellingAnotherCar').parent().addClass('l12 m12 s12');
        } else {
            $('#sellingAnotherCar').parent().addClass('l6 m6 s6');
            $('#sellingAnotherCar').parent().addClass('l12 m12 s12');
        }
    });

    //uncheck all checkboxes for cars available to sell when you choose to add a new car or if no is selcted for current car
    function uncheckAll(){
       $('input.cars-to-sell[type="radio"]:checked').prop('checked',false);
    }
    $('#sellingCarNo').click(function() {
        console.log(uncheckAll());
    });

    $('#changeCarNew').click(function() {
        console.log(uncheckAll());
    });

    //Hide form on click of radio button
    $('input.cars-to-sell[type="radio"]').click(function(){
        if ($('#collapse-card-1 .collapse-card__body').is(':visible')) {
                $('#collapse-card-1 .collapse-card__heading').trigger('click');
            }
    });

    $('#sellingCarYes').click(function() {
        //$('.flappy-expander').css("background-color","red");
        $('#sellingAnotherCar .chip').parent().removeClass('expand');
        $('#sellingAnotherCar .chip').parent().removeClass('card');
        if (window.matchMedia("(max-width:768px)").matches) {
            $('#sellingAnotherCar').parent().removeClass('l12 m12 s12');
        } else {
            $('#sellingAnotherCar').parent().removeClass('l6 m6 s6');
            $('#sellingAnotherCar').parent().removeClass('l12 m12 s12');
        }
    });
    
    $('#sellingAnotherCar .cancel-pill-toggle').click(function(e) {
        $('#sellingAnotherCar').toggleClass('expand');
        $('#sellingAnotherCar').toggleClass('card');
        $('#sellingCar-section2').toggle();
        $('#sellingAnotherCar .chip').toggleClass('selected-chip-white');
        $('#sellingAnotherCar').toggleClass('z-forward');
    });

    $('#basicDetailsReuse #edit-docs').hide();
    $('#basicDetailsReuse #settlingCreditNo, #basicDetailsReuse #changeAccounts').on('click', function() {
        $(this).hide();
        $('#edit-docs').show();
        $('#edit-docs .accordion-item').show();
        $('#load-docs').hide();
        $('#load-docs .accordion-upload-item').hide();
    });

    $("#basicDetailsReuse #edit-docs #update-btn, #settlingCreditYes").click(function(){
        //var toRemove = Array();
        $('#basicDetailsReuse #settlingCreditNo, #basicDetailsReuse #changeAccounts').show();
        $("#basicDetailsReuse #edit-docs li").each(function(){
            if (!$('input[type="checkbox"]',this).is(':checked')){
                //Remove those with checkbox
                //$(this).remove();
                //Remove from hidden
                $("#basicDetailsReuse #load-docs li").get( $(this).index() ).remove();
            }
            else if ($('input[type="checkbox"]',this).is(':checked')) {
                //Add them back

            }

        $("#basicDetailsReuse #edit-docs").hide();
        $("#basicDetailsReuse #load-docs").show();
        });

    });

/*var count1 = 1;
$(".register-sellingCar .btnState").click(function() {
    if (count1 < 3) {
        $(this).addClass('activeBtnState');
        $('.register-sellingCar .flappy-dialog').addClass("hidden");
        setTimeout(function() {
            $('.register-sellingCar .flappy-dialog').removeClass("hidden");
        }, 400);
        count1++;
    } else {
        $(this).addClass('activeBtnState');
        $('.register-sellingCar .flappy-dialog').addClass("hidden");
        setTimeout(function() {
            $('.register-sellingCar .flappy-dialog').removeClass("hidden");
        }, 400);
        count1++;
        if (count1 == 5) {
            count1 = 1;
        }
    }
});
var count1 = 2;*/



