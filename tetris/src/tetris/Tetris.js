var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tetris;
(function (tetris) {
    var Tetris = (function (_super) {
        __extends(Tetris, _super);
        function Tetris() {
            var _this = _super.call(this) || this;
            _this.initUI();
            _this.init();
            var num = 7 * Math.random();
            console.log(num);
            return _this;
        }
        Tetris.prototype.init = function () {
            var s = this;
            s.start_btn.addEventListener(annie.MouseEvent.CLICK, function () {
                Flash2x.loadScene('gameInit', null, function (e) {
                    s.stage.addChild(new gameInit.GameInit());
                    s.stage.removeChild(s);
                });
            });
        };
        Tetris.prototype.initUI = function () {
            var s = this;
            var _d3 = new tetris.F2xAuto_1();
            _d3.name = "start_btn";
            s.start_btn = _d3;
            Flash2x.d(_d3, { x: 135.5, y: 465 });
            var _d2 = Flash2x.t(0, decodeURI("%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97"), 50, "#FFFFFF", "Times New Roman", 0, 0, 250.2, 55.35, 52, "left", false, false, "multiline");
            _d2.name = "_d2";
            Flash2x.d(_d2, { x: 187.95, y: 336.8 });
            var _d1 = Flash2x.t(0, decodeURI("%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97"), 20, "#000000", "Times New Roman", 0, 0, 100.2, 22.15, 22, "left", false, false, "multiline");
            _d1.name = "_d1";
            Flash2x.d(_d1, { x: 210.85, y: 353.4 });
            var _d0 = new tetris.Backlayer();
            _d0.name = "backlayer";
            s.backlayer = _d0;
            Flash2x.d(_d0, { a: 0.8375, b: 0.8769 });
            s.addChild(_d0);
            s.addChild(_d1);
            s.addChild(_d2);
            s.addChild(_d3);
        };
        return Tetris;
    }(F2xContainer));
    tetris.Tetris = Tetris;
})(tetris || (tetris = {}));
//# sourceMappingURL=Tetris.js.map