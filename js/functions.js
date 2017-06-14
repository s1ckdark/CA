$(function() {

    //공유 설정
    var snsMore = $("#snsMore");
    $(".sns-share-box .sns-more").on("click", function() {
        snsMore.toggleClass("open");
        return false;
    });

    // IE 감지
    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    }

    if ( detectIE() ){
        $('body').addClass('ie ie'+detectIE());
    }

    // Lazyload Default 
    $('.lazy').lazyload({
        effect : 'fadeIn'
    });
    
    // Defalut
    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    
    
    function dateCheck() {
        Date.prototype.yyyymmdd = function() {
          var yyyy = this.getFullYear().toString();
          var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
          var dd  = this.getDate().toString();
          var hh  = this.getHours().toString(); // Hours(24)
          var min = this.getMinutes().toString();
          var sec = this.getSeconds().toString();
          return yyyy + (mm[1]?mm:'0'+mm[0]) + (dd[1]?dd:'0'+dd[0]); // padding
        };
        var date = new Date();
        var currentDate = date.yyyymmdd();

        // 날짜체크
        // if( currentDate >= 20170227 ) {
        //     $('#part').show();
        // } else {
        //     $('#part').hide();
        // }
    }
    dateCheck();


    /*
        스크립트 시작
    */
    
    /* 인트로 (hero) 섹션 */
    function heroResize() {
        $('#hero').height(winHeight - roofHeight);

        $(window).resize(function(){
            roofHeight = $('#roof').outerHeight()
            winHeight = $(window).height();
            $('#hero').height(winHeight - roofHeight);
        });
    };

    function heroSlideShow() {
        // 상단 페이드인 페이드아웃 슬라이드 쇼

        var $slides = $(".bg_heros li");          //slides 
        var currentSlide = 0;               //keep track on the current slide
        var stayTime = 3;               //time the slide stays
        var slideTime = 1.3;                //fade in / fade out time

        TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0}); //we hide all images after the first one
        TweenLite.delayedCall(stayTime, nextSlide);             //start the slideshow

        function nextSlide(){                   
                TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );     //fade out the old slide
                currentSlide = ++currentSlide % $slides.length;                         //find out which is the next slide          
                TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );     //fade in the next slide
                TweenLite.delayedCall(stayTime, nextSlide);                             //wait a couple of seconds before next slide
        }
    }
    var section7_controller = new ScrollMagic.Controller();
    /* section7_video */
    // $('#section7_video').attr('src','./video/section7_video_almond.mp4');
    // $('#section7_video').fnSetVideo({
    //     'ovpUrl': 'http://v.ovp.joins.com/kJ1dwgtc',
    //     'posterImg': '/innovation/CA/img/section7_video_thumb.jpg',
    //     'ovpRo': 1, // 1 = 16:9, 2 = 1:1
    //     'ctrls': true, 
    //     'preload': true, 
    //     'addCls':'loaded',
    //     'volume':1 
    // });

    var section7VideoTween = TweenMax.from('#section7_video', .8, { opacity:0, y:'+=80', scale: .9, onComplete: videoAutoplay });
    var section7VideoScene = new ScrollMagic.Scene({
            triggerElement: "#section7_video",
            triggerHook: 0.6,
        })
        .setTween(section7VideoTween)
        .addTo(section7_controller);

    function videoAutoplay() {
        var video = $('#section7_video');
      //  video.play();
    }

    function sec1_sw_swiper(){
    var swiper = new Swiper('.sw-swiper', {
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true,
      // If we need pagination
    pagination: '.sw-pagination',
    // Navigation arrows
    nextButton: '.ca-swiper-next',
    prevButton: '.ca-swiper-prev',

}) }  
    function sec1_interview_swiper_thumb(){
        var interviewTop = new Swiper('.interview-top', {
        nextButton: '.ca-swiper-next',
        prevButton: '.ca-swiper-prev',
        spaceBetween: 10,
    });
    var interviewThumbs = new Swiper('.interview-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    interviewTop.params.control = interviewThumbs;
    interviewThumbs.params.control = interviewTop;
}
function sec6_FoodSlider(){
    var foodSlider = new Swiper('.foodSlider',{
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true,
    // If we need pagination
    pagination: '.food-pagination',
    // Navigation arrows
    nextButton: '.ca-swiper-next',
    prevButton: '.ca-swiper-prev',
    spaceBetween: 10,
    loop:true

    });

}
function drawIcon($path, $dur, $start){
    TweenMax.staggerFrom($path, $dur, {drawSVG:0}, $start);
}
TweenMax.set('.mapAnime div', {opacity:0, visibility:'hidden'});
function sec1_MapAnime(){
    var map = new TimelineMax();

    map.to('#mapFrame1', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame2', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame3', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame4', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame5', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame6', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame7', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame8', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame9', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame10', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame11', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame12', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame13', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame14', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame15', 0.5, {visibility:'visible', opacity:1});
    map.to('#mapFrame16', 0.5, {visibility:'visible', opacity:1});
}

function sec4_AnimeTin(){
    TweenMax.set('.animeTin', {opacity:0, visibility:'hidden'});
    var tl = new TimelineMax();
    tl.to('#animeTin1', 0.5, {visibility:'visible', opacity:1});
    tl.to('#animeTin2', 0.5, {visibility:'visible', opacity:1});
    tl.to('#animeTin3', 0.5, {visibility:'visible', opacity:1});
    tl.to('#animeTin4', 0.5, {visibility:'visible', opacity:1});
    tl.to('#animeTin5', 0.5, {visibility:'visible', opacity:1});
    tl.to('#animeTin6', 0.5, {visibility:'visible', opacity:1});
 }

 function sec4_qa(){
    event.preventDefault();
    $(".qaq__title__content").each(function() {
    if ($(this).hasClass("is-closed")) {
        var $contents = $(this).find(".qaq__item__content");
        TweenMax.to($contents, 0, {
            height: 0
        })
    }
});

function sec2_almondsdrop(){
     var tl = new TimelineMax({});
    
      tl.set("#swing", {y: -200})
      tl.set("#box", {rotationZ:0})
      .to("#swing", 1.5, { y:0, ease: Bounce.easeOut, onUpdateParams:["{self}"]}, "swingme")
      .to("#box", 0.2, { rotationZ:-5, ease:Power1.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"]}, "swingme")
      .to("#box", 0.4, { rotationZ:3, ease:Power1.easeInOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:0.2 }, "swingme")
      .to("#box", 2, { rotationZ:0, ease:Elastic.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:0.6 }, "swingme")
      //.to("#swing", .5, { y:-200, ease:Power4.easeInOut, onUpdateParams:["{self}"]});


function onUpdate(tween) { 
  var target = tween.target;
  /*
    target.style.webkitTransform = target.style.transform = target.style.msTransform = target.style.MozTransform = 'rotateZ('+(target.rotationZ)+'deg)';
    */
  target.rotationZ = 'rotateZ('+(target.rotationZ)+'deg)';
}
}
// Toggle height on click
$(".qaq__title").click(function() {
    var $content = $(this).next(".qaq__title__content"),
        $container = $(this).parent("");
    // Use is-closed class to determine whether item has been toggled
    if ($container.hasClass("is-closed")) {
        TweenMax.set($content, {
            height: "auto"
        })
        TweenMax.from($content, 0.2, {
            height: 0
        })
        $container.removeClass("is-closed");
    } else {
        TweenMax.to($content, 0.2, {
            height: 0
        })
        $container.addClass("is-closed")
    }
})
}

// var section1MapAnime_controller = new ScrollMagic.Controller();
// var section1MapAnime = TweenMax.from('#map', .1, {opacity:0});
// var section1MapAnimeStart = new ScrollMagic.Scene({
//             triggerElement: "#map",
//             triggerHook: 0.6,
//         })
// .setTween(section1MapAnime)
// .addTo(section1MapAnime_controller);

var section8IconDrawer_controller = new ScrollMagic.Controller();
var section8IconDrawer = TweenMax.from('#hive', .1, {opacity:0});
    var section8IconDrawerStart = new ScrollMagic.Scene({
            triggerElement: "#hive",
            triggerHook: 0.6,
        })
        .setTween(section8IconDrawer)
        .addTo(section8IconDrawer_controller);

function init(){
    heroResize();
    heroSlideShow(); 
    sec1_sw_swiper();
    sec1_interview_swiper_thumb();
    sec1_MapAnime();
    sec4_AnimeTin();
    sec6_FoodSlider();
    sec4_qa();
    sec2_almondsdrop();
    drawIcon('#hive path', .5, .1);
}

init();

});


