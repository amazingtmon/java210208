<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
        <script>
            function search() {
                $('#dg_datagrid').datagrid({
                    url: 'jsonGetBoardList.sp4',
                });
            }
            function ins() {
                console.log("입력창 호출");
                $('#dlg_ins').dialog('open')
            }
        </script>
    </head>

    <body>
        <table id="dg_datagrid" class="easyui-datagrid" data-options="title:'게시판 ', toolbar:'#tb_board'">
            <thead>
                <tr>
                    <th data-options="field:'BM_EMAIL'">email</th>
                    <th data-options="field:'BM_STEP'">step</th>
                    <th data-options="field:'BM_PW'">pw</th>
                    <th data-options="field:'BM_NO'">no</th>
                    <th data-options="field:'BM_CONTENT'">content</th>
                    <th data-options="field:'BM_GROUP'">group</th>
                    <th data-options="field:'BM_HIT'">hit</th>
                    <th data-options="field:'BM_DATE'">date</th>
                    <th data-options="field:'BM_POS'">pos</th>
                    <th data-options="field:'BM_WRITER'">writer</th>
                    <th data-options="field:'BM_PW'">pw</th>
                    <th data-options="field:'BM_TITLE'">title</th>
                </tr>
            </thead>
            <div id="tb_board" style="padding:2px 5px;">
                <a href="javascript: search()" class="easyui-linkbutton" text="조회" iconCls="icon-search"
                    plain="true"></a>
                <a href="#" class="easyui-linkbutton" text="입력" iconCls="icon-add" plain="true"></a>
                <a href="#" class="easyui-linkbutton" text="수정" iconCls="icon-edit" plain="true"></a>
                <a href="#" class="easyui-linkbutton" text="삭제" iconCls="icon-cancel" plain="true"></a>
            </div>

        </table>
        <!-- 글쓰기 화면 시작 -->
        <div id="dlg_ins" class="easyui-dialog" title="My Dialog" style="width: 400px; height: 200px;"
            data-options="iconCls:'icon-save',resizable:true,modal:true">
            Dialog Content.
        </div>
        <!-- 글쓰기 화면 끝 -->
    </body>

    </html>