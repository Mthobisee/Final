<%-- 
    Document   : index
    Created on : May 11, 2017, 9:17:16 AM
    Author     : mthobisi
--%>

<!DOCTYPE html>
<html>

<head>
   
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--Import Google Icon Font-->
    <link type="text/css" rel="stylesheet" href="Resources/css/materialize-icons.css">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="Resources/materialize/css/materialize.min.css" media="screen,projection" />
    <!--Hamburgers-->
    <link type="text/css" rel="stylesheet" href="Resources/css/hamburgers.css">
    <!--Buttons-->
    <link type="text/css" rel="stylesheet" href="Resources/css/buttons.css" />
    <!--Forms-->
    <link type="text/css" rel="stylesheet" href="Resources/css/forms.css" />
    <!--Live VALIDATION-->
    <link type="text/css" rel="stylesheet" href="Resources/css/liveValidation.css" />
    <!--Menu-->
    <link type="text/css" rel="stylesheet" href="Resources/css/menu.css" />
    <!--Toast-->
    <link type="text/css" rel="stylesheet" href="Resources/css/toast.css" />
    <!--floating-action-button-->
    <link type="text/css" rel="stylesheet" href="Resources/css/floatingActionButton.css" />
    <!--Main style-->
    <link type="text/css" rel="stylesheet" href="Resources/css/style.css">
    <!--Sections styles-->
    <link type="text/css" rel="stylesheet" href="Resources/css/sections.css">
    <!--ACCORDION-->
    <link type="text/css" rel="stylesheet" href="Resources/css/paperCollapse.min.css">
    <!--Autocomplete-->
    <link type="text/css" rel="stylesheet" href="Resources/css/jquery.autocomplete.css" />
    <!--Push Modal-->
    <link type="text/css" rel="stylesheet" href="Resources/css/pushModal.css" />
    <!--Sticky Header-->
    <link type="text/css" rel="stylesheet" href="Resources/css/stickyHeader.css" />
    <!--Media Quieries styles-->
    <link type="text/css" rel="stylesheet" href="Resources/css/mediaQueries.css">
    <!--LiveValidation JavaScript-->
    <script type="text/javascript" src="Resources/js/liveValidation.js"></script>
    <!--SVG ANIMATIONS-->
    <link type="text/css" rel="stylesheet" href="Resources/css/svgAnimations.css">
     <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/custom.css">
  <link href="library/owl.carousel.2.0.0-beta.2.4/assets/owl.carousel.css" rel="stylesheet">
  <link href="library/owl.carousel.2.0.0-beta.2.4/assets/owl.theme.default.css" rel="stylesheet">
  <link href="library/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/floatingActionButton.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/materialize-icons.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/chatBox.scss" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/chatBox.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css'>
</head>
<%
    if ((session.getAttribute("userid") == null) || (session.getAttribute("userid") == "")) {
%>
You are not logged in<br/>
<a href="index_1.jsp">Please Login</a>
<%} else {
%>
Welcome <%=session.getAttribute("userid")%>
<a href='logout.jsp'>Log out</a><br>
   
<%
    }
%>

<body>
 
  <div class="floating-container mobile-float ">
    <div class="card-panel search-panel action ">
      <div class="row">
        <div class="chat">
          <div class="chat-title turquoise-background ">
                     <%
                        if ((session.getAttribute("userid") == null) || (session.getAttribute("userid") == "")) {
     
                     %>

                        <h1 class="text-left">Hello Guest</h1>
                        <%} else {
                        %>
                            <h1 class="text-left">Hello <%=session.getAttribute("userid")%></h1>

   
                        <%
    
                        }
                      %>
          </div>
          <div class="messages">
            <div class="messages-content"></div>
          </div>
          <div class="message-box">
            <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
            <button type="submit" class="message-submit">Send</button>
          </div>

        </div>
        <div class="bg"></div>
      </div>
    </div>

    <div class="floating-btn">
      <img id="search-icon" src="images/botbtn.svg" >
      <img id="close-icon" class="hide" src="images/botclose.svg" >
      </p>
    </div>
  </div>
    <header class="header">
        <div class="row">
            <div class="col l1 m1 s2">
                <a href="#"> <i class="pull-left back-arrow gray-text"></i></a>
            </div>
            <div class="col l10 m10 s8 text-center logo">
                <a href="landingPage.html"><img src="Resources/img/wesbank-logo.png" width="400" height="91"></a>
            </div>
            <div class="col l1 m1 s2">
                <button data-effect="st-effect" class="hamburger hamburger--slider pull-left btn-st-effect" type="button"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span> <span class="hamburger-text">Menu</span> </button>
                <div class="btn-cover pull-left"></div>
            </div>
        </div>
    </header>
    <div id="st-container" class="st-container overflow-visible modalContainer modal-interface-push">
        <!--NAVIGATION-->
        <nav class="st-menu st-effect" id="menu-effect">
            <ul>
                <li><a href="profile.html">My Profile <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
                <li><a href="#">Credit Advisor <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
                <li><a href="#">Approval for car <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
                <li><a href="#">Favourites <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
                <li><a href="#">Selling my current car <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
                <li><a href="#">Verification <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
                <li><a href="#">Value added products <i class="material-icons pull-left">keyboard_arrow_left</i></a></li>
            </ul>
        </nav>

        <!-- content push wrapper -->
        <div class="st-pusher" id="page-login-register">
            <div class="row gradient-fill">
                <div id="svg_container" class="row mobile-only">
                    <!--SUN ANIMATED-->
                    <div class="animated shake sun_animated">
                        <object type="image/svg+xml" data="Resources/svg/landing_sun.svg" class="svg">
                          <img src="Resources/svg/landing_sun.svg">
                    </object>
                    </div>

                    <!--SMALL CLOUD 1 ANIMATED-->
                    <div class="animated shake cloud_sm_1">
                        <object type="image/svg+xml" data="Resources/svg/landing_cloudSmall.svg" class="svg">
                          <img src="Resources/svg/landing_cloudSmall.svg">
                    </object>
                    </div>

                    <!--SMALL CLOUD 2 ANIMATED-->
                    <div class="animated shake cloud_sm_2">
                        <object type="image/svg+xml" data="Resources/svg/landing_cloudSmall.svg" class="svg">
                          <img src="Resources/svg/landing_cloudSmall.svg">
                    </object>
                    </div>

                    <!--BIG CLOUD ANIMATED-->
                    <div class="animated shake cloud_bg_1">
                        <object type="image/svg+xml" data="Resources/svg/landing_cloudBig.svg" class="svg">
                          <img src="Resources/svg/landing_cloudBig.svg">
                    </object>
                    </div>
                </div>
            </div>
            <div class="st-content">
                <!-- this is the wrapper for the content -->
                <div class="st-content-inner">
                    <!-- extra div for emulating position:fixed of the menu -->

                    <div class="login-register-banner"></div>
                </div>
                <!-- /st-content-inner -->

                <div id="login-register" class=" ">
                    <div class="container">
                        <div class="row no-margin-bottom">
                            <div class="col s12 margin-top-lg login-register-header">
                                <h1 class="white-text no-margin-bottom">Welcome</h1>
                                <h4 id="loginText" class="white-text">Login to continue</h4>
                                <h4 id="registerText" class="white-text hide">Register to continue</h4>
                            </div>
                        </div>
                        <div id="loginRegisterTabs" class="row ">
                            <div class="col offset-m2 offset-l4 l4 m8 s12">
                                <ul class="tabs">
                                    <li class="tab col l3 m3 s2 " id="login-tab"><a class="active bold" href="#">LOGIN</a></li>
                                    <li class="tab col s3" id="register-tab"><a href="#">REGISTER</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row form-wrap">
                            <form method="post"  id="login-card" class="col offset-l2 l8 m12 s12 card-slide-in-fade margin-top-lg" action="login.jsp">
                                <div class="row">
                                    <div class="input-field col offset-l1 offset-m1 l10 m10 s12 no-margin-top">
                                        <input id="login_mail" name="name" type="text" step="any" class="validate">
                                        <script type="text/javascript">
                                         
                                        </script>
                                        <label for="login_name">User Name</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col offset-l1 offset-m1 l10 m10 s12 no-margin-top">
                                        <input id="loginPassword" name="pass" type="password" step="any" class="validate input-show-password no-margin-bottom">
                                        <span id="loginPasswordSpan" class="material-icons input-show-password-span">visibility</span>
                                        <script type="text/javascript">
                                            var loginPassword = new LiveValidation('loginPassword');
                                            loginPassword.add(Validate.loginPassword);
                                            loginPassword.add(Validate.loginPassword);
                                        </script>
                                        <label for="loginPassword">Password</label>
                                        <a href="forgotPasswordEnterEmail.html" class="right  turquoise-text ">FORGOT PASSWORD?</a> </div>
                                </div>
                                <div class="row">
                                    <div class="col offset-l1 offset-m1 l10 m10 s12 text-center ">
                                        <input class="btn-orange input-btn-medium btn-large" name="submit" value="LOGIN" type="submit" />
                                    </div>
                                </div>
                                <div class="row mobile-hide">
                                    <div class="col s12 center"> <br>
                                        <a href="#" id="loginWithWesBankID" class="">LOGIN WITH WESBANK ACCOUNT</a>
                                        <font id="strokeSeparator" class="turquoise-text margin-left-xs margin-right-xs"> | </font><a href="#" id="loginWithFnbAccount" class="">LOGIN WITH YOUR FNB ACCOUNT</a><br>
                                    </div>
                                </div>
                                <div class="row mobile-only">
                                    <div class="col s12 center"> <br>
                                        <a href="#" id="loginWithWesBankID" class="">LOGIN WITH WESBANK ACCOUNT</a><br><br><a href="#" id="loginWithFnbAccount" class="">LOGIN WITH YOUR FNB ACCOUNT</a><br>
                                    </div>
                                </div>
                            </form>
                            <div class="clearfix"></div>
                            
                              <form mothod="post" id="login-with-ID-card" class="col offset-l1 l10 offset-m1 m10 s12 card-slide-out-fade-right margin-top-lg" action="insert.jsp">
                            <div class="row">
                                <div class="input-field col offset-l1 offset-m1 l10 m10 s12 ">
                                    <input id="register_name" name="name" type="text" step="any" class="validate no-margin-bottom">
                                   
                                    <label for="login_mail">User Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col offset-l1 offset-m1 l10 m10 s12 ">
                                    <input id="register_mail" name="email" type="text" step="any" class="validate no-margin-bottom">
                                    
                                    <label for="login_mail">Email</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col offset-l1 offset-m1 l10 m10 s12 ">
                                    <input id="register_cellphone" name="cellNum" type="text" step="any" class="validate no-margin-bottom">
                                   
                                    <label for="register_cellphone">Cellphone number</label>

                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col offset-l1 offset-m1 l10 m10 s12 ">
                                    <input id="registerPassword" name="pass" type="password" step="any" class="validate input-show-password no-margin-bottom">
                                    <span id="registerPasswordSpan" class="material-icons input-show-password-span">visibility</span>
                                    
                                    <label for="login_password">Password</label>
                                </div>
                            </div>

                            <div id="terms-section2" class="register-terms">
                                <div class="col l10 m10 s12 offset-l1 offset-m1 no-padding text-left margin-bottom-lg">
                                    <label id="terms_label" for="terms">
                                    <div id="terms-check-box-wrap" class="no-margin-top no-margin-bottom">
                                      <div class="btnState col s12 pull-left waves-effect waves-brown flappy-dialog">
                                          <input name="terms-section" id="terms-section" type="checkbox" class="filled-in margin-top-md pull-right hide rightCheckBox" style="margin-left:20px;">
                                          <label class="col l12 m12 s12 pull-left text-left no-padding" for="terms-section">I agree that WesBank can notify me about deals and send other marketing alerts.</label>
                                </div>
                            </div>
                            </label>
                    </div>
                    <div id="t-and-c" class="col offset-l1 offset-m1 l10 m10 s12 no-padding text-left">
                        <div class="text-left">
                            <label for="terms margin-top-md">
                              <span>By continuing, I accept the terms and conditions of this website.</span>
                          </label>
                        </div>
                        <span class="text-med"><a id="trigger-overlay-1" class="btn-trigger" >READ T&amp;C'S HERE</a></span>
                    </div>
                </div>

                <div class="row margin-top-md">
                    <div class="col offset-l1 offset-m1 l10 m10 s12 text-center margin-top-lg">
                        <input class="btn-orange input-btn-medium right float-none" name="submit" value="REGISTER" type="submit" />
                    </div>
                </div>

                </form>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>

                <!-- /st-content -->

            </div>

            <!-- /st-pusher -->

            <!-- /container -->

        </div>
    </div>

    <!-- /st-container -->
    <!-- open/close -->
    <div class="overlay overlay-contentscale">
        <div class="overlay-close btn-close btn-white"></div>
        <div class="">
            <div class="row modal-6">
                <div class="col offset-l2 offset-m2 l8 m8 s12 margin-top-lg">

                    <h2 class="text-left">Terms and Conditions</h2>
                    <p>
                        The Service is brought to you by WesBank, a division of FirstRand Bank Limited (&quot;Us&quot;, '&quot;We&quot;, &quot;the Bank&quot;), an authorised Financial Services Provider and registered Credit Provider (NCRCP20).
                    </p>
                    <p>
                        These terms and conditions as amended from time to time (&quot;the Terms&quot;) govern our respective rights and obligations when you use the Services and come into effect when you register/log in for the Services.
                    </p>
                    <p>
                        <u>The Services will consist of the following:</u>
                    </p>
                    <p>
                        &ndash; <b>The Services:</b> The Services are these specific online services, offered by Us in terms of using this online platform, which include every time you log into our website under the heading &quot;Account Services&quot;
                        or &quot;My Account&quot; or once you have registered on this specific website and include all Services offered by Us regarding your account once you have logged in. This Service, including the fast track applicaton is ultimately
                        an online platform for vehicle asset finance, which comes directly from other third party dealers or aggregators including autotrader, and which ultimately allows you to have more control over your vehicle asset finance application,
                        this includes credit advisor or any service provided on this platform.
                    </p>
                    <p>
                        &ndash; <b>Please note, it is very important to understand that WesBank through the use of Services and/or platform is not the seller of any vehicles. All vehicles are sold by the respective dealers and advertised by autotrader. WesBank is providing you an online platform to secure your vehicle asset finance required to finance a vehicle of your choice. WesBank does not guarantee that by using the Services you will be guaranteed the make and model of the vehicle you applied for finance for.</b>
                    </p>

                    <h3 class="text-left">1. <u>Credit Application</u></h3>
                    <p>
                        &ndash; Your credit application will only be valid for 7 calendar days. This means that once you clicked through to final deal and submit to dealer you have 7 days to go to the dealer and finalise the deal.
                        <p>
                            &ndash; If you do not do this within 7 calendar days, then you will need to reapply for finance through the Services.
                        </p>
                        <p>
                            &ndash; Please note, once the 7 calendar days have passed the deals will no longer show on your profile on the Services.
                        </p>
                        <p>
                            &ndash; When we rescore you this will leave an additional enquiry on your credit bureau profile.
                        </p>
                        <h3 class="text-left">2. <u>Credit Bureau Consent</u></h3>
                        <p>
                            &ndash; As part of the finance application, WesBank will be required to do a credit check on you to ensure that you can afford the vehicle asset finance. You hereby consent to WesBank doing a full credit assessment on You and to WesBank accessing your
                            credit profile from the credit bureau for the credit assessment and in the event that your loan is successful, for on-going account maintenance purposes, setting limits, development of credit tools/models and assessing for
                            insurance purposes.
                        </p>
                        <p>
                            &ndash; Secondly you consent to us displaying your credit bureau information through the Services in order for you to help structure your deal or in credit advisor to understand your credit with Wesbank. WesBank does not warrant the accuracy of the information
                            displayed, if there is any error, omission or dispute with your credit bureau information. You need to contact the credit bureaus directly to rectify the error, omission or dispute.
                        </p>
                        <p>
                            &ndash; The credit bureaus you can contact for a dispute or for any further information of your credit profile are:
                        </p>
                        <p>
                            1. &nbsp; Compuscan
                        </p>
                        <p>
                            2. &nbsp; TransUnion
                        </p>
                        <p>
                            3. &nbsp; Experian
                        </p>

                        <h3 class="text-left">3. <u>Settlement Value</u></h3>
                        <p>
                            &ndash; The settlement value that we quote you is an estimate, and may be subject to change. Your settlement value if you an existing WesBank customer may change depending on when you are quoted, and if there is any interest rate changes or installments
                            paid between when quoting and final settlement.
                        </p>
                        <p>
                            &ndash; If you are not a WesBank customer, the settlement value we are quoting is an estimate based on the information we have received from you on your existing vehicle and vehicle finance. For an accurate settlement value you must contact your existing
                            financial institution for that figure.
                        </p>

                        <h3 class="text-left">4. <u>Trade-In and Vehicle Valuations</u></h3>
                        <p>
                            &ndash; We process personal information in a responsible and ethical manner. In line with Protection of Personal Information Act and CPA, we may disclose personal information to the participating third party suppliers who provide car price quotes when
                            it is required by law and only after you have expressed interest in a cost estimate provided by the said third party supplier. In order for us to send your cost estimate application and have the third party supplier provide
                            you with vehicle car price quotes, we require your consent to process your information. By using this website you consent to transmitting and receiving information for the purposes of assisting us in processing your application
                            and to ensure that you receive the best car price quotes available. Once you have expressed interest by clicking on the &quot;Get Estimate&quot; button you consent to us providing the third party supplier with your contact
                            details. No personal information will be sold or passed on to any other third party without your consent.
                        </p>
                        <p>
                            &ndash; Any vehicle trade in estimate provided is only illustrative and not a legally binding offer. A vehicle trade in estimate given to you is subject to change, based on the verification and further consideration of more comprehensive information after
                            the third party supplier contacts you. All vehicle trade in estimates are provided based on limited information. The third party supplier reserves the right to withdraw the quote at any point in time prior to you signing a
                            legal binding offer to purchase. Provision of a vehicle trade in estimate has no bearing on and nor is it a guarantee that you will be approved for vehicle finance. WesBank uses the services of third parties to provide estimates
                            of your trade-in value of your existing vehicle. WesBank at no times guarantees the amount that you will receive for your existing vehicle when either trading in or selling.
                        </p>
                        <p>
                            &ndash; The value of your vehicle is dependent on many factors, including but not limited to the condition of the vehicle, the mileage, and service history.
                        </p>

                        <h3 class="text-left">5. <u>Use of Calculators on our site</u></h3>
                        <p>
                            &ndash; The calculations provided by the calculators on our site are based on the information provided by you and is also only an estimation of the value of the asset. You should not accept the calculations to be the actual value thereof.
                        </p>
                        <p>
                            &ndash; The material and tools displayed on this website are provided without any guarantees, conditions or warranties as to their accuracy. To the extent permitted by law we hereby expressly exclude all conditions, warranties and other terms which might
                            otherwise be implied by legislation, common law, any liability for any direct, indirect or consequential loss or damage incurred by any user in connection with our site or in connection with the use, inability to use, or results
                            of the use of our site, any websites linked to it and any materials posted on it, including, without limitation any liability for loss of income or revenue, loss of business, loss of profits or contracts, loss of anticipated
                            savings, loss of data, loss of goodwill, wasted management or office time, for any other loss or damage of any kind, however arising and whether caused by delict (including negligence), breach of contract or otherwise, even
                            if foreseeable.
                        </p>
                        <p>
                            &ndash; Although every precaution has been taken in the preparation of the website pages, the author assumes no responsibility for errors or omissions. This website and the services offered in terms thereof is here purely as a service to you, please use
                            it at your own risk.
                        </p>

                        <h3 class="text-left">6. <u>Privacy</u></h3>
                        <p>
                            <b>&ndash; We respect your privacy and your personal information. For this reason, We have a Privacy Policy (the terms in general incorporated into here into these terms and conditions) to let you know how We will treat any personal information that We may collect, collate, process, disclose or store about you. We will take all reasonable measures, in accordance with our Privacy Policy, to protect your personal information and to keep it confidential, even when you are no longer our customer.</b>
                        </p>
                        <p>
                            <b>&ndash; We undertake that your personal information will at all times be processed in line with all privacy laws and shall only be used for the purposes of rendering the Services to you. You consent that by accepting these terms and conditions, WesBank may process your personal information and it may share the information with third parties for the purposes of providing you with the Services, which include sending your personal information to the dealer of the vehicle you wish to purchase and to any third party who will be providing a quote or trading in your existing vehicle.</b>
                        </p>
                        <p>
                            <b>&ndash; If you use WesBank Customer Service Call Centre and make contact with a call centre agent, you permit and hereby consent to Us recording your calls for security reasons, and for the purpose of customer care.</b>
                        </p>
                        <p>
                            <b>&ndash;    By making use of the Services, you acknowledge that you have read, understood and agree to the most recent version of these Terms, and that you have read, understood and agree to our Privacy Policy and consent to our collection, processing, storage and sharing certain of your personal information within the Bank in the ordinary course of our business of providing the Services to you. You furthermore acknowledge through your use of the service that Terms (including this clause) highlighted in bold have been brought to your attention and that they either:</b>
                        </p>
                        <p>
                            <b>o &nbsp;  limit our risk or liability or that of any other person;</b>
                        </p>
                        <p>
                            <b>o &nbsp;  constitutes an assumption of risk or liability by you;</b>
                        </p>
                        <p>
                            <b>o &nbsp;  impose an obligation on you to indemnify Us or any other person for any cause; or</b>
                        </p>
                        <p>
                            <b>o &nbsp;  constitute an acknowledgement of any fact by you.</b>
                        </p>

                        <h3 class="text-left">6.1 <u>Cookies</u></h3>
                        <p>
                            &ndash; You agree that we shall be entitled to send 'cookies' from this website to your computer. We use the word 'cookie' to refer to information that is sent from this website to your hard drive, where it is saved and contains information to personalise
                            your experience on this website. In this way, the next time you use this website we will know who you are and that you have visited this website before.
                        </p>

                        <h3 class="text-left">6.1.1 <u>What are cookies?</u></h3>
                        <p>
                            &ndash; A cookie is a small piece of data sent from FSR’s (&quot;FirstRand/WesBank) websites or applications to your computer or device hard drive or internet browser where it is saved. The cookie contains information to personalise your experience on
                            the FSR’s websites or applications and may improve your experience on the websites or applications. The cookie will also identify your device, like the computer or smart phone.
                        </p>

                        <h3 class="text-left">6.1.2 <u>What is FSR’s practices regarding cookies?</u></h3>
                        <p>
                            &ndash; By using FSR’s websites or applications you agree that cookies may be forwarded from the relevant website or application to your computer or device. The cookie will enable FSR to know that you have visited the website or application before and
                            will identify you. FSR may also use the cookie to prevent fraud. We will use the cookies to provide you with specific vehicle offers which we are able to identify that suit your personal needs.
                        </p>

                        <h3 class="text-left">7. <u>Product Agreements</u></h3>
                        <p>
                            &ndash; All Products and Services provided by the Bank are subject to their own terms and conditions ("Product Agreements") such as your Instalment sale, Lease or Rental Agreement's terms and conditions, as well as account or facility terms and conditions
                            ("other terms") and your use of those products and Services will also be subject to those additional bank terms.
                        </p>
                        <p>
                            &ndash; These Terms must be read together with and form part of each Agreement. In the event of conflict between these Terms and the Agreement, the provisions of the Agreement will prevail to the extent of the conflict.
                        </p>

                        <h3 class="text-left">8. <u>Amendments to these Terms and Conditions</u></h3>
                        <p>
                            &ndash; We reserve the right, in our sole discretion to amend (including without limitation, by the addition of new terms and conditions) these Terms at any time and from time to time, without prior notification to you. Any such amendments shall come
                            into effect immediately and automatically. You undertake to review these Terms prior to using the Services for any such changes and acknowledge that you are bound by the latest version of these Terms as published on our website.
                        </p>
                        <p>
                            &ndash; For convenience only, the date on which these Terms were last amended is shown below the main heading of these Terms.
                        </p>

                        <h3 class="text-left">9. <u>Access Codes</u></h3>
                        <p>
                            &ndash; For security, identification and verification purposes, when using the Services, you will make use of a either a One Time Pin (&quot;OTP&quot;), Personal Identification Number (&quot;PIN&quot;), Account Number, User Identification Number as contained
                            in your RSA identity book ("ID number") and/or a Password. These are all called your "access codes".
                        </p>
                        <p>
                            &ndash; If you enter an access code incorrectly 3 (three) times, you will be logged out of the website and your access will be suspended. You will have to contact our contact centre to arrange for the suspension to be lifted.
                        </p>
                        <p>
                            <b>&ndash; You are responsible for maintaining the confidentiality and secrecy of your access codes. Only you may use your access codes. Do not keep your access codes together with other Services documents.</b>
                        </p>
                        <p>
                            &ndash; If you make contact with Us, We may, for the purposes of identification and verification, request certain information such as your Account Number or ID Number. However, there will never be a reason for the Services helpline or any of our staff,
                            to request or know your Password or PIN.
                        </p>
                        <p>
                            &ndash; If you believe your access codes have been compromised, you must immediately contact the Services helpline on 0861 000 969 and request that they deactivate your access codes or you can reset your access codes on the website with your User ID and
                            OTP. You must keep any reference number given to you by the Services helpline as verification of your notification to Us of any such compromise.
                        </p>
                        <p>
                            <b>&ndash; Until you notify Us to deactivate your access codes to any one of our Services, We will not be held responsible or liable for any information obtained without your knowledge or consent.</b>
                        </p>

                        <h3 class="text-left">10. <u>Fraudulent activities</u></h3>
                        <p>
                            &ndash; We are committed to ensuring the security of your use of the Services and are entitled to investigate any loss suffered by you which is alleged to have occurred as a result of fraud via the website.
                        </p>
                        <p>
                            &ndash; Where you have been a victim of any fraudulent conduct through any use or misuse of the Services, you must inform Us as soon as you become aware that suspicious conduct has occurred on your account and open a case at your nearest South African
                            Police Service office. You will be required to co-operate with Us and the South African Police Service in any investigation conducted into losses that you suffered as a result of such fraud.
                        </p>

                        <h3 class="text-left">11. <u>Registration for the Services</u></h3>
                        <p>
                            &ndash; Visit the homepage of the website, click on the "Register'' button and proceed to register for The Services .You will not be able to transact until such time as your details have been validated by the Bank. For more information visit our website,
                            click on the "My Account" button and read more about the "Account Services Pre-registration and Registration Process under the "Explain more about" banner, or contact the WesBank Online Services helpline on 0861 000 969.
                        </p>

                        <h3 class="text-left">12. <u>Use of software and hardware</u></h3>
                        <p>
                            &ndash; You should only use the most up-to-date Internet browser to access the website and make use of the Services, provided that where We specify hardware or software requirements on the website, only such specified hardware or software may be used.
                            See our site settings requirements for more information. <b>Your failure to do this may result in a security risk to you and/or cause some or all of the functionality of the website or online service not to operate properly or at all.</b>
                        </p>
                        <p>
                            <b>&ndash; Software, if any, made available for download on or via the website may be governed by licence conditions that establish a legal relationship with the licensor. You are solely responsible for identifying and familiarising yourself with and agreeing to such terms and conditions which will govern your relationship with such third party licensor. You agree that We shall not be responsible or liable for any damage, damages or loss caused or alleged to be caused by or in connection with your interaction, correspondence or business dealings with such third party licensor and further, you indemnify Us against any breach by you of these licence conditions. We give no warranty and make no representation, whether expressly or implied, as to the quality or fitness for purpose of such software. You acknowledge that such third party is not our agent.</b>
                        </p>

                        <h3 class="text-left">13. <u>Fees</u></h3>
                        <p>
                            &ndash; The use of the Services is free of charge. <b>Standard mobile and landline rates will however be applicable as agreed with your telecommunications service provider.</b> Please note that some of the Products and/or Services
                            on the website are brought to you by third parties. Use of third party websites and Services may attract fees. It is your duty to familiarize yourself with the terms and conditions of the third party website as well as the
                            fees charged by the third party for any Services.
                        </p>

                        <h3 class="text-left">14. <u>Your instructions</u></h3>
                        <p>
                            <b>&ndash; Due to the fact that We communicate with you through the Internet or by phone, you agree that We are entitled to assume that you have authorised all communications once your access codes have been entered. This will not apply once We receive notification from you to disable access to your accounts as a result of your access codes or other personal information having been misplaced or lost. Our records of your communication will be proof of any instruction you have given us, unless you can prove the contrary.</b>
                        </p>
                        <p>
                            &ndash; You are responsible for giving correct information and instructions when registering for the Services and when obtaining information by phone.
                        </p>
                        <p>
                            &ndash; Please ensure that you review the entire request or self help offered, to correct any mistakes and to withdraw from the self help interaction or request, before final selection and/or submission. <b>We will not try to assist if you make a mistake when giving Us an instruction, but We will not be responsible for any loss or damage caused by your error, nor are We responsible for the verification of the identity of recipients.</b>
                        </p>
                        <p>
                            <b>&ndash; You hereby acknowledge that certain information, once processed, may not be reversed or terminated.</b>
                        </p>
                        <p>
                            &ndash; Unless otherwise stated in a Product Agreement, the Services will be subject to the same turnaround times that apply to those processes, requests, accounts and customer profile, if any, if done at a WesBank regional office.
                        </p>
                        <p>
                            <b>&ndash; An instruction will only be deemed to have been received by Us once We have confirmed receipt, or responded thereto, whichever is the earlier. If you are unsure as to whether a self help request has been processed, you should contact Us before you re-submit the instruction. Re-submitting an instruction may cause Us to process the same request twice, for which We will not be liable.</b>
                        </p>

                        <h3 class="text-left">15. <u>Ending a session</u></h3>
                        <p>
                            <b>&ndash; You must log off the website once you have finished using the Services. If you fail to do this, it may result in unauthorised processing of your information, for which We will not be liable.</b>
                        </p>

                        <h3 class="text-left">16. <u>Ending your use of Services</u></h3>
                        <p>
                            &ndash; We may, on notice to you, end your use of and access to the Services at any time, for any reason whatsoever. Instructions given to Us prior to such termination will not be affected by such termination.
                        </p>
                        <p>
                            &ndash; We will however, terminate your use of and access to and/or prohibit your future access to use of the Services immediately and without any notice to you if:
                        </p>
                        <p>
                            o &nbsp; We determine, in the exercise of our discretion, that your behaviour was inappropriate, illegal or constitutes misconduct;
                        </p>
                        <p>
                            o &nbsp; you breached these Terms and Conditions;
                        </p>
                        <p>
                            o &nbsp; you have committed, or attempted to commit, fraudulent conduct directly or indirectly, or We suspect that you have done so;
                        </p>
                        <p>
                            o &nbsp; We are required to do so by law;
                        </p>
                        <p>
                            o &nbsp; your account with WesBank is closed;
                        </p>
                        <p>
                            o &nbsp; you do not use the Services for a period of 12 (twelve) months or more, we terminate your access to the Services because of this, you will have to register again.
                        </p>
                        <p>
                            &ndash; In the event of Us terminating your access to the Services, We will not be liable for any losses or damages, of any nature, suffered by you or a third party. Our rights in this regard are expressly reserved.
                        </p>
                        <p>
                            &ndash; You may terminate your use of the Services by contacting the helpline on 0861 288 272. <b>Application for the Services via this website or an app.</b>
                        </p>
                        <p>
                            &ndash; Any application submitted for the Services via this website does not constitute a guarantee that what is being applied for will be granted.
                        </p>
                        <p>
                            &ndash; An auto-response to your application may not be construed as formal approval of your application. It is only once We expressly notify you of our approval that you will have been approved for the Service/s for which you applied.
                        </p>

                        <h3 class="text-left">17. <u>Security</u></h3>
                        <p>
                            <b>&ndash; Information that is transmitted over the Internet, telephone or via other networks (wireless or otherwise) may be subject to interception. While We will take all reasonable precautions to ensure that the Services are secure, We shall, subject to the Consumer Protection Act 68 of 1998 (&quot;CPA&quot;), not be liable for any loss or damage you suffer as a result of your use of the Services.</b>
                        </p>
                        <p>
                            <b>&ndash; You acknowledge that you have read and understood the security tips in the Security Centre which We publish on the WesBank website (www.wesbank.co.za) and that you shall take the precautions mentioned therein.</b>
                        </p>

                        <h3 class="text-left">18. <u>Monitoring of communications</u></h3>
                        <p>
                            <b>&ndash; We do not editorially control, filter or read any information, images or documents that you post or upload onto the website on an ongoing basis, and you acknowledge and agree that We shall not be responsible, in any way, for any of your postings. You also agree to indemnify Us against any liability, claim, damage or loss of whatsoever nature that may result from your postings.</b>
                        </p>
                        <p>
                            &ndash; You undertake not to post or load content on the website that may be illegal, defamatory, infringing, harassing, profane, untrue, incorrect or harmful, or which We regard as inappropriate, and you accept that We may remove this content from the
                            website without further notice to you.
                        </p>

                        <h3 class="text-left">19. <u>No warranties</u></h3>
                        <p>
                            &ndash; To the fullest extent permissible by law, including the CPA, no warranties, whether express or implied, are made of any kind in respect of the Services including in respect of the performance, quality, security, content, Information, availability,
                            accuracy, safety or reliability of the Services.
                        </p>
                        <p>
                            <b>&ndash; We accept no liability and responsibility for any inaccuracies, errors, omissions and/or misinterpretations occurring in any advertisement (including any information and photographs therein) on the website, and the you absolve Us for any responsibility therein.</b>
                        </p>

                        <h3 class="text-left">20. <u>Disclaimer</u></h3>
                        <p>
                            &ndash; We are fully committed to providing you with the best possible Service. However, We are, subject to the CPA, not responsible for:
                        </p>
                        <p>
                            o &nbsp; any interrupted, delayed or failed transmission, storage or delivery of information;
                        </p>
                        <p>
                            o &nbsp; any inaccurate, incomplete or inadequate information obtained by you from the website; or
                        </p>
                        <p>
                            o &nbsp; your reliance on any of the information, content, tools or materials that you obtain from this website.
                        </p>
                        <p>
                            <b>- It is very important that you acknowledge and understand that the information included on this website should not be regarded as either advice or an intermediary service in terms of the Financial Advisory and Intermediary Services Act of 2002.</b>                            Please consult a professional advisor before you rely on any information that is published on or accessible via this website or on the results of any calculators provided on this website.
                        </p>

                        <h3 class="text-left">21. <u>Limitation of liability</u></h3>
                        <p>
                            - Although We have taken reasonable care to prevent harm or loss to you, you agree that We and our affiliates, shareholders, agents, consultants or employees (in whose favour this constitutes a stipulation for the benefit of another) are not liable for
                            any direct, indirect, special, incidental or consequential damages or loss of any kind whatsoever or howsoever caused (whether arising under contract,delict or otherwise and whether the loss was actually foreseen or reasonably
                            foreseeable) arising as a result of your use of or inability to use the Services.
                        </p>
                        <p>
                            &ndash; You furthermore indemnify Us against any damage, damages, liability, claims or demand by third parties or loss suffered by Us arising from your use of the Services or your breach of these Terms.
                        </p>
                        <p>
                            &ndash; This indemnity will be subject to any applicable law, including the CPA.
                        </p>

                        <h3 class="text-left">22. <u>Links to third party websites</u></h3>
                        <p>
                            &ndash; For your convenience, our website may contain links to other websites belonging to or operated by third parties ("third party websites"). By making the hyperlinks available We are not endorsing third party websites, their content, Products or
                            Services they offer or the owners of these third party websites. It is your responsibility to ensure that you obtain all information relevant to making a decision and that you read the privacy and security policy on such third
                            party websites .We have no control over such third party websites and will not be liable for any loss or damage you suffer, whether directly or indirectly, as a result of your use of third party websites. You agree that where
                            you access third party websites, you do so entirely at your own risk. These web sites are not monitored or checked for accuracy or completeness by us
                        </p>
                        <p>
                            &ndash; External links may be provided for your convenience, but they are beyond our control and no representation is made as to their content. Use or reliance on any external links provided is at your own risk.
                        </p>

                        <h3 class="text-left">23. <u>Using content from our website</u></h3>
                        <p>
                            &ndash; The content on the Services, including, but not limited to all registered and unregistered trade marks, constitutes our intellectual property rights. You may not copy, reproduce, display or use any intellectual property in any manner whatsoever
                            without our prior written permission and nothing contained on this website should be construed as granting any license or right of use of any intellectual property.
                        </p>
                        <p>
                            &ndash; You may not establish a hyperlink, frame, meta tag or similar reference, whether electronically or otherwise ("linking") to our website or any other subsidiary pages without our prior written consent, which consent is at our sole discretion. You
                            may apply to establish such a link by submitting your request to service@wesbank.co.za. In the event that you have not heard from Us within 5 (five) working days, please consider your request as having been rejected.
                        </p>

                        <h3 class="text-left">24. <u>Using content from our website</u></h3>
                        <p>
                            &ndash; You agree that our publishing a notice on our website or sending you a notice once you log into the Services, email, SMS or post will constitute sufficient notice to you. It is therefore imperative that We always have your most recent personal
                            information updated such as your mobile number, email address etc.
                        </p>
                        <p>
                            &ndash; Should you fail to raise an objection with Us within 5 (five) hours after We sent you a notice (including by email, SMS or other medium) confirming request for information or the changing of any setting on your accounts, you will be deemed to
                            have accepted the requests or new setting as being valid and binding in all respects.
                        </p>

                        <h3 class="text-left">25. <u>Availability of the Services</u></h3>
                        <p>
                            &ndash; The Services may be unavailable from time to time due to routine maintenance or emergency repairs or because of the unavailability of any electricity, telecommunication system or networks. For the duration of such unavailability you must use our
                            other available channels: Email: service@wesbank.co.za OR our Customer Service Centre on 0861 288 272.
                        </p>

                        <h3 class="text-left">26. <u>Definition of Business Hours</u></h3>
                        <p>
                            &ndash; Whenever a reference is made to hours, the following applies:
                        </p>
                        <p>
                            o &nbsp; Business Hours: Weekdays 8:00 – 17:00
                            </br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Saturday 8:00 – 12:00

                        </p>
                        <p>
                            o &nbsp; After Hours: All other times
                        </p>

                        <h3 class="text-left">27. <u>Modification, suspension or termination of Online Services</u></h3>
                        <p>
                            &ndash; We may discontinue providing the Services or any of the Products or Services offered via the website at any time at our sole discretion. We will however, notify you of this within a reasonable time of these changes being made.
                        </p>

                        <h3 class="text-left">28. <u>Submitting a complaint to Us</u></h3>
                        <p>
                            &ndash; If you wish to lodge a complaint, please notify Us in writing by sending an email to service@wesbank.co.za.
                        </p>
                        <p>
                            &ndash; We will respond to your complaint as soon as possible. If you do not hear from Us within 5 (five) working days from sending your complaint We request that you contact Us at 0861 288 272 to check whether your complaint has been received. Please
                            quote your reference number when you contact Us directly.
                        </p>

                        <h3 class="text-left">29. <u>Disputes which cannot be resolved</u></h3>
                        <p>
                            &ndash; If We cannot resolve your complaint within a reasonable time, you are free to lodge a formal complaint at the office of the Banking Ombudsman, provided that your complaint falls within the jurisdiction of the Banking Ombudsman. For more information
                            on how this process works, please visit www.obssa.co.za.
                        </p>

                        <h3 class="text-left">30. <u>Address for legal notices</u></h3>
                        <p>
                            &ndash; All legal notices relations to the products/services must be delivered as provided in the product agreements. Where such addresses are not specificed such notices must be sent to your Registered Address as You provided to WesBank or as per your
                            Registration for the Services. WesBank can send you legal notices to any address you specified on your application or registration forms with us or where you actually live or work.
                        </p>

                        <h3 class="text-left">31. <u>The law governing our relationship</u></h3>
                        <p>
                            &ndash; We both agree that these Terms shall be governed by and construed and interpreted in accordance with the laws of the Republic of South Africa notwithstanding the fact that an instruction may have emanated from outside the Republic of South Africa.
                            Accessing the Services from another country may be an offence in that country. You agree that use of the Services outside South Africa will be at your own risk.
                        </p>

                        <h3 class="text-left">32. <u>Capacity</u></h3>
                        <p>
                            <b>&ndash; In using the Services you represent and warrant that you are of full legal age, are emancipated or have your guardian's consent and assistance and have the required legal capacity to enter into and be bound by these Terms or any other Product Agreement regarding your use of the Services.</b>
                        </p>

                        <h3 class="text-left">33. <u>General</u></h3>
                        <p>
                            &ndash; The headings appearing in these Terms are inserted for convenience only and will not be taken into account when interpreting these Terms. Where dates and times need to be calculated in terms of these Terms, the international standard time (GMT)
                            plus 2 (two) hours will be used.
                        </p>
                        <p>
                            &ndash; The indulgence, extension of time, waiver or relaxation of any of the provisions or terms of these Terms, or failure or delay on our part to exercise any of our rights will not operate as an estoppel against Us nor shall it constitute a waiver
                            by Us of such right. We shall not thereby be prejudiced or stopped from exercising any of our rights against you which may have arisen in the past or which might arise in the future.
                        </p>
                        <p>
                            &ndash; A certificate issued by our website administrator will serve as proof of which version of these Terms as applied to your use of the Services at a specific date. Any provision in these Terms which is or may become illegal, invalid or unenforceable
                            shall be ineffective to the extent of such prohibition or unenforceability and shall be treated as if it were not written and severed from these Terms, without invalidating the remaining provisions of these Terms.
                        </p>
                        <p>
                            &ndash; If We are prevented from fulfilling any of our obligations to you as a result of any event or circumstance beyond our control (‘an uncontrollable event’) those obligations shall be deemed to have been suspended for as long as we are so prevented
                            from fulfilling them, and your obligations shall similarly be suspended. If the uncontrollable event continues for more than thirty days after it has first occurred, we shall be entitled (but not obliged) to terminate all its
                            rights and obligations arising out of these terms by giving notice to you.
                        </p>


                        <p class="text-center normal-text"><button class="btn-orange btn-close-orange margin-top-md accept">I UNDERSTAND</button></p>



                </div>
            </div>
        </div>
        <!--end test modal-->
    </div>
    <!--JQuery-->
    <script type="text/javascript" src="Resources/jquery/jquery-3.1.0.min.js"></script>
    <!--Import modernizr-->
    <script type="text/javascript" src="Resources/js/modernizr.custom.js"></script>
    <!--Import classie - class helper functions-->
    <script type="text/javascript" src="Resources/js/classie.js"></script>
    <!--Side Effects-->
    <script type="text/javascript" src="Resources/js/sidebarEffects.js"></script>
    <!--TOOL TIP-->
    <script type="text/javascript" src="Resources/js/tooltip.js"></script>
    <!--LOGIN AND REGISTRATION-->
    <script type="text/javascript" src="Resources/js/loginRegistration.js"></script>
    <!--Main script-->
    <script type="text/javascript" src="Resources/js/script.js"></script>
    <!--Materialize script-->
    <script type="text/javascript" src="Resources/materialize/js/materialize.min.js"></script>
    <!--JQuery Migrate-->
    <script type="text/javascript" src="Resources/jquery/jquery-migrate-1.4.1.min.js"></script>
    <!--Sticky Header-->
    <script type="text/javascript" src="Resources/js/stickyHeader.js"></script>
    <!--Collapse Card Accordion-->
    <script type="text/javascript" src="Resources/js/collapseCardsAccordion.js"></script>

    <!--Pre Approval Sliders-->
    <script type="text/javascript" src="Resources/js/preApprovalSliders.js"></script>
    <!--Push Modals-->
    <script type="text/javascript" src="Resources/js/pushModalsFive.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
  <script src="library/owl.carousel.2.0.0-beta.2.4/owl.carousel.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/custom.js"></script>
  <script src="js/floatingActionButton.js"></script>
  <script src="js/chatbox.js"></script>
</body>

</html>

