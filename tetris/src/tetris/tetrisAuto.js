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
    var F2xAuto_1 = (function (_super) {
        __extends(F2xAuto_1, _super);
        function F2xAuto_1() {
            var _this = _super.call(this) || this;
            _this.initUI();
            return _this;
        }
        F2xAuto_1.prototype.initUI = function () {
            var s = this;
            var _d1 = Flash2x.t(0, decodeURI("%E5%BC%80%E5%A7%8B%E6%B8%B8%E6%88%8F"), 50, "#FFFFFF", "Times New Roman", 0, 0, 200.2, 55.35, 52, "left", false, false, "multiline");
            _d1.name = "_d1";
            Flash2x.d(_d1, { x: 75.45, y: 27.35 });
            var _d0 = new tetris.F2xAuto_0();
            _d0.name = "_d0";
            Flash2x.d(_d0, { a: 0.8624 });
            s.addChild(_d0);
            s.addChild(_d1);
        };
        return F2xAuto_1;
    }(F2xContainer));
    tetris.F2xAuto_1 = F2xAuto_1;
    var F2xAuto_0 = (function (_super) {
        __extends(F2xAuto_0, _super);
        function F2xAuto_0() {
            var _this = _super.call(this) || this;
            _this.initUI();
            return _this;
        }
        F2xAuto_0.prototype.initUI = function () {
            var s = this;
            var _d0 = Flash2x.s({ type: 0, data: "EghbgIlMBC3AAAIAARLMhC3AAAg" }, null, { type: 0, color: "#FFFFFF", lineWidth: 1, caps: "round", joints: "round", miter: "10" });
            _d0.name = "_d0";
            Flash2x.d(_d0, { x: 213.9, y: 55.02 });
            s.addChild(_d0);
        };
        return F2xAuto_0;
    }(F2xContainer));
    tetris.F2xAuto_0 = F2xAuto_0;
})(tetris || (tetris = {}));
//# sourceMappingURL=tetrisAuto.js.map