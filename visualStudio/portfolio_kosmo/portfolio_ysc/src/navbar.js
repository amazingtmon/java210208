'use strict';

export default class Nav {
  constructor (){
    this.navbar = document.querySelector('.navbar');
  }

  hide(){
    this.navbar.classList.add('nav_hide');
  }

  show(anchor){
    if(anchor === 'homePage') {
      this.navbar.classList.remove('nav_hide');
    }
  }
}