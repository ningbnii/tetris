module tetris{
	export class Tetris extends F2xContainer{
		public constructor() {
			super();
			this.initUI();
			this.init();
		}

		public init(){
			let s = this;
			s.start_btn.addEventListener(annie.MouseEvent.CLICK, function () {
				Flash2x.loadScene('gameInit',null,function (e) {
					s.stage.addChild(new gameInit.GameInit())
					s.stage.removeChild(s);
				});

			})
		}
		
		/*f2x_auto_Create_params_start*/public start_btn:F2xAuto_1;public backlayer:Backlayer;/*f2x_auto_Create_params_end*/
		public initUI() {
			var s = this;
			//f2x_auto_created_init_start
			var _d3=new tetris.F2xAuto_1();
			_d3.name="start_btn";
			s.start_btn=_d3;
			Flash2x.d(_d3,{x:135.5,y:465});
			var _d2=Flash2x.t(0,decodeURI("%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97"),50,"#FFFFFF","Times New Roman",0,0,250.2,55.35,52,"left",false,false,"multiline");
			_d2.name="_d2";
			Flash2x.d(_d2,{x:187.95,y:336.8});
			var _d1=Flash2x.t(0,decodeURI("%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97"),20,"#000000","Times New Roman",0,0,100.2,22.15,22,"left",false,false,"multiline");
			_d1.name="_d1";
			Flash2x.d(_d1,{x:210.85,y:353.4});
			var _d0=new tetris.Backlayer();
			_d0.name="backlayer";
			s.backlayer=_d0;
			Flash2x.d(_d0,{a:0.8375,b:0.8769});
			s.addChild(_d0);
			s.addChild(_d1);
			s.addChild(_d2);
			s.addChild(_d3);
			//f2x_auto_created_init_end
			
		}
	}

}