const arr_b = document.querySelector('.arr_b');
const lang_list = document.querySelector('.lang_list');
const rotate = document.querySelector('.rotate');

//arr_b클릭하면 lang_list에 on 클라스 추가되어 Lang_list가 보이고,
//arr_b 클라스에 rotate 추가 

arr_b.addEventListener('click', function(){
  if(!lang_list.classList.contains('on')){
    lang_list.classList.add('on');
    arr_b.classList.add('rotate');
  } else{
    lang_list.classList.remove('on');
    arr_b.classList.remove('rotate');
  }
})

const header = document.querySelector('header');
const nav = document.querySelector('.header_nav');

//nav에 마우스를 올리면 header 높이가 200px, 마우스가 나가면 다시 160px
// nav.addEventListener('mouseover', function(){
//   header.style.height = '205px'; 
// })
// nav.addEventListener('mouseout', function(){
//   header.style.height = '160px';
// })

nav.onmouseover = function(){
  header.style.height = '205px'; 
}
nav.onmouseout = function(){
  header.style.height = '160px'; 
}


const navMenu01 = document.querySelector('.menu01');
const subMenu01 = document.querySelector('.sub01');
const navMenu02 = document.querySelector('.menu02');
const subMenu02 = document.querySelector('.sub02');
const navMenu03 = document.querySelector('.menu03');
const subMenu03 = document.querySelector('.sub03');
const navMenu04 = document.querySelector('.menu04');
const subMenu04 = document.querySelector('.sub04');
const navMenu05 = document.querySelector('.menu05');
const subMenu05 = document.querySelector('.sub05');

navMenu01.onmouseover = function(){
  subMenu01.classList.add('active')
}
navMenu01.onmouseout = function(){
  subMenu01.classList.remove('active')
}

navMenu02.onmouseover = function(){
  subMenu02.classList.add('active')
}
navMenu02.onmouseout = function(){
  subMenu02.classList.remove('active')
}

navMenu03.onmouseover = function(){
  subMenu03.classList.add('active')
}
navMenu03.onmouseout = function(){
  subMenu03.classList.remove('active')
}

navMenu04.onmouseover = function(){
  subMenu04.classList.add('active')
}
navMenu04.onmouseout = function(){
  subMenu04.classList.remove('active')
}

navMenu05.onmouseover = function(){
  subMenu05.classList.add('active')
}
navMenu05.onmouseout = function(){
  subMenu05.classList.remove('active')
}


