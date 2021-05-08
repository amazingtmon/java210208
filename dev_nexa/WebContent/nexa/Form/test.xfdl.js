(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">대메뉴1</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">중메뉴1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">메뉴1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">메뉴2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">대메뉴2</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"name\">중메뉴2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"name\">메뉴3</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","440","20","284","369",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
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

        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
