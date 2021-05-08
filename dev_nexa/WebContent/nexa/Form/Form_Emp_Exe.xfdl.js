(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp_exe");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
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
            obj.set_cssclass("sta_WF_emptitle");
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

            obj = new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA");
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
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","187","13","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","95","394","495",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","410","95","380","495",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","128","317","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static20","128","284","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("Department");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","9","284","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static13","128","251","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","9","111","120","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("Position");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","128","111","240","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","133","50","88","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","133","289","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","9","218","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("Gender");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","128","218","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","133","223","139","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","133","116","194","98",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","9","317","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("Annual Salary");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","133","322","123","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","133","83","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","9","251","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("Married");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","133","256","21","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","9","350","120","132",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("Memo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","128","350","240","132",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","133","355","229","122",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            this.div_detail.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Form_Emp_Exe.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
