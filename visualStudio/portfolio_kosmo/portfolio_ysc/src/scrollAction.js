const navbar = document.querySelector('.navbar');
const start_pageYOffset = window.pageYOffset;
const about_bgtitle = document.querySelector('.about__background__title');

export default class Navbar {
  constructor(){
    this.navbar = document.querySelector('.navbar');
  }
  
  navbarAction() {
    let current_value = window.pageYOffset;
    let moved_value = start_pageYOffset;
    //console.log('start '+start_pageYOffset);
    //console.log('current '+current_value);
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
  
  bgTitleAction(){
    const about__section = document.querySelector('.about__section');
    const career__section = document.querySelector('.career__section');
    const about_bgtitle = document.querySelector('.about__background__title');
    let sectionTop = about__section.getBoundingClientRect().top;
    let sectionTop2 = career__section.getBoundingClientRect().top;
    console.dir(about__section);
    console.log(window.pageYOffset);
    console.log('section top: '+sectionTop);
    console.log('section bottom: '+about__section.getBoundingClientRect().bottom);
    console.log('about_sec cord: '+Math.round(window.pageYOffset + sectionTop));
    console.log('career_sec cord: '+Math.round(window.pageYOffset + sectionTop2));
    console.log('chng cord: '+Math.round(window.pageYOffset - sectionTop));
    if(Math.round(window.pageYOffset - sectionTop) > 0){
      console.log('add classList');
      about_bgtitle.classList.add('bgtitle_transition_LtoR');
    } else {
      about_bgtitle.classList.remove('bgtitle_transition_LtoR');
    }

  }
  
  init() {
    window.addEventListener('scroll', this.navbarAction);
    window.addEventListener('scroll', this.bgTitleAction);
    navbar.addEventListener('mouseover', this.mouseOverAction);
    navbar.addEventListener('mouseleave', this.mouseLeaveAction);
  }
  
  //init();
}