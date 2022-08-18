var images =['images/baby-img1.jpg','images/baby-img2.jpg','images/baby-img3.jpg','images/baby-img4.jpg'];
document.getElementById('allImages').innerHTML='<img id="image0" data-index="0"  src="'+images[0]+'"/>'

var dots = '';
for (var i=0; i<images.length;i++){
    dots +='<span onclick="showImage('+i+')">'+i+'</span>'
}
document.getElementById('dots').innerHTML= dots;

function showImage(id){
    document.getElementById('allImages').innerHTML='<img id="image'+id+'"    data-index="'+id+'"  src="'+images[id]+'"/>'

}


function next(){
    var currentImg =parseInt(document.querySelectorAll('#allImages  img')[0].dataset.index);
    document.getElementById('allImages').innerHTML = '<img id = "image'+(currentImg+1) +'" data-index="'+(currentImg+1) +'" src= "'+images [(currentImg+1)]+'" />'

}
function prev(){
    
    var currentImg =parseInt(document.querySelectorAll('#allImages  img')[0].dataset.index);
    document.getElementById('allImages').innerHTML = '<img id = "image'+(currentImg-1) +'" data-index="'+(currentImg-1) +'" src= "'+images [(currentImg-1)]+'" />'

}
