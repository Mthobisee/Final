<%-- 
    Document   : statement
    Created on : May 22, 2017, 4:31:19 PM
    Author     : mthobisi
--%>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Wesbank Online</title>
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

  <div id="wol-landing-header" style="background-image:url(images/landing-page/d_generic1.jpg)">
    <div class="bg-graphic"></div>
    <div class="container">
      <div class="banner-text">
        <div class="col-lg-4 col-md-5 col-sm-6 col-xs-8">
          <h1>Statement.</h1>

          <a href="#." class="btn-orange col-lg-12 col-md-12 col-sm-12 col-xs-11 no-padding-left no-padding-right">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-3 no-padding-left no-padding-right">
              <img src="images/cta_fastTrack.svg" class="pull-left image">
            </div>

            <div class="pull-left image-text col-lg-8 col-md-8 col-sm-8 col-xs-9 no-padding-left no-padding-right">
              <div class="get">Get a Quick</div>
              <div class="finance-quote">Finance Quote</div>
            </div>

            <div class="clearfix"></div>
          </a>

        </div>
      </div>
    </div>

  </div>


  <div id="wol-landing-carousel-wrap" class="container-fluid">

    <div class="container midcontainer">

      <div class="carousel">

        <a href="#." class="item">
          <img class="cal" src="images/ico_buyingFromDealer.svg">
          <h3 class="sub-tit">Buying a car from a dealer</h3>
        </a>
        <!-- ./ owl-carousel item -->

        <a href="#." class="item">
          <img src="images/ico_buyingPrivateSale.svg" width="50%">
          <h3 class="sub-tit">Buying a car privately</h3>
        </a>
        <!-- ./ owl-carousel item -->

        <a href="#." class="item">
          <img src="images/ico_getMoreDrive.svg" width="50%">
          <h3 class="sub-tit">Get more drive</h3>

        </a>
        <!-- ./ owl-carousel item -->

        <a href="#." class="item">
          <img src="images/ico_insurance.svg" width="50%">
          <h3 class="sub-tit">Insurance</h3>

        </a>
        <!-- ./ owl-carousel item -->

        <a href="#." class="item">
          <img src="images/ico_personalLoan.svg" width="50%">
          <h3 class="sub-tit">Personal loans</h3>

        </a>
        <!-- ./ owl-carousel item -->

        <a href="#." class="item">
          <img src="images/ico_calculators.svg" width="50%">
          <h3 class="sub-tit">Calculators</h3>
        </a>
        <!-- ./ owl-carousel item -->

      </div>

    </div>

  </div>

  <div id="wol-landing-content" class="container">



    <div class="row">

      <!-- left col -->
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">

        <center>
          <img class="imagetop" src="images/cart.svg">
        </center>
        <center>
          <p class="shadow"></p>
        </center>

      </div>

      <!-- right col -->
      <div class="col-lg-7 col-md-7 col-sm-8 col-xs-12">
        <h1>WesBank offers you much more than just vehicle finance.</h1>
        <p>Whether you're interested in buying a car from a dealer or privately from another person, finance it through WesBank and get more drive! Your WesBank finance account opens the door to convenience and so much more, from easy access to your documents
          to online car licence renewal, from calculating the best time to trade in your car to keeping an eye on your credit status. You can improve your eBucks reward level plus lots of other ways we're making vehicle administration simple and convenient.</p>
        <p>Plus, if you need new tyres or other car accessories but don't have the budget, you can add the cost to your existing car finance. Get what you want when you need it at the Wshop and pay it off over the rest of your contract period at the same
          interest rate.</p>
      </div>


    </div>


  </div>

  <div id="wol-footer">
    <div class="container">
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">WesBank - a division of <strong>FirstRand Bank Ltd</strong>. Registered Bank. <br> An Authorised Financial Services and Registered Credit Provider. NCRCP20. Reg. No. 1929/001225/06. VAT No. 4210102051.</div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
  <script src="library/owl.carousel.2.0.0-beta.2.4/owl.carousel.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/custom.js"></script>
  <script src="js/floatingActionButton.js"></script>
  <script src="js/chatbox.js"></script>
  <script>
    $.ajax({
      url: "https://geoip-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function(location) {

        //  alert(location.city);

        switch (location.city) {
          case "Pietermaritzburg":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_kzn1.jpg)");
            break;
          case "Pretoria":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_pretoria1.jpg)");
            break;
          case "Polokwane":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_limpopo1.jpg)");
            break;
          case "Bloemfontein":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_freestate1.jpg)");
            break;
          case "Cape Town":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_capetown.jpg)");
            break;
          case "Johannesburg":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_jhb1.jpg)");
            break;
          case "Durban":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_kzn1.jpg)");
            break;
          case "Nelspruit":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_mpumulanga1.jpg)");
            break;
          case "Rustenburg":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_northwest1.jpg)");
            break;
          case "Port Elizabeth":
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_portelizabeth1.jpg)");
            break;
          default:
            $("#wol-landing-header").css("background-image", "url(images/landing-page/d_generic1.jpg)");
            break;
        }

      }
    });

  </script>
</body>

</html>

