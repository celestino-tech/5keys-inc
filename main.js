// $('.dropdown-button').dropdown({
//       container: document.body
//     }); 

document.addEventListener('DOMContentLoaded', function() {
  var elemtsTooltip = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elemtsTooltip

    );
});

$( document ).ready(function() {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.modal').modal();
    
 }); 
 
 $ ( document ). ready ( function () {
  $ ( " .botton-collapse " ). sideNav ({closeOnClick :  true });
});// end of document ready

//  $('.carousel.carousel-slider').carousel({
  
//   fullWidth: true,
//   indicators: false
// });
// $('#demo-carousel-auto').carousel();
 
// setInterval(function() {

//   $('#demo-carousel-auto').carousel('next');

// }, 2050);   

 
const elemtsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemtsBtns, { 
	direction: "top",
	hoverEnabled: false	
  });
  

/* Typewrater */
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function() {
      that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewriter');
  for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// MaterialBoxed

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function() {
  $('input#mobile').characterCounter();
});

      

