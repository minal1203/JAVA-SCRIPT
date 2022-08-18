class slider{
  constructor(){
    this.slides=[
      {
        name:'slide1',
        image:'image.jpg'
      },
      {
        name:'slide2',
        image:'image.jpg'
      },
      {
        name:'slide3',
        image:'image.jpg'
      },
      {
        name:'slide4',
        image:'image.jpg'
      },
      {
        name:'slide5',
        image:'image.jpg'
      },
      {
        name:'slide6',
        image:'<img src="C:\training\JAVA-SCRIPT\IMG\R.png">'
      }
    ];
    this.currentSlide = this.slides[0];
    this.currentSlideIndex = 0;
  
  }
  renderSlides(){
   let slide='<div class="slide">'+this.currentSlide.name+'<div>';
   $('.slider').html(slide)
   
  
  }
  prev(){
    if(this.currentSlideIndex > 0){
      this.currentSlideIndex = this.currentSlideIndex-1;
      this.currentSlide = this.slides[ this.currentSlideIndex];
      this.renderSlides();
    }
  }
  next(){
    if(this.currentSlideIndex < this.slides.length - 1 ){
      this.currentSlideIndex = this.currentSlideIndex + 1;
      this.currentSlide = this.slides[ this.currentSlideIndex];
      this.renderSlides();
    }
  }
}
let slideShow = new slider();
slideShow.renderSlides();