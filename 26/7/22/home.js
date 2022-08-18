var images =['images/baby-img1.jpg','images/baby-img2.jpg','images/baby-img3.jpg','images/baby-img4.jpg']
imagesWithTag ='';
for(var i=0; i<images.length;i++){
    imagesWithTag +='<div class="images" id =" image'+i+'"><img src="'+images[i]+'"/></div>'
}
console.log('imagesWithTag ',imagesWithTag )
document.getElementById('allImages'). innerHTML= imagesWithTag;

function next(){
    var currentId = '';
    for (var i=0;  i<images.length;i++)
      if ( document.getElementById('image'+i) .Style.display =='block' ){
        currentId=i;
      }
      if(document.getElementById('image'+parseint(currentId+1))){
        document.getElementById ('image'+i).Style.display =='none';
     }


   if(document.getElementById('image'+parseint(currentId+1))){
    document.getElementById('image'+parseint(currentId+1)) .Style.display  =='block';
   }
}
function prev(){
    var currentId = '';
    for (var i=0;  i<images.length;i++)
      if ( document.getElementById('image'+i) .Style.display =='block' ){
        currentId=i;
      }
      if(document.getElementById('image'+parseint(currentId+1))){
        document.getElementById('image'+i) .Style.display =='none';
     }


   if(document.getElementById('image'+parseint(currentId-1))){
    document.getElementById('image'+parseint(currentId-1)) .Style.display  =='block';
   }
}
