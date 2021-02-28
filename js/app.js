window.addEventListener('scroll', reveal);
function reveal() {
  var reveal_i = document.querySelectorAll('.reveal-up');
  var reveal_j = document.querySelectorAll('.reveal-right');
  var reveal_k = document.querySelectorAll('.myBounce');
  
  for(var i = 0; i < reveal_i.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveal_i[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if(revealtop < windowheight - revealpoint) {
      reveal_i[i].classList.add('active');
    }
    else {
      reveal_i[i].classList.remove('active');
    }
  }
  // ------------------------------------------------
  for(var j = 0; j < reveal_j.length; j++) {
    var windowheight_j = window.innerHeight;
    var revealtop_j = reveal_j[j].getBoundingClientRect().top;
    var revealpoint_j = 50;

    if(revealtop_j < windowheight_j - revealpoint_j) {
      reveal_j[j].classList.add('active');
    }
    else {
      reveal_j[j].classList.remove('active');
    }
  }
  //--------------------------------------------------
  for(var k = 0; k < reveal_k.length; k++) {
    var windowheight_k = window.innerHeight;
    var revealtop_k = reveal_k[k].getBoundingClientRect().top;
    var revealpoint_k = 50;

    if(revealtop_k < windowheight_k - revealpoint_k) {
      reveal_k[k].classList.add('active');
    }
    else {
      reveal_k[k].classList.remove('active');
    }
  }
}

