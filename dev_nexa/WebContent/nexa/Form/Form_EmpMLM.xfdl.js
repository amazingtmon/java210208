(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EmpMLM");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WFSA");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_cd","97","13","58","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","159","13","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","187","13","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","431","13","192","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">All</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"13","60","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("reset");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","376","13","46","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Gender");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","10","13","81","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("Department");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"5","60","30","205",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Retrive");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"5","60","30","140",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5","60","30","75",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","60","30","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","95",null,null,"396","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hire Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format><Format id=\"Format_Phone\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Department\"/><Cell col=\"3\" text=\"Hire Date\"/><Cell col=\"4\" text=\"Gender\"/><Cell row=\"1\" col=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"2\" text=\"Position\"/><Cell row=\"1\" col=\"3\" text=\"Salary\"/><Cell row=\"1\" col=\"4\" text=\"Married\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell row=\"1\" col=\"2\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"1\" col=\"3\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","128","111","240","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","128","218","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static13","128","251","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static20","128","284","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","128","317","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","128","350","240","132",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","133","50","88","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","133","83","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","133","116","194","98",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","133","223","139","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","133","256","21","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","133","289","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","133","355","229","122",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("Department");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","9","284","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","9","111","120","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("Position");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","9","218","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("Gender");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","9","317","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("Annual Salary");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("Emp ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","9","251","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_text("Married");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","9","350","120","132",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("Memo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","133","322","123","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_type("number");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_search
                p = rootobj.div_search.form;

                p.edt_dept_cd.set_taborder("0");
                p.edt_dept_cd.move("97","13","58","24",null,null);

                p.btn_dept.set_taborder("1");
                p.btn_dept.set_text("");
                p.btn_dept.set_verticalAlign("");
                p.btn_dept.set_cssclass("btn_WF_search");
                p.btn_dept.move("159","13","24","24",null,null);

                p.edt_dept_nm.set_taborder("2");
                p.edt_dept_nm.move("187","13","124","24",null,null);

                p.rdo_gender.set_taborder("3");
                p.rdo_gender.set_codecolumn("codecolumn");
                p.rdo_gender.set_datacolumn("datacolumn");
                p.rdo_gender.set_rowcount("-1");
                p.rdo_gender.set_innerdataset(div_search_form_rdo_gender_innerdataset);
                p.rdo_gender.set_columncount("-1");
                p.rdo_gender.set_index("0");
                p.rdo_gender.move("431","13","192","24",null,null);

                p.btn_reset.set_taborder("4");
                p.btn_reset.set_text("reset");
                p.btn_reset.getSetter("leftbase").set("");
                p.btn_reset.getSetter("topbase").set("");
                p.btn_reset.getSetter("bottombase").set("");
                p.btn_reset.getSetter("rightbase").set("");
                p.btn_reset.getSetter("widthbase").set("");
                p.btn_reset.getSetter("heightbase").set("");
                p.btn_reset.move(null,"13","60","24","10",null);

                p.Static04.set_taborder("5");
                p.Static04.set_text("Gender");
                p.Static04.move("376","13","46","24",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("Department");
                p.Static00.getSetter("leftbase").set("");
                p.Static00.getSetter("topbase").set("");
                p.Static00.getSetter("bottombase").set("");
                p.Static00.getSetter("rightbase").set("");
                p.Static00.getSetter("widthbase").set("");
                p.Static00.getSetter("heightbase").set("");
                p.Static00.move("10","13","81","24",null,null);
                // this.div_search }}


                // {{ this.div_detail
                p = rootobj.div_detail.form;

                p.Static02.set_taborder("10");
                p.Static02.set_text("");
                p.Static02.set_background("");
                p.Static02.set_padding("");
                p.Static02.set_cssclass("sta_WF_tablebg");
                p.Static02.move("128","12","240","34",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_text("");
                p.Static01.set_background("");
                p.Static01.set_padding("");
                p.Static01.set_cssclass("sta_WF_tablebg");
                p.Static01.move("128","45","240","34",null,null);

                p.Static09.set_taborder("13");
                p.Static09.set_text("");
                p.Static09.set_background("");
                p.Static09.set_padding("");
                p.Static09.set_cssclass("sta_WF_tablebg");
                p.Static09.move("128","78","240","34",null,null);

                p.Static15.set_taborder("18");
                p.Static15.set_text("");
                p.Static15.set_background("");
                p.Static15.set_padding("");
                p.Static15.set_cssclass("sta_WF_tablebg");
                p.Static15.move("128","111","240","108",null,null);

                p.Static17.set_taborder("20");
                p.Static17.set_text("");
                p.Static17.set_background("");
                p.Static17.set_padding("");
                p.Static17.set_cssclass("sta_WF_tablebg");
                p.Static17.move("128","218","240","34",null,null);

                p.Static13.set_taborder("16");
                p.Static13.set_text("");
                p.Static13.set_background("");
                p.Static13.set_padding("");
                p.Static13.set_cssclass("sta_WF_tablebg");
                p.Static13.move("128","251","240","34",null,null);

                p.Static20.set_taborder("7");
                p.Static20.set_text("");
                p.Static20.set_background("");
                p.Static20.set_padding("");
                p.Static20.set_cssclass("sta_WF_tablebg");
                p.Static20.move("128","284","240","34",null,null);

                p.Static04.set_taborder("24");
                p.Static04.set_text("");
                p.Static04.set_background("");
                p.Static04.set_padding("");
                p.Static04.set_cssclass("sta_WF_tablebg");
                p.Static04.move("128","317","240","34",null,null);

                p.Static07.set_taborder("26");
                p.Static07.set_text("");
                p.Static07.set_background("");
                p.Static07.set_padding("");
                p.Static07.set_cssclass("sta_WF_tablebg");
                p.Static07.move("128","350","240","132",null,null);

                p.edt_name.set_taborder("0");
                p.edt_name.move("133","17","162","24",null,null);

                p.msk_id.set_taborder("1");
                p.msk_id.set_type("string");
                p.msk_id.set_format("AA-###");
                p.msk_id.move("133","50","88","24",null,null);

                p.cbo_dept.set_taborder("2");
                p.cbo_dept.set_innerdataset("ds_dept");
                p.cbo_dept.set_codecolumn("DEPT_CD");
                p.cbo_dept.set_datacolumn("DEPT_NAME");
                p.cbo_dept.set_text("");
                p.cbo_dept.set_value("");
                p.cbo_dept.set_index("-1");
                p.cbo_dept.move("133","83","162","24",null,null);

                p.lst_pos.set_taborder("3");
                p.lst_pos.set_innerdataset("ds_pos");
                p.lst_pos.set_codecolumn("POS_CD");
                p.lst_pos.set_datacolumn("POS_NAME");
                p.lst_pos.move("133","116","194","98",null,null);

                p.rdo_gender.set_taborder("4");
                p.rdo_gender.set_codecolumn("codecolumn");
                p.rdo_gender.set_datacolumn("datacolumn");
                p.rdo_gender.set_columncount("2");
                p.rdo_gender.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
                p.rdo_gender.move("133","223","139","24",null,null);

                p.chk_married.set_taborder("5");
                p.chk_married.move("133","256","21","24",null,null);

                p.cal_date.set_taborder("6");
                p.cal_date.move("133","289","162","24",null,null);

                p.txt_memo.set_taborder("9");
                p.txt_memo.move("133","355","229","122",null,null);

                p.Static08.set_taborder("12");
                p.Static08.set_text("Department");
                p.Static08.set_background("");
                p.Static08.set_padding("");
                p.Static08.set_cssclass("sta_WF_tablelabel");
                p.Static08.move("9","78","120","34",null,null);

                p.Static10.set_taborder("14");
                p.Static10.set_text("Name");
                p.Static10.set_background("");
                p.Static10.set_padding("");
                p.Static10.set_cssclass("sta_WF_table_required");
                p.Static10.move("9","12","120","34",null,null);

                p.Static12.set_taborder("15");
                p.Static12.set_text("Hire Date");
                p.Static12.set_background("");
                p.Static12.set_padding("");
                p.Static12.set_cssclass("sta_WF_table_required");
                p.Static12.move("9","284","120","34",null,null);

                p.Static14.set_taborder("17");
                p.Static14.set_text("Position");
                p.Static14.set_background("");
                p.Static14.set_padding("");
                p.Static14.set_cssclass("sta_WF_tablelabel");
                p.Static14.move("9","111","120","108",null,null);

                p.Static16.set_taborder("19");
                p.Static16.set_text("Gender");
                p.Static16.set_background("");
                p.Static16.set_padding("");
                p.Static16.set_cssclass("sta_WF_tablelabel");
                p.Static16.move("9","218","120","34",null,null);

                p.Static19.set_taborder("21");
                p.Static19.set_text("Annual Salary");
                p.Static19.set_background("");
                p.Static19.set_padding("");
                p.Static19.set_cssclass("sta_WF_tablelabel");
                p.Static19.move("9","317","120","34",null,null);

                p.Static00.set_taborder("22");
                p.Static00.set_text("Emp ID");
                p.Static00.set_background("");
                p.Static00.set_padding("");
                p.Static00.set_cssclass("sta_WF_table_required");
                p.Static00.move("9","45","120","34",null,null);

                p.Static03.set_taborder("23");
                p.Static03.set_text("Married");
                p.Static03.set_background("");
                p.Static03.set_padding("");
                p.Static03.set_cssclass("sta_WF_tablelabel");
                p.Static03.move("9","251","120","34",null,null);

                p.Static05.set_taborder("25");
                p.Static05.set_text("Memo");
                p.Static05.set_background("");
                p.Static05.set_padding("");
                p.Static05.set_cssclass("sta_WF_tablelabel");
                p.Static05.move("9","350","120","132",null,null);

                p.msk_salary.set_taborder("8");
                p.msk_salary.set_type("number");
                p.msk_salary.set_format("#,###");
                p.msk_salary.move("133","322","123","24",null,null);
                // this.div_detail }}
                p = rootobj;
                p.set_titletext("New Form");

                p.div_search.set_taborder("7");
                p.div_search.getSetter("leftbase").set("");
                p.div_search.getSetter("topbase").set("");
                p.div_search.getSetter("bottombase").set("");
                p.div_search.getSetter("rightbase").set("");
                p.div_search.getSetter("widthbase").set("");
                p.div_search.getSetter("heightbase").set("");
                p.div_search.set_cssclass("div_WFSA");
                p.div_search.move("10","40",null,"50","10",null);

                p.st_title.set_taborder("0");
                p.st_title.set_text("Employees");
                p.st_title.getSetter("leftbase").set("");
                p.st_title.getSetter("topbase").set("");
                p.st_title.getSetter("bottombase").set("");
                p.st_title.getSetter("rightbase").set("");
                p.st_title.getSetter("widthbase").set("");
                p.st_title.getSetter("heightbase").set("");
                p.st_title.set_cssclass("sta_WF_emptitle");
                p.st_title.move("10","5","193","30",null,null);

                p.btn_retrieve.set_taborder("1");
                p.btn_retrieve.set_text("Retrive");
                p.btn_retrieve.getSetter("leftbase").set("");
                p.btn_retrieve.getSetter("topbase").set("");
                p.btn_retrieve.getSetter("bottombase").set("");
                p.btn_retrieve.getSetter("rightbase").set("");
                p.btn_retrieve.getSetter("widthbase").set("");
                p.btn_retrieve.getSetter("heightbase").set("");
                p.btn_retrieve.move(null,"5","60","30","205",null);

                p.btn_add.set_taborder("2");
                p.btn_add.set_text("Add");
                p.btn_add.move(null,"5","60","30","140",null);

                p.btn_del.set_taborder("3");
                p.btn_del.set_text("Delete");
                p.btn_del.move(null,"5","60","30","75",null);

                p.btn_save.set_taborder("4");
                p.btn_save.set_text("Save");
                p.btn_save.move(null,"5","60","30","10",null);

                p.grd_list.set_taborder("5");
                p.grd_list.getSetter("leftbase").set("");
                p.grd_list.getSetter("bottombase").set("");
                p.grd_list.getSetter("widthbase").set("");
                p.grd_list.getSetter("heightbase").set("");
                p.grd_list.set_binddataset("ds_emp");
                p.grd_list.move("10","95",null,null,"396","10");

                p.div_detail.set_taborder("6");
                p.div_detail.set_text("Div00");
                p.div_detail.getSetter("leftbase").set("");
                p.div_detail.getSetter("bottombase").set("");
                p.div_detail.getSetter("rightbase").set("");
                p.div_detail.getSetter("widthbase").set("");
                p.div_detail.getSetter("heightbase").set("");
                p.div_detail.move(null,"95","380",null,"10","10");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","Desktop_screen",800,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.div_search
                p = rootobj.div_search.form;

                p.rdo_gender.set_positionstep("-1");
                p.rdo_gender.move("97","43","192","24",null,null);

                p.Static04.set_positionstep("-1");
                p.Static04.move("10","43","46","24",null,null);

                p.btn_reset.set_positionstep("-1");
                p.btn_reset.move(null,"13","60","54","10",null);

                p.edt_dept_cd.set_positionstep("-1");

                p.btn_dept.set_positionstep("-1");

                p.edt_dept_nm.set_positionstep("-1");

                p.Static00.set_positionstep("-1");
                // this.div_search }}


                // {{ this.div_detail
                p = rootobj.div_detail.form;

                p.Static02.move("168","12","280","34",null,null);

                p.Static01.move("168","45","280","34",null,null);

                p.Static09.move("168","78","280","34",null,null);

                p.Static15.move("168","111","280","108",null,null);

                p.Static17.move("168","218","280","34",null,null);

                p.Static13.move("168","251","280","34",null,null);

                p.Static20.move("168","284","280","34",null,null);

                p.Static04.move("168","317","280","34",null,null);

                p.Static07.move("168","350","280","132",null,null);

                p.edt_name.move("173","17","202","24",null,null);

                p.msk_id.move("173","50","128","24",null,null);

                p.cbo_dept.move("173","83","202","24",null,null);

                p.lst_pos.move("173","116","234","98",null,null);

                p.rdo_gender.move("173","223","179","24",null,null);

                p.chk_married.move("173","256","61","24",null,null);

                p.cal_date.move("173","289","202","24",null,null);

                p.txt_memo.move("173","355","269","122",null,null);

                p.msk_salary.move("173","322","163","24",null,null);

                p.Static08.move("9","78","160","34",null,null);

                p.Static10.move("9","12","160","34",null,null);

                p.Static12.move("9","284","160","34",null,null);

                p.Static14.move("9","111","160","108",null,null);

                p.Static16.move("9","218","160","34",null,null);

                p.Static19.move("9","317","160","34",null,null);

                p.Static00.move("9","45","160","34",null,null);

                p.Static03.move("9","251","160","34",null,null);

                p.Static05.move("9","350","160","132",null,null);
                // this.div_detail }}
                p = rootobj;
                p.div_detail.set_positionstep("1");
                p.div_detail.move("10","125",null,null,"10","30");

                p.grd_list.set_formatid("Format_Phone");
                p.grd_list.set_autofittype("col");
                p.grd_list.move("10","125",null,null,"10","30");

                p.div_search.set_positionstep("-1");
                p.div_search.move("10","40",null,"80","10",null);

                p.st_title.set_positionstep("-1");

                p.btn_retrieve.set_positionstep("-1");

                p.btn_add.set_positionstep("-1");

                p.btn_del.set_positionstep("-1");

                p.btn_save.set_positionstep("-1");
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_EmpMLM.xfdl","Lib::Common.xjs");
        this.registerScript("Form_EmpMLM.xfdl", function() {
        this.executeIncludeScript("Lib::Common.xjs"); /*include "Lib::Common.xjs"*/

        this.Form_onload = function(obj,e)
        {
        	this.fn_init(obj);

        };

        this.fn_init = function(obj)
        {
        	//dept code, position code load
        	this.transaction("svcCode"
        			        ,"SvcURL::select_code.jsp"
        					,""
        					,"ds_dept=out_dept ds_pos=out_pos"
        					,""
        					,"fn_callback");

        	//Grid Sort
        	for(var i=0 ; i < this.components.length ; i++)
        	{
        		if(this.components[i] == "[object Grid]")
        		{
        			this.components[i].addEventHandler("onheadclick", this.cfn_GridSort, this);
        		}
        	}
        }

        // Search Area Dept Popup
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);

        	var objChild = new ChildFrame("popDept", "absolute", nLeft, nTop, 300, 400);
        	objChild.set_formurl("Popup::Pop_DeptSearch.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");

        };

        // Dept Popup Callback
        this.fn_callback_pop = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popDept")
        	{
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.div_search.form.edt_dept_cd.set_value(arrRtn[0]);
        			this.div_search.form.edt_dept_nm.set_value(arrRtn[1]);
        		}
        	}
        }

        // Search Area Gender
        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "A")
        	{
        		this.ds_emp.filter("");
        	}
        	else
        	{
        		this.ds_emp.filter("GENDER == '" + e.postvalue + "'");
        	}
        };

        // Search Area Reset
        this.div_cont_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_dept_cd.set_value("");
        	this.div_search.form.edt_dept_nm.set_value("");
        	this.div_search.form.rdo_gender.set_value("A");
        };

        // Retrieve Button
        this.btn_retrieve_onclick = function(obj,e)
        {
        	var sDept = this.div_search.form.edt_dept_cd.value;
        	var sParam  = "sDept=" + nexacro.wrapQuote(sDept);

        	this.transaction("svcSelect"
        				    ,"SvcURL::select_emp.jsp"
        					,""
        					,"ds_emp=out_emp"
        					,sParam
        					,"fn_callback");
        };

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", this.fn_today());
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
        	this.transaction("svcSave"
        					,"SvcURL::save_emp.jsp"
        					,"in_emp=ds_emp:U"
        					,""
        					,""
        					,"fn_callback");
        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	if(svcID == "svcSelect"){
        		this.alert("Select Success");
        	}
        	else if(svcID == "svcSave"){
        		this.alert("Save Success");
        	}
        }



        // Today
        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        // Gender Code --> Name
        this.fn_gender = function(arg)
        {
        	if(arg == "M"){
        		return "Male";
        	}
        	else{
        		return "Female";
        	}
        }


        this.ds_emp_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 31){
        		this.fn_setRow(1);
        //		this.setTimer(1, 20);
        	}
        };

        this.Form_Emp_ontimer = function(obj,e)
        {
        	if(e.timerid == 1){
        		this.killTimer(1);
        		this.fn_setRow(0);
        	}
        };

        this.fn_setRow = function(nRow)
        {
        	this.ds_emp.set_rowposition(nRow);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.div_cont_btn_reset_onclick,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Form_EmpMLM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
