if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_themeid("theme::edu_theme_d");
        this.set_scrollbarsize("10");
    };

    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onload",this.Environment_onload,this);
    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
        nexacro._addService("Form", "form", "./Form/", "session", null, "", "0", "0");
        nexacro._addService("Popup", "form", "./Popup/", "session", null, "", "0", "0");
        nexacro._addService("Comp", "form", "./Comp/", "session", null, "", "0", "0");
        nexacro._addService("CompCom", "form", "./CompCom/", "session", null, "", "0", "0");
        nexacro._addService("CompExt", "form", "./CompExt/", "session", null, "", "0", "0");
        nexacro._addService("Exe", "form", "./Exe/", "session", null, "", "0", "0");
        nexacro._addService("Smpl", "form", "./Smpl/", "session", null, "", "0", "0");
        nexacro._addService("EnvApp", "form", "./EnvApp/", "session", null, "", "0", "0");
        nexacro._addService("Images", "file", "./Images/", "session", null, "", "0", "0");
        nexacro._addService("Lib", "js", "./Lib/", "session", null, "", "0", "0");
        nexacro._addService("LocalURL", "JSP", "http://localhost:8080/edu/nexacro17/", "session", null, "", "0", "0");
        nexacro._addService("SvcURL", "JSP", "http://demo.nexacro.com/edu/nexacro17/", "session", null, "", "0", "0");
        nexacro._addService("Mobile", "form", "./Mobile/", "session", null, "", "0", "0");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("File", "file", "./File/", "session", null, "", "0", "0");

    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"Camera", "classname":"nexacro.Camera", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("Env_Var1", "Env Variable Value1");
        nexacro.setEnvironmentVariable("Env_Var2", "Env Variable Value2");
        nexacro.setEnvironmentVariable("Env_Var3", "Env Variable Value3");
        nexacro.setEnvironmentVariable("ev_runMode", "L");

        // Cookies
        nexacro.setCookieVariable("Env_Cookie1", "Env Cookie Value1", "false");
        nexacro.setCookieVariable("Env_Cookie2", "Env Cookie Value2", "false");
        nexacro.setCookieVariable("Env_Cookie3", "Env Cookie Value3", "false");

        // HTTP Header
        nexacro.setHTTPHeaderVariable("Env_Http1", "Env HTTP Header Value1");
        nexacro.setHTTPHeaderVariable("Env_Http2", "Env HTTP Header Value2");
        nexacro.setHTTPHeaderVariable("Env_Http3", "Env HTTP Header Value3");
    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};

    // User Script
    env.registerScript("environment.xml", function() {
    this.Env_Script = function()
    {
    	return "Env Script Call";
    }
    this.Environment_onload = function(obj,e)
    {
    	var sPath = nexacro.getProjectPath();

    	if(sPath.indexOf("demo.nexacro.com") > -1)
    	{
    		// ev_runMode L:Local, S:Server
    		nexacro.setEnvironmentVariable("ev_runMode", "S");
    	}
    };

    });
					
    env = null;
}

