(function ($) {
  "use strict";

  $(window).on("load", function () {
    $(".popup-newsletter-active").addClass("show");
  });
  $(".popup-newsletter-closer").on("click", function () {
    $(".popup-newsletter-active").removeClass("show");
  });
  // $(".popup-newsletter-active").on("click", function () {
  //   $(".popup-newsletter-active").removeClass("show");
  // });

  // Progress bar
  var wind = $(window);
  wind.on("scroll", function () {
    $(".skill-progress .progres").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var myVal = $(this).attr("data-value");
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });

  //sidebar top fixed start
  var fixed_top = $(".header-sticky");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 70) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
      // fixed_top.removeClass("slideInUp");
      $("body").addClass("body-padding");
    } else {
      fixed_top.removeClass("menu-fixed fadeInDown");
      // fixed_top.addClass("slideInUp");
      $("body").removeClass("body-padding");
    }
  });

  //menu side bar
  $("#mobileBtn").on("click", function () {
    $(".main-menu, .body-overlay").toggleClass("active");
  });

  $("#croseBtn").on("click", function () {
    $(".movie-sidebar,.body-overlay,.movie-sliderBtn").removeClass("active");
  });

  $(".movie-sliderBtn").on("click", function () {
    $(".movie-sliderBtn").toggleClass("active");
  });

  // remove overlay
  $(".body-overlay").on("click", function () {
    $(".main-menu,.body-overlay").removeClass("active");
  });

  //  Bookmark & Search
  var $filename = $(".search-input input").data("search"),
    navLinkSearch = $(".search-bar"),
    searchInput = $(".search-input"),
    searchInputInputfield = $(".search-input input"),
    searchList = $(".search-input .search-list"),
    appContent = $(".app-content");

  // Navigation Search area Open
  navLinkSearch.on("click", function () {
    var $this = $(this);
    var searchInput = $(this).parent(".item-list").find(".search-input");
    searchInput.addClass("open");
    searchInputInputfield.focus();
    searchList.find("li").remove();
  });

  // Navigation Search area Close
  $(".search-input-close svg").on("click", function () {
    var $this = $(this),
      searchInput = $(this).closest(".search-input");
    if (searchInput.hasClass("open")) {
      searchInput.removeClass("open");
      searchInputInputfield.val("");
      searchInputInputfield.blur();
      searchList.removeClass("show");
      appContent.removeClass("show-overlay");
    }
  });

  // Scroll To Top
  var scrollTop = $(".scrollToTop");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
      scrollTop.removeClass("active");
    } else {
      scrollTop.addClass("active");
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }
  $(".btn").on("mousedown", function (e) {
    //appending an element with a class name "btn-ripple"
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $(".btn").on(
    "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
    ".btn-ripple",
    function () {
      $(this).remove();
    }
  );

  // chate button
  $(document).on("click", ".media-btn, .media-close", function () {
    $(".social-media").toggleClass("open");
  });

  // simple parallax
  // var image = document.getElementsByClassName('thumbnail');
  //   new simpleParallax(image, {
  //     delay: .6,
  //     transition: 'cubic-bezier(0,0,0,1)'
  // });

  // lightcase activation//
  // $('a[data-rel^=lightcase]').lightcase();

  // banner slider js
  var swiper = new Swiper(".banner-slider", {
    autoplay: {
      delay: 3000,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // fasion slider js
  var swiper = new Swiper(".fasion-slider", {
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //testimonial Slider
  var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
    loop: true,
  });

  // service details js
  var swiper = new Swiper(".service-slider", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // sponsor slider js
  var swiper = new Swiper(".sponsor-slider", {
    grid: {
      rows: 2,
    },
    spaceBetween: 0,
    speed: 1200,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 2,
      },
      375: {
        slidesPerView: 1,
      },
    },
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });

  // product view mode change js
  $(".product-view-mode").on("click", "a", function (e) {
    e.preventDefault();
    var shopProductWrap = $(".product-wrap");
    var viewMode = $(this).data("target");
    $(".product-view-mode a").removeClass("active");
    $(this).addClass("active");
    shopProductWrap.removeClass("grid list").addClass(viewMode);
  });

  // model option start here
  $(".view-modal").on("click", function () {
    $(".modals").addClass("show");
  });

  $(".close").on("click", function () {
    $(".modals").removeClass("show");
  });
  // shop cart + - start here
  var CartPlusMinus = $(".cart-plus-minus");
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // social bar js
  $("#socialSlideBtn").on("click", function () {
    $("#socialSlide").addClass("show");
  });

  $("#closeSocailBar").on("click", function () {
    $("#socialSlide").removeClass("show");
  });

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var projectIsotope = $(".project-grid").isotope({
      itemSelector: ".project-grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: 0,
      },
    });
    $("#project-flters li").on("click", function () {
      $("#project-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");
      projectIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });


$(function(){
  "use strict";
  // ========== Form-select-option ========== //
  $(".step_1").on('click', function(){
    $(".step_1").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_2").on('click', function(){
    $(".step_2").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_3").on('click', function(){
    $(".step_3").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_4").on('click', function(){
    $(".step_4").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_5").on('click', function(){
    $(".step_5").removeClass("active");
    $(this).addClass("active");
  });

  // =====================Progress Increment====================
  $(document).on( 'click', '#nextBtn', function(){
    var $progressbar = $('.count_progress');
    for (var i = 1; i<4; i++) {
      var className = 'clip-'+i;
      if ($progressbar.hasClass(className)) {
        $progressbar.removeClass(className).addClass('clip-'+(i+1));
        break;
      }
    }
  });
  // =====================Progress Decrement====================
  $(document).on( 'click', '#prevBtn', function(){
    var $progressbar = $('.count_progress');
    for (var i = 1; i<4; i++) {
      var className = 'clip-'+i;
      if ($progressbar.hasClass(className)) {
        $progressbar.removeClass(className).addClass('clip-'+(i+1));
        break;
      }
    }
  });
  
  // ================== CountDown function ================
  $('.countdown_timer').each(function(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime(''
        +'<img  src="../../assets/images/quize/watch.png" alt="image-not-found">'
        + '<span class="pe-5 counter">%M:%S</span>'));
      });
    });
  });

});

})(jQuery);


// Progress bar counter ======================
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 100, 0, 90000);



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("multisteps_form_panel");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("multisteps_form_panel");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("wizard").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("multisteps_form_panel");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
