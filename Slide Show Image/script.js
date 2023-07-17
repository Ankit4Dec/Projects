var slideIndex = 1;

// function showSlides(){
//     const slides = document.getElementsByClassName("mySlide");
//     console.log(typeof slides )

//     for(let i=0;i<slides.length;i++){
//         slides[i].style.display = "none";
//         console.log(slides[i])
//     }

//     slides[slideIndex-1].style.display = "block";
//     console.log(`slide index ${slideIndex-1}`);
// }


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    console.log(typeof slides + " " + slides.length);
  
    // let's write condition to loop a slideshow
    // when n is greater than slides.length then value of slideIndex should be 1
    if (n > slides.length) {
      slideIndex = 1;
    }
    // when n is less than 1 then value of slideIndex should be equal to slides.length
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    /* hiding all images by default using display none  */
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // console.log(slides[i])
    }
  
    slides[slideIndex - 1].style.display = "block";
    // console.log(`slide index ${slideIndex - 1}`);
  }

showSlides(slideIndex);


function changeSlide(n){
    showSlides((slideIndex += n));
    console.log(`slideIndex` + slideIndex)
}

// changeSlide();

