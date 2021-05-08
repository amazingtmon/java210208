(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Form");
            this.set_titletext("Exe_Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83490000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">KR180</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76010000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">KR190</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">62540000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">JP110</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">99050000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">JP390</Col></Row><Row><Col id=\"FULL_NAME\">Joseph</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070304</Col><Col id=\"SALARY\">61220000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">CN300</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">63030000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR310</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88450000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR350</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">67420000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CN160</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86250000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">KR260</Col></Row><Row><Col id=\"FULL_NAME\">Aladdin</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20161003</Col><Col id=\"SALARY\">67390000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">JP140</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">6000</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"SALARY\">4000</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">8000</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">5000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Form");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("☞ Exe1");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Div("Div1","380","42","401","176",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button1","10","8","80","24",null,null,null,null,null,null,this.Div1.form);
            obj.set_taborder("0");
            obj.set_text("Save");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new Grid("Grid1","10","40","380","125",null,null,null,null,null,null,this.Div1.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autosizingtype("");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"128\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Annual Salary\"/><Cell col=\"2\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.Div1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","68","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_2","10","98","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","130","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("☞ Exe2");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","160","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","190","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static2","110","131","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","238","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ Exe3");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_1","81","262","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("nexacro");
            obj.set_positionstep("0");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_2","81","296","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("platform");
            obj.set_positionstep("0");
            obj.set_text("platform");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","262","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Param1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","296","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Param2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","80","464","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","80","501","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","80","538","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_5");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","330","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Param3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","80","330","403","124",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("Dataset3");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","54","68","297","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("폼에 생성되어 있는 오브젝트/컴포넌트 정보를 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","54","98","239","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("컴포넌트ID String 값을 오브젝트로 만들기 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","54","160","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("타이머를 이용하여 시간 표현 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","54","190","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("타이머 해제 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","126","464","332","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("모달 팝업창 오픈, 파라메터 전송. 팝업창에서 파라메터 받기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","126","501","208","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("모달리스 팝업창 오픈, 파라메터 전송. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","126","538","188","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("부모창에서 팝업창 오브젝트 접근. ");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("4_Exe_Form.xfdl", function() {
        // Exe 1-1
        this.btn_Exe1_1_onclick = function(obj,e)
        {
        	var arrObj = this.all;	//this.components;
        	for(var i=0; i<arrObj.length; i++)
        	{
        		trace(arrObj[i] + " : " + arrObj[i].name);
        	}

        //	this.fn_compList(this);
        };

        this.fn_compList = function(pObj)
        {
        	var arrObj = pObj.all;
        //	var arrObj = pObj.components;

        	for(var i=0; i<arrObj.length; i++)
        	{
        		trace(pObj.parent + " : " + pObj.valueOf() + " : " + arrObj[i] + " : " + arrObj[i].name);

        		var sType = arrObj[i].valueOf();
        		if(sType == "[object Div]"){
        			this.fn_compList(arrObj[i].form);
        		}
        		else if(sType == "[object Tab]"){
        			for(var j=0; j<arrObj[i].tabpages.length; j++){
        				//trace( arrObj[i].valueOf() + " : " + arrObj[i].tabpages[j].name);
        				this.fn_compList(arrObj[i].tabpages[j].form);
        			}
        		}
        	}
        }


        // Exe 1-2
        this.btn_Exe1_2_onclick = function(obj,e)
        {
        	var sGridID = this.Grid3.name;
        	trace(sGridID + " : " + typeof sGridID);

        	var objGrid = this.components[sGridID];
        	trace(objGrid + " : " + typeof objGrid);
        };

        this.btn_Exe2_1_onclick = function(obj,e)
        {
        //	this.fn_getTime();
        	this.setTimer(123, 1000);
        };

        this.fn_getTime = function()
        {
        	var objDate = new Date();
            var nH = objDate.getHours("h");
            var nM = objDate.getMinutes();
            var nS = objDate.getSeconds();

            var sH = (nH.toString().length < 2 ? "0" + nH.toString() : nH.toString());
            var sM = (nM.toString().length < 2 ? "0" + nM.toString() : nM.toString());
            var sS = (nS.toString().length < 2 ? "0" + nS.toString() : nS.toString());

        	this.Static2.set_text(sH + " : " + sM + " : " + sS);
        }

        this.Exe_Form_ontimer = function(obj,e)
        {
        	if(e.timerid == 123){
        		this.fn_getTime();
        	}
        };

        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	this.killTimer(123);
        };

        // Exe 3-1
        this.btn_Exe3_1_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 400
        					  , 300
        					  , null
        					  , null
        					  , "Exe::Exe_Form_Popup.xfdl");

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	objChildFrame.set_dragmovetype("all");
        //	objChildFrame.set_resizable(false);
        //	objChildFrame.set_showstatusbar(false);

        	var objParam = { param1:this.Edit3_1.value
        	               , param2:this.Edit3_2.value
        				   , param3:this.Dataset3 };

        	objChildFrame.showModal( this.getOwnerFrame()
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
        		trace("Return Value: " + strReturn);
        		var arrRtn = strReturn.split(":");
        		this.Edit3_1.set_value(arrRtn[0]);
        		this.Edit3_2.set_value(arrRtn[1]);
        	}
        };

        // Exe 3-3
        this.btn_Exe3_3_onclick = function(obj,e)
        {
        	var nW = 400;
        	var nH = 300;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;

        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "showtitlebar=true showstatusbar=false "
        	               + "resizable=true autosize=true titletext=Modeless Popup";

        	var objParam = { param1:this.Edit3_1.value
        	               , param2:this.Edit3_2.value
        				   , param3:this.Dataset3 };

        	nexacro.open("chf_popup2"
        	           , "Exe::Exe_Form_Popup.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);

        };


        this.fn_return = function(objDs)
        {
            this.Dataset3.copyData(objDs);
        	trace(objDs.saveXML());
        }

        //Exe 3-5
        this.btn_Exe3_5_onclick = function(obj,e)
        {
        	var objPopup = nexacro.getPopupFrames();
        	for(var i=0; i<objPopup.length; i++)
        	{
        		var sPopup = objPopup[i].name;
        		trace("sPopup == " + sPopup);
        	}

        	var sRtn = objPopup["chf_popup2"].form.Edit3_1.value;
        	trace("Pupup Edit3_1 Value="+sRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Exe_Form_ontimer,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
        };

        this.loadIncludeScript("4_Exe_Form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
