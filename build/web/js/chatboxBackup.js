//var start = "Hi, I can help you with most WesBank related queries and some account services too! What can I do for you?";

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
    
  $messages.mCustomScrollbar();
  setTimeout(function() {
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

function popData() {
     
   lowerm = msg.toLowerCase();
    
  $.get('Chats',function(responseJson) {
          if(responseJson!==null){
               
                
                 $.each(responseJson, function(key,value) {
                       keye = key + 1;
                       keyw = value['keywords'].toLowerCase();
                       resp = value['responses'].toLowerCase();
                    
                      //lowerm.toLowerCase();
                      //alert(lowerm);
                       
                      if(lowerm.indexOf(keyw.toString().toLowerCase()) > -1){
                        $('.message.loading').remove();
                        $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + resp + '</div>').appendTo($('.mCSB_container')).addClass('new');
                          
                           if(lowerm === "hi i want a statement"){
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
                            valid(); 
                            return false;
                            
                          }
                          setDate();
                          return false;
                          keye = keye - 1;
                      }else if(lowerm.indexOf('Settlement Request'.toLowerCase()) >= 0  || lowerm.indexOf('1') >= 0){
                          $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Redirecting to Settlement Request page......" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                        setTimeout(function() {
                    
                         window.location.href = "settlement.jsp";
                            //return false;
                        }, 1000 + (Math.random() * 20) * 100);
                        
                        return false;
                      }else if(lowerm.indexOf('Tax Certificate'.toLowerCase()) >= 0 || lowerm.indexOf('2') >= 0){
                        $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Redirecting to Tax Certificates page......" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                        setTimeout(function() {
                    
                         window.location.href = "tax.jsp";
                            //return false;
                        }, 1000 + (Math.random() * 20) * 100);
                        
                        return false;
                        
                      }else if(lowerm.indexOf('Statement'.toLowerCase()) >= 0 || msg.indexOf('3') >= 0){
                       $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Redirecting to Statements page......" + '</div>').appendTo($('.mCSB_container')).addClass('new');
                         
                        setTimeout(function() {
                    
                         window.location.href = "statement.jsp";
                            //return false;
                        }, 1000 + (Math.random() * 20) * 100);
                        
                         return false;
                      }
                      setTimeout(function() {
                          if(lowerm === "bye"){
                         
                          $('.message.message-personal').remove();
                          $('.message.new').remove();
                         } 
                         //return false;
                        }, 1000 + (Math.random() * 20) * 100);
                  
                });
                 
                        if(keye > 7){//Link to DB id
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
                        }
                     }
                
            });

             
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
        //return false;
    }
    

}

/***************************************************Email***************************************/
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
function valid(){
    if(accType === "private"){
           
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                                   
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for private statement,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                      
         }else{
                                      
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                         
         }
       
                                   
    }else if(accType === "business"){
         var idInput = parseInt(msg);
         if(Number.isInteger(idInput) && msg.length === 13){
                                   
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Thank you request for ID no: " + msg + " for statement statement,a one time pin has been send to your phone" + '</div>').appendTo($('.mCSB_container')).addClass('new');            
                  
         }else{
                                  
                $('<div class="message new"><figure class="avatar"><img src="images/ico_WesBank_chat.svg" /></figure>' + "Incorrect ID" + '</div>').appendTo($('.mCSB_container')).addClass('new');     
            
        } 
        msg = "null";
      
    }
    return false; 
}
