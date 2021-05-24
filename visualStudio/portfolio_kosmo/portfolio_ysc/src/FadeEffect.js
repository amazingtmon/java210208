'use strict';
import Nav from './navbar.js';

const navbar = new Nav();

export default class FadeEffect {
  constructor (){
    this.home__h1 = document.querySelector('.home__h1');
    this.home__h2 = document.querySelector('.home__h2');
    this.home__h3 = document.querySelector('.home__h3');
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
    else if(anchor === 'skillPage'){
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