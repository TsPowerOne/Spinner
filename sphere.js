"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@tspower/core");
var sfere = require("./sphere.styl");
var t = require("./templates");
var Spin_Sphere = /** @class */ (function () {
    function Spin_Sphere() {
        var temp = "<div class=\"spinner-container\" >" + t["sfere"] + "</div>";
        this.template = temp;
        this.html = core_1.htmlParse(temp);
        sfere.default;
    }
    return Spin_Sphere;
}());
exports.Spin_Sphere = Spin_Sphere;
