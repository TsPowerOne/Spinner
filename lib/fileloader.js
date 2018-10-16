"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var core_1 = require("@tspower/core");
var http_1 = require("@tspower/http");
var FileLoader = /** @class */ (function () {
    function FileLoader(Root, multiple, Id, Class, Style) {
        var _this = this;
        this.Root = Root;
        this.multiple = multiple;
        this.Id = Id;
        this.Class = Class;
        this.Style = Style;
        this.clicked = new rxjs_1.Subject();
        this.changed = new rxjs_1.Subject();
        this.files = null;
        this.http = null;
        this.clicked$ = this.clicked.asObservable();
        this.changed$ = this.changed.asObservable();
        this.create = function () {
            var that = _this;
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            console.log(_this.multiple);
            if (_this.multiple)
                input.setAttribute("multiple", "multiple");
            input.addEventListener("click", function (event) {
                _this.clicked.next(true);
            });
            input.addEventListener("change", function (event) {
                var target = event.target;
                var files = target.files;
                _this.files = core_1.collToArray(files);
                _this.changed.next(_this.files);
            });
            if (_this.Id)
                input.setAttribute("id", _this.Id);
            if (_this.Class)
                input.setAttribute("class", _this.Class);
            if (_this.Style)
                input.setAttribute("style", _this.Style);
            _this.node = input;
            _this.Root.appendChild(input);
        };
        this.send = function (url, inputName) { return __awaiter(_this, void 0, void 0, function () {
            var Fdata;
            return __generator(this, function (_a) {
                Fdata = new FormData();
                Fdata.append(inputName, this.files[0]);
                return [2 /*return*/, this.http.make({
                        url: url,
                        method: "POST",
                        process: false,
                        data: Fdata
                    })];
            });
        }); };
        this.http = new http_1.Http();
        this.create();
    }
    return FileLoader;
}());
exports.FileLoader = FileLoader;
