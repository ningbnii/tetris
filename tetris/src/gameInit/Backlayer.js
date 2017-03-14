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
var gameInit;
(function (gameInit) {
    var Backlayer = (function (_super) {
        __extends(Backlayer, _super);
        function Backlayer() {
            var _this = _super.call(this) || this;
            _this.initUI();
            return _this;
        }
        Backlayer.prototype.initUI = function () {
            var s = this;
            var _d0 = Flash2x.b("gameInit", "backImage");
            _d0.name = "_d0";
            Flash2x.d(_d0, { a: 2.019, b: 2.459 });
            s.addChild(_d0);
        };
        return Backlayer;
    }(F2xContainer));
    gameInit.Backlayer = Backlayer;
})(gameInit || (gameInit = {}));
//# sourceMappingURL=Backlayer.js.map