// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}

var subMenu = () => {
  $('.btn-toogle').click(function(){
    $(this).toggleClass("click");
    $('body').toggleClass("show");
  });


  $(document).keyup(function(event){
    if (event.keyCode == 27){
      $('body').removeClass("show");
    }
  });

  $('.side-close').click(function(){
    $(this).toggleClass("click");
    $('body').removeClass("show");
  });
  
}



// initialize the functions
headerScrolled();
subMenu();