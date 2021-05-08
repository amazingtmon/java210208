(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">employees</Col><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_URL\">Mobile::Mobile_Work.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">camera</Col><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_URL\">Mobile::Mobile_Camera.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">step</Col><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_URL\">Mobile::Mobile_Step.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">MLM</Col><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_URL\">Form::Form_EmpMLM.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">Listview</Col><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_URL\">Mobile::Mobile_Listview.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_work","0","88",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_cssclass("div_MB_work");
            obj.set_url("Mobile::Mobile_Main_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"88","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menu","21","30","33","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MB_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","418","24","44","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MB_home");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","136","23","208","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MB_titlelogo");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","577","69","347","254",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MT_menu");
            obj.set_background("#546169");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","345","252",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_MT_mnuPop");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"231\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_IMAGE\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Mobile::Mobile_Main_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Mobile_Main.xfdl", function() {

        this.btn_menu_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, -24, 57);

        };

        this.btn_home_onclick = function(obj,e)
        {
        	this.div_work.set_url("Mobile::Mobile_Main_Sub.xfdl");
        };


        this.Grid00_oncellclick = function(obj,e)
        {
        	var sURL = this.ds_data.getColumn(e.row, "MENU_URL");

        	this.div_work.set_url(sURL);

        	this.PopupDiv00.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.btn_menu.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.Static00.addEventHandler("onclick",this.btn_home_onclick,this);
            this.PopupDiv00.form.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };

        this.loadIncludeScript("Mobile_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
