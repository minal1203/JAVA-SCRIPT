var list = '';
for (var i = 1; i<=5;i++ ){
    for( var j = 7 ; j>1; j--){
        list+='@';
    }
    list+='<br/>'
}
document.getElementById('list').innerHTML=list;
