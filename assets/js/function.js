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
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var projectIsotope = $('.project-grid').isotope({
      itemSelector: '.project-grid-item',
      percentPosition: true,
			masonry: {
				columnWidth: 0
			}
    });
    $('#project-flters li').on('click', function () {
      $("#project-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      projectIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });


})(jQuery);
