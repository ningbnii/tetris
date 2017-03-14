var gameInit = gameInit || {};
gameInit.GameInit = function() {
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.map = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	console.log('123');
	//方块数据数组初始化
	nodeList = [];
	var i, j, nArr, bitmap;
	for (i = 0; i < s.map.length; i++) {
		nArr = [];
		for (j = 0; j < s.map[0].length; j++) {
			bitmap = new annie.Bitmap(new s.r1());
			bitmap.x = bitmap.width * j;
			bitmap.y = bitmap.height * i;
			s.addChild(bitmap);
			nArr[j] = {
				"index": -1,
				"value": 0,
				"bitmap": bitmap
			};
		}
		nodeList[i] = nArr;
	}

	console.log(nodeList);

};
F2xExtend(gameInit.GameInit, F2xContainer);
gameInit.GameInit.prototype.initUI = function() {
	var s = this;
	//f2x_auto_created_init_start
	var _d0 = new gameInit.Backlayer();
	_d0.name = "backlayer";
	s.backlayer = _d0;
	s.addChild(_d0);
	//f2x_auto_created_init_end

};