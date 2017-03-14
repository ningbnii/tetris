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
    var Backlayer = (function (_super) {
        __extends(Backlayer, _super);
        function Backlayer() {
            var _this = _super.call(this) || this;
            _this.initUI();
            return _this;
        }
        Backlayer.prototype.initUI = function () {
            var s = this;
            var _d0 = Flash2x.s({ type: 0, data: "Eg7sBcqMAAAi5TMB3ZAAAMAAAC5Tg" }, { type: 0, color: "#000000" }, null);
            _d0.name = "_d0";
            Flash2x.d(_d0, { x: 382.1, y: 593 });
            s.addChild(_d0);
        };
        return Backlayer;
    }(F2xContainer));
    tetris.Backlayer = Backlayer;
})(tetris || (tetris = {}));
//# sourceMappingURL=Backlayer.js.map