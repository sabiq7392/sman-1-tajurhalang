


$(document).ready(function(){
 $(".laci-satu-ipa").click(function() {
  $(this).each(function( ) {
    if (this.style.height !== "250px") {
      this.style.height = "250px";
      $(".laci-satu-ipa span").show(1000);
      this.removeClass("h-100")
    } else {
      $(".laci-satu-ipa span").hide(1000);
      this.style.height = "50px";
    }
  });
 })
 $(".laci-dua-ipa").click(function() {
  $(this).each(function( ) {
    if (this.style.height !== "250px") {
      this.style.height = "250px";
      $(".laci-dua-ipa span").show(1000);
      this.removeClass("h-100")
    } else {
      $(".laci-dua-ipa span").hide(1000);
      this.style.height = "50px";
    }
  });
 })
 $(".laci-tiga-ipa").click(function() {
  $(this).each(function( ) {
    if (this.style.height !== "250px") {
      this.style.height = "250px";
      $(".laci-tiga-ipa span").show(1000);
      this.removeClass("h-100")
    } else {
      $(".laci-tiga-ipa span").hide(1000);
      this.style.height = "50px";
    }
  });
 })
 $(".laci-satu-ips").click(function() {
  $(this).each(function( ) {
    if (this.style.height !== "250px") {
      this.style.height = "250px";
      $(".laci-satu-ips span").show(1000);
      this.removeClass("h-100")
    } else {
      $(".laci-satu-ips span").hide(1000);
      this.style.height = "50px";
    }
  });
 })
 $(".laci-dua-ips").click(function() {
  $(this).each(function( ) {
    if (this.style.height !== "250px") {
      this.style.height = "250px";
      $(".laci-dua-ips span").show(1000);
      this.removeClass("h-100")
    } else {
      $(".laci-dua-ips span").hide(1000);
      this.style.height = "50px";
    }
  });
 })
 $(".laci-tiga-ips").click(function() {
  $(this).each(function( ) {
    if (this.style.height !== "250px") {
      this.style.height = "250px";
      $(".laci-tiga-ips span").show(1000);
      this.removeClass("h-100")
    } else {
      $(".laci-tiga-ips span").hide(1000);
      this.style.height = "50px";
    }
  });
 })
});



window.onscroll = function() {sekrol()};
function sekrol() {
  var navBrand = document.getElementsByClassName("navbar-brand")[0];
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBrand.style.padding = "0";
  }
  else {
    navBrand.style.padding = "0.5em 0";
  }
}

window.addEventListener('scroll', reveal);
function reveal() {
  var reveal_i = document.querySelectorAll('.reveal-up');
  var reveal_j = document.querySelectorAll('.reveal-right');
  var reveal_k = document.querySelectorAll('.myBounce');
  
  for(var i = 0; i < reveal_i.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveal_i[i].getBoundingClientRect().top;
    var revealpoint = 0;

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
    var revealpoint_j = 0;

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

