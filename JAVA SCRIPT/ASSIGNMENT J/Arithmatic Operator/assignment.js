



function greatnumber(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var result=(n1 > n2)? n1 + 'is great than' + n2: n2 + 'is great than' + n1;
     document.getElementById('result').innerHTML = result;
}

function lessnumber(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var result=(n1 < n2)? n1 + 'is less than' + n2: n2 + 'is less than' + n1;
     document.getElementById('result').innerHTML = result;
}