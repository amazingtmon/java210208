(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Popup_Sub2");
            this.set_titletext("Form_Popup_Sub2");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","18","82","512","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Unified Framework for Real OSMU");
            obj.set_font("normal 700 26px/normal \"Verdana\"");
            obj.set_textAlign("center");
            obj.set_color("#ffffad");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","18","120","512","78",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("normal bold 18px/normal \"Verdana\"");
            obj.set_text("Simple, Convenient and Fast Development\r\nfor Complex Enterprise Environments");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","128","213","322","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("URL(\"Images::img_nexacro17.png\")");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_close","577","10","32","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("URL(\"Images::img_close_y32.png\")");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",620,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Popup_Sub2.xfdl", function() {
        this.img_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.img_close.addEventHandler("onclick",this.img_close_onclick,this);
        };

        this.loadIncludeScript("Form_Popup_Sub2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
