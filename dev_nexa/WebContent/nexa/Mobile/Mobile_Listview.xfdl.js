(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_movie", this);
            obj._setContents("<ColumnInfo><Column id=\"TITEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"STARRING\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"GENRE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"RUNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOVIE_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITEL\">Avatar</Col><Col id=\"STARRING\">Michelle Rodriguez, Sam Worthington, Sigourney Weaver</Col><Col id=\"YEAR\">2009</Col><Col id=\"SUMMARY\">Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth's energy crisis. Because Pandora's atmosphere is toxic, they have created the Avatar Program, in which human &quot;drivers&quot; have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na'vi female, Neytiri, saves Jake's life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake's relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world</Col><Col id=\"PRODUCTION\"> Twentieth Century Fox Film Corporation</Col><Col id=\"DIRECTOR\">James Cameron</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Fantasy</Col><Col id=\"RUNTIME\">162 min</Col><Col id=\"WRITER\">James Cameron</Col><Col id=\"SITE\">http://www.avatarmovie.com/</Col><Col id=\"MOVIE_IMG\">Images::m_avata.jpg</Col><Col id=\"GRADE\">9.07</Col></Row><Row><Col id=\"TITEL\">Titanic</Col><Col id=\"STARRING\">Kate Winslet, Leonardo DiCaprio</Col><Col id=\"YEAR\">1997</Col><Col id=\"SUMMARY\">A fictional romantic tale of a rich girl (Winslet) and a poor bohemian boy (DiCaprio) who meet on the ill-fated voyage of the 'unsinkable' ship.</Col><Col id=\"PRODUCTION\">Paramount Pictures</Col><Col id=\"RUNTIME\">194 min</Col><Col id=\"GENRE\">Drama, Romance</Col><Col id=\"DIRECTOR\">James Cameron</Col><Col id=\"WRITER\">James Cameron</Col><Col id=\"MOVIE_IMG\">Images::m_titanic.jpg</Col><Col id=\"GRADE\">9.86</Col></Row><Row><Col id=\"TITEL\">FROZEN</Col><Col id=\"STARRING\">Idina Menzel, Josh Gad, Kristen Bell</Col><Col id=\"SUMMARY\">Anna sets off on an epic journey—teaming up with rugged mountain man Kristoff and his loyal reindeer Sven—to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom</Col><Col id=\"YEAR\">2013</Col><Col id=\"PRODUCTION\"> Walt Disney Studios Motion Pictures</Col><Col id=\"DIRECTOR\">Chris Buck and Jennifer Lee</Col><Col id=\"GENRE\">Action, Adventure, Mystery, Thriller, Fantasy, Comedy, Romance, Animation, Family, Musical</Col><Col id=\"RUNTIME\">102 min</Col><Col id=\"SITE\">http://movies.disney.com/frozen</Col><Col id=\"WRITER\">Chris Buck and Dean Wellins</Col><Col id=\"MOVIE_IMG\">Images::m_frozen.jpg</Col><Col id=\"GRADE\">9.20</Col></Row><Row><Col id=\"TITEL\">Iron Man 3</Col><Col id=\"STARRING\">Don Cheadle, Guy Pearce, Gwyneth Paltrow, Robert Downey Jr.</Col><Col id=\"PRODUCTION\"> Walt Disney Studios Motion Pictures</Col><Col id=\"YEAR\">2013</Col><Col id=\"SUMMARY\">Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy’s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man?</Col><Col id=\"DIRECTOR\">Shane Black</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Thriller, Fantasy</Col><Col id=\"RUNTIME\">130 min</Col><Col id=\"WRITER\">Adi Granov</Col><Col id=\"SITE\">http://marvel.com/ironman3</Col><Col id=\"MOVIE_IMG\">Images::m_ironman.jpg</Col><Col id=\"GRADE\">8.86</Col></Row><Row><Col id=\"TITEL\">Star Wars</Col><Col id=\"PRODUCTION\"> Twentieth Century Fox Film Corporation</Col><Col id=\"STARRING\">Ewan McGregor, Liam Neeson, Natalie Portman</Col><Col id=\"YEAR\">1999</Col><Col id=\"SUMMARY\">Stranded on the desert planet Tatooine after rescuing young Queen Amidala from the impending invasion of Naboo, Jedi apprentice Obi-Wan Kenobi and his Jedi Master Qui-Gon Jinn discover nine-year-old Anakin Skywalker, a young slave unusually strong in the Force. Anakin wins a thrilling Podrace and with it his freedom as he leaves his home to be trained as a Jedi. The heroes return to Naboo where Anakin and the Queen face massive invasion forces while the two Jedi contend with a deadly foe named Darth Maul. Only then do they realize the invasion is merely the first step in a sinister scheme by the re-emergent forces of darkness known as the Sith.</Col><Col id=\"DIRECTOR\">George Lucas</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Fantasy</Col><Col id=\"RUNTIME\">136 min</Col><Col id=\"SITE\">http://www.starwars.com/films/star-wars-episode-i-the-phantom-menace</Col><Col id=\"WRITER\">George Lucas</Col><Col id=\"MOVIE_IMG\">Images::m_starwars.jpg</Col><Col id=\"GRADE\">7.80</Col></Row><Row><Col id=\"TITEL\">Inception</Col><Col id=\"STARRING\">Ellen Page, Joseph Gordon-Levitt, Ken Watanabe, Leonardo DiCaprio</Col><Col id=\"PRODUCTION\">Warner Bros. Pictures</Col><Col id=\"SUMMARY\">Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible—inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. This summer, your mind is the scene of the crime</Col><Col id=\"YEAR\">2010</Col><Col id=\"DIRECTOR\">Christopher Nolan</Col><Col id=\"GENRE\">Action, Sci-Fi, Drama, Mystery, Thriller</Col><Col id=\"RUNTIME\">148 min</Col><Col id=\"WRITER\">Christopher Nolan</Col><Col id=\"MOVIE_IMG\">Images::m_inception.jpg</Col><Col id=\"GRADE\">9.22</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","29","5","259","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Movie");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","4","45","470","645",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_movie");
            obj.set_scrolltype("vertical");
            obj.set_bandinitstatus("collapse");
            obj.set_border("0px none");
            obj.set_bandexpandtype("accordion");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"460\" height=\"160\" expandbartype=\"true\" expandbarsize=\"19 15\"><Cell id=\"Cell10\" left=\"150\" top=\"53\" width=\"65\" height=\"20\" displaytype=\"imagecontrol\" background=\"url('theme://images/WF_boomark_N.png') repeat-x\" border=\"0px none #dbdee2\"/><Cell id=\"Cell01\" left=\"150\" top=\"0\" width=\"170\" height=\"60\" text=\"bind:TITEL\" border=\"0px none #dbdee2\" font=\"normal bold 20px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell00\" left=\"0\" top=\"-2\" width=\"140\" height=\"163\" displaytype=\"imagecontrol\" text=\"bind:MOVIE_IMG\" border=\"0px none #dbdee2\" imagestretch=\"fixaspectratio\"/><Cell id=\"Cell02\" left=\"205\" top=\"77\" width=\"204\" height=\"25\" text=\"bind:DIRECTOR\" border=\"0px none #dbdee2\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell03\" left=\"150\" top=\"77\" width=\"74\" height=\"25\" text=\"감독\" border=\"0px none #dbdee2\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell04\" left=\"205\" top=\"106\" width=\"93\" height=\"25\" text=\"bind:RUNTIME\" border=\"0px none #dbdee2\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell05\" left=\"150\" top=\"106\" width=\"74\" height=\"25\" text=\"bind:YEAR\" border=\"0px none #dbdee2\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell06\" left=\"205\" top=\"134\" width=\"255\" height=\"25\" text=\"bind:GENRE\" border=\"0px none #dbdee2\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell07\" left=\"150\" top=\"134\" width=\"74\" height=\"25\" text=\"장르\" border=\"0px none #dbdee2\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell08\" left=\"224\" top=\"48\" width=\"64\" height=\"25\" text=\"bind:GRADE\" font=\"normal bold 13px/normal &quot;맑은 고딕&quot;\" border=\"0px none #dbdee2\"/><Cell id=\"Cell09\" left=\"150\" top=\"53\" width=\"65\" height=\"20\" displaytype=\"imagecontrol\" background=\"url('theme://images/WF_boomark_O.png') repeat-x\" border=\"0px none #dbdee2\"/><Cell id=\"Cell12\" left=\"150\" top=\"46\" width=\"310\" height=\"9\" border=\"2px solid #dbdee2,0px none #dbdee2,0px none #dbdee2\"/></Band><Band id=\"detail\" width=\"100%\" height=\"50%\"><Cell id=\"Cell02\" left=\"18\" top=\"6\" width=\"119\" height=\"39\" text=\"Production\" border=\"0px none #dbdee2\" font=\"normal bold 15px/normal &quot;맑은 고딕&quot;\"/><Cell id=\"Cell06\" left=\"120\" top=\"6\" width=\"320\" height=\"39\" text=\"bind:PRODUCTION\" border=\"0px none #dbdee2\" font=\"normal bold 15px/normal &quot;맑은 고딕&quot;\" textAlign=\"left\"/><Cell id=\"Cell07\" left=\"18\" top=\"50\" width=\"431\" height=\"270\" border=\"0px none #dbdee2\" font=\"normal 14px/normal &quot;맑은 고딕&quot;\" text=\"bind:SUMMARY\" displaytype=\"textareacontrol\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.st_title.set_taborder("0");
                p.st_title.set_text("Movie");
                p.st_title.getSetter("leftbase").set("");
                p.st_title.getSetter("topbase").set("");
                p.st_title.getSetter("bottombase").set("");
                p.st_title.getSetter("rightbase").set("");
                p.st_title.getSetter("widthbase").set("");
                p.st_title.getSetter("heightbase").set("");
                p.st_title.set_cssclass("sta_WF_emptitle");
                p.st_title.move("29","5","259","30",null,null);

                p.ListView00.set_taborder("1");
                p.ListView00.set_binddataset("ds_movie");
                p.ListView00.set_scrolltype("vertical");
                p.ListView00.set_bandinitstatus("collapse");
                p.ListView00.set_border("0px none");
                p.ListView00.set_bandexpandtype("accordion");
                p.ListView00.move("4","45","470","645",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","Phone_screen",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Listview.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.ds_movie.set_enableevent(false);
        	this.ListView00.set_enableredraw(false);
        	this.ListView00.set_enableevent(false);

        	for(var i=0; i<this.ds_movie.rowcount; i++){
        		var nBaseSize = this.ListView00.getCellProperty("body", "Cell10" , "width");
        		var nMaxValue = 10;
        		var nValue = this.ds_movie.getColumn(i, "GRADE");

        		var nSize = nBaseSize * nValue / nMaxValue;
        		this.ListView00.setCellProperty("body", "Cell09" , "width", nSize);
        	}

        	this.ds_movie.set_enableevent(true);
        	this.ListView00.set_enableredraw(true);
        	this.ListView00.set_enableevent(true);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.ds_movie.addEventHandler("onrowsetchanged",this.Dataset00_onrowsetchanged,this);
        };

        this.loadIncludeScript("Mobile_Listview.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
