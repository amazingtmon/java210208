(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Comp");
            this.set_titletext("Exe_Comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset2", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"COL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"COL_SIZE\" type=\"INT\" size=\"10\"/><Column id=\"COL_COLOR\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"COL_NAME\">Olivia</Col><Col id=\"COL_SIZE\">200</Col><Col id=\"COL_COLOR\">gold</Col></Row><Row><Col id=\"COL_NAME\">John</Col><Col id=\"COL_SIZE\">150</Col><Col id=\"COL_COLOR\">greenyellow</Col></Row><Row><Col id=\"COL_NAME\">Jackson</Col><Col id=\"COL_SIZE\">250</Col><Col id=\"COL_COLOR\">hotpink</Col></Row><Row><Col id=\"COL_NAME\">Maia</Col><Col id=\"COL_SIZE\">100</Col><Col id=\"COL_COLOR\">khaki</Col></Row><Row><Col id=\"COL_NAME\">Adam</Col><Col id=\"COL_SIZE\">80</Col><Col id=\"COL_COLOR\">lavender</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Button");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("☞ Exe 1 - Position & Arrangement");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","203","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe2_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_5","10","312","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Exe2_5");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_6","100","312","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Exe2_6");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10",null,null,"146","10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_binddataset("Dataset2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_NAME\"/><Cell col=\"1\" text=\"COL_SIZE\"/><Cell col=\"2\" text=\"COL_COLOR\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_NAME\"/><Cell col=\"1\" text=\"bind:COL_SIZE\"/><Cell col=\"2\" text=\"bind:COL_COLOR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","64","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Exe1_1");
            obj.set_background("khaki");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_2","210","64",null,"25","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Exe1_2");
            this.addChild(obj.name, obj);

            obj = new Div("Div2","190","232","199","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_3","190","203","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Exe2_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","100","203","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Exe2_2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_4","280","203","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exe2_4");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_3","10","99","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Exe1_3");
            obj.set_background("khaki");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_4",null,"99","180","25","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Exe1_4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_5","10","134","45.00%","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Exe1_5");
            obj.set_background("khaki");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_6","btn_Exe1_5:20","134","45.00%","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Exe1_6");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","179","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("☞ Exe 2 - Dynamic Creation");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,500,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("5_Exe_Comp.xfdl", function() {
        // Exe 1-1
        this.btn_Exe1_2_onclick = function(obj,e)
        {
        	var nW1 = obj.width;
        	var nW2 = obj.getOffsetWidth();
        	var nW3 = obj.getPixelWidth();

        	trace(nW1 + " : " + nW2 + " : " + nW3);
        };

        // Exe 1-5
        this.btn_Exe1_5_onclick = function(obj,e)
        {
        	var nW1 = obj.width;
        	var nW2 = obj.getOffsetWidth();
        	var nW3 = obj.getPixelWidth();

        	trace(nW1 + " : " + nW2 + " : " + nW3);
        };

        this.btn_Exe1_6_onclick = function(obj,e)
        {
        	var nL1 = obj.left;
        	var nL2 = obj.getOffsetLeft();
        	var nL3 = obj.getPixelLeft();

        	trace(nL1 + " : " + nL2 + " : " + nL3);
        };


        // Exe 2-1(Create Components on Form)
        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	var objBtn = new Button();
        	objBtn.init("btn_Comp", 10, 250, 150, 50);
        	this.addChild("btn_Comp", objBtn);
        	/*objBtn.set_text("Created Button");*/
        	objBtn.show();

        };

        // Exe 2-2(Destroy Components on Form)
        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	var objBtn = this.removeChild("btn_Comp");
        	objBtn.destroy();
        	objBtn = null;

        };


        // Exe 2-3 (Create Components on Div)
        this.btn_Exe2_3_onclick = function(obj,e)
        {
        	var objDivBtn = new Button();
        	objDivBtn.init("btn_divComp", 10, 10, 150, 50);
        	this.Div2.form.addChild("btn_divComp", objDivBtn);
        	objDivBtn.set_text("Created Div Button");
        	objDivBtn.show();
        };


        // Exe2-4 (Destroy Components on Div)
        this.btn_Exe2_4_onclick = function(obj,e)
        {
        	var objBtn = this.Div2.form.removeChild("btn_divComp");
        	objBtn.destroy();
        	objBtn = null;

        };

        // Exe2-5 Add Event Handler
        this.btn_Exe2_5_onclick = function(obj,e)
        {
        	if(!this.isValidObject(this.btn_Comp)){
        		this.btn_Exe2_1_onclick();
        	}
        	this.btn_Comp.addEventHandler("onclick", this.fn_temp, this);

        };

        this.fn_temp = function()
        {
        	this.alert("Add Event Handler");
        };

        // Exe2- d Data Binding
        this.btn_Exe2_6_onclick = function(obj,e)
        {
        	var objBindItem = new BindItem();
        	objBindItem.init("item00", "btn_Comp", "text", "Dataset2", "COL_NAME");
        	this.addChild("item00", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item01", "btn_Comp", "width", "Dataset2", "COL_SIZE");
        	this.addChild("item01", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item02", "btn_Comp", "background", "Dataset2", "COL_COLOR");
        	this.addChild("item02", objBindItem);
        	objBindItem.bind();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_5.addEventHandler("onclick",this.btn_Exe2_5_onclick,this);
            this.btn_Exe2_6.addEventHandler("onclick",this.btn_Exe2_6_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.fn_position,this);
            this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);
            this.btn_Exe2_3.addEventHandler("onclick",this.btn_Exe2_3_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe2_4.addEventHandler("onclick",this.btn_Exe2_4_onclick,this);
            this.btn_Exe1_4.addEventHandler("onclick",this.btn_Exe1_4_onclick,this);
            this.btn_Exe1_5.addEventHandler("onclick",this.btn_Exe1_5_onclick,this);
            this.btn_Exe1_6.addEventHandler("onclick",this.btn_Exe1_6_onclick,this);
        };

        this.loadIncludeScript("5_Exe_Comp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
