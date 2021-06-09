//제공 함수를 통한 패턴 분석1
{
  console.log("test0");
  ("use strict");
  let addNum = 0;
  let subNum = 100;

  const auto_1 = setInterval(() => {
    addNum++;
    console.log("addNum: " + addNum);
  }, 2000);

  const auto_2 = setInterval(() => {
    subNum--;
    console.log("subnum: " + subNum);
  }, 3000);
}
