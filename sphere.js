"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@tspower/core");
var sfere = require("./sphere.styl");
var t = require("./templates");
var Spin_Sphere = /** @class */ (function () {
    function Spin_Sphere() {
        this.template = t["sfere"];
        this.html = core_1.htmlParse(t["sfere"]);
        sfere.default;
    }
    return Spin_Sphere;
}());
exports.Spin_Sphere = Spin_Sphere;
