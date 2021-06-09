//developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
{
  {
    const name = "";
    const userName = name || "guest";
    console.log(userName);

    const num = 0;
    const userNum = num || "undefined";
    console.log(userNum);
  }

  //문제해결
  {
    const name = "";
    const userName = name ?? "guest";
    console.log(`check this ==> ${userName}`);
  }
  {
    const num = 0;
    const userNum = num ?? "undefined";
    console.log(`check here ==> ${userNum}`);
  }
}
