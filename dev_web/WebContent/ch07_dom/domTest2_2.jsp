<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>dom조작 실습 - 2_2</title>
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.easyui.min.js"></script>
<style>
	.high-light{
		background-color: yellow;
	}
</style>
</head>
<body>

<script>
	'use strict'
	$.noConflict();
	const J = jQuery;
	J(document).ready(function(){
		J('h1').removeClass('high-light');
	});
</script>
<h1>item - 0</h1>
<h1 class="high-light">item - 1</h1>
<h1>item - 2</h1>
<h1 class="high-light">item - 3</h1>
<h1>item - 4</h1>
</body>
</html>