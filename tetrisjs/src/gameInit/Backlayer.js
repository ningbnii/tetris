var gameInit=gameInit||{};
gameInit.Backlayer=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(gameInit.Backlayer,F2xContainer);
gameInit.Backlayer.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("gameInit","backImage");
	Flash2x.d(_d0,{a:2.019,b:2.459});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
