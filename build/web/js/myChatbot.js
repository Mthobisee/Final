$(document).ready(function() {

     $("#showTable").click(function(event){
            $.get('Chats',function(responseJson) {
            if(responseJson!=null){
                 $.each(responseJson, function(key,value) { 
                      keyw = value['keywords'];
                      resp = value['responses']
                      if(keyw === "How are you"){
                          alert(resp);
                      }
                          
                   
                });
                }
            });
                 
  });      
});
