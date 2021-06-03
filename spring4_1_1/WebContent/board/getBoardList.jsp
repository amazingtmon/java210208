<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Board - webapp</title>
<jsp:include page="../common/commonUIglobal.jsp" flush="false" />
</head>
<body>
	<table class="easyui-datagrid" data-options="title:'게시판', toolbar:'#tb_board'">
    <thead>
        <tr>
            <th data-options="field:'bm_no'">no</th>
            <th data-options="field:'bm_title'">title</th>
            <th data-options="field:'bm_writer'">writer</th>
            <th data-options="field:'bm_email'">email</th>
            <th data-options="field:'bm_content'">content</th>
            <th data-options="field:'bm_hit'">hit</th>
            <th data-options="field:'bm_date'">date</th>
            <th data-options="field:'bm_group'">group</th>
            <th data-options="field:'bm_pos'">pos</th>
            <th data-options="field:'bm_step'">step</th>
            <th data-options="field:'bm_pw'">pw</th>
        </tr>
    </thead>
    <div id="tb_board" style="padding:2px 5px;">
        <a href="#" class="easyui-linkbutton" text="조회" iconCls="icon-search" plain="true"></a>
        <a href="#" class="easyui-linkbutton" text="입력" iconCls="icon-add" plain="true"></a>
        <a href="#" class="easyui-linkbutton" text="수정" iconCls="icon-edit" plain="true"></a>
        <a href="#" class="easyui-linkbutton" text="삭제" iconCls="icon-cancel" plain="true"></a>
    </div>
		<tbody>
        <tr>
            <td>001</td><td>name1</td><td>2323</td>
        </tr>
        <tr>
            <td>002</td><td>name2</td><td>4612</td>
        </tr>
    </tbody>
</table>
</body>
</html>