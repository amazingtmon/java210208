(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Sample");
            this.set_titletext("Form Sample");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,596);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"COL_CHK\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"BIRTH_DAY\">19890325</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Elsa@nexacro.com</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"BIRTH_DAY\">19700122</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"BIRTH_DAY\">19781222</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Ted </Col><Col id=\"EMPL_ID\">CN210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Ted@nexacro.com</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"BIRTH_DAY\">19640204</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Diana</Col><Col id=\"EMPL_ID\">JP020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Diana@nexacro.com</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"BIRTH_DAY\">19720513</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Issac</Col><Col id=\"EMPL_ID\">CN010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Issac@nexacro.com</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"BIRTH_DAY\">19940512</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Henry </Col><Col id=\"EMPL_ID\">CN220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Henry@nexacro.com</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"BIRTH_DAY\">19970926</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"BIRTH_DAY\">19861119</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"BIRTH_DAY\">19790318</Col><Col id=\"WEDD_DAY\">20050203</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">3000</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Dennis </Col><Col id=\"EMPL_ID\">JP130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Dennis@nexacro.com</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"BIRTH_DAY\">19600427</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Max </Col><Col id=\"EMPL_ID\">CN020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Max@nexacro.com</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"BIRTH_DAY\">19691021</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6800</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"BIRTH_DAY\">19700302</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">8600</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"BIRTH_DAY\">19890618</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">7700</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"BIRTH_DAY\">19760227</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lexy</Col><Col id=\"EMPL_ID\">JP040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Lexy@nexacro.com</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"BIRTH_DAY\">19780808</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lucy</Col><Col id=\"EMPL_ID\">JP050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Lucy@nexacro.com</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"BIRTH_DAY\">19770924</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"BIRTH_DAY\">19800206</Col><Col id=\"WEDD_DAY\">20050407</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Juliana</Col><Col id=\"EMPL_ID\">JP110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Juliana@nexacro.com</Col><Col id=\"PHONE_NO\">0108234435</Col><Col id=\"BIRTH_DAY\">19610312</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"BIRTH_DAY\">19641212</Col><Col id=\"WEDD_DAY\">19880623</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">900</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"PHONE_NO\">0108230482</Col><Col id=\"BIRTH_DAY\">19751109</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Maria</Col><Col id=\"EMPL_ID\">JP030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Maria@nexacro.com</Col><Col id=\"PHONE_NO\">0105053225</Col><Col id=\"BIRTH_DAY\">19810531</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Eddy</Col><Col id=\"EMPL_ID\">JP010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Eddy@nexacro.com</Col><Col id=\"PHONE_NO\">0107218351</Col><Col id=\"BIRTH_DAY\">19731019</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Sarah</Col><Col id=\"EMPL_ID\">JP120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Sarah@nexacro.com</Col><Col id=\"PHONE_NO\">0105784137</Col><Col id=\"BIRTH_DAY\">19821130</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"BIRTH_DAY\">19790905</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Noel </Col><Col id=\"EMPL_ID\">CN030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">400</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Noel@nexacro.com</Col><Col id=\"PHONE_NO\">0104794523</Col><Col id=\"BIRTH_DAY\">19970717</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Arnold</Col><Col id=\"EMPL_ID\">CN240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Arnold@nexacro.com</Col><Col id=\"PHONE_NO\">0102255131</Col><Col id=\"BIRTH_DAY\">19920531</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Alex </Col><Col id=\"EMPL_ID\">CN230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Alex@nexacro.com</Col><Col id=\"PHONE_NO\">0106638982</Col><Col id=\"BIRTH_DAY\">19730718</Col><Col id=\"WEDD_DAY\">20010602</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"PHONE_NO\">0109863248</Col><Col id=\"BIRTH_DAY\">19730621</Col><Col id=\"WEDD_DAY\">20090305</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Steven </Col><Col id=\"EMPL_ID\">CN050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Steven@nexacro.com</Col><Col id=\"PHONE_NO\">0103786348</Col><Col id=\"BIRTH_DAY\">19661021</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Donald </Col><Col id=\"EMPL_ID\">JP140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Donald@nexacro.com</Col><Col id=\"PHONE_NO\">0108208010</Col><Col id=\"BIRTH_DAY\">19840814</Col><Col id=\"WEDD_DAY\">20180201</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Ray </Col><Col id=\"EMPL_ID\">CN040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Ray@nexacro.com</Col><Col id=\"PHONE_NO\">0101330259</Col><Col id=\"BIRTH_DAY\">19930402</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CODE\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CODE\">10</Col><Col id=\"POS_NAME\">Manager</Col></Row><Row><Col id=\"POS_CODE\">20</Col><Col id=\"POS_NAME\">Staff</Col></Row><Row><Col id=\"POS_CODE\">30</Col><Col id=\"POS_NAME\">Intern</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_filter", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">Fix</Col><Col id=\"MENU_NAME\">Fix</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">FixCancel</Col><Col id=\"MENU_NAME\">Fix Cancel</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">Hide</Col><Col id=\"MENU_NAME\">Hide</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">HideCancel</Col><Col id=\"MENU_NAME\">Hide Cancel</Col><Col id=\"LEVEL\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corpDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Sample");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","40",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WFSA");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","394","40","31","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Sort");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_type","Static01:10","40","334","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_type_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_type_innerdataset", obj);
            div_search_form_rdo_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Default</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">Corp, Dept</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">Empl</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_type_innerdataset);
            obj.set_text("Default");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","10","40","76","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("Filter");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_col","85","40","100","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_filter");
            obj.set_codecolumn("COL_ID");
            obj.set_datacolumn("COL_ID");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_value","245","40","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_filter","340","40","43","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Filter");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_type","190","40","50","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_type_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_type_innerdataset", obj);
            div_search_form_cmb_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">==</Col><Col id=\"datacolumn\">==</Col></Row><Row><Col id=\"codecolumn\">!=</Col><Col id=\"datacolumn\">!=</Col></Row><Row><Col id=\"codecolumn\">&gt;</Col><Col id=\"datacolumn\">&gt;</Col></Row><Row><Col id=\"codecolumn\">&lt;</Col><Col id=\"datacolumn\">&lt;</Col></Row><Row><Col id=\"codecolumn\">like</Col><Col id=\"datacolumn\">like</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_type_innerdataset);
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10","5","76","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("Corp/Dept");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","Static03:0","5","132","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","cmb_corp:5","5","153","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_detail","727","5","21","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_icon("URL(\"Images::img_btn_collapse.png\")");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_padding("0px 0px 0px 5px");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","117",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"106\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"Corp.\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"ID\"/><Cell col=\"5\" text=\"Name\"/><Cell col=\"6\" text=\"Position\"/><Cell col=\"7\" text=\"Hire Date\"/><Cell col=\"8\" text=\"Salary\"/><Cell col=\"9\" text=\"Bonus\"/><Cell col=\"10\" text=\"Per(%)\"/><Cell col=\"11\" text=\"Gender\"/><Cell col=\"12\" text=\"Married\"/><Cell col=\"13\" text=\"Wedd Day\"/><Cell col=\"14\" text=\"Phone No\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\"/><Cell col=\"1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CORP_CODE\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" text=\"bind:EMPL_ID\"/><Cell col=\"5\" text=\"bind:FULL_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:POS_CODE\"/><Cell col=\"7\" text=\"bind:HIRE_DATE\"/><Cell col=\"8\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:BONUS\" textAlign=\"right\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"bind:MARRIED\"/><Cell col=\"13\" text=\"bind:WEDD_DAY\"/><Cell col=\"14\" text=\"bind:PHONE_NO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" textAlign=\"right\"/><Cell col=\"9\" textAlign=\"right\"/><Cell col=\"10\" textAlign=\"right\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format><Format id=\"default_E\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"Phote\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Corp.\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" rowspan=\"2\" text=\"Per&#13;&#10;(%)\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Phone No\"/><Cell row=\"1\" col=\"2\" text=\"ID\"/><Cell row=\"1\" col=\"3\" text=\"Department\"/><Cell row=\"1\" col=\"4\" text=\"Hire Date\"/><Cell row=\"1\" col=\"5\" text=\"Bonus\"/><Cell row=\"1\" col=\"7\" text=\"Married\"/><Cell row=\"1\" col=\"8\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:IMG_URL\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:CORP_CODE\" displaytype=\"combotext\" combodataset=\"ds_corp\" combodatacol=\"CORP_NAME\" combocodecol=\"CORP_CODE\"/><Cell col=\"4\" text=\"bind:POS_CODE\" displaytype=\"combotext\" combodataset=\"ds_pos\" combocodecol=\"POS_CODE\" combodatacol=\"POS_NAME\"/><Cell col=\"5\" text=\"bind:SALARY\" edittype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"mask\" maskeditlimitbymask=\"integer\"/><Cell col=\"6\" rowspan=\"2\" text=\"expr:Math.round(BONUS/SALARY*100) + &quot;%&quot;\" progressbarsmooth=\"true\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Images::img_gender_m.png&quot; : &quot;Images::img_gender_w.png&quot;\"/><Cell col=\"8\" text=\"bind:PHONE_NO\" edittype=\"text\" editinputtype=\"digit\" editmaxlength=\"0\"/><Cell row=\"1\" col=\"2\" text=\"bind:EMPL_ID\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell row=\"1\" col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" suppress=\"0\"/><Cell row=\"1\" col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"5\" text=\"bind:BONUS\" maskeditformat=\"#,###\" edittype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"7\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"8\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("pMnu_menu","812","185","220","100",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btn_ret","367","8","97","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Retrieve");
            obj.set_textPadding("0px 0px 0px 5px");
            obj.set_icon("URL(\"Images::img_btn_retrieve.png\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","btn_ret:5","8","69","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Add");
            obj.set_icon("URL(\"Images::img_btn_add.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","btn_add:5","8","86","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Delete");
            obj.set_icon("URL(\"Images::img_btn_del.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_del:5","8","76","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Save");
            obj.set_icon("URL(\"Images::img_btn_save.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","714","8","76","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Close");
            obj.set_icon("URL(\"Images::img_btn_close.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDiv_corpDept","812","18","300","160",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_border("3px solid olive");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_corpDept","5","4",null,null,"5","5",null,null,null,null,this.pDiv_corpDept.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_corpDept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"64\"/><Column size=\"114\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Corp\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.pDiv_corpDept.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,596,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Sample.xfdl", function() {

        // Form Onload
        this.Exe_Sample_onload = function(obj,e)
        {
        	this.div_search.form.set_scrolltype("none");
            this.fn_setFilterColID()
            this.fn_compList(this);
        };


        //Search Button Form-1) Corp, Dept Combo Filter
        //참조 : Exe_Dataset.xfdl  ->  Exe3_4 문제
        this.div_search_cmb_corp_onitemchanged = function(obj,e)
        {

        };

        //Search Button Form-2) Column Filter ( ==, >=, <=, like )
        // Dataset ColumnID
        //참조 : Exe_Grid.xfdl  ->  Exe1_3 문제
        this.fn_setFilterColID = function()
        {

        }

        //Search Button Form-2) Column Filter Button
        //참조 : Exe_Dataset.xfdl  ->  Exe3_4문제 ,   btn_Exe3_Filter_onclick 이벤트 :like 검색
        this.div_search_btn_filter_onclick = function(obj,e)
        {

        };

        //Search Button Form-3) Search Area Expand/Collapse
        this.div_search_btn_detail_onclick = function(obj,e)
        {
            var nSize1 = 38;
            var nSize2 = 72;
            var nHeight = this.div_search.height;
            nHeight = (nHeight == nSize1 ? nSize2 : nSize1);
        	this.div_search.set_height(nHeight);

            var sIcon1 = "Images::img_btn_expand.png";
            var sIcon2 = "Images::img_btn_collapse.png";
            var sMarker = this.div_search.form.btn_detail.icon;
            sMarker = (sMarker == sIcon1 ? sIcon2 : sIcon1);
            this.div_search.form.btn_detail.set_icon(sMarker);

        };

        //Search Button Form-4) Data Sort - Corp,Dept / FULL_NAME
        //참조 : Exe_dataset.xfdl  -> Exe3_3 문제 : keyString
        this.div_search_rdo_type_onitemchanged = function(obj,e)
        {
            //Sort: Corp,Dept
            //formatid:"default"
            if(e.postvalue == "D"){

            }
            //Sort: Empl
            //formatid:"default_E"
            else if(e.postvalue == "E"){

            }
            //Sort: Default
            //formatid:"default"
            else{

            }
        };

        //Search Button Form - Add
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.insertRow(this.ds_emp.rowposition);
        };

        //Search Button Form-5) - Delete
        //참조 : Exe_Dataset.xfdl  ->  Exe4_4 문제 : deleteMultiRows
        this.btn_del_onclick = function(obj,e)
        {
            // Delete Row
            // var nRow = this.ds_emp.findRow("COL_CHK", "1");
            // this.ds_emp.deleteRow(nRow);

            // Delete Meulti Rows

        };


        //Search Button Form-6) - Save
        //참조 : Exe_Dataset.xfdl  ->  Dataset6_cancolumnchange 이벤트
        this.btn_save_onclick = function(obj,e)
        {
            for(var i=0; i<this.ds_emp.rowcount; i++){
                var sID = this.ds_emp.getColumn(i, "EMPL_ID");


            }
        };

        //Search Button Form-7) - Close
        //참조 : Exe_Dataset.xfdl  ->  btn_Exe4_Check_onclick 이벤트
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        	//var sRtn = this.fn_dataCheck();
        };

        this.fn_dataCheck = function()
        {

            return false;
        };

        //Search Button Form-8) Component Event Set
        //참조 : Exe_Form.xfdl  ->  fn_compList 이벤트
        this.fn_compList = function(pObj)
        {

        }

        //Grid-1) CheckBox Select ALL
        //참조 : Exe_Grid.xfdl ->  Grid1_onheadclick 이벤트
        this.grd_emp_onheadclick = function(obj,e)
        {

        };

        //Grid-2) Corp Dept Multi Combo
        //참조 : Exe_Div_PopupDiv.xfdl  ->  Exe1_1 문제 :trackPopupByComponent
        this.grd_emp_oncellclick = function(obj,e)
        {
        	if(sColID == "CORP_CODE" && e.fromreferenceobject.id == "dropbutton"){

        	}
        };

        //Grid-2) PopupDiv Return
        //참조 : Exe_Div_PopupDiv.xfdl ->  PopupDiv1_btn_Exe1_Close_onclick 이벤트
        this.pDiv_corpDept_grd_corpDept_oncelldblclick = function(obj,e)
        {

        };

        //Grid-3) Expand Button - Popup Open
        //참조 : Exe_Form.xfdl   Exe3_1 문제 :showModal
        this.grd_emp_onexpandup = function(obj,e)
        {
            var objChildFrame = new ChildFrame();
                objChildFrame.init();

                objChildFrame.set_dragmovetype("all");
                objChildFrame.set_openalign("center middle");
                objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

                var sCorp = this.ds_emp.getColumn(this.ds_emp.rowposition, "CORP_CODE");
                var sDept = this.ds_emp.getColumn(this.ds_emp.rowposition, "DEPT_CODE");
                var objParam = {};

        };

        //참조 : Exe_Form.xfdl  -> Exe3_1 콜백함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined || strReturn == ""){
        		return;
        	}

        };

        // Duplication Check
        //참조 : Exe_Dataset.xfdl  -> Dataset6_cancolumnchange 이벤트
        this.ds_emp_cancolumnchange = function(obj,e)
        {

        };

        //Grid-4 Detail Open
        //참조 : Exe_Form.xfdl  ->  Exe3_3 문제 :open
        this.grd_emp_oncelldblclick = function(obj,e)
        {
        	var nW = 380;
        	var nH = 200;
        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "showtitlebar=true showstatusbar=false "
        	               + "resizable=true autosize=false titletext=Emp Detail";

        	var objParam = { param1:this.ds_emp
                           , parma2:this.ds_emp.rowposition };

        };

        //Grid-5 PopupMenu Fix, Hide
        //참조 : Exe_Grid.xfdl   ->  Exe3_2 ~ Exe3_5 문제
        this.grd_emp_onrbuttonup = function(obj,e)
        {
            var objApp = nexacro.getApplication();
        	var x = nexacro.toNumber(nexacro.System.getCursorX())-nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));
        	var y = nexacro.toNumber(nexacro.System.getCursorY())-nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0));

        };


        //참조 : Exe_Grid.xfdl  ->  Exe3_2 ~ Exe3_5 문제
        this.grd_emp.arrHide = [];
        this.pMnu_menu_onmenuclick = function(obj,e)
        {
            if(e.id == "Fix"){

            }
            else if(e.id == "FixCancel"){

            }
            else if(e.id == "Hide"){

            }
            else if(e.id == "HideCancel"){

            }
        };


        // Sort Function Sample -  Grid Head Click
        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;
        this.fn_sort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;
            var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = obj.getCellText(-1, e.cell);

        	if(sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        		objDs.set_keystring("S:-" + sColId[1]);
        	}
        	else if(sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}
        	else{
        		obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}

        	if(this.nPrevCell > -1 && this.nPrevCell != e.cell){
        		var sPrevText = obj.getCellText(-1, this.nPrevCell);
        		obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.substr(0, sPrevText.length - 1));
        	}

        	this.nPrevCell = e.cell;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Exe_Sample_onload,this);
            this.div_search.form.rdo_type.addEventHandler("onitemchanged",this.div_search_rdo_type_onitemchanged,this);
            this.div_search.form.btn_filter.addEventHandler("onclick",this.div_search_btn_filter_onclick,this);
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.div_search.form.btn_detail.addEventHandler("onclick",this.div_search_btn_detail_onclick,this);
            this.grd_emp.addEventHandler("oncelldblclick",this.grd_emp_oncelldblclick,this);
            this.grd_emp.addEventHandler("onexpandup",this.grd_emp_onexpandup,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.grd_emp.addEventHandler("oncellclick",this.grd_emp_oncellclick,this);
            this.grd_emp.addEventHandler("onrbuttonup",this.grd_emp_onrbuttonup,this);
            this.pMnu_menu.addEventHandler("onmenuclick",this.pMnu_menu_onmenuclick,this);
            this.btn_ret.addEventHandler("onclick",this.btn_ret_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.pDiv_corpDept.form.grd_corpDept.addEventHandler("oncelldblclick",this.pDiv_corpDept_grd_corpDept_oncelldblclick,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_filter.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_filter.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_filter.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Exe_Sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
