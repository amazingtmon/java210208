<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
  </head>

  <body>
    <script type="text/javascript">
      const d = new Array();
      d[0] = 30;
      d[1] = '따릉이';
      d[2] = true;

      const d2 = new Array(50, '노트북', false);
      const d3 = [70, '핸드폰', true];
      
      document.write(d+'<br>');
      document.write(d2+'<br>');
      document.write(d3+'<br>');
      
      console.log(d.toString());
      d2.push('nono');
      const red2 = d2.map((i) => i +'🎈');
      console.log(red2);

      const sen = 'what a dirty chocolate';
      const arr = Array.from(sen);
      arr.concat('🎊');
      console.log(arr);
      document.write(arr);
    </script>

  </body>

  </html>