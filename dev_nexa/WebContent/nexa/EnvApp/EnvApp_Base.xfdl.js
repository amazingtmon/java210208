(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EnvApp_Base");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("☞ Environment Variable");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Environment & App Information");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","150","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("☞ Environment Cookies");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("☞ App Variables");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","260","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("☞ Environment HTTP Header");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","260","65","243","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("both");
            obj.set_text("var objApp = nexacro.getApplication();\r\nobjApp.App_Var1;");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_varGet","20","66","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","265","72","292","13",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_fittocontents("both");
            obj.set_text("nexacro.getEnvironmentVariable(\"Env_Var1\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_var1","85","66","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_var2","20","94","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("nexacro platform");
            obj.set_text("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new Button("btn_varSet","195","94","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","265","100","417","13",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("both");
            obj.set_text("nexacro.setEnvironmentVariable(\"Env_Var1\", \"nexacro platform\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cookieGet","20","176","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","265","182","278","13",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_fittocontents("both");
            obj.set_text("nexacro.getCookieVariable(\"Env_Cookie1\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cookie1","85","176","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cookie2","20","204","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("nexacro platform");
            obj.set_text("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cookieSet","195","204","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","265","210","403","13",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_fittocontents("both");
            obj.set_text("nexacro.setCookieVariable(\"Env_Cookie1\", \"nexacro platform\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_httpGet","20","286","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","265","292","296","13",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_fittocontents("both");
            obj.set_text("nexacro.getHTTPHeaderVariable(\"Env_Http1\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_http1","85","286","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_http2","20","314","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("nexacro platform");
            obj.set_text("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new Button("btn_httpSet","195","314","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","265","320","421","13",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_fittocontents("both");
            obj.set_text("nexacro.setHTTPHeaderVariable(\"Env_Http1\", \"nexacro platform\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appVar","20","66","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Get");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_appVar","85","66","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","228","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("☞ App Datasets");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appDs","20","254","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Get");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ds","85","254","270","125",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_positionstep("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","365","254","243","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_fittocontents("both");
            obj.set_text("var objApp = nexacro.getApplication();\r\nobjApp.App_Dataset;");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","8","370","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("☞ Environment Script");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_envScript","20","396","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Call");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_envScript","85","396","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","265","392","253","33",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_fittocontents("both");
            obj.set_text("var objEnv = nexacro.getEnvironment();\r\nobjEnv.Env_Script();");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","10","130","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("☞ App Script - Launch Only");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","260","155","243","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_fittocontents("both");
            obj.set_text("var objApp = nexacro.getApplication();\r\nobjApp.App_Script();");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appScript","20","156","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Call");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_appScript","85","156","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Static03.set_taborder("0");
                p.Static03.set_text("☞ Environment Variable");
                p.Static03.set_cssclass("sta_WF_label");
                p.Static03.move("10","40","250","24",null,null);

                p.Static06.set_taborder("1");
                p.Static06.set_text("Environment & App Information");
                p.Static06.set_cssclass("sta_WF_subtitle");
                p.Static06.set_positionstep("-1");
                p.Static06.move("10","10","250","20",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("☞ Environment Cookies");
                p.Static01.set_cssclass("sta_WF_label");
                p.Static01.move("10","150","250","24",null,null);

                p.Static04.set_taborder("3");
                p.Static04.set_text("☞ App Variables");
                p.Static04.set_cssclass("sta_WF_label");
                p.Static04.set_positionstep("1");
                p.Static04.move("10","40","250","24",null,null);

                p.Static05.set_taborder("4");
                p.Static05.set_text("☞ Environment HTTP Header");
                p.Static05.set_cssclass("sta_WF_label");
                p.Static05.move("10","260","250","24",null,null);

                p.Static08.set_taborder("5");
                p.Static08.set_fittocontents("both");
                p.Static08.set_text("var objApp = nexacro.getApplication();\r\nobjApp.App_Var1;");
                p.Static08.set_positionstep("1");
                p.Static08.move("260","65","243","26",null,null);

                p.btn_varGet.set_taborder("6");
                p.btn_varGet.set_text("Get");
                p.btn_varGet.move("20","66","60","24",null,null);

                p.Static00.set_taborder("7");
                p.Static00.set_fittocontents("both");
                p.Static00.set_text("nexacro.getEnvironmentVariable(\"Env_Var1\");");
                p.Static00.set_positionstep("0");
                p.Static00.move("265","72","292","13",null,null);

                p.edt_var1.set_taborder("8");
                p.edt_var1.set_readonly("true");
                p.edt_var1.move("85","66","170","24",null,null);

                p.edt_var2.set_taborder("9");
                p.edt_var2.set_value("nexacro platform");
                p.edt_var2.move("20","94","170","24",null,null);

                p.btn_varSet.set_taborder("10");
                p.btn_varSet.set_text("Set");
                p.btn_varSet.move("195","94","60","24",null,null);

                p.Static17.set_taborder("11");
                p.Static17.set_fittocontents("both");
                p.Static17.set_text("nexacro.setEnvironmentVariable(\"Env_Var1\", \"nexacro platform\");");
                p.Static17.set_positionstep("0");
                p.Static17.move("265","100","417","13",null,null);

                p.btn_cookieGet.set_taborder("12");
                p.btn_cookieGet.set_text("Get");
                p.btn_cookieGet.move("20","176","60","24",null,null);

                p.Static02.set_taborder("13");
                p.Static02.set_fittocontents("both");
                p.Static02.set_text("nexacro.getCookieVariable(\"Env_Cookie1\");");
                p.Static02.set_positionstep("0");
                p.Static02.move("265","182","278","13",null,null);

                p.edt_cookie1.set_taborder("14");
                p.edt_cookie1.set_readonly("true");
                p.edt_cookie1.move("85","176","170","24",null,null);

                p.edt_cookie2.set_taborder("15");
                p.edt_cookie2.set_value("nexacro platform");
                p.edt_cookie2.move("20","204","170","24",null,null);

                p.btn_cookieSet.set_taborder("16");
                p.btn_cookieSet.set_text("Set");
                p.btn_cookieSet.move("195","204","60","24",null,null);

                p.Static18.set_taborder("17");
                p.Static18.set_fittocontents("both");
                p.Static18.set_text("nexacro.setCookieVariable(\"Env_Cookie1\", \"nexacro platform\");");
                p.Static18.set_positionstep("0");
                p.Static18.move("265","210","403","13",null,null);

                p.btn_httpGet.set_taborder("18");
                p.btn_httpGet.set_text("Get");
                p.btn_httpGet.move("20","286","60","24",null,null);

                p.Static19.set_taborder("19");
                p.Static19.set_fittocontents("both");
                p.Static19.set_text("nexacro.getHTTPHeaderVariable(\"Env_Http1\");");
                p.Static19.set_positionstep("0");
                p.Static19.move("265","292","296","13",null,null);

                p.edt_http1.set_taborder("20");
                p.edt_http1.set_readonly("true");
                p.edt_http1.move("85","286","170","24",null,null);

                p.edt_http2.set_taborder("21");
                p.edt_http2.set_value("nexacro platform");
                p.edt_http2.move("20","314","170","24",null,null);

                p.btn_httpSet.set_taborder("22");
                p.btn_httpSet.set_text("Set");
                p.btn_httpSet.move("195","314","60","24",null,null);

                p.Static20.set_taborder("23");
                p.Static20.set_fittocontents("both");
                p.Static20.set_text("nexacro.setHTTPHeaderVariable(\"Env_Http1\", \"nexacro platform\");");
                p.Static20.set_positionstep("0");
                p.Static20.move("265","320","421","13",null,null);

                p.btn_appVar.set_taborder("24");
                p.btn_appVar.set_text("Get");
                p.btn_appVar.set_positionstep("1");
                p.btn_appVar.move("20","66","60","24",null,null);

                p.edt_appVar.set_taborder("25");
                p.edt_appVar.set_readonly("true");
                p.edt_appVar.set_positionstep("1");
                p.edt_appVar.move("85","66","170","24",null,null);

                p.Static07.set_taborder("26");
                p.Static07.set_text("☞ App Datasets");
                p.Static07.set_cssclass("sta_WF_label");
                p.Static07.set_positionstep("1");
                p.Static07.move("10","228","250","24",null,null);

                p.btn_appDs.set_taborder("27");
                p.btn_appDs.set_text("Get");
                p.btn_appDs.set_positionstep("1");
                p.btn_appDs.move("20","254","60","24",null,null);

                p.grd_ds.set_taborder("28");
                p.grd_ds.set_positionstep("1");
                p.grd_ds.set_autofittype("col");
                p.grd_ds.move("85","254","270","125",null,null);

                p.Static21.set_taborder("29");
                p.Static21.set_fittocontents("both");
                p.Static21.set_text("var objApp = nexacro.getApplication();\r\nobjApp.App_Dataset;");
                p.Static21.set_positionstep("1");
                p.Static21.move("365","254","243","26",null,null);

                p.Static22.set_taborder("30");
                p.Static22.set_text("☞ Environment Script");
                p.Static22.set_cssclass("sta_WF_label");
                p.Static22.move("8","370","250","24",null,null);

                p.btn_envScript.set_taborder("31");
                p.btn_envScript.set_text("Call");
                p.btn_envScript.move("20","396","60","24",null,null);

                p.edt_envScript.set_taborder("32");
                p.edt_envScript.set_readonly("true");
                p.edt_envScript.move("85","396","170","24",null,null);

                p.Static23.set_taborder("33");
                p.Static23.set_fittocontents("both");
                p.Static23.set_text("var objEnv = nexacro.getEnvironment();\r\nobjEnv.Env_Script();");
                p.Static23.set_positionstep("0");
                p.Static23.move("265","392","253","33",null,null);

                p.Static24.set_taborder("34");
                p.Static24.set_text("☞ App Script - Launch Only");
                p.Static24.set_cssclass("sta_WF_label");
                p.Static24.set_positionstep("1");
                p.Static24.move("10","130","250","24",null,null);

                p.Static25.set_taborder("35");
                p.Static25.set_fittocontents("both");
                p.Static25.set_text("var objApp = nexacro.getApplication();\r\nobjApp.App_Script();");
                p.Static25.set_positionstep("1");
                p.Static25.move("260","155","243","26",null,null);

                p.btn_appScript.set_taborder("36");
                p.btn_appScript.set_text("Call");
                p.btn_appScript.set_positionstep("1");
                p.btn_appScript.move("20","156","60","24",null,null);

                p.edt_appScript.set_taborder("37");
                p.edt_appScript.set_readonly("true");
                p.edt_appScript.set_positionstep("1");
                p.edt_appScript.move("85","156","170","24",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edt_var2.move("20","122","170","24",null,null);

                p.btn_varSet.move("195","122","60","24",null,null);

                p.Static17.move("20","149","417","13",null,null);

                p.Static01.move("10","190","250","24",null,null);

                p.Static05.move("10","340","250","24",null,null);

                p.btn_cookieGet.move("20","214","60","24",null,null);

                p.Static02.move("20","242","278","13",null,null);

                p.edt_cookie2.move("20","272","170","24",null,null);

                p.btn_cookieSet.move("195","272","60","24",null,null);

                p.btn_httpGet.move("20","364","60","24",null,null);

                p.edt_cookie1.move("85","216","170","24",null,null);

                p.Static18.move("21","300","403","13",null,null);

                p.Static19.move("21","391","296","13",null,null);

                p.edt_http1.move("85","364","170","24",null,null);

                p.edt_http2.move("20","422","170","24",null,null);

                p.btn_httpSet.move("195","422","60","24",null,null);

                p.Static20.move("21","451","421","13",null,null);

                p.Static22.move("8","490","250","24",null,null);

                p.btn_envScript.move("20","514","60","24",null,null);

                p.edt_envScript.move("85","514","170","24",null,null);

                p.Static23.move("21","542","253","26",null,null);

                p.Static00.move("20","92","292","13",null,null);

                p.Static08.move("21","92","243","26",null,null);

                p.Static25.move("20","213","243","26",null,null);

                p.Static21.move("21","342","243","26",null,null);

                p.Static07.move("10","288","250","24",null,null);

                p.btn_appDs.move("20","314","60","24",null,null);

                p.grd_ds.move("21","391","270","125",null,null);

                p.Static24.move("10","160","250","24",null,null);

                p.btn_appScript.move("20","186","60","24",null,null);

                p.edt_appScript.move("85","186","170","24",null,null);

                p.btn_varGet.move("20","64","60","24",null,null);

                p.Static04.move("10","40","250","24",null,null);

                p.btn_appVar.move("20","66","60","24",null,null);

                p.edt_appVar.move("85","66","170","24",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EnvApp_Base.xfdl", function() {
        /* Environment Variable *******************************************************/
        this.btn_varGet_onclick = function(obj,e)
        {
        	var sRtn = nexacro.getEnvironmentVariable("Env_Var1");
        	this.edt_var1.set_value(sRtn);
        };

        this.btn_varSet_onclick = function(obj,e)
        {
        	var sValue = this.edt_var2.value;
        	nexacro.setEnvironmentVariable("Env_Var1", sValue);
        };

        /* Environment Cookies *********************************************************/
        this.btn_cookieGet_onclick = function(obj,e)
        {
        	var sRtn = nexacro.getCookieVariable("Env_Cookie1");
        	this.edt_cookie1.set_value(sRtn);
        };

        this.btn_cookieSet_onclick = function(obj,e)
        {
        	var sValue = this.edt_cookie2.value;
        	nexacro.setCookieVariable("Env_Cookie1", sValue);
        };

        /* Environment HTTP Header ****************************************************/
        this.btn_httpGet_onclick = function(obj,e)
        {
        	var sRtn = nexacro.getHTTPHeaderVariable("Env_Http1");
        	this.edt_http1.set_value(sRtn);
        };

        this.btn_httpSet_onclick = function(obj,e)
        {
        	var sValue = this.edt_http2.value;
        	nexacro.setHTTPHeaderVariable("Env_Http1", sValue);
        };

        /* Environment Script **********************************************************/
        this.btn_envScript_onclick = function(obj,e)
        {
        	var objEnv = nexacro.getEnvironment();
        	var sRtn = objEnv.Env_Script();
        	this.edt_envScript.set_value(sRtn);
        };

        /* AppVariables **********************************************************/
        this.btn_appVar_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.edt_appVar.set_value(objApp.App_Var1);
        };

        this.btn_appScript_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sRtn = objApp.App_Script();
        	this.edt_appScript.set_value(sRtn);
        };

        this.btn_appDs_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.grd_ds.set_binddataset(objApp.App_Dataset);
        	this.grd_ds.createFormat();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_varGet.addEventHandler("onclick",this.btn_varGet_onclick,this);
            this.btn_varSet.addEventHandler("onclick",this.btn_varSet_onclick,this);
            this.btn_cookieGet.addEventHandler("onclick",this.btn_cookieGet_onclick,this);
            this.btn_cookieSet.addEventHandler("onclick",this.btn_cookieSet_onclick,this);
            this.btn_httpGet.addEventHandler("onclick",this.btn_httpGet_onclick,this);
            this.btn_httpSet.addEventHandler("onclick",this.btn_httpSet_onclick,this);
            this.btn_appVar.addEventHandler("onclick",this.btn_appVar_onclick,this);
            this.btn_appDs.addEventHandler("onclick",this.btn_appDs_onclick,this);
            this.btn_envScript.addEventHandler("onclick",this.btn_envScript_onclick,this);
            this.btn_appScript.addEventHandler("onclick",this.btn_appScript_onclick,this);
        };

        this.loadIncludeScript("EnvApp_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
