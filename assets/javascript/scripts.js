$(window).ready(function () {
  // var images = [
  // 'assets/img/backgrounds/background.jpg',
  // 'assets/img/backgrounds/background1.jpg',
  // 'assets/img/backgrounds/background2.jpg',
  // 'assets/img/backgrounds/background3.jpg',
  // 'assets/img/backgrounds/background4.jpg',
  // 'assets/img/backgrounds/background5.jpg',
  // 'assets/img/backgrounds/background6.jpg',
  // 'assets/img/backgrounds/background7.jpg',
  // 'assets/img/backgrounds/background8.jpg',
  // 'assets/img/backgrounds/background9.jpg',
  // 'assets/img/backgrounds/background10.jpg',
  // 'assets/img/backgrounds/background11.jpg'
  // ];
  // $("#backgroundImage").attr('src',images[Math.floor(Math.random()*12)]);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58152127-1', 'auto');
  ga('send', 'pageview');


  // if ($(window).width() < 970) {
  //   $(".subtitle").css("top",370);
  // }
  var navBarTop = $('header').position().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() > navBarTop) {
      $(".navBar").addClass("fix-header");
    } else {
      $(".navBar").removeClass("fix-header");
    }

    if ($(this).scrollTop() < $("#about-me").position().top){
      $('a[href$="about-me"]').css("background-color","rgba(255, 255, 255, 0)");
    }
    else if ($(this).scrollTop() > $("#about-me").position().top && $(this).scrollTop() < $("#projects-picture").position().top) {
        $('a[href$="about-me"]').css("background-color","rgba(0, 0, 0, 0.3)");
        $('a[href$="projects-picture"]').css("background-color","rgba(255, 255, 255, 0)");
    }
    // else if ($(this).scrollTop() > $("#skills-picture").position().top && $(this).scrollTop() < $("#projects-picture").position().top) {
    //     $('a[href$="about-picture"]').css("background-color","rgba(255, 255, 255, 0)");
    //     $('a[href$="skills-picture"]').css("background-color","rgba(0, 0, 0, 0.3)");
    //     $('a[href$="projects-picture"]').css("background-color","rgba(255, 255, 255, 0)");
    // }
    else if ($(this).scrollTop() > $("#projects-picture").position().top && $(this).scrollTop() < $("#contact-me").position().top) {
        $('a[href$="about-me"]').css("background-color","rgba(255, 255, 255, 0)");
        $('a[href$="projects-picture"]').css("background-color","rgba(0, 0, 0, 0.3)");
        $('a[href$="contact-me"]').css("background-color","rgba(255, 255, 255, 0)");
    }
    else if ($(this).scrollTop() > $("#contact-me").position().top) {
      $('a[href$="projects-picture"]').css("background-color","rgba(255, 255, 255, 0)");
      $('a[href$="contact-me"]').css("background-color","rgba(0, 0, 0, 0.3)");
    }
  });

  $(".dropdownButton").hover(function () {
      $('.dropdown').slideDown('medium', function () {
        $('.dropButton').animate({opacity: 1},'slow');
      });
    },
    function () {
      $('.dropButton').animate({opacity: 0}, 'medium', function () {
        $('.dropdown').slideUp('medium');
      });
    });

    var firstSection = $("#about-me");

    $(".down-arrow").on("click", function(e){
        $('html,body').animate({
          scrollTop: firstSection.offset().top +1
        }, 1000);
    });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top +1
          }, 1000);
          return false;
        }
      }
    });
  });
});

// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links/
