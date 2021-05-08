(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp_Exe2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Employees");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve","535","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Retrive");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","600","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","665","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","730","5","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","40","780","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","431","13","192","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","376","13","46","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Gender");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset","708","13","60","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("reset");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","10","13","81","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("Department");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_cd","97","13","58","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","159","13","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_verticalAlign("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","187","13","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","95","400","495",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"expr:dataset.getCaseSum(&quot;GENDER =='M'&quot; , &quot;SALARY&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\" text=\"expr:dataset.getCaseSum(&quot;GENDER =='W'&quot; , &quot;SALARY&quot;)\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","420","95","380","495",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("Department");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","9","284","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","9","111","120","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("Position");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","133","50","88","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_format("AA--###");
            obj.set_type("string");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","133","289","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","9","218","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("Gender");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","133","223","194","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            obj.set_text("남자");
            obj.set_value("M");
            obj.set_index("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","133","116","194","98",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            obj.set_multiselect("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","9","317","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("Annual Salary");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","133","322","123","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","133","83","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_displaynulltext("--선택--");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","9","251","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("Married");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","9","350","120","132",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("Memo");
            obj.set_background("");
            obj.set_padding("");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","133","355","229","122",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","191","254","129","32",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","548","358","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","CheckBox00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.Calendar00","visible","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Emp_Exe2.xfdl", function() {

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction
        	(
        		"select",
        		"http://demo.nexacro.com/edu/nexacro17/select_emp.jsp",
        		"",
        		"ds_emp=out_emp",
        		"",
        		"fn_callback"
        	);
        };
        //콜백함수
        this.fn_callback = function(sId, nErrCd, sErrMsg){
        	if(nErrCd < 0 ){
        		alert(sErrMsg);
        		return;
        	}else{
        		alert("성공!!!!");
        	}
        }

        // strSvcID, 구분하기 위한 ID
        // strURL, 서비스 호출 경로(jsp, asp, .do ..)
        // strInDatasets, 서버 기준 입력값 (i, u, d)
        //   A=B:A   :u 갱신된정보   :a 모든정보    :n
        // strOutDatasets, 클라이언트 기준 처리결과값  (select)
        //   A=B
        // strArgument,  인자값 A=B C=D
        // strCallbackFunc 콜백함수 이름
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Form_Emp_Exe2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
