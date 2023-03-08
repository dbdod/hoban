$(function(){
  mainInit();
  $(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
  })
})

function mainInit(){
  headerul();
  visualbanner();
  businesshover();
  businessbanner();
  summitbanner();
  landmarkbanner();
  scroll();
  familysite();
  topFixed();
}

//scroll
function scroll(){
  let $top=$('.top-fixed');
  let ty=0;

  $(window).on('scroll',function(){
    ty=$(window).scrollTop();

    $top.hide();

    if(ty>3912){
      $top.show();
    }else{
      $top.hide();
    }
    console.log(ty);
  })
}

// visual banner
function visualbanner(){
  let $bannerli=$('#visual .banner li');
  let $next=$('#visual .num .next');
  let $prev=$('#visual .num .prev');
  let $current=$('#visual .num .current');
  let $total=$('#visual .num .total');
  let $visualH2=$('#visual .banner li h2');
  let current=0,old=0,size=0,timer=null,interval=5000;
  size=$bannerli.length;

  $bannerli.first().css({left:0,opacity:0.5}).animate({opacity:1},1000);
  $total.text('0'+size);

  timer=setInterval(visual,interval);
  function visual(){
    current++;
    if(current>size-1){
      current=0;
    }
    if(current != old){
      $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);
      $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'});
      $visualH2.css({opacity:0}).animate({opacity:1},2000);
      $current.text('0'+(current+1));
      old=current;
    }
  }

  $prev.on('click',function(){
    current--;
    if(current<0){
      current=size-1;
    }
    if(current != old){
      $bannerli.eq(current).stop().css({left:'-100%'}).animate({left:0},400);
      $bannerli.eq(old).stop().css({left:0}).animate({left:'100%'},400);
      $visualH2.stop().css({opacity:0}).animate({opacity:1},2000);
      // $after.css({width:0}).animate({width:90},1000);
      $current.text('0'+(current+1));
      old=current;
    }
    clearInterval(timer);
    timer=setInterval(visual,interval);
  })

  $next.on('click',function(){
    current++;
    if(current>size-1){
      current=0;
    }
    if(current != old){
      $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);
      $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
      $visualH2.stop().css({opacity:0}).animate({opacity:1},2000);
      $current.text('0'+(current+1));
      old=current;
    }
    clearInterval(timer);
    timer=setInterval(visual,interval);
  })
  
}

//header ul
function headerul(){
  let $gnbli=$('#header nav .gnb>li');
  let $gnblia=$('#header nav .gnb>li>a');
  let $subul=$('#header nav .gnb>li ul');
  let $subli=$('#header nav .gnb>li ul li');
  let $headerBg=$('#header .bg');
  let $totalMenu=$('#header .total-menu i');
  let $header=$('#header');
  let cnt=0;

  $header.hover(function(){
    // $header.stop().animate({backgroundColor:'#fff'},400);
    $headerBg.stop().animate({height:460},400);
    $subul.stop().css({opacity:1}).slideDown(400);
    $gnblia.css({color:'#000'});
    $totalMenu.css({color:'#000'});
  })
  $header.on('mouseleave',function(){
    $header.stop().animate({backgroundColor:'transparent'},400);
    $headerBg.stop().animate({height:0},400);
    $subul.stop().css({opacity:0}).slideUp(400);
    $gnblia.css({color:'#fff'});
    $totalMenu.css({color:'#fff'});
  })
  $gnbli.hover(function(){

  })
}

// business hover
function businesshover(){
  let $bannerul=$('#container .business .center ul');
  let $bannerli=$('#container .business .center ul li');

  $bannerli.eq(0).css({width:800});

  $bannerli.hover(function(){
    $bannerli.siblings().css({width:285});
    $(this).css({width:800});
  })
}

//business banner
function businessbanner(){
  let $bannerul=$('#container .business .center ul');
  let $bannerli=$('#container .business .center ul li');
  let $prev=$('#container .business .btn-wrap .prev');
  let $next=$('#container .business .btn-wrap .next');
  let current=0,old=0,size=0;
  size=$bannerul.length;

  $bannerul.eq(0).css({left:0});
  $bannerul.eq(1).css({left:'200%'});
  $bannerul.eq(2).css({left:'200%'});
  $bannerli.eq(0).css({width:800});

  $next.on('click',function(){
    current++;
    if(current>size-1){
      current=0;
    }
    if(current!=old){
      $bannerul.eq(current).stop().css({left:'200%'}).animate({left:0},400);
      $bannerul.eq(old).stop().css({left:0}).animate({left:'-200%'},400);
      $bannerul.eq(current).children().eq(0).animate({width:800},400);
      old=current;
    }
  })

  $prev.on('click',function(){
    current--;
    if(current<0){
      current=size-1;
    }
    if(current!=old){
      $bannerul.eq(current).stop().css({left:'-200%'}).animate({left:0},400);
      $bannerul.eq(old).stop().css({left:0}).animate({left:'200%'},400);
      $bannerul.eq(current).children().eq(0).animate({width:800},400);
      old=current;
    }
  })
}

//calendar summit banner
function summitbanner(){
  let $summitul=$('#container .calendar .right .summit ul');
  let $summitli=$('#container .calendar .right .summit ul li');
  let $next=$('#container .calendar .right .summit .btn-wrap .next');
  let $prev=$('#container .calendar .right .summit .btn-wrap .prev');
  let $span=$('#container .calendar .right .summit .list span');
  let first,last,cnt=0,size=0;
  size=$summitli.length;

  // $summitul.css({marginLeft:'-=600px'});

  last=$('#container .calendar .right .summit ul li').last();
  $summitul.prepend(last);
  $summitul.css({marginLeft:'-=1640'});

  $next.on('click',function(){
    $summitul.animate({marginLeft:'-=820'},400,function(){
      cnt++;
      if(cnt>size-1){
        cnt=0;
      }
      first=$('#container .calendar .right .summit ul li').first();
      $summitul.append(first);
      $summitul.css({marginLeft:'+=820'});
      $span.removeClass('on');
      $span.eq(cnt).addClass('on');
    })
  })

  $prev.on('click',function(){
    $summitul.animate({marginLeft:'+=820'},400,function(){
      cnt--;
      if(cnt<0){
        cnt=size-1;
      }
      last=$('#container .calendar .right .summit ul li').last();
      $summitul.prepend(last);
      $summitul.css({marginLeft:'-=820'});
      $span.removeClass('on');
      $span.eq(cnt).addClass('on');
    })
  })

}

//landmark banner
function landmarkbanner(){
  let $bannerli=$('#container .landmark .landmark-ul li');
  let $liImg=$('#container .landmark .landmark-ul li a img');
  let $bannerul=$('#container .landmark .landmark-ul');
  let $next=$('#container .landmark .btn-wrap .next');
  let $prev=$('#container .landmark .btn-wrap .prev');
  let last,first,timer,interval=4000;

  last=$('#container .landmark .landmark-ul li').last();
  $bannerul.prepend(last);
  $bannerul.css({marginLeft:'-=775'});

  timer=setInterval(landmark,interval)
  function landmark(){
    $bannerul.animate({marginLeft:'-=775'},400,function(){
      first=$('#container .landmark .landmark-ul li').first();
      $bannerul.append(first);
      $bannerul.css({marginLeft:'+=775'});
    })
  }

  $next.on('click',function(){
    $bannerul.animate({marginLeft:'-=775'},400,function(){
      first=$('#container .landmark .landmark-ul li').first();
      $bannerul.append(first);
      $bannerul.css({marginLeft:'+=775'});
    })
    clearInterval(timer);
    timer=setInterval(landmark,interval);
  })

  $prev.on('click',function(){
    $bannerul.animate({marginLeft:'+=775'},400,function(){
      last=$('#container .landmark .landmark-ul li').last();
      $bannerul.prepend(last);
      $bannerul.css({marginLeft:'-=775'});
    })
    clearInterval(timer);
    timer=setInterval(landmark,interval);
  })

}

//familysite
function familysite(){
  let $plus=$('#footer .family a i');
  let $familyul=$('#footer .family ul');
  
  $familyul.css({display:'none'});
  
  $plus.on('click',function(){
    $familyul.slideToggle();
  })
}

//.top-fixed
function topFixed(){
  $('.top-fixed').on('click',function(){
    $('html,body').animate({scrollTop:0},200);
  })
}