const title = document.querySelector('.navbar_title');
const about_left = document.querySelector('.about__left');

export default class Test {
  constructor(){
    this.about_left = document.querySelector('.about__left');
    this.name = title;
  }

  showConsole(){
    console.log(this.about_left);
    console.log(about_left);
  }

  init(){
    this.about_left.addEventListener('click', this.showConsole);
  }
  
}