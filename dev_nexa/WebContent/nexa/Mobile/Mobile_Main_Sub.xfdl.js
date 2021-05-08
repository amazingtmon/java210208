(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Main_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","7","156","464","450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MB_mainimg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","24","98","430","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Unified Framework for Real OSMU");
            obj.set_cssclass("sta_MB_mainText");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,680,this,function(p){});
            obj.set_mobileorientation("portrait");
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

        };

        this.loadIncludeScript("Mobile_Main_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
