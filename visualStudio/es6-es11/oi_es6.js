// Object Initializer
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
https: {
  const local = {
    name: "Seoul",
    weather: "sunny",
    temper: 28,
  };

  console.log(local);

  const name = "Busan";
  const weather = "cloud";
  const temper = 32;

  const local_1 = { name, weather, temper };
  console.log("local_1: " + local_1);

  const local2 = {
    a: name,
    b: weather,
    c: temper,
  };

  console.log("local2: " + local2);

  const local3 = { name, weather, temper };

  console.log("local3: " + local3.name);
}
