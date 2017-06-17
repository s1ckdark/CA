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
    var controller = new ScrollMagic.Controller();
    
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


     $('.video_wrap.autoplay').each(function(){

        var $this = $(this)
        var $controls = $this.find('.video_controls')

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: $this.outerHeight()
        })
            .addTo(controller)
            .on("enter leave", function (e) {
                if ( e.type == 'enter') {

                    // console.log( $this )
                    if( $this.find('.video_controls').hasClass('paused') ) {
                        $this.find('.video_controls').toggleClass('paused playing');
                        $this.find('video')[0].play();
                    }
                } else {
                    if( $this.find('.video_controls').hasClass('playing') ) {
                        $this.find('.video_controls').toggleClass('paused playing');
                        $this.find('video')[0].pause();
                    }
                }
                // console.log( e.type == "enter" ? "inside" : "outside" )
            })
    });




    var section7_controller = new ScrollMagic.Controller();
    /* section7_video */
      $('#section7_video').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/0hPnlogB',
        'posterImg': '/innovation/CA/img/section7_video_thumb.jpg',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true, 
        'preload': true, 
        'addCls':'loaded',
        'volume':1 
    });

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
    loop:true,
autoplay: 3000,
grabCursor: true,
paginationClickable: true

}) }  

        var interviewTop = new Swiper('.interview-top', {
        nextButton: '.ca-swiper-next',
        prevButton: '.ca-swiper-prev',
        spaceBetween: 10,
        loop:true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true,
        keyboardControl: true,
        autoplayDisableOnInteraction:false,
        speed:1000,
        paginationClickable: true,
     });

        var shpaeSlider = new Swiper('.shape-slider', {
        nextButton: '.ca-swiper-next',
        prevButton: '.ca-swiper-prev',
        spaceBetween: 10,
        loop:true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true,
        keyboardControl: true,
        autoplayDisableOnInteraction:false,
        speed:1000,
        paginationClickable: true,
     });

function sec6_FoodSlider(){
    TweenMax.to('#easy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
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
    loop:true,
    autoplay: 3000,
    grabCursor: true,
    paginationClickable: true,
    onSlideChangeStart: function(swiper){
      var $sai = swiper.realIndex;
       if($sai == '0' || $sai == '1' || $sai == '2'){
        TweenMax.to('#easy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    } else if($sai == '3' || $sai == '4' || $sai == '5'){
          TweenMax.to('#easy', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#tasty', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    } else if($sai == '6' || $sai == '7' || $sai == '8'){
          TweenMax.to('#tasty', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#healthy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    } else if($sai == '9' || $sai == '10' || $sai == '11'){
          TweenMax.to('#healthy', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#unique', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    }
}
    });
    $('#easy').click(function(){ foodSlider.slideTo(0, 1000, false)});
    $('#tasty').click(function(){ foodSlider.slideTo(3, 1000, false)});
    $('#healthy').click(function(){ foodSlider.slideTo(6, 1000, false)});
    $('#unique').click(function(){ foodSlider.slideTo(9, 1000, false)});

    $('.foodSlider').on('mouseover',function() { 
        foodSlider.stopAutoplay();
        var $foodbox = $('.swiper-slide-active > .foodBox');
        TweenMax.to($foodbox, 1, {opacity:1,visibility:'visible'});}); 
    $('.swiper-container').on('mouseout',function() { 
        foodSlider.startAutoplay(); 
        var $foodbox = $('.swiper-slide-active > .foodBox');
        TweenMax.to($foodbox, 1, {opacity:0,visibility:'hidden'});})

}
function drawIcon($path, $dur, $start){
    TweenMax.staggerFrom($path, $dur, {drawSVG:0}, $start);
}
TweenMax.set('.mapAnimation div', {opacity:0, visibility:'hidden'});
// function sec1_MapAnime(){

// }





 function sec4_qa(){
    event.preventDefault();
    $(".qaq").each(function() {
    if ($(this).hasClass("is-closed")) {
        var $contents = $(this).find(".qaq__title__content");
        TweenMax.to($contents, 0, {
            height: 0
        })
    }
});


// Toggle height on click
$(".qaq__title").click(function() {
    var $content = $(this).next(".qaq__title__content"),
        $container = $(this).parent(".qaq");
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

function sec2_almondsdrop(){
     var tl = new TimelineMax({});
    
      tl.set(".almondsSwing", {y: -200})
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

function initPlayers(num) {
  for (var i = 0; i < num; i++) {
    (function() {
      // Variables
      // ----------------------------------------------------------
      // audio embed object
      var playerContainer = document.getElementById('playerContainer'),
        player = document.getElementById('player'),
        isPlaying = false,
        playBtn = document.getElementById('playBtn');

      // Controls Listeners
      // ----------------------------------------------------------
      if (playBtn != null) {
        playBtn.addEventListener('click', function() {
            console.log("click");
          togglePlay()
        });
      }
      // Controls & Sounds Methods
      // ----------------------------------------------------------
      function togglePlay() {
        if (player.paused === false) {
          player.pause();
          isPlaying = false;
          $('#playBtn').removeClass('pause');
          // $('.play_state').addClass('paused').removeClass('playing');
          $('.chef_video').parent().click(function () {
            console.log("click");
    if($(this).children(".video_section").get(0).paused){
        $(this).children(".video_section").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video_section").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
        } else {
          player.play();
          $('#playBtn').addClass('pause');
          // $('.play_state').addClass('playing').removeClass('paused');

          isPlaying = true;
        }
      }
    }());
  }
}

    TweenMax.set('.animeTin', {opacity:0, visibility:'hidden'});
    var animeTinTween = new TimelineMax()
     .fromTo('#animeTin1', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1})
     .fromTo('#animeTin2', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1})
     .fromTo('#animeTin3', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1})
     .fromTo('#animeTin4', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1})
     .fromTo('#animeTin5', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1})
     .fromTo('#animeTin6', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1})
     .fromTo('#innerBox', 1, {visibility:'hidden', opacity:0},{visibility:'visible',opacity:1});
      var tinScene = new ScrollMagic.Scene({
            triggerElement: '.animeTin',
            triggerHook: 0.6 })
        .setTween(animeTinTween)
        .addTo(controller); 
    /* 480x420 */
    
    var $mapWidth = $(window).width(), $mapHeight = $mapWidth*21/24, $textBox = $('#mapFrame17').height();
    var $calcText = $mapHeight - $textBox; 
    var maptween = new TimelineMax({onStart:function(){
        TweenMax.set('.mapAnime',{height:$mapHeight,width:$mapWidth});     
    }})
       .to('#mapFrame1', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame2', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame3', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame4', .5, {visibility:'visible', opacity:1})
       .to('#mapFrame5', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame6', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame7', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame8', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame9', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame10', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame11', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame12', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame13', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame14', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame15', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame16', .3, {visibility:'visible', opacity:1})
       .to('#mapFrame17', .3, {visibility:'visible', opacity:1,top:$calcText});
        var mapScene = new ScrollMagic.Scene({
            triggerElement: '#map',
            triggerHook: 0.6 })
        .setTween(maptween)
        .addTo(controller); 


    var accordiantween = new TimelineMax()
    .fromTo('.accordian1', .2, {left:0}, {left:0, opacity:1},0)
    .fromTo('.accordian2', .2, {left:0}, {left:'50%', opacity:1},.2)
    .fromTo('.accordian3', .2, {left:0, top:'-100%'}, {left:'0%', top:0, opacity:1},.4)
    .fromTo('.accordian4', .2, {left:0, top:'-100%'}, {left:'50%',top:0, opacity:1},.6);
        var accordianScene = new ScrollMagic.Scene({
            triggerElement: '.slideAccordian',
            triggerHook: 0.6 })
        .setTween(accordiantween)
        .addTo(controller); 



    TweenMax.set('.bee_desc_item .item', {opacity:0.2});
   
    var beedescTween = new TimelineMax()
    .to('.bee_item1', 1, {opacity:1, visibility:'visible'}, 1)
    .to('.bee_item2', 1, {opacity:1, visibility:'visible'}, 2)
    .to('.bee_item3', 1, {opacity:1, visibility:'visible'}, 3)
    .to('.bee_item4', 1, {opacity:1, visibility:'visible'}, 4)
    .to('.item i.line', 1, {"height": "3px", opacity:1, visibility:'visible'}, .5)
    .to('.item i.underArrow', 1, {opacity:1, visibility:'visible'}, 1)
    .to('.item p', 1, {opacity:1, visibility:'visible'}, 1)
     var beeDescScene = new ScrollMagic.Scene({
            triggerElement: '.bee_desc_item',
            triggerHook: 0.6 })
        .setTween(beedescTween)
        .addTo(controller); 
    
    TweenMax.set('.shapeFeat', {opacity:0});
    var shapeTween = new TimelineMax()
    .to('.shape-1', 1, {opacity:1, visibility:'visible'}, 1)
    .to('.shape-2', 1, {opacity:1, visibility:'visible'}, 2)
    .to('.shape-3', 1, {opacity:1, visibility:'visible'}, 3)
    .to('.shape-4', 1, {opacity:1, visibility:'visible'}, 4)
    .to('.shape-5', 1, {opacity:1, visibility:'visible'}, 5)
    .to('.shape-1 i', 1, {"height": "3px", opacity:1, visibility:'visible'}, 1.2)
    .to('.shape-1 p', 1, {"height": "3px", opacity:1, visibility:'visible'}, 1.2)
     .to('.shape-2 i', 1, {"height": "3px", opacity:1, visibility:'visible'}, 2.2)
    .to('.shape-2 p', 1, {"height": "3px", opacity:1, visibility:'visible'}, 2.2)
      .to('.shape-3 i', 1, {"height": "3px", opacity:1, visibility:'visible'}, 3.2)
    .to('.shape-3 p', 1, {"height": "3px", opacity:1, visibility:'visible'}, 3.2)
      .to('.shape-4 i', 1, {"height": "3px", opacity:1, visibility:'visible'}, 4.2)
    .to('.shape-4 p', 1, {"height": "3px", opacity:1, visibility:'visible'}, 4.2)
      .to('.shape-5 i', 1, {"height": "3px", opacity:1, visibility:'visible'}, 5.2)
    .to('.shape-5 p', 1, {"height": "3px", opacity:1, visibility:'visible'}, 5.2)
     var beeDescScene = new ScrollMagic.Scene({
            triggerElement: '.almondShape',
            triggerHook: 0.6 })
        .setTween(beedescTween)
        .addTo(controller); 

    TweenMax.set('#beeIcon', {opacity:0,visibility:'hidden'});
    TweenMax.set('#iconFruit', {opacity:0,visibility:'hidden'});
    TweenMax.set('.endangeredSpecies q', {opacity:0,visibility:'hidden'});
    var iconDrawer = new TimelineMax(/*{onStart:function(){
        var $svgW = $(window).width(), $svgH = $(window).height();
        $('#hive').css({'width':$svgW,'height':$svgH});
    }}*/)
   .staggerFrom('#hive', 1, {drawSVG:0}, .1)
   .to('#beeIcon',0.5, {opacity:1,visibility:'visible'},1.5)
   .to('#iconFruit', 1, {opacity:1,visibility:'visible'},1.8)
   .to('.endangeredSpecies q', 1, {opacity:1,visibility:'visible'},2);
    
    var iconDrawerTween = new ScrollMagic.Scene({
            triggerElement: "#hive",
            triggerHook: .6,
        })
        .setTween(iconDrawer)
         .addTo(controller);


   

    // var section8IconDrawerScene = new ScrollMagic.Scene({
    //         triggerElement: "#hive",
    //         triggerHook: 0.6,
    //     })
    //     .setTween(section8IconDrawer)
    //     .addTo(controller);
// }

// function scrollmagic($ele) {
//     controller = new ScrollMagic();
    
//     $($ele).each(function (index, elem) {
//         console.log($(this));
//         var tween = TweenMax.to(elem, 0.5,
//                                {scale: 1.02, backgroundColor: 'rgb(255, 39, 46)' }
//                     );
//        new ScrollMagic.Scene({
//                 duration: 200,
//                 triggerElement: elem,
//                 triggerHook: "onCenter",
//             })
//             .setTween(tween)
//             .addTo(controller)
//             .addIndicators();
//     });
// }
// scrollmagic('#section7');
// $(window).load(function(){ // On load
// $('.swiper-container').css({'height':($(window).height()*1.12)+'px','display':'block'});
// });

function pinNav(){
    // init ScrollMagic Controller
var controller = new ScrollMagic.Controller();
// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#nav", // point of execution
   duration: $('#viewport').height(), // pin element for the window height - 1
  // triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#nav")// the element we want to pin
.setClassToggle("#nav", "fixed")
.addTo(controller);
}

// function hoverArrow2(){
// var button = $('.bee_desc_item .item');
// var tl = new TimelineMax();

// button.on({mouseenter:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow');
// tl.to(line, 0.3, {"height": "3px", opacity:1, visibility:'visible'}, .1);
// tl.to(arrow, 0.3, {opacity:1, visibility:'visible'}, .1);
// },
// mouseleave:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow');
// tl.to(line, 0.3, {"height": "1px"}, .1);
// tl.to(arrow, 0.3, {opacity:0, visibility:'hidden'}, .1);
// },
// mouseover:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow');
// tl.to(line, 0.3, {"height": "1px"}, .1);
// tl.to(arrow, 0.3, {opacity:0, visibility:'hidden'}, .1);
// }, mouseout:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow');
// tl.to(line, 0.3, {"height": "1px"}, .1);
// tl.to(arrow, 0.3, {opacity:0, visibility:'hidden'}, .1);
// }})}

// function hoverArrow1(){
// var button = $('.shapeFeat');
// var hover = new TimelineMax();
// button.on({mouseenter:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow'), text=$(this).find('p');
// hover.to(line, 0.3, {"height": "3px", opacity:1, visibility:'visible'}, .1);
// hover.to(arrow, 0.3, {opacity:1, visibility:'visible'}, .1);
// hover.to(text, 0.3, {opacity:1, visibility:'visible'}, .1);
// },mouseleave:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow'), text=$(this).find('p');;
// hover.to(line, 0.3, {"height": "1px"}, .1);
// hover.to(arrow, 0.3, {opacity:0, visibility:'hidden'}, .1);
// hover.to(text, 0.3, {opacity:0, visibility:'hidden'}, .1);
// }, mouseout:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow'), text=$(this).find('p');;
// hover.to(line, 0.3, {"height": "1px"}, .1);
// hover.to(arrow, 0.3, {opacity:0, visibility:'hidden'}, .1);
// hover.to(text, 0.3, {opacity:0, visibility:'hidden'}, .1);
// }, mouseover:function(){
// var line = $(this).find('.line'), arrow = $(this).find('.underArrow'), text=$(this).find('p');
// hover.to(line, 0.3, {"height": "3px", opacity:1, visibility:'visible'}, .1);
// hover.to(arrow, 0.3, {opacity:1, visibility:'visible'}, .1);
// hover.to(text, 0.3, {opacity:1, visibility:'visible'}, .1);
// }})}

// Init controller
var ncontroller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});


// /*
// object to hold href values of links inside our nav with
// the class '.anchor-nav'

scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}

var scenes = {
  'scene1': {
    'section2': 'sec1'
  },
  'scene2': {
    'section4': 'sec2'
  },
  'scene3': {
    'section6': 'sec3'
  },
  'scene4': {
    'section8': 'sec4'
  }
}

for(var key in scenes) {
  // skip loop if the property is from prototype
  if (!scenes.hasOwnProperty(key)) continue;

  var obj = scenes[key];

  for (var prop in obj) {
    // skip loop if the property is from prototype
    if(!obj.hasOwnProperty(prop)) continue;

    new ScrollMagic.Scene({ triggerElement: '#' + prop })
        .setClassToggle('#' + obj[prop], 'active')
        .addTo(ncontroller);
  }
}


// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});

// Bind scroll to anchor links using jQuery

$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");
  console.log(id);
  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
     ncontroller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});



function init(){
    heroResize();
    heroSlideShow(); 
    sec1_sw_swiper();
    sec1_interview_swiper_thumb();
    // sec1_MapAnime();
    //sec4_AnimeTin();
    sec6_FoodSlider();
    sec4_qa();
    // accordianSlider();
    // sec2_almondsdrop();\
    // drawIcon('.specItem path', .1, .1);
    // drawIcon('#hive path', .5, .1);
    pinNav();
    initPlayers();
   
}

init();

});


