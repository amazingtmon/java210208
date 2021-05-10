<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jqueryTest - css</title>
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.easyui.min.js"></script>
<style>
	.high-light{
		background-color: yellow;
	}
	
	.high-light-0{background-color: yellow;}
	.high-light-1{background-color: orange;}
	.high-light-2{background-color: blue;}
	.high-light-3{background-color: green;}
	.high-light-4{background-color: red;}
</style>
</head>
<body>

<script>
	'use strict'
	$(document).ready(function(){
		$('h1').each(function(index, item){
			$(this).addClass('high-light-'+index);
		});
	});
</script>
<h1>item - 0</h1>
<h1>item - 1</h1>
<h1>item - 2</h1>
<h1>item - 3</h1>
<h1>item - 4</h1>
</body>
</html>