$(document).ready(function(){
    $('.tosearch').focus(function(){
        $(this).css({'width':'500px'})
    }
    )
    $('.tosearch').blur(function(){
        $(this).css({'width':'auto'})
    }
    )
})

$(document).ready(function(){
    $('.submit').click(function(){
        alert(88809)
        localStorage.content = $('#test').html('test');
        $('#test').html("test");
         localStorage.content = $('#test').html();
          $('#test').html(localStorage.content);
          
    })
})