import Navbar from './scrollAction.js';

const page_navbar = new Navbar();

  new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true
  });
  
  //methods
  fullpage_api.setAllowScrolling(false);

page_navbar.init();