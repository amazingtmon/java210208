//developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https: {
  const sonata = {
    carColor: "black",
    wheelNum: 4,
    speed: 40,
  };

  {
    const carColor = sonata.carColor;
    const speed = sonata.speed;
    const wheelNum = sonata.wheelNum;
  }

  //추천
  {
    const { carColor, speed, wheelNum } = sonata;
    console.log(carColor, speed, wheelNum);
  }

  //array - 배열에서는 대괄호 사용.
  const fruit = ["tomato", "banana"];
  const one = fruit[0];
  const two = fruit[1];

  //추천
  {
    const [one, two] = fruit;
    console.log(one, two);
  }
}
