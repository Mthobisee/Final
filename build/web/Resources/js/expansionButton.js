var btnValue='';
$(document).ready(function(){
  //Button click handler
  $('.btn-expand').on('click',clickHandler);
  //Close button
  $('.btn-close-expansion').on('click', function(e){
    $('.expanded').removeClass("expanded").addClass("btn-expand");
    $('.expanded-content').hide().detach().insertAfter('.btn-expand');//Hide content
    $('.btn-expand').html(btnValue);//Display button value
    //Animation complete
    $(".btn-expand").on('click',clickHandler);
    $('.btn-close-expansion').hide();
  });
});

function clickHandler(e){
  btnValue=$('.btn-expand').html();//Get button value
  $('.btn-expand').removeClass('btn-expand').addClass('expanded').off();
  $('.expanded').html($('.expanded-content').fadeIn(2000).detach());//Get/Display content
  $('.btn-close-expansion').fadeIn(2000);
};
