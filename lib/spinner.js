"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = require("./templates");
var core_1 = require("@tspower/core");
var stilesfere = require("./sfere.styl");
stilesfere.default;
var spinner = /** @class */ (function () {
    function spinner(name) {
        switch (name) {
            case 'sfere':
                this.html = core_1.htmlParse(templates_1.sfere);
                this.template = templates_1.sfere;
                break;
        }
    }
    return spinner;
}());
exports.spinner = spinner;
