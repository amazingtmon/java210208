<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%
	List<Map<String,Object>> boardDetail = null;
	boardDetail = (List<Map<String,Object>>)request.getAttribute("boardDetail");
	int size = 0;
	String bm_email = null;
	String bm_file = null;
	String bm_title = null;
	String bm_writer = null;
	String bm_content = null;
	String bm_pwd = null;
	String bm_no = null;
	String bm_group = null;
	String bm_pos = null;
	String bm_step = null;
	if(boardDetail != null){
		size = boardDetail.size();
		bm_email = boardDetail.get(0).get("BM_EMAIL").toString();
		bm_file = boardDetail.get(0).get("BS_FILE").toString();
		bm_title = boardDetail.get(0).get("BM_TITLE").toString();
		bm_writer = boardDetail.get(0).get("BM_WRITER").toString();
		bm_content = boardDetail.get(0).get("BM_CONTENT").toString();
		bm_pwd = boardDetail.get(0).get("BM_PW").toString();
		bm_no = boardDetail.get(0).get("BM_NO").toString();
		bm_group = boardDetail.get(0).get("BM_GROUP").toString();
		bm_pos = boardDetail.get(0).get("BM_POS").toString();
		bm_step = boardDetail.get(0).get("BM_STEP").toString();
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Read.jsp - [WEBCONTENT]</title>
<link rel="stylesheet" type="text/css" href="../easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="../easyui/themes/icon.css">
<script type="text/javascript" src="../easyui/jquery.min.js"></script>
<script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script>
</head>
<body>
	read.jsp in WEBCONTENT
	<table align="center" id="p" class="easyui-panel" title="글상세보기"
		data-options="footer:'#tb_read'"
		style="width: 670px; height: 380px; padding: 10px; background: #fafafa;">
		<tr>
			<td>제목</td>
			<td><input id="bm_title" value="<%=bm_title%>" name="bm_title"
				data-options="width:'450px'" class="easyui-textbox"></td>
		</tr>
		<tr>
			<td>작성자</td>
			<td><input id="bm_writer" value="<%=bm_writer%>"
				name="bm_writer" class="easyui-textbox"></td>
		</tr>
		<tr>
			<td>이메일</td>
			<td><input id="bm_email" value="<%=bm_email%>" name="bm_email"
				class="easyui-textbox"></td>
		</tr>
		<tr>
			<td>내용</td>
			<td><input id="bm_content" value="<%=bm_content%>"
				name="bm_content"
				data-options="multiline:'true', width:'570px', height:'90px'"
				class="easyui-textbox"></td>
		</tr>
		<tr>
			<td>비밀번호</td>
			<td><input id="bm_pw" value="<%=bm_pwd%>" name="bm_pw"
				class="easyui-passwordbox"></td>
		</tr>
	</table>
	<div id="tb_read" style="padding: 2px 5px;" align="center">
		<a  href="javascript:repleForm()" class="easyui-linkbutton"
			iconCls="icon-edit" plain="true">댓글쓰기</a> 
		<a	href="javascript:updateForm()" class="easyui-linkbutton"
			iconCls="icon-add" plain="true">수정</a> 
		<a	href="javascript:boardDelView()" class="easyui-linkbutton"
			iconCls="icon-remove" plain="true">삭제</a> 
		<a	href="javascript:boardList()" class="easyui-linkbutton"
			iconCls="icon-search" plain="true">목록</a>
	</div>

</body>
</html>