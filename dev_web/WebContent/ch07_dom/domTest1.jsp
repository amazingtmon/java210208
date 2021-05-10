<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DOM조작 실습 - 1</title>
</head>
<body>
<!-- 
	ajax - xxx.sp
	fetch - xxx.sp
	react - xxx.sp
	easyui - xxx.sp, xxx.json
 -->
<script>
	window.onload = function(){
		let header = document.createElement("h1");
		let textNode = document.createTextNode("Hello DOM!!");
		header.appendChild(textNode);
		document.body.appendChild(header);
		header.style.color = "red";
	}
</script>
</body>
</html>