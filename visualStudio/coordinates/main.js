const ho = document.querySelector('.horizontal');
const ver = document.querySelector('.vertical');

window.addEventListener('mousemove', (event)=>{
  console.log(`ClientX: ${event.clientX}, ClientY: ${event.clientY}`);
  const x = event.clientX;
  const y = event.clientY;
  const ho_y = ho.getBoundingClientRect().y;
  ho.style.transform = `translateY(${y}px)`;

  const ver_x = ver.getBoundingClientRect().x;
  ver.style.transform = `translateX(${x}px)`
});

window.addEventListener('click', (event)=> {
  const x = event.clientX;
  const y = event.clientY;
  console.log(x+", "+y);

  console.log(ho.getBoundingClientRect());
  ho.style.transform = `translateY(${y}px)`;

  console.log(ver.getBoundingClientRect());
  ver.style.transform = `translateX(${x}px)`

});