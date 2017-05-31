/* SWITCH TOGGLE */
$(document).ready(function() {
    $('.switch label input[type="checkbox"]').on('click', function() {
        if ($(this).is(':checked')) {
            $(this).next('.lever').children('.inActiveOption').hide();
            $(this).next('.lever').children('.activeOption').show();
            $('.amountOfIncome').show();
        } else {
            $(this).next('.lever').children('.inActiveOption').show();
            $(this).next('.lever').children('.activeOption').hide();
            $('.amountOfIncome').hide();
        }
    });
    //Set default state depending whether set to "checked" or not
    $('.switch label input[type="checkbox"]').each(function() {
        if ($(this).prop("checked"))
            $(this).prop('checked', false);
        else
            $(this).prop('checked', true);

        $(this).trigger("click");
    });
});
/* Settlement Accounts Toggles */
$('#settlementAccounts #collapseCardWithTick .toggle_slide').on('click', function() {
    if ($('#settlementAccounts #collapseCardWithTick .toggle_slide').filter(':checked').length > 0) {
        $('#settlementAccounts #collapseCardWithTick #good-job #good_job_calc').slideDown(200);
        $('#settlementAccounts #collapseCardWithTick #good-job #line_btwn').slideDown(200);
        $('#settlementAccounts #collapseCardWithTick #good_job_spacing').slideUp();
    } else {
        $('#settlementAccounts #collapseCardWithTick #good-job #good_job_calc').slideUp();
        $('#settlementAccounts #collapseCardWithTick #good-job #line_btwn').slideUp();
        $('#settlementAccounts #collapseCardWithTick #good_job_spacing').slideDown(200);
    }
});
