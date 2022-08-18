function submit(){
    alert(7777)
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;

    
   localStorage.setItem('firstname',firstname);
   localStorage.setItem('lastname',lastname);
   localStorage.setItem('email',email);
   location.href ='gmail2.html'

}
