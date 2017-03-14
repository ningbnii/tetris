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
    var GameInit = (function (_super) {
        __extends(GameInit, _super);
        function GameInit() {
            var _this = _super.call(this) || this;
            _this.initUI();
            return _this;
        }
        GameInit.prototype.initUI = function () {
            var s = this;
            var _d0 = new gameInit.Backlayer();
            _d0.name = "backlayer";
            s.backlayer = _d0;
            s.addChild(_d0);
        };
        return GameInit;
    }(F2xContainer));
    gameInit.GameInit = GameInit;
})(gameInit || (gameInit = {}));
//# sourceMappingURL=GameInit.js.map