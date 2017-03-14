module gameInit{
	export class GameInit extends F2xContainer{
		public constructor() {
			super();
			this.initUI();
		}
		
		/*f2x_auto_Create_params_start*/public backlayer:Backlayer;/*f2x_auto_Create_params_end*/
		public initUI() {
			var s = this;
			//f2x_auto_created_init_start
			var _d0=new gameInit.Backlayer();
			_d0.name="backlayer";
			s.backlayer=_d0;
			s.addChild(_d0);
			//f2x_auto_created_init_end
			
		}
	}

}