module tetris{
export class F2xAuto_1 extends F2xContainer{
		public constructor() {
			super();
			this.initUI();
		}
		
		/*f2x_auto_Create_params_start*//*f2x_auto_Create_params_end*/
		public initUI() {
			var s = this;
			var _d1=Flash2x.t(0,decodeURI("%E5%BC%80%E5%A7%8B%E6%B8%B8%E6%88%8F"),50,"#FFFFFF","Times New Roman",0,0,200.2,55.35,52,"left",false,false,"multiline");
			_d1.name="_d1";
			Flash2x.d(_d1,{x:75.45,y:27.35});
			var _d0=new tetris.F2xAuto_0();
			_d0.name="_d0";
			Flash2x.d(_d0,{a:0.8624});
			s.addChild(_d0);
			s.addChild(_d1);
		}
	}

	export class F2xAuto_0 extends F2xContainer{
		public constructor() {
			super();
			this.initUI();
		}
		
		/*f2x_auto_Create_params_start*//*f2x_auto_Create_params_end*/
		public initUI() {
			var s = this;
			var _d0=Flash2x.s({type:0,data:"EghbgIlMBC3AAAIAARLMhC3AAAg"},null,{type:0,color:"#FFFFFF",lineWidth:1,caps:"round",joints:"round",miter:"10"});
			_d0.name="_d0";
			Flash2x.d(_d0,{x:213.9,y:55.02});
			s.addChild(_d0);
		}
	}

	}