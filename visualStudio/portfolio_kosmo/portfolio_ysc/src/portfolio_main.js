import FadeEffect from './FadeEffect.js';
import Nav from './navbar.js';

const fade = new FadeEffect();
const navBar = new Nav();

new fullpage('.fullpage', {
	//options here
  anchors: ['homePage','aboutPage', 'skillPage','workPage'],
	autoScrolling:true,
  navigation: true,
  navigationTooltips: ['homePage','aboutPage', 'skillPage','workPage'],
  showActiveTooltip: true,
  

  /*call back function*/

  //afterLoad = 구역을 불러오고 나서 스크롤이 끝나면 콜백이 실행.
  afterLoad: function(origin, destination, direction){
		let loadedSection = this;

		//색인 사용
    if (destination.anchor) {
      console.log(destination);
      console.log('page: ' + destination.anchor);
      fade.show(destination.anchor);
		}
    else if(direction === 'down'){
      console.log('after: scroll down');
    }
	},

  //onLeave = 해당구역을 벗어날때 콜백이 실행.
  onLeave: function(origin, destination, direction){
		let leavingSection = this;

    if(direction){
      if(direction === 'down'){
        console.log('down');
        console.log(this);
        //navBar.hide();
      } else if(direction === 'up'){
        console.log('up');
      }
      
    }
	},

  afterSlideLoad: function (section, origin, destination, direction) {
    let loadedSlide = this;

    //두번째 구역의 첫번째 슬라이드
    if (section.anchor === 'skillPage' && destination.anchor === 'slide2') {
      console.log(section);
      console.log(destination);
      fade.show(destination.anchor);
    }
  }
});

function init(){
  //other methods
  //methods
  fullpage_api.setAllowScrolling(true);
  fullpage_api.setKeyboardScrolling(true);
  fullpage_api.setScrollingSpeed(500);

}

init();