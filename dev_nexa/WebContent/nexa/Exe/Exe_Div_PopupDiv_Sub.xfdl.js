(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Div_PopupDiv_Sub");
            this.set_titletext("Exe_Div_PopupDiv_Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset2", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","10","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Linked");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid2","10","40","378","121",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_Close","10","167","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe2_Close");
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
        this.registerScript("Exe_Div_PopupDiv_Sub.xfdl", function() {
        this.btn_Exe2_Close_onclick = function(obj,e)
        {
            var arrRtn = [];
            arrRtn[0] = this.Dataset2.getColumn(this.Dataset2.rowposition, "DEPT_NAME");
            arrRtn[1] = this.Dataset2.getColumn(this.Dataset2.rowposition, "FULL_NAME");
            arrRtn[2] = this.Dataset2.getColumn(this.Dataset2.rowposition, "EMPL_ID");
        	this.parent.parent.PopupDiv2.closePopup(arrRtn);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Exe2_Close.addEventHandler("onclick",this.btn_Exe2_Close_onclick,this);
        };

        this.loadIncludeScript("Exe_Div_PopupDiv_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
