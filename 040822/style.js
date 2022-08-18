$(document).ready(function(){
    $('.block').click(function(){
           $.ajax({url:'./newjson.json',
           success: function(result){
            var tabledata='';
              for ( var i=0 ; i < result.length; i++ ){
                 tabledata += '<tr><td>'+result[i].name+'<tr><td>'+result[i].street+'<tr><td>';
              }
              $('.showblock').html(tabledata);
           }
       })
    
})
})