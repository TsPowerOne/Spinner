"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@tspower/core");
var cubi = require("./cubi.styl");
var t = require("./templates");
var Spin_Cube = /** @class */ (function () {
    function Spin_Cube() {
        this.template = t["cubi"];
        this.html = core_1.htmlParse(t["cubi"]);
        cubi.default;
    }
    return Spin_Cube;
}());
exports.Spin_Cube = Spin_Cube;
