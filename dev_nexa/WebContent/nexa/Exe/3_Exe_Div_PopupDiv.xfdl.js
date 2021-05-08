(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Div_PopupDiv");
            this.set_titletext("Exe_Div_PopupDiv");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Div / PopupDiv");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("☞ Exe 1 - PopupDiv1");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv1","560","5","400","210",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","40","378","121",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_Close","10","167","100","25",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("1");
            obj.set_text("Exe1_Close");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","81","24",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("2");
            obj.set_text("Contents");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","97","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","58","98","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","188","98","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","298","98","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv2","560","225","400","210",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_url("Exe::Exe_Div_PopupDiv_Sub.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","201","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept2","58","202","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name2","188","202","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id2","298","202","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","140","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("☞ Exe 2 - PopupDiv2");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","246","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("☞ Exe 3 - PopupDiv3");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","304","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","183","304","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","166","304","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","560","445","323","227",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","6","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("cal_to","165","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","99","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","169","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Static("Static03","10","62","406","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Contents로 구성된 PopupDiv1을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","9","166","407","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Linked Form으로 구성된 PopupDiv2을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","8","269","408","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("PopupDiv를 이용하여 기간 달력 기능 구현. ");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,580,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Exe::Exe_Div_PopupDiv_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("3_Exe_Div_PopupDiv.xfdl", function() {
        this.btn_Exe1_1_onclick = function(obj,e)
        {
         	var nX = 0;
         	var nY = 0;
        	this.PopupDiv1.trackPopupByComponent(this.btn_Exe1_1, nX, nY);
        };

        this.PopupDiv1_btn_Exe1_Close_onclick = function(obj,e)
        {
            var sDept = this.Dataset1.getColumn(this.Dataset1.rowposition, "DEPT_NAME");
        	var sName = this.Dataset1.getColumn(this.Dataset1.rowposition, "FULL_NAME");
        	var sID   = this.Dataset1.getColumn(this.Dataset1.rowposition, "EMPL_ID");

         	this.edt_dept.set_value(sDept);
         	this.edt_name.set_value(sName);
         	this.edt_id.set_value(sID);
        	this.PopupDiv1.closePopup();
        };

        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	var nX = parseInt(0);
        	var nY = parseInt(obj.height);
        	this.PopupDiv2.trackPopupByComponent(obj
        	                                   , nX
        									   , nY
        									   , null
        									   , null
        									   , "fn_pDivCallback");
        };

        this.fn_pDivCallback = function(objID, rtnValue)
        {
        	if(rtnValue == ""){
        		return;
        	}
        	if(objID == "PopupDiv2"){
        		this.edt_dept2.set_value(rtnValue[0]);
        		this.edt_name2.set_value(rtnValue[1]);
        		this.edt_id2.set_value(rtnValue[2]);
        	}
        };


        // Exe 3
        this.Exe_Div_PopupDiv_onload = function(obj,e)
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear()
        			   + ((objDate.getMonth() + 1) + "").padLeft(2, '0')
        			   + (objDate.getDate() + "").padLeft(2, '0');

            this.cal_from.set_value(sToday.substring(0,6) + "01");
            this.cal_to.set_value(sToday);
        };

        this.cal_from_ondropdown = function(obj,e)
        {

        };

        // Confirm Button
        this.PopupDiv3_btn_confirm_onclick = function(obj,e)
        {

        };

        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.cal_from.value > this.cal_to.value){
        		this.alert("End Date Should be later than From Date");
        		this.cal_to.set_value("");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Exe_Div_PopupDiv_onload,this);
            this.PopupDiv1.form.btn_Exe1_Close.addEventHandler("onclick",this.PopupDiv1_btn_Exe1_Close_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.PopupDiv2.addEventHandler("oncloseup",this.PopupDiv2_oncloseup,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
        };

        this.loadIncludeScript("3_Exe_Div_PopupDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
