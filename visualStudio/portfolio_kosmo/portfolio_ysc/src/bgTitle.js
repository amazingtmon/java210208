'use strict';

export default class BgTitle {
  constructor (){
    this.about_bgtitle = document.querySelector('.about__background__title');
    this.home_bgtitle = document.querySelector('.home__background__title');
    this.career_bgtitle = document.querySelector('.career__background__title');
  }

  hide(anchor){
    console.log('anchor: '+anchor);
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.remove('home__bgtitle__trans');
    }
    else if(anchor === 'aboutPage'){
      this.about_bgtitle.classList.remove('about__bgtitle__trans');
    } else if(anchor === 'careerPage'){
      this.career_bgtitle.classList.remove('career__bgtitle__trans');
    }
  }


  show(anchor) {
    if(anchor === 'homePage'){
      this.home_bgtitle.classList.add('home__bgtitle__trans');
    }
    else if(anchor === 'aboutPage'){
      this.about_bgtitle.classList.add('about__bgtitle__trans');
    } else if(anchor === 'careerPage'){
      this.career_bgtitle.classList.add('career__bgtitle__trans');
    }
  }
}