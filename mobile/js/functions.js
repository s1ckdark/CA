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
 $(".lazy").lazyload({
    threshold : 300,        //뷰포트에 보이기 300px 전에 미리 로딩
    effect : "fadeIn"       //효과
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

        TweenMax.set($slides.filter(":gt(0)"), {autoAlpha:0}); //we hide all images after the first one
        TweenMax.delayedCall(stayTime, nextSlide);             //start the slideshow

        function nextSlide(){                   
                TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );     //fade out the old slide
                currentSlide = ++currentSlide % $slides.length;                         //find out which is the next slide          
                TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );     //fade in the next slide
                TweenMax.delayedCall(stayTime, nextSlide);                             //wait a couple of seconds before next slide
        }
    }

   //  $('#leafVideo').fnSetVideo({
   //      'ovpUrl': 'http://v.ovp.joins.com/0hPnlogB',
   //      'ovpRo': 1, // 1 = 16:9, 2 = 1:1
   //      'ctrls': false,
   //      'loop': false,
   //      'preload': true,
   //      'poster': '/project/almond/mobile/img/leafVideo.jpg',
   //       'auto':true
   //  });  // leaf
   //  $('#beeVideo').fnSetVideo({
   //      'ovpUrl': 'http://v.ovp.joins.com/mvGclogX',
   //      'ovpRo': 1, // 1 = 16:9, 2 = 1:1
   //  'ctrls': false,
   //      'loop': false,
   // 'preload': true,
   //      'poster': '/project/almond/mobile/img/beeVideo.jpg',
   //      'auto':true
   //  }); //bee
   //  $('#almondVideo').fnSetVideo({
   //      'ovpUrl': 'http://v.ovp.joins.com/rjDCloiN',
   //      'ovpRo': 1, // 1 = 16:9, 2 = 1:1
   //      'ctrls': false,
   //      'loop': false,
   //   'preload': true,
   //      'poster': '/project/almond/mobile/img/almondVideo.jpg',
   //      'auto':true
   //  }); //almond
        $('#chefVideo').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/38Ivlop7',
        'ovpRo': 2, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': false,
        'poster': '/project/almond/mobile/img/chefVideo.jpg'  
    }); // chef

function pause() {
    if (!element) return;
    // element.pause();
    element.autoplay = false;
}

/* slider with Scrollmagic */
function swSlider(){
  var swiper = new Swiper('.sw-swiper', {
    preloadImages: false,
    lazyLoading: true,
    pagination: '.sw-pagination',
    loop:true,
    abCursor: true,
    paginationClickable: true
  });
}

function interviewSlider(){
  var interviewTop = new Swiper('.interview-top', {
    preloadImages: false,
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    paginationClickable: true,
    pagination: '.cos-pagination',
    abCursor: true
  });
}

function shapeSlider(){
  var shpaeSlider = new Swiper('.shapeSlider', {
    nextButton: '.shape-next',
    prevButton: '.shape-prev',
    loop:true,
    preloadImages: false,
    grabCursor: true,
    paginationClickable: true,
    keyboardControl: true,
    autoplayDisableOnInteraction:false,
    paginationClickable: true
  });
}

function magicSlider(){
  var $slide = $('.swiper-container');
  $slide.forEach(function ($slide, $index){
    console.log($slide);
  // var slideScene = new ScrollMagic.Scene({
  //   triggerElement: $slide[$index],
  //   triggerHook: 0.6 })
  //   .on("enter leave", function (e) {
  //       console.log($elm[index]);
  //       //TweenMax.to($elm, 0.2, {opacity: e.type === "enter" ? 1 : 0});
  //   })
  // .setTween(animeTinTween)
  // .addTo(controller); 

  })

}

/* slider end */
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
   abCursor: true,
    paginationClickable: true,
    onSlideChangeStart: function(swiper){
    var $sai = swiper.realIndex;
       if($sai == '0' || $sai == '1' || $sai == '2'){
        TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
        TweenMax.to('#healthy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    } else if($sai == '3' || $sai == '4' || $sai == '5'){
          TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#easy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    } else if($sai == '6' || $sai == '7' || $sai == '8'){
          TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#tasty', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    } else if($sai == '9' || $sai == '10' || $sai == '11'){
          TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#unique', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    }
}
    });
    $('#healthy').click(function(){ foodSlider.slideTo(1, 1000, false);TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
        TweenMax.to('#healthy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});
    });
    $('#tasty').click(function(){ foodSlider.slideTo(7, 1000, false);    TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#tasty', 1, {backgroundColor:'#a54331',ease:Power3.easeOut})});
    $('#easy').click(function(){ foodSlider.slideTo(4, 1000, false);         TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#easy', 1, {backgroundColor:'#a54331',ease:Power3.easeOut})});
    $('#unique').click(function(){ foodSlider.slideTo(10, 1000, false);  TweenMax.to('.foodIndicator div', 1, {backgroundColor:'#782e28',ease:Power3.easeOut});
          TweenMax.to('#unique', 1, {backgroundColor:'#a54331',ease:Power3.easeOut});});



function drawIcon($path, $dur, $start){
    TweenMax.staggerFrom($path, $dur, {drawSVG:0}, $start);
}
var mapAnime = $('.mapAnime');

TweenMax.set('.mapAnimation div', {opacity:0, visibility:'hidden'});
TweenMax.set(mapAnime[0], {opacity:1, visibility:'visible'});

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
          $('.chefVideo').parent().click(function () {
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
    var $tinHeight = $('.animeTin').height();
    // TweenMax.set('#bg_section2', {height:$tinHeight});
    TweenMax.set('.animeTin', {opacity:0, visibility:'hidden'});
    var animeTinTween = new TimelineMax()
        .to('#animeTin1', 1, {visibility:'visible',opacity:1}, 1) 
        .to('#animeTin1', .1, {visibility:'hidden', opacity:0}, 2.5)
        .to('#animeTin2', 1, {visibility:'visible',opacity:1}, 2) 
        .to('#animeTin2', .1, {visibility:'hidden', opacity:0}, 3.5)
        .to('#animeTin3', 1, {visibility:'visible',opacity:1}, 3) 
        .to('#animeTin3', .1, {visibility:'hidden', opacity:0}, 4.5)
        .to('#animeTin4', 1, {visibility:'visible',opacity:1}, 4)
        .to('#animeTin4', .1, {visibility:'hidden', opacity:0}, 5.5)
        .to('#animeTin5', 1, {visibility:'visible',opacity:1}, 5)
        .to('#animeTin5', .1, {visibility:'hidden', opacity:0}, 6.5)
        .to('#animeTin6', 1, {visibility:'visible',opacity:1}, 6)
        .to('#innerBox', 1, {visibility:'visible',opacity:1}, 7);
        var tinScene = new ScrollMagic.Scene({
            triggerElement: '.animeTin',
            triggerHook: 0.6 })
        .setTween(animeTinTween)
        .addTo(controller); 
    /* 480x420 */
    
    var $mapWidth = $(window).width(), $mapHeight = $mapWidth*21/24, $textBox = $('#mapFrame17').height();
    var $calcText = $mapHeight - $textBox; 
    var maptween = new TimelineMax({onStart:function(){
        TweenMax.set('#map',{height:$mapHeight,width:$mapWidth});     
        TweenMax.set('.mapAnime',{height:$mapHeight,width:$mapWidth});     
        TweenMax.set('#mapFrame17',{height:$textBox,width:$mapWidth});     
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
    

    TweenMax.set('.valueOfBee', {opacity:0,visibility:'hidden',y:30});
    TweenMax.set('#beeIcon', {opacity:0,visibility:'hidden',y:30});
    TweenMax.set('#iconFruit1', {opacity:0,visibility:'hidden'});
    TweenMax.set('#iconFruit2', {opacity:0,visibility:'hidden'});
    TweenMax.set('.endangeredSpecies q', {opacity:0,visibility:'hidden'});
    var iconDrawer = new TimelineMax(/*{onStart:function(){
        var $svgW = $(window).width(), $svgH = $(window).height();
        $('#hive').css({'width':$svgW,'height':$svgH});
    }}*/)
   .staggerFrom('#hive', 2, {drawSVG:0}, .1)
   .to('.valueOfBee',1, {opacity:1,visibility:'visible',y:-10},1.5)
   .to('#beeIcon',1, {opacity:1,visibility:'visible',y:-10},2)
   // .fromTo('#iconFruit', 2, {scale:.5,repeat:-1,opacity:.2, visibility:'visible'},{scale:1,repeat:-1,opacity:1, visibility:'visible'}, 2.5)
   .to('#iconFruit1', 2, {scale:1,opacity:1, visibility:'visible'}, 3.5)
   .to('#iconFruit2', 2, {scale:1,opacity:1, visibility:'visible'}, 3.5)
   .to('.endangeredSpecies q', 2, {opacity:1,visibility:'visible'},2);
    
    var iconDrawerTween = new ScrollMagic.Scene({
            triggerElement: "#hive",
            triggerHook: .6,
        })
        .setTween(iconDrawer)
         .addTo(controller);


   
   


var fixedNav = new TimelineMax()
.to('#nav', 1, {y: 50});
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#nav", // point of execution
   duration: $('#nav').offset(), // pin element for the window height - 1
   triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#nav")// the element we want to pin
.setTween(fixedNav)
.addTo(controller);

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
    shapeSlider();
    swSlider();
    interviewSlider();
}
init();

}); <!-- end -->


