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
          let msg = prompt('naver, daum, coupang 중 사이트를 골라 입력하세요.', '');
          let url;
          switch (msg) {
            case 'naver':
              document.write('naver.com');
              url = 'naver.com';
              break;
            case 'daum':
              document.write('daum.net');
              url = 'daum.net';
              break;
            case 'coupang':
              document.write('coupang.com');
              url = 'coupang.com';
              break;
          }
          if (url) {
            location.href = 'https://'+url;
          }
        }
      </script>
    </head>

    <body>
      <script type="text/javascript">
        test();
      </script>
      <a href="www.naver.com">naver</a>
    </body>

    </html>