(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("id_dept");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dept_data", this);
            obj._setContents("<ColumnInfo><Column id=\"deptno\" type=\"INT\" size=\"5\"/><Column id=\"dname\" type=\"STRING\" size=\"200\"/><Column id=\"loc\" type=\"STRING\" size=\"200\"/></ColumnInfo><Rows><Row><Col id=\"deptno\">10</Col><Col id=\"dname\">영업부</Col><Col id=\"loc\">서울</Col></Row><Row><Col id=\"deptno\">20</Col><Col id=\"dname\">생산부</Col><Col id=\"loc\">제주</Col></Row><Row><Col id=\"deptno\">30</Col><Col id=\"dname\">관리부</Col><Col id=\"loc\">부산</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_data","44","86","511","228",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"deptno\"/><Cell col=\"1\" text=\"dname\"/><Cell col=\"2\" text=\"loc\"/></Band><Band id=\"body\"><Cell text=\"bind:deptno\"/><Cell col=\"1\" text=\"bind:dname\"/><Cell col=\"2\" text=\"bind:loc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","44","58","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deptManager.xfdl", function() {

        this.btn_search_onclick = function(obj,e)
        {
        	alert("button clicked");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };

        this.loadIncludeScript("deptManager.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
