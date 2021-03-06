(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_TextArea");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","4","322","216","75",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("nexacro \nplatform\n");
            obj.set_inputfilter("digit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","231","451","216","75",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("auto select");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","10","451","216","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("ABCD");
            obj.set_autoskip("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","4","64","216","75",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("nexacro platform\nTextArea Component\nHello World");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","4","193","216","75",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("nexacro \nplatform\n17");
            obj.set_inputtype("english,digit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","TextArea03:5","193","216","75",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("12345\n1,200.34\n-1,200.34");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","427","278","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("☞ Max Length / Auto Skip / Auto Select");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","4","169","278","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ Input Type - english & digit / number");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","298","278","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("☞  Input Filter - digit");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Button01","text","gds_dept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_TextArea.xfdl", function() {

        this.chk_pass_onclick = function(obj,e)
        {
        	this.edt_auto.set_password(obj.value);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Comp_TextArea.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
