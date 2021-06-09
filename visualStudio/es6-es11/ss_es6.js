//developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//주소의 참조값만 복사해 온다.
{
  const emp = { key: "empno" };
  const dept = { key: "deptno" };
  const array = [emp, dept];

  //array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "bm_no" }];
  emp.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  //object copy
  const otherEmp = { ...emp };
  console.log(otherEmp);

  //array concatenation
  const trasportation1 = ["🚎", "🚲"];
  const trasportation2 = ["🚗", "✈"];
  const transportation = [...trasportation1, ...trasportation2];
  console.log(transportation);

  //object merge
  const bird1 = { bird1: "🦆" };
  const bird2 = { bird2: "🦢" };
  const birds = { ...bird1, ...bird2 };
  console.log(birds);
}
