<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>dom조작 setInterval 함수 실습 - 3</title>
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.easyui.min.js"></script>
</head>
<body>
<h1 id="clock" class="clock2"></h1>
<script>
	function print(){
		//const time = '현재시각은 '+new Date().toString();
		//return time;
		return '현재시각은 '+new Date().toString();
	}

	window.onload = function(){
		const clock = document.getElementById('clock');
		const clock2 = document.querySelector('.clock2');
	
		//익명함수 처리.
		setInterval(function(){
			clock2.innerHTML = print();
		}, 1000);
	}
</script>
</body>
</html>