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

  hide(anchor){
    console.log('anchor: '+anchor);
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.remove('home__bgtitle__trans');
    }
    else if(anchor === 'aboutPage'){
      this.about_bgtitle.classList.remove('about__bgtitle__trans');
    }
    else if(anchor === 'skillPage'){
      this.skill_bgtitle.classList.remove('skill__bgtitle__trans');
    }
    else if(anchor === 'workPage'){
      this.work_bgtitle.classList.remove('work__bgtitle__trans');
    }
  }


  show(anchor) {
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.add('home__bgtitle__trans');
    }
    else if(anchor === 'aboutPage'){
      this.about_bgtitle.classList.add('about__bgtitle__trans');
    }
    else if(anchor === 'skillPage'){
      this.skill_bgtitle.classList.add('skill__bgtitle__trans');
    }
    else if(anchor === 'workPage'){
      this.work_bgtitle.classList.add('work__bgtitle__trans');
    }
  }
}