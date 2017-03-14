window.addEventListener("load", function () {
    annie.debug = false;
    var stage = new annie.Stage("annieEngine", 640, 1040, 30, annie.StageScaleMode.EXACT_FIT, 0);
    stage.addEventListener(annie.Event.INIT_TO_STAGE, function (e) {
        Flash2x.loadScene("tetris", function (per) {
            trace("加载进度:" + per + "%");
        }, function (result) {
            if (result.sceneId == result.sceneTotal) {
                stage.addChild(new tetris.Tetris());
            }
        });
    });
});
//# sourceMappingURL=Main.js.map