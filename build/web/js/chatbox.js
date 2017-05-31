//var start = "Hi, I can help you with most WesBank related queries and some account services too! What can I do for you?";

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$( '.messages-content')
  .mouseover(function() {
    $('body').css('overflow-y','hidden');
  })
  .mouseout(function() {
    $('body').css('overflow-y','auto');
});
  
$(window).load(function() {
    $('<div class="message loading new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
      
  $messages.mCustomScrollbar();
  setTimeout(function() {
       $('.message-loading').remove();
       $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Hi, I can help you with most WesBank related queries and some account services too! What can I do for you?" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                      
  }, 1500 + (Math.random() * 20) * 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date();
  if (m !== d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}
var msg;
function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) === '') {
    return false;
  }
  $('<div class="message message-personal"><figure class="avatar"><img src="images/ico_profile_chat.svg" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  
  setTimeout(function() {
   
            popData();
    //conversationpatterns();
  }, 100 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which === 13) {
    insertMessage();
    return false;
  }
});

function initialCap(field) {
   field = field.substr(0, 1).toUpperCase() + field.substr(1);
   return field;
}

var keyw = "";
var resp = "";
var lowerm ;
var data;
var keye;
var idNo;
var option =  new Array();
var keywords = new Array();
var responses = new Array();
var accType;
var inpu = msg;


function popData() {
    $('<div class="message loading new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    
    updateScrollbar(); 
   lowerm = msg.toLowerCase();
    
  $.get('Chats',function(responseJson) {
          if(responseJson!==null){
               
                
                   for(var k in responseJson){
                   keye = k + 1;
                   if(responseJson.hasOwnProperty(k)){
                       option[k] = (responseJson[k]["options"]);
                       keywords[k] = responseJson[k]["keywords"];
                       responses[k] = responseJson[k]["responses"];
                   }
                   
                   if(lowerm.indexOf(keywords[k].toString().toLowerCase()) > -1){
                       $('.message.loading').remove();
                      $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + responses[k] + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                       if(responses[k] === "Hi, there sure thing-is it for private car or business"){
                          $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select1" href="#">'  + "1 Private  " + '</a><a id="select2" href="#">' + "</br>" +  "2 Business" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                            $('a').on('click', function(){
                             if($(this).attr('id') === 'select1'){
                                  accType = "private";
                                  
                                  $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                
                              }else if($(this).attr('id') === 'select2'){
                               
                                  accType = "business";
                                  $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                  
                              }
                              
                          }); 
                            
                            return false;
                            
                          }else if(responses[k] === "hi there" || responses[k] === "good morning" || responses[k] === "good evening"){
                              var started = "How can i help you";
                              setTimeout(function() {
                    
                                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + started + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                 
                              }, 1000 + (Math.random() * 20) * 100);
                               return false; 
                           }else if(responses[k] === "Hi just to be sure do you want"){
                                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select1" href="#">'  + "1 Settlement Quotation  " + '</a><a id="select2" href="#">' + "</br>" +  "2 Accont Balance" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                                $('a').on('click', function(){
                                if($(this).attr('id') === 'select1'){
                                    accType = "quotation";
                                  
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                
                                }else if($(this).attr('id') === 'select2'){
                               
                                    accType = "account balance";
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                  
                                }
                              
                                }); 
                            
                                
                          }else if(responses[k] === "How do you want the certificate"){
                                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select1" href="#">'  + "1 Send to mail  " + '</a><a id="select2" href="#">' + "</br>" +  "2 Download" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                                $('a').on('click', function(){
                                if($(this).attr('id') === 'select1'){
                                    accType = "mail";
                                  
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                
                                }else if($(this).attr('id') === 'select2'){
                               
                                    accType = "downlaod";
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                  
                                }
                              
                                }); 
                            
                                return false;
                          }else if(responses[k] === "choose 1 for settlement request 2 for tax certificate 3 for statements"){
                                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select11" href="#">'  + "1 Settlement Request  " + '</a><a id="select22" href="#">' + "</br>" +  "2 Tax Certificate" + '</a><a id="select23" href="#">' + "</br>" +  "3 Statements" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                                $('a').on('click', function(){
                                if($(this).attr('id') === 'select11'){
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select1" href="#">'  + "1 Settlement Quotation  " + '</a><a id="select2" href="#">' + "</br>" +  "2 Accont Balance" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                                $('a').on('click', function(){
                                if($(this).attr('id') === 'select1'){
                                    accType = "quotation";
                                  
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                
                                }else if($(this).attr('id') === 'select2'){
                               
                                    accType = "account balance";
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                  
                                }
                              
                                }); 
                            
                                return false;
                                }else if($(this).attr('id') === 'select22'){
                                  $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select1" href="#">'  + "1 Send to mail  " + '</a><a id="select2" href="#">' + "</br>" +  "2 Download" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                                $('a').on('click', function(){
                                if($(this).attr('id') === 'select1'){
                                    accType = "mail";
                                  
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                
                                }else if($(this).attr('id') === 'select2'){
                               
                                    accType = "downlaod";
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                  
                                }
                              
                                }); 
                            
                                return false;
                                }else if($(this).attr('id') === 'select23'){
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure><a id="select1" href="#">'  + "1 Private  " + '</a><a id="select2" href="#">' + "</br>" +  "2 Business" + '</a></div>').appendTo($('.mCSB_container')).addClass('new');
                          
                            $('a').on('click', function(){
                             if($(this).attr('id') === 'select1'){
                                  accType = "private";
                                  
                                  $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                
                              }else if($(this).attr('id') === 'select2'){
                               
                                  accType = "business";
                                  $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Excellent please give me your ID number so I can log you in securely:" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                                  
                              }
                              
                          }); 
                            
                            return false;
                            
                                }
                              
                                }); 
                            
                                return false;
                          }
                           
                           
                          
                          setDate();
                          updateScrollbar();
                          return false;
                          keye = keye - 1;
                    }else if(lowerm === "Settlement Request Page"){
                          $('.message.loading').remove();
                          $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Redirecting to Settlement Request page......" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                        setTimeout(function() {
                    
                         window.location.href = "settlement.jsp";
                           
                        }, 1000 + (Math.random() * 20) * 100);
                        
                        return false;
                      }else if(lowerm === "Tax Page"){
                        $('.message.loading').remove();
                        $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Redirecting to Tax Certificates page......" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                        setTimeout(function() {
                    
                         window.location.href = "tax.jsp";
                        }, 1000 + (Math.random() * 20) * 100);
                        
                        return false;
                        
                      }else if(lowerm === "Statement Page"){
                        $('.message.loading').remove();
                       $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Redirecting to Statements page......" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                        setTimeout(function() {
                    
                         window.location.href = "statement.jsp";
                         
                         
                        }, 1000 + (Math.random() * 20) * 100);
                        
                         return false;
                      }else if(lowerm.indexOf('bye'.toLowerCase()) >= 0){
                           $('.message.loading').remove();
                          $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "See you later....." + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                          setTimeout(function() {
                         
                          $('.message.message-personal').remove();
                          $('.message.new').remove();
                         
                        }, 1000 + (Math.random() * 20) * 100);
                                   
                        return false;
                      }else if(keywords[k].toString().toLowerCase() === "lost"){
                          setTimeout(function() {
                                
                                if(msg.indexOf("yes".toLowerCase()) > -1){
                                    $('.message.loading').remove();
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Request sent to admin" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                                    sendMail("mthobisi@onepointfour.io","Chatbot Test");
                                    return false;
                                }else if(msg.indexOf("no".toLowerCase()) > -1){
                                    $('.message.loading').remove();
                                    $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Request not sent to admin" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                                   
                                    return false;
                                }
                                conversationNotFound();
                            }, 100 + (Math.random() * 20) * 100);
                            return false;
                      }
               
               }  
             
         }
                     
                   
                
    });

    valid();
    
    return false;
}

function valid(){
    if(accType === "private"){
           
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                $('.message.loading').remove();                
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for private statement,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                 msg = null; 
                
         }else{
                $('.message.loading').remove();                     
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                 msg = null;  
               
         }
       
                                   
    }else if(accType === "business"){
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                $('.message.loading').remove();                 
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for business statement,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                msg = null;  
                
         }else{
                $('.message.loading').remove();                 
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');     
                msg = null; 
                
        } 
       
      
    }else if(accType === "quotation"){
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                $('.message.loading').remove();                  
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for Quotation,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                msg = null;  
                
         }else{
                $('.message.loading').remove();                 
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');     
                msg = null; 
                
        } 
       
      
    }else if(accType === "account balance"){
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                $('.message.loading').remove();                  
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for account balance,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                msg = null;  
                
         }else{
                $('.message.loading').remove();                 
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');     
                msg = null; 
                
        } 
       
      
    }else if(accType === "mail"){
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                $('.message.loading').remove();                
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for tax certificate,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                msg = null;  
                
         }else{
                $('.message.loading').remove();                  
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');     
                msg = null; 
                
        } 
       
      
    }else if(accType === "download"){
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                $('.message.loading').remove();                  
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for tax certificate,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                msg = null;  
                
         }else{
                $('.message.loading').remove();                 
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');     
                msg = null; 
                
        } 
       
      
    }
    
    return false;
}


var convpatterns = new Array(
  new Array (".*.","Not found in the Wesbank Chatbot DB","Do not  have your answer","Don't know","May you please repeat that")
  );
  
var soutput = "";
var answer = "";
function conversationNotFound(){
    
    for(i=0;i < convpatterns.length;i++){
        re = new RegExp (convpatterns[i][0],"i");
        
        
        if(re.test(msg)){
            len = convpatterns[i].length - 1;
            index = Math.ceil(len * Math.random());
            reply = convpatterns[i][index];
            soutput = msg.replace(re,reply);
          
         answer = msg;
         
         $('.message.loading').remove();
         $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + soutput + " Should I send your rqeuat to admin Yes/No" + '</div>').appendTo($('.mCSB_container')).addClass('new');
        
           
        }
        
         setDate();
    }
    

}


function getAjax(){
    try{
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }else if(window.ActiveXObject){
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            }catch (try_again){
                return new ActiveXObject('Microsoft.XMLHTTP');
            }
        }
    }catch(fail){
        return null;
    }
}
function sendMail(to,subject){
    var rq = getAjax();
    
    if(rq){
        //Success; attempt to use Ajax request to a JSP script to send email
        try {
            
            rq.open('GET','sendmail.jsp?to=' + encodeURIComponent(to) + '&subject=' + encodeURIComponent(subject) + '&d=' + new Date().getTime().toString() +'&body='+answer,true);
            
            rq.onreadystatechange = function (){
              if(this.readyState === 4){
                  if(this.status >= 400){
                      //The request failed;fall back to email client
                      alert("Sorry could'nt connnect to mails now taking you to mails page directly");
                      window.open('mailto:' + to + '?subject=' + encodeURIComponent(subject) +'&body='+answer);
                  }
              }  
            };
            rq.send(null);
        } catch (fail) {
            //Failed to open the request; fall back to email client
            alert("Sorry could'nt connnect to mails now taking you to mails page directly");
            window.open('mailto' + to + '?subject' + encodeURIComponent(subject) +'&body='+answer);
        }

    }else{
        //Failed to open the request; fall back to email client
        alert("Sorry could'nt connnect to mails now taking you to mails page directly");
        window.open('mailto' + to + '?subject' + encodeURIComponent(subject) +'&body='+answer);
    }
}


