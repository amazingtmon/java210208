<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ include file="/common/commonUIglobal.jsp" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script type="text/javascript">
        function test() {
          let age = prompt('당신의 나이는?');
          if (age === 20) {
            document.write('같다');
          } else {
            document.write('다르다');
          }
        }
      </script>
    </head>

    <body>
      <script type="text/javascript">
        test();
      </script>

    </body>

    </html>