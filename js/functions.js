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

    function section1_swiper(){
    var swiper = new Swiper('.swiper-container', {
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true
}) }  
    function section1_swiper_thumb(){
        var swTop = new Swiper('.sw-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var swThumbs = new Swiper('.sw-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    swTop.params.control = swThumbs;
    swThumbs.params.control = swTop;
}
function drawIcon($path, $dur, $start){
    TweenMax.staggerFrom($path, $dur, {drawSVG:0}, $start);
}

function section1MapAnime(){
    var map = new TimelineMax();
    map.from('#mapFrame1', 0.5, {opacity:1});
    map.from('#mapFrame2', 0.5, {opacity:1});
    map.from('#mapFrame3', 0.5, {opacity:1});
    map.from('#mapFrame4', 0.5, {opacity:1});
    map.from('#mapFrame5', 0.5, {opacity:1});
    map.from('#mapFrame6', 0.5, {opacity:1});
    map.from('#mapFrame7', 0.5, {opacity:1});
    map.from('#mapFrame8', 0.5, {opacity:1});
    map.from('#mapFrame9', 0.5, {opacity:1});
    map.from('#mapFrame10', 0.5, {opacity:1});
    map.from('#mapFrame11', 0.5, {opacity:1});
    map.from('#mapFrame12', 0.5, {opacity:1});
    map.from('#mapFrame13', 0.5, {opacity:1});
    map.from('#mapFrame14', 0.5, {opacity:1});
    map.from('#mapFrame15', 0.5, {opacity:1});
    map.from('#mapFrame16', 0.5, {opacity:1});
    map.from('#mapFrame17', 0.5, {opacity:1});
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
    section1_swiper();
    section1_swiper_thumb();
    section1MapAnime();
    drawIcon('#hive path', .5, .1);
}

init();

});


