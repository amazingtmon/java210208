<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.*" %>
<%
	List<Map<String,Object>> boardList = null;
	boardList = (List<Map<String,Object>>)request.getAttribute("boardList");
	int size = 0;
	if(boardList != null){
		size = boardList.size();
		out.print("List size: "+boardList.size());
	}
%>    
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Board - [WEB-INF]</title>
        <%-- <jsp:include page="../../../common/commonUIglobal.jsp" flush="false" /> --%>
        <link rel="stylesheet" type="text/css" href="../easyui/themes/default/easyui.css">
        <link rel="stylesheet" type="text/css" href="../easyui/themes/icon.css">
        <script type="text/javascript" src="../easyui/jquery.min.js"></script>
        <script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script>
        <script type="text/javascript">
            function search() {
                $('#dg_datagrid').datagrid({
                    url: 'jsonGetBoardList.sp4',
                });
            }
            
            function ins() {
                console.log("입력창 호출");
                $('#dlg_ins').dialog('open')
            }
           
            function boardSel(){
            	console.log("boardSel!!");
                $('#dg_datagrid').datagrid({
                    url: 'jsonGetBoardList.sp4',
                    onLoadSuccess: function(){
                    	alert('조회호출 성공!!');
                    },
                });
            }
            
 			function selected(){
 				$('#dg_datagrid').datagrid({
 					onClickRow: function(index,row){
 						console.log(`${index} : ${row}`);
 						$(this).datagrid('beginEdit', index);
 						var ed = $(this).datagrid('getEditor', {index:index,field:field});
 						$(ed.target).focus();
 					},
 				});
 			}          
            
            document.write("<% out.print("In script: "+size); %>");
            
        </script>
    </head>

    <body>
        <script type="text/javascript">
            $(document).ready(function(){
            	$('#dg_datagrid').datagrid({
					onClickRow: function(index,row){
						console.log(index+', '
								+row["BM_NO"]+', '
								+row["BM_WRITER"]);
						console.log('clicked row');
					},
                    //url: 'jsonGetBoardList.sp4',
                    /* columns:[[
                    	{field:'BM_NO', title:'no', width:50, align:'center'}.
                    ]] */
                });
                $('#btn_sel').bind('click', function(){
                    alert('search');
                    boardSel();
                });
                $('#btn_ins').bind('click', function(){
                    alert('insert');
                    boardIns();
                });
                $('#btn_upd').bind('click', function(){
                    alert('upd');
                    boardUpd();
                });
                $('#btn_del').bind('click', function(){
                    alert('del');
                    boardDel();
                });
            });
        </script>    
        <table id="dg_datagrid" class="easyui-datagrid" data-options="title:'게시판 ', toolbar:'#tb_board'" 
        		style="width: 800px">
            <thead>
                <tr>
                    <th data-options="field:'BM_NO'" style="width: 50px" align="center">no</th>
                    <th data-options="field:'BM_WRITER'" style="width: 100px">writer</th>
                    <th data-options="field:'BM_TITLE'" style="width: 100px">title</th>
                    <th data-options="field:'BM_CONTENT'" style="width: 300px">content</th>
                    <th data-options="field:'BM_DATE'" style="width: 100px">date</th>
                    <th data-options="field:'BM_STEP'" style="width: 50px">step</th>
                    <th data-options="field:'BM_HIT'" style="width: 50px">hit</th>
                </tr>
            </thead>
            <tbody>
<%
// 조회 결과가 없을시
if(size == 0){
%> 
			    <tr>
			    	<th colspan="7">조회결과가 없습니다.</th>
			    </tr>         
<%
}
//조회 결과가 있을 때.
else {
	for(int i=0; i<size; i++){
		Map<String,Object> rmap = boardList.get(i);
		out.print(rmap.get("BM_NO"));
		if(i==size) break;
%>
			    <tr>
			    	<th><%=rmap.get("BM_NO")%></th>
			    	<th><%=rmap.get("BM_WRITER")%></th>
			    	<th><%=rmap.get("BM_TITLE")%></th>
			    	<th><%=rmap.get("BM_CONTENT")%></th>
			    	<th><%=rmap.get("BM_DATE")%></th>
			    	<th><%=rmap.get("BM_STEP")%></th>
			    	<th><%=rmap.get("BM_HIT")%></th>
			    </tr> 

<%
	}
}
	%> 
                <tr>
                    <th data-options="field:'BM_NO'" style="width: 50px" align="center">no</th>
                    <th data-options="field:'BM_WRITER'" style="width: 100px">writer</th>
                    <th data-options="field:'BM_TITLE'" style="width: 100px">title</th>
                    <th data-options="field:'BM_CONTENT'" style="width: 300px">content</th>
                    <th data-options="field:'BM_DATE'" style="width: 100px">date</th>
                    <th data-options="field:'BM_STEP'" style="width: 50px">step</th>
                    <th data-options="field:'BM_HIT'" style="width: 50px">hit</th>
                </tr>           	
            
            </tbody>
            <div id="tb_board" style="padding:2px 5px;">
                <a id="btn_sel" href="#" class="easyui-linkbutton" text="조회" iconCls="icon-search"
                    plain="true"></a>
                <a id="btn_ins" href="#" class="easyui-linkbutton" text="입력" iconCls="icon-add" plain="true"></a>
                <a id="btn_upd" href="#" class="easyui-linkbutton" text="수정" iconCls="icon-edit" plain="true"></a>
                <a id="btn_del" href="#" class="easyui-linkbutton" text="삭제" iconCls="icon-cancel" plain="true"></a>
            </div>

        </table>
    </body>
    </html>