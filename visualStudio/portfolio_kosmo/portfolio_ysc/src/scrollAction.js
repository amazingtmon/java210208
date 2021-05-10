const navbar = document.querySelector('.navbar');
const start_pageYOffset = window.pageYOffset;

export default class Navbar {
  constructor(){
    this.navbar = document.querySelector('.navbar');
  }
  
  scrollAction() {
    let current_value = window.pageYOffset;
    let moved_value = start_pageYOffset;
    console.log('start '+start_pageYOffset);
    console.log('current '+current_value);
    console.log(window.innerHeight);
    if (window.pageYOffset > navbar.clientHeight) {
      navbar.classList.add('nav_opacity');
      navbar.classList.add('nav_hide');
    } else if (window.pageYOffset === 0) {
      navbar.classList.remove('nav_opacity');
    }
  }

  mouseOverAction() {
    console.log('mouse on');
    navbar.classList.remove('nav_opacity');
  }
  
  mouseLeaveAction() {
    console.log('mouse leave');
    if (window.pageYOffset === 0) {
      return;
    } else if (window.pageYOffset > navbar.clientHeight){
      navbar.classList.add('nav_opacity');
    }
  }
  
  init() {
    window.addEventListener('scroll', this.scrollAction);
    navbar.addEventListener('mouseover', this.mouseOverAction);
    navbar.addEventListener('mouseleave', this.mouseLeaveAction);
  }
  
  //init();
}