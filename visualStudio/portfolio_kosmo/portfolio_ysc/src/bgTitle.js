'use strict';
import Nav from './navbar.js';

const navbar = new Nav();

export default class BgTitle {
  constructor (){
    this.about_bgtitle = document.querySelector('.about__background__title');
    this.home_bgtitle = document.querySelector('.home__background__title');
    this.skill_bgtitle = document.querySelector('.skill__background__title');
    this.work_bgtitle = document.querySelector('.work__background__title');
  }
  
  show(anchor) {
    console.log('<show>');
    console.log(anchor);
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.add('fadein-ani');
    }
    else if(anchor === 'aboutPage'){
      this.about_bgtitle.classList.add('fadein-ani');
    }
    else if(anchor === 'skillPage'){
      this.skill_bgtitle.classList.add('fadein-ani');
    }
    else if(anchor === 'workPage'){
      this.work_bgtitle.classList.add('fadein-ani');
    }
  }

  hide(anchor){
    console.log('<hide>');
    console.log(anchor);
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.remove('fadein-ani');
    }
    else if(anchor === 'aboutPage'){
      this.about_bgtitle.classList.remove('fadein-ani');
    }
    else if(anchor === 'skillPage'){
      this.skill_bgtitle.classList.remove('fadein-ani');
    }
    else if(anchor === 'workPage'){
      this.work_bgtitle.classList.remove('fadein-ani');
    }
  }
}