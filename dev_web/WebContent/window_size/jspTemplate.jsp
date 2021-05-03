<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%//스크립틀릿.
	//자바구역
	//확장자가 jsp이면 html과 java 코드가 공존할 수 있다.
	//이것을 스크립틀릿이라고 한다.
	String i ="hi"; //초기화 시킴. 스크립틀릿 안에 속하면 지역변수이다.
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
	'use strict';
	/*
	js 와 java가 같이 쓰일경우엔 static이다.
	*/
	let i = 'i : <%=i%> [[ i ]] </br>';
	document.write(i);
</script>
</head>
<body>
<!-- 주석 : ctrl + shift + slash -->
<!-- html 구역 -->
<script>
	'use strict';
	let j = 'j : <%=i%> [[ j ]] </br>';
	document.write(j);
</script>
여기는 <p>html</p> 입니다.
</body>
</html>