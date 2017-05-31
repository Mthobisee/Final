
var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
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

var soutput = "";
var msg;
function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) === '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  //setTimeout(function() {
    conversationpatterns();
  //}, 1000 + (Math.random() * 20) * 100);
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

function conversationpatterns(){
  

        if(msg.indexOf('Settlement Request') >= 0  || msg.indexOf('1') >= 0){
            window.location.href = "file:///Users/mthobisi/Documents/ChatBot/settlement.html";
        }else if(msg.indexOf('Tax Certificate') >= 0 || msg.indexOf('2') >= 0){
            window.location.href = "file:///Users/mthobisi/Documents/ChatBot/tax.html";
        }else if(msg.indexOf('Statement') >= 0 || msg.indexOf('3') >= 0){
            window.location.href = "file:///Users/mthobisi/Documents/ChatBot/statement.html";
        }

       

            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80_4.jpg" /></figure>' + soutput + '</div>').appendTo($('.mCSB_container')).addClass('new');
            updateScrollbar();
       


    }


function initialCap(field) {
   field = field.substr(0, 1).toUpperCase() + field.substr(1);
   return field;
}
