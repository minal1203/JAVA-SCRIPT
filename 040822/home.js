$(document).ready(function(){
     $('.block').click(function(){
            $.ajax({url:'./text.txt',
            success: function(result){
                $('.showblock').html(result);
                $('.showblock').slideToggle(3000);
            }
        })
     
})
})