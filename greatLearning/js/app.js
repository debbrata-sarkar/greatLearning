// ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// SLIDER

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// SHOW FOOTER ON SCROLL

// myID = document.getElementById("footer");

// var myScrollFunc = function() {
//   var y = window.scrollY;
//   if (y >= 700) {
//     myID.className = "show"
//   } else {
//     myID.className = "hide"
//   }
// };

// window.addEventListener("scroll", myScrollFunc);
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     console.log("hi");
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("footer").style.top = "0";
//   } else {
//     document.getElementById("footer").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
