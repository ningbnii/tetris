module gameInit{
	export class Backlayer extends F2xContainer{
		public constructor() {
			super();
			this.initUI();
		}
		
		/*f2x_auto_Create_params_start*//*f2x_auto_Create_params_end*/
		public initUI() {
			var s = this;
			//f2x_auto_created_init_start
			var _d0=Flash2x.b("gameInit","backImage");
			_d0.name="_d0";
			Flash2x.d(_d0,{a:2.019,b:2.459});
			s.addChild(_d0);
			//f2x_auto_created_init_end
			
		}
	}

}