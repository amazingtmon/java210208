(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_parent", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"DEPT_CD\">01</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"DEPT_CD\">03</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"DEPT_CD\">01</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"DEPT_CD\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","56","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Popup");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("☞ Parameter");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_param1","97","74","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("nexacro platform");
            obj.set_text("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_param2","97","108","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("17");
            obj.set_text("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","74","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Param1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","108","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Param2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","97","142","420","98",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_parent");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:SALARY\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modal","20","290","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","142","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Param3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modal2","175","290","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Execute(transparent)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modeless","400","290","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pdiv","20","366","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","190","367","455","183",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10","433","128",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_parent");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:SALARY\" edittype=\"normal\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_close","10","147","114","24",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("return String");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_close2","134","147","114","24",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("return Object");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static04","10","266","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("☞ Modal");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","390","264","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("☞ Modeless");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","342","109","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("☞ Use PopupDiv");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

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
        this.registerScript("Form_Popup.xfdl", function() {

        this.btn_modal_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 400
        					  , 350
        					  , null
        					  , null
        					  , "Form::Form_Popup_Sub.xfdl");

        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param1:this.edt_param1.value
        	              , param2:this.edt_param2.value
        				  , param3:this.ds_parent};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        this.fn_parent = function(pObj)
        {
        	this.ds_parent.copyData(pObj);
        };

        this.btn_modal2_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup2", 0, 0, 400, 300, null, null, "Form::Form_Popup_Sub2.xfdl");
        	objChildFrame.set_dragmovetype("none");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_background("transparent");
        	objChildFrame.set_overlaycolor("RGBA(38,38,38,0.7)");

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , {}
        						  , this
        						  , "fn_popupCallback");
        };

        this.btn_modeless_onclick = function(obj,e)
        {
        	var nW = 400;
        	var nH = 400;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;

        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "dragmovetype=all"
        //				   + " openalign='center middle'"
        				   + " resizable=true"
        				   + " titletext=Modeless"
        				   + " showtitlebar=true"
        				   + " showstatusbar=false";

        	var objParam = {param1:this.edt_param1.value
        	              , param2:this.edt_param2.value
        				  , param3:this.ds_parent};

        	nexacro.open("chf_popup3"
        			   , "Form::Form_Popup_Sub.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);
        };

        this.btn_pdiv_onclick = function(obj,e)
        {
        /*
        	var objApp = nexacro.getApplication();
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(objApp.mainframe, 0);
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(objApp.mainframe, 0);

        	this.PopupDiv00.trackPopup(nX, nY, null, null, "fn_pDivCallback");
         */

        	var nX = parseInt(obj.width);
        	var nY = parseInt(obj.height);
        	this.PopupDiv00.trackPopupByComponent(obj
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
        	if(objID == "PopupDiv00")
        	{
        		this.alert("Return Value: " + rtnValue);
        	}
        };

        this.PopupDiv00_btn_close_onclick = function(obj,e)
        {
        	var sName = this.ds_parent.getColumn(this.ds_parent.rowposition, "FULL_NAME");
        	this.PopupDiv00.closePopup(sName);
        };

        this.PopupDiv00_btn_close2_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup(this.ds_parent);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_modal.addEventHandler("onclick",this.btn_modal_onclick,this);
            this.btn_modal2.addEventHandler("onclick",this.btn_modal2_onclick,this);
            this.btn_modeless.addEventHandler("onclick",this.btn_modeless_onclick,this);
            this.btn_pdiv.addEventHandler("onclick",this.btn_pdiv_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
            this.PopupDiv00.form.btn_close.addEventHandler("onclick",this.PopupDiv00_btn_close_onclick,this);
            this.PopupDiv00.form.btn_close2.addEventHandler("onclick",this.PopupDiv00_btn_close2_onclick,this);
        };

        this.loadIncludeScript("Form_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
