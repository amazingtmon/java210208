<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Map, java.util.List" %>    
<%
	List<Map<String, Object>> deptList = 
		(List<Map<String, Object>>)request.getAttribute("dname");
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>부서 목록 페이지 입니다.</title>
</head>
<body>
	<h1>Here~!!!</h1>
<script type="text/javascript">
	function make(){
		console.log('make 호출'+<%=deptList%>);
	}
	
	make();
</script>
</body>
</html>