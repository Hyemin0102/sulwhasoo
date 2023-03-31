//언어선택
const Ellang_btn = document.querySelector('.lang_btn');
const lang_list = document.querySelector('.lang_list');
const rotate = document.querySelector('.rotate');

Ellang_btn.addEventListener('click', function(){
  if(!lang_list.classList.contains('on')){
    lang_list.classList.add('on');
    Ellang_btn.classList.add('rotate');
  } else{
    lang_list.classList.remove('on');
    Ellang_btn.classList.remove('rotate');
  }
})

//헤더 스타일 변경
const header = document.querySelector('header');
const nav = document.querySelector('.header_nav');

header.onmouseover = function(){
  header.classList.add('onmouse')
}
header.onmouseout = function(){
  header.classList.remove('onmouse')
}


//헤더 높이 
nav.onmouseover = function(){
  header.style.height = '205px'; 
}
nav.onmouseout = function(){
  header.style.height = '160px'; 
}


//서브메뉴 
$('.nav_menu').mouseover(function(){
  $(this).find('.nav_sub').stop().fadeIn(300);
})
$('.nav_menu').mouseleave(function(){
  $(this).find('.nav_sub').stop().fadeOut(300);
})


//메인배너 슬라이드
const swiper = new Swiper(".slide_banner", {
  effect: "fade",
  loop: true,
  speed: 300,
  autoplay:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});



//설화수 추천 슬라이드
new Swiper(".rec_wrap", {
	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 20, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
	loopFillGroupWithBlank : true,
  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loop : true,
  autoplay: true,
  speed:500,
	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev',
	},
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

//메인 배너 슬라이드 재생, 정지
const playStopBtn = document.querySelector('.swiper-playStop');

playStopBtn.addEventListener('click',function(){
  playStopBtn.classList.toggle('stop');
  if(playStopBtn.classList.contains('stop')){
    swiper.autoplay.stop()
  } else {
    swiper.autoplay.start()
  }
})

//Top 버튼
const toTop = document.querySelector('.goTop');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    toTop.style.display = "inline-block";
  } else {
    toTop.style.display = "none";
  }
}

toTop.addEventListener('click',function(e){
  e.preventDefault();
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})




