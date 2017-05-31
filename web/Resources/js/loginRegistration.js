//LOGIN-REGISTER PAGE TABS
$(document).ready(function() {
    //LOGIN-REGISTER PAGE TABS
    var login = '#login-card';
    var register = '#login-with-ID-card';
    var login_h = '#login-subheading';
    var register_h = '#register-subheading';
    var login_t = '#login-tab';
    var register_t = '#register-tab';
    var loginText = "#loginText"
    var registerText = "#registerText"

    function toggle_headings() {
        $(login_h).toggle();
        $(register_h).toggle();
    }

    function toggle_bold() {
        $(login_t).toggleClass('bold');
        $(register_t).toggleClass('bold');
    }
    /*function toggle_show() {
      $(register).toggleClass('show');
      $(login).toggleClass('show');
    }*/
    $('.tabs .tab').on('click', function() {
        //console.log(toggle_show());
        console.log(toggle_bold());
        console.log(toggle_headings());
    });
    $(login_t).on('click', function() {
        setTimeout(function(){
          $(register).removeClass('card-slide-in-fade').addClass('card-slide-out-fade-right');
          $(login).removeClass('card-slide-out-fade-left').addClass('card-slide-in-fade');
          $('.st-pusher').toggleClass('st-pusher-shift');
        }, 50);
        $(loginText).removeClass('hide');
        $(registerText).addClass('hide');
        setTimeout(function(){
          $('#login-with-ID-card').addClass("hide");
        }, 500); //wait for page load.

    });

    $(register_t).on('click', function() {
        $('#login-with-ID-card').removeClass("hide");
        setTimeout(function(){
          $(login).removeClass('card-slide-in-fade').addClass('card-slide-out-fade-left');
          $(register).removeClass('card-slide-out-fade-right').addClass('card-slide-in-fade');
          $('.st-pusher').toggleClass('st-pusher-shift');
        }, 50);
        $(registerText).removeClass('hide');
          $(loginText).addClass('hide');
    });



    //Show / hide password for ForgotPassword
    $('#confirmPasswordSpan').on('click', function() {
        if ($('#confirmPasswordSpan').hasClass('is-active')) {
            $('#confirmPassword').attr('type', 'password');
            $("#confirmPasswordSpan").text("visibility");
        } else {
            $('#confirmPassword').attr('type', 'text');
            $("#confirmPasswordSpan").text("visibility_off");
        }
        $('#confirmPasswordSpan').toggleClass('is-active');
    });


    $('#newPasswordSpan').on('click', function() {
        if ($('#newPasswordSpan').hasClass('is-active')) {
            $('#newPassword').attr('type', 'password');
            $("#newPasswordSpan").text("visibility");
        } else {
            $('#newPassword').attr('type', 'text');
            $("#newPasswordSpan").text("visibility_off");
        }
        $('#newPasswordSpan').toggleClass('is-active');
    });

    $('#oneTimePinSpan').on('click', function() {
        if ($('#oneTimePinSpan').hasClass('is-active')) {
            $('#oneTimePin').attr('type', 'password');
            $("#oneTimePinSpan").text("visibility");
        } else {
            $('#oneTimePin').attr('type', 'text');
            $("#oneTimePinSpan").text("visibility_off");
        }
        $('#oneTimePinSpan').toggleClass('is-active');
    });

    $('#userPasswordSpan').on('click', function() {
        if ($('#userPasswordSpan').hasClass('is-active')) {
            $('#userPassword').attr('type', 'password');
            $("#userPasswordSpan").text("visibility");
        } else {
            $('#userPassword').attr('type', 'text');
            $("#userPasswordSpan").text("visibility_off");
        }
        $('#userPasswordSpan').toggleClass('is-active');
    });

    $('#loginPasswordSpan').on('click', function() {
        if ($('#loginPasswordSpan').hasClass('is-active')) {
            $('#loginPassword').attr('type', 'password');
            $("#loginPasswordSpan").text("visibility");
        } else {
            $('#loginPassword').attr('type', 'text');
            $("#loginPasswordSpan").text("visibility_off");
        }
        $('#loginPasswordSpan').toggleClass('is-active');
    });

    $('#registerPasswordSpan').on('click', function() {
        if ($('#registerPasswordSpan').hasClass('is-active')) {
            $('#registerPassword').attr('type', 'password');
            $("#registerPasswordSpan").text("visibility");
        } else {
            $('#registerPassword').attr('type', 'text');
            $("#registerPasswordSpan").text("visibility_off");
        }
        $('#registerPasswordSpan').toggleClass('is-active');
    });

    //Translate up and down
    //$('#forgotPasswordPin').hide();
    $('#loginWithWesBankIDone').on('click', function() {
        $('#loginRegisterTabs').addClass('translateUpOut');
        $('#login-card').addClass('translateUpOut');
        $('#forgotPasswordPin').addClass('translateUpIn');
        $('#loginWesBankHeading').addClass('translateUpIn');
        $('#forgotPasswordPin').removeClass('translateDownOut');
        $('#login-card').removeClass('translateDownIn');
        $('#loginRegisterTabs').removeClass('translateDownIn');

    });

    $('#loginWithWesBankIDtwo').on('click', function() {
        $('#loginRegisterTabs').addClass('translateUpOut');
        $('#login-with-ID-card').addClass('translateUpOut');
        $('#forgotPasswordPin').addClass('translateUpIn');
        $('#loginWesBankHeading').addClass('translateUpIn');
        $('#forgotPasswordPin').removeClass('translateDownOut');
        $('#login-with-ID-card').removeClass('translateDownIn');
        $('#loginRegisterTabs').removeClass('translateDownIn');

    });
});
