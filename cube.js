"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@tspower/core");
var cubi = require("./cube.styl");
var t = require("./templates");
var Spin_Cube = /** @class */ (function () {
    function Spin_Cube() {
        var temp = "<div class=\"sk-cube-container\" >" + t["cubi"] + "</div>";
        this.template = temp;
        this.html = core_1.htmlParse(temp);
        cubi.default;
    }
    return Spin_Cube;
}());
exports.Spin_Cube = Spin_Cube;
