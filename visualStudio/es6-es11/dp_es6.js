//Default Parameters
//developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

{
  function print(msg) {
    if (msg === undefined) {
      msg = "default message";
    }
    console.log(msg);
  }

  print("hello");
  print();
}

{
  function print(msg = "default msg") {
    console.log(msg);
  }

  print("hi");
  print();
}
