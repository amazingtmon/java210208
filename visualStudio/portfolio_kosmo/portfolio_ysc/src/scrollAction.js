const navbar = document.querySelector('.navbar');
const scrolly = window.scrollY;

function scrollAction() {
  console.log('scrolled');
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.classList.add('nav_opacity');
  } else if (window.scrollY === 0) {
    navbar.classList.remove('nav_opacity');
  }
}

function mouseOverAction() {
  console.log('mouse on');
  console.log(window);
  navbar.classList.remove('nav_opacity');
}

function mouseLeaveAction() {
  console.log('mouse leave');
  if (window.scrollY === 0) {
    return;
  } else if (window.scrollY > 0){
    navbar.classList.add('nav_opacity');
  }
}

function init() {
  window.addEventListener('scroll', scrollAction);
  navbar.addEventListener('mouseover', mouseOverAction);
  navbar.addEventListener('mouseleave', mouseLeaveAction);
}

init();