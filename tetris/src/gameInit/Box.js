var gameInit;
(function (gameInit) {
    var Box = (function () {
        function Box() {
            var self = this;
            var box1 = [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0]];
            self.box = [box1];
        }
        return Box;
    }());
    gameInit.Box = Box;
})(gameInit || (gameInit = {}));
//# sourceMappingURL=Box.js.map