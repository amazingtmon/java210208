(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Dataset");
            this.set_titletext("Exe_Dataset");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">John@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset4", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset5", this);
            obj.set_keystring("");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset6", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid1","10","64",null,"171","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Dataset");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","350","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("☞ Exe1, Exe2, Exe3 Base Data - Dataset1");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid6","10","64","780","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset6");
            obj.set_positionstep("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:SALARY\"/><Cell col=\"4\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_Filter","430","560","43","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Filter");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","375","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_2","10","412","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("☞ Exe4 Base Data - Dataset4");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid4","10","64","370","206",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset4");
            obj.set_positionstep("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Row\"/><Cell col=\"1\" text=\"EMPL_ID\"/><Cell col=\"2\" text=\"FULL_NAME\"/><Cell col=\"3\" text=\"DEPT_CODE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"expr:currow\"/><Cell col=\"1\" text=\"bind:EMPL_ID\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_1","391","70","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_2","391","107","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("4_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_3","391","144","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("4_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_4","391","181","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("4_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_5","391","218","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("4_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_Check","391","255","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Check");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","430","375","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_2","430","412","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","430","449","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("3_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_4","430","486","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("3_4");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","430","523","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("3_5");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","485","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","522","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_3","10","559","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("2_3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid5","10","383","370","166",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("Dataset5");
            obj.set_positionstep("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","349","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("☞ Exe5 Base Data - Dataset5");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_1","391","387","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("5_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_2","390","430","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("5_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_3","391","472","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("5_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_4","391","515","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("5_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("☞ Exe6 Base Data - Dataset6");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_3","10","285","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("6_3");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_5","10","320","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("6_5");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","341","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Exe1");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","461","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Exe2");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","430","341","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Exe3");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","54","375","346","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("데이터셋의 컬럼(Column) 개수와 레코드(Row) 개수, 컬럼명(Column ID)을 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","54","412","345","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("컬럼추가 - ID가 “COL_CHK”인 STRING 컬럼을 추가. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","54","522","344","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("복합조건 - 부서코드가 “K10”이고 급여가 5,000 이하인 사원 구하기.");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","54","485","347","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("단일조건 - 사원번호가 “KR120”인 사원의 성명 구하기.");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","54","559","348","25",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("부서가 “K10”인 사원 목록 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","474","375","168","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("남성과 여성의 평균 급여 계산. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","475","412","248","25",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("급여와 보너스를 합친 금액의 평균 금액 계산. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","474","449","188","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("입사일을 기준으로 내림차순 정렬. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","474","486","228","25",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("남성이고 미혼인 데이터만 필터하여 표현. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","474","523","308","25",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("원본 레코드 개수와 필터해서 보이는 레코드의 개수 비교.");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","447","70","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("최상위에 새로운 Row를 삽입하고 Row 상태값을 확인.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","447","107","345","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("두번째 Row의 성명 컬럼을 “Nexacro”로 변경하고 레코드 상태값 확인.  ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","447","144","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("변경되기 전과 후의 성명 데이터 확인.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","447","181","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Row Index가 3, 4, 5인 레코드를 멀티 삭제. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","447","218","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("삭제한 레코드 개수와 삭제한 성명 데이터 구하기 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","447","255","323","25",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text(" 데이터 변경여부 체크.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRtn1","10","234","780","86",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","447","387","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text(" Dataset4를 Dataset5로 복사. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","447","430","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Exe4에서 입력, 수정한 정보 모두 복사.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","447","472","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Dataset4에서 사원번호(EMPL_ID)가 “KR040”인 Row만 Dataset5에 복사. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","447","515","345","25",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("사원번호가 “KR210”인 Row 중 성명과 사원번호 컬럼만 Dataset5에 복사. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRtn2","10","270","370","48",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","56","285","404","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("데이터를 변경하는 스크립트를 작성 후 실행하여 이벤트 발생 순서 확인. ");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","56","320","344","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("데이터 변경시 이벤트 발생 멈추기 ");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("1_Exe_Dataset.xfdl", function() {
        // Exercise 1 ================================================================
        // Exe 1-1
        this.btn_Exe1_1_onclick = function(obj,e)
        {
        	var nColCount = this.Dataset1.getColCount(); // this.Dataset1.colcount;
        	var nRowCount = this.Dataset1.getRowCount(); // this.Dataset1.rowcount;
        	trace("Col Count=" + nColCount + " : Row Count=" + nRowCount);

        	this.txtRtn1.set_value("Col Count=" + nColCount + " : Row Count=" + nRowCount);

        // 	for(var i=0; i<nColCount; i++){
        // 		var sColID = this.Dataset1.getColID(i);
        // 		trace("Col ID=" + sColID);
        // 	}

        };

        // Exe 1-2
        this.btn_Exe1_2_onclick = function(obj,e)
        {
        	this.Dataset1.addColumn("COL_CHK", "STRING");
        };

        // Exercise 2 ================================================================
        // Exe 2-1
        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	var nRow = this.Dataset1.findRow("EMPL_ID", "KR120");
        	var sVal = this.Dataset1.getColumn(nRow, "FULL_NAME");

            trace(sVal);
        	this.txtRtn1.set_value(sVal);
        };

        // Exe 2-2
        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	var nRow = this.Dataset1.findRowExpr("DEPT_CODE == 'K10' && SALARY <= 5000");
        	var sVal = this.Dataset1.getColumn(nRow, "FULL_NAME");
        	trace(sVal);
        	this.txtRtn1.set_value(sVal);
        };

        // Exe 2-3
        this.btn_Exe2_3_onclick = function(obj,e)
        {
        	var sText = "";
        	var arrRow = this.Dataset1.extractRows("DEPT_CODE=='K10'");
        	for(var i=0; i<arrRow.length; i++){
        		var sValue = this.Dataset1.getColumn(arrRow[i], "FULL_NAME");
        		trace(sValue);
        		sText += sValue + "\n";
        	}

        	this.txtRtn1.set_value(sText);
        };

        // Exercise 3 ================================================================
        // Exe 3-1
        this.btn_Exe3_1_onclick = function(obj,e)
        {
        	var nAvgM  = this.Dataset1.getCaseAvg("GENDER=='M'", "SALARY");
        	var nAvgW1 = this.Dataset1.getCaseAvg("GENDER=='W'", "SALARY");
        	var nAvgW2 = this.Dataset1.getCaseAvg("GENDER=='W'", "SALARY",0, -1, false);
        	trace("Man Avg=" + Math.round(nAvgM, 2) + " : Woman Avg=" + nAvgW1 + " : " + nAvgW2);
        	this.txtRtn1.set_value("Man Avg=" + Math.round(nAvgM, 2) + " : Woman Avg=" + nAvgW1 + " : " + nAvgW2);
        };

        // Exe 3-2
        this.btn_Exe3_2_onclick = function(obj,e)
        {
        	var nAvg = this.Dataset1.getAvg("SALARY+BONUS");
        	trace("Salary+Bonus AVG=" + nAvg);
        	this.txtRtn1.set_value("Salary+Bonus AVG=" + nAvg);
        };

        // Exe 3-3
        this.btn_Exe3_3_onclick = function(obj,e)
        {
        	this.Dataset1.set_keystring("S:-HIRE_DATE");
        };

        // Exe 3-4
        this.btn_Exe3_4_onclick = function(obj,e)
        {
        	this.Dataset1.filter("GENDER == 'M' && MARRIED == '1'");
        };

        // Exe 3-5
        this.btn_Exe3_5_onclick = function(obj,e)
        {
        	var nCnt   = this.Dataset1.getRowCount();
        	var nCntNF = this.Dataset1.getRowCountNF();
        	trace(nCnt + " : " + nCntNF);
        	this.txtRtn1.set_value(nCnt + " : " + nCntNF);
        };


        this.btn_Exe3_Filter_onclick = function(obj,e)
        {
            // like filter --> String.indexOf()
        	var sText = "e";

        };


        // Exercise 4 ================================================================
        // Exe 4-1
        this.btn_Exe4_1_onclick = function(obj,e)
        {
        	var nRow  = this.Dataset4.insertRow(0);
        	var nType = this.Dataset4.getRowType(nRow);
        	trace("Insert Rowtype: " + nType);
        	this.txtRtn2.set_value("Insert Rowtype: " + nType);
        };

        // Exe 4-2
        this.btn_Exe4_2_onclick = function(obj,e)
        {
        	this.Dataset4.setColumn(1, "FULL_NAME", "Nexacro");
        	var nType = this.Dataset4.getRowType(1);
        	trace("Update Rowtype: " + nType);
        	this.txtRtn2.set_value("Update Rowtype: " + nType);
        };

        // Exe 4-3
        this.btn_Exe4_3_onclick = function(obj,e)
        {
        	var sCurData = this.Dataset4.getColumn(1, "FULL_NAME");
        	var sOrgData = this.Dataset4.getOrgColumn(1, "FULL_NAME");
        	trace("Cur Data=" + sCurData + " : Org Data=" + sOrgData);
        	this.txtRtn2.set_value("Cur Data=" + sCurData + " : Org Data=" + sOrgData);
        };

        // Exe 4-4
        this.btn_Exe4_4_onclick = function(obj,e)
        {
        	var arrRow = [3,4,5];
        	this.Dataset4.deleteMultiRows(arrRow);
        };

        // Exe 4-5
        this.btn_Exe4_5_onclick = function(obj,e)
        {
        	var nDelCnt  = this.Dataset4.getDeletedRowCount();
        	var sDelData = this.Dataset4.getDeletedColumn(0, "FULL_NAME");
        	trace("Del Count=" + nDelCnt + " Del Data=" + sDelData);
        	this.txtRtn2.set_value("Del Count=" + nDelCnt + " Del Data=" + sDelData);

        // 	var arrDel = this.Dataset4.getDeletedRowset();
        // 	trace(arrDel[0]);

        };


        // Exe4 - Data Check
        this.btn_Exe4_Check_onclick = function(obj,e)
        {

        };

        // Exercise 5 ================================================================
        // Exe 5-1
        this.btn_Exe5_1_onclick = function(obj,e)
        {
        	this.Dataset5.copyData(this.Dataset4);
        	this.Grid5.createFormat();
        };

        // Exe 5-2
        this.btn_Exe5_2_onclick = function(obj,e)
        {
        	this.Dataset5.assign(this.Dataset4);
        	this.Grid5.createFormat();
        };

        // Exe 5-3
        this.btn_Exe5_3_onclick = function(obj,e)
        {
        	var nFromRow = this.Dataset4.findRow("EMPL_ID", "KR040");
        	var nToRow   = this.Dataset5.addRow();
        	this.Dataset5.copyRow(nToRow, this.Dataset4, nFromRow);
        };

        // Exe 5-4
        this.btn_Exe5_4_onclick = function(obj,e)
        {
        	var nFromRow = this.Dataset4.findRow("EMPL_ID", "KR210");
        	var nToRow   = this.Dataset5.addRow();
        	var sCol = "EMPL_ID=EMPL_ID, FULL_NAME=FULL_NAME";
        	this.Dataset5.copyRow(nToRow, this.Dataset4, nFromRow, sCol);
        };


        // Exercise 6 ================================================================
        this.Dataset6_cancolumnchange = function(obj,e)
        {
        	trace("cancolumnchange");
        };

        this.Dataset6_oncolumnchanged = function(obj,e)
        {
        	trace("oncolumnchanged");
        };

        // Exe 6-3
        this.btn_Exe6_3_onclick = function(obj,e)
        {
        	this.Dataset6.setColumn(0, "FULL_NAME", "Modify1");
        };

        // Exe 6-5
        this.btn_Exe6_5_onclick = function(obj,e)
        {
        	this.Dataset6.setColumn(1, "FULL_NAME", "Modify2");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Exe3_Filter.addEventHandler("onclick",this.btn_Exe3_Filter_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);
            this.btn_Exe4_1.addEventHandler("onclick",this.btn_Exe4_1_onclick,this);
            this.btn_Exe4_2.addEventHandler("onclick",this.btn_Exe4_2_onclick,this);
            this.btn_Exe4_3.addEventHandler("onclick",this.btn_Exe4_3_onclick,this);
            this.btn_Exe4_4.addEventHandler("onclick",this.btn_Exe4_4_onclick,this);
            this.btn_Exe4_5.addEventHandler("onclick",this.btn_Exe4_5_onclick,this);
            this.btn_Exe4_Check.addEventHandler("onclick",this.btn_Exe4_Check_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_2.addEventHandler("onclick",this.btn_Exe3_2_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_4.addEventHandler("onclick",this.btn_Exe3_4_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe2_3.addEventHandler("onclick",this.btn_Exe2_3_onclick,this);
            this.btn_Exe5_1.addEventHandler("onclick",this.btn_Exe5_1_onclick,this);
            this.btn_Exe5_2.addEventHandler("onclick",this.btn_Exe5_2_onclick,this);
            this.btn_Exe5_3.addEventHandler("onclick",this.btn_Exe5_3_onclick,this);
            this.btn_Exe5_4.addEventHandler("onclick",this.btn_Exe5_4_onclick,this);
            this.btn_Exe6_3.addEventHandler("onclick",this.btn_Exe6_3_onclick,this);
            this.btn_Exe6_5.addEventHandler("onclick",this.btn_Exe6_5_onclick,this);
            this.Dataset6.addEventHandler("cancolumnchange",this.Dataset6_cancolumnchange,this);
            this.Dataset6.addEventHandler("oncolumnchanged",this.Dataset6_oncolumnchanged,this);
        };

        this.loadIncludeScript("1_Exe_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
