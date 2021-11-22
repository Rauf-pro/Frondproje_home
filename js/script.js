document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("sticky", window.scrollY>0);

})

// let scrollTop = document.getElementById('scrolltop')

// window.onload = () => {
// scrollTop.style.visibility = "hidden";
// scrollTop.style.opacity = 0;
// }

// window.onscroll = () => {
// if (window.scrollY > 200) {
// scrollTop.style.visibility = "visible";
// scrollTop.style.opacity = 1;
// } else {
// scrollTop.style.visibility = "hidden";
// scrollTop.style.opacity = 0;
// }
// };

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
    
});






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

var options = {
    useEasing: true, 
    useGrouping: true, 
    
};

$('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
          $this.text(Math.ceil(this.Counter));
      }
  });
});

// Scrolltop function
window.addEventListener("scroll", function () {
  let header = document.querySelector("#navbar_top");
  header.classList.toggle("sticky", window.scrollY>0);

})

let scrollTop = document.getElementById('scrolltop')

window.onload = () => {
scrollTop.style.visibility = "hidden";
scrollTop.style.opacity = 0;
}

window.onscroll = () => {
if (window.scrollY > 200) {
scrollTop.style.visibility = "visible";
scrollTop.style.opacity = 1;
} else {
scrollTop.style.visibility = "hidden";
scrollTop.style.opacity = 0;
}
};

