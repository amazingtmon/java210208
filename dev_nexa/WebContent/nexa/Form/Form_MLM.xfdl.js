(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MLM");
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
            obj = new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WFSA");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static00","10","13","81","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("Department");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"5","60","30","205",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Retrive");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"5","60","30","140",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5","60","30","75",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","60","30","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","div_search:5",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format><Format id=\"Format_Phone\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Department\"/><Cell col=\"3\" text=\"Hire Date\"/><Cell col=\"4\" text=\"Gender\"/><Cell row=\"1\" col=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"2\" text=\"Position\"/><Cell row=\"1\" col=\"3\" text=\"Salary\"/><Cell row=\"1\" col=\"4\" text=\"Married\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell row=\"1\" col=\"2\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"1\" col=\"3\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_search
                p = rootobj.div_search.form;

                p.edt_dept_cd.set_taborder("0");
                p.edt_dept_cd.move("97","13","58","24",null,null);

                p.btn_dept.set_taborder("1");
                p.btn_dept.set_text("");
                p.btn_dept.set_verticalAlign("");
                p.btn_dept.set_cssclass("btn_WF_search");
                p.btn_dept.move("159","13","24","24",null,null);

                p.edt_dept_nm.set_taborder("2");
                p.edt_dept_nm.move("187","13","124","24",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("Department");
                p.Static00.getSetter("leftbase").set("");
                p.Static00.getSetter("topbase").set("");
                p.Static00.getSetter("bottombase").set("");
                p.Static00.getSetter("rightbase").set("");
                p.Static00.getSetter("widthbase").set("");
                p.Static00.getSetter("heightbase").set("");
                p.Static00.move("10","13","81","24",null,null);
                // this.div_search }}
                p = rootobj;
                p.set_titletext("New Form");

                p.div_search.set_taborder("6");
                p.div_search.getSetter("leftbase").set("");
                p.div_search.getSetter("topbase").set("");
                p.div_search.getSetter("bottombase").set("");
                p.div_search.getSetter("rightbase").set("");
                p.div_search.getSetter("widthbase").set("");
                p.div_search.getSetter("heightbase").set("");
                p.div_search.set_cssclass("div_WFSA");
                p.div_search.move("10","40",null,"50","10",null);

                p.st_title.set_taborder("0");
                p.st_title.set_text("Employees");
                p.st_title.getSetter("leftbase").set("");
                p.st_title.getSetter("topbase").set("");
                p.st_title.getSetter("bottombase").set("");
                p.st_title.getSetter("rightbase").set("");
                p.st_title.getSetter("widthbase").set("");
                p.st_title.getSetter("heightbase").set("");
                p.st_title.set_cssclass("sta_WF_emptitle");
                p.st_title.move("10","5","193","30",null,null);

                p.btn_retrieve.set_taborder("1");
                p.btn_retrieve.set_text("Retrive");
                p.btn_retrieve.getSetter("leftbase").set("");
                p.btn_retrieve.getSetter("topbase").set("");
                p.btn_retrieve.getSetter("bottombase").set("");
                p.btn_retrieve.getSetter("rightbase").set("");
                p.btn_retrieve.getSetter("widthbase").set("");
                p.btn_retrieve.getSetter("heightbase").set("");
                p.btn_retrieve.move(null,"5","60","30","205",null);

                p.btn_add.set_taborder("2");
                p.btn_add.set_text("Add");
                p.btn_add.move(null,"5","60","30","140",null);

                p.btn_del.set_taborder("3");
                p.btn_del.set_text("Delete");
                p.btn_del.move(null,"5","60","30","75",null);

                p.btn_save.set_taborder("4");
                p.btn_save.set_text("Save");
                p.btn_save.move(null,"5","60","30","10",null);

                p.grd_list.set_taborder("5");
                p.grd_list.getSetter("leftbase").set("");
                p.grd_list.getSetter("bottombase").set("");
                p.grd_list.getSetter("widthbase").set("");
                p.grd_list.getSetter("heightbase").set("");
                p.grd_list.set_binddataset("ds_emp");
                p.grd_list.move("10","div_search:5",null,null,"10","10");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_P","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_search
                p = rootobj.div_search.form;

                p.edt_dept_cd.set_positionstep("-1");

                p.btn_dept.set_positionstep("-1");

                p.edt_dept_nm.set_positionstep("-1");

                p.Static00.set_positionstep("-1");
                // this.div_search }}
                p = rootobj;
                p.grd_list.set_formatid("Format_Phone");
                p.grd_list.set_autofittype("col");
                p.grd_list.move("10","95",null,null,"10","10");

                p.div_search.set_positionstep("-1");
                p.div_search.move("10","40",null,"50","10",null);

                p.st_title.set_positionstep("-1");

                p.btn_retrieve.set_positionstep("-1");

                p.btn_add.set_positionstep("-1");

                p.btn_del.set_positionstep("-1");

                p.btn_save.set_positionstep("-1");
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_L","Phone_screen",768,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_MLM.xfdl","Lib::Common.xjs");
        this.registerScript("Form_MLM.xfdl", function() {
        this.executeIncludeScript("Lib::Common.xjs"); /*include "Lib::Common.xjs"*/

        this.Form_onload = function(obj,e)
        {
        //	this.fn_init(obj);

        };

        this.fn_init = function(obj)
        {
        	//dept code, position code load
        	this.transaction("svcCode"
        			        ,"SvcURL::select_code.jsp"
        					,""
        					,"ds_dept=out_dept ds_pos=out_pos"
        					,""
        					,"fn_callback");

        	//Grid Sort
        	for(var i=0 ; i < this.components.length ; i++)
        	{
        		if(this.components[i] == "[object Grid]")
        		{
        			this.components[i].addEventHandler("onheadclick", this.cfn_GridSort, this);
        		}
        	}
        }

        // Search Area Dept Popup
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);

        	var objChild = new ChildFrame("popDept", "absolute", nLeft, nTop, 300, 400);
        	objChild.set_formurl("Popup::Pop_DeptSearch.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");

        };

        // Dept Popup Callback
        this.fn_callback_pop = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popDept")
        	{
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.div_search.form.edt_dept_cd.set_value(arrRtn[0]);
        			this.div_search.form.edt_dept_nm.set_value(arrRtn[1]);
        		}
        	}
        }

        // Search Area Gender
        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "A")
        	{
        		this.ds_emp.filter("");
        	}
        	else
        	{
        		this.ds_emp.filter("GENDER == '" + e.postvalue + "'");
        	}
        };

        // Search Area Reset
        this.div_cont_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_dept_cd.set_value("");
        	this.div_search.form.edt_dept_nm.set_value("");
        	this.div_search.form.rdo_gender.set_value("A");
        };

        // Retrieve Button
        this.btn_retrieve_onclick = function(obj,e)
        {
        	var sDept = this.div_search.form.edt_dept_cd.value;
        	var sParam  = "sDept=" + nexacro.wrapQuote(sDept);

        	this.transaction("svcSelect"
        				    ,"SvcURL::select_emp.jsp"
        					,""
        					,"ds_emp=out_emp"
        					,sParam
        					,"fn_callback");
        };

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", this.fn_today());
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction("svcSave"
        					,"SvcURL::save_emp.jsp"
        					,"in_emp=ds_emp:U"
        					,""
        					,""
        					,"fn_callback");
        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	if(svcID == "svcSelect"){
        		this.alert("Select Success");
        	}
        	else if(svcID == "svcSave"){
        		this.alert("Save Success");
        	}
        }



        // Today
        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        // Gender Code --> Name
        this.fn_gender = function(arg)
        {
        	if(arg == "M"){
        		return "Male";
        	}
        	else{
        		return "Female";
        	}
        }

        this.grd_list_onheadclick = function(obj,e)
        {
        //	this.cfn_GridSort(obj, e);
        };


        this.ds_emp_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 31){
        		this.setTimer(1, 20);
        	}
        };

        this.Form_Emp_ontimer = function(obj,e)
        {
        	if(e.timerid == 1){
        		this.killTimer(1);
        		this.fn_setRow(0);
        	}
        };

        this.fn_setRow = function(nRow)
        {
        	this.ds_emp.set_rowposition(nRow);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Form_MLM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
