'use strict';
import Nav from './navbar.js';

const navbar = new Nav();

export default class FadeEffect {
  constructor() {
    /*home__section*/
    this.home__h1 = document.querySelector('.home__h1');
    this.home__h2 = document.querySelector('.home__h2');
    this.home__h3 = document.querySelector('.home__h3');

    /*skill__section*/
    this.describe__main = document.querySelector('.describe__main');
    this.describe__sub = document.querySelector('.describe__sub');
    this.skill__front = document.querySelector('.skill__front');
    this.skill__back = document.querySelector('.skill__back');
    this.skill__mobile = document.querySelector('.skill__mobile');
  }
  
  show(anchor) {
    console.log('<show>');
    console.log(anchor);
    if (anchor === 'homePage') {
      console.log('home hs')
      this.home__h1.classList.add('h1__ani');
      this.home__h2.classList.add('h2__ani');
      this.home__h3.classList.add('h3__ani');
    }
    else if(anchor === 'aboutPage'){
    }
    else if (anchor === 'skillPage') {
      this.describe__main.classList.add('main__ani');
      this.describe__sub.classList.add('sub__ani');
      this.skill__front.classList.add('front_ani');
      this.skill__back.classList.add('back_ani');
      this.skill__mobile.classList.add('mobile_ani');
    }
    else if(anchor === 'workPage'){
    }
  }

  hide(anchor){
    console.log('<hide>');
    console.log(anchor);
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.remove('fadein-ani');
    }
    else if(anchor === 'aboutPage'){
    }
    else if(anchor === 'skillPage'){
    }
    else if(anchor === 'workPage'){
    }
  }
}