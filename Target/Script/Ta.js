"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var DOM_js_1 = require("../Library/DOM.js");
var refresh = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clearInterval(window.interval);
        window.interval = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clearInterval(window.interval);
                        return [4 /*yield*/, DOM_js_1.default.getElement(".js-column")];
                    case 1:
                        (_a.sent()).forEach(function (el) { return __awaiter(void 0, void 0, void 0, function () {
                            var focus, length, id;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, DOM_js_1.default.getElement(".js-stream-item", el)];
                                    case 1:
                                        focus = _a.sent();
                                        length = focus.length;
                                        id = Math.floor(Math.random() * length);
                                        return [4 /*yield*/, DOM_js_1.default.getElement(".btd-content-warning", focus.item(id))];
                                    case 2:
                                        if (!((_a.sent())
                                            .length === 0)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, DOM_js_1.default.getElement(".js-stream-item-content", focus.item(id))];
                                    case 3:
                                        (_a.sent()).forEach(function (el) { return __awaiter(void 0, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                el === null || el === void 0 ? void 0 : el.click();
                                                return [2 /*return*/];
                                            });
                                        }); });
                                        _a.label = 4;
                                    case 4:
                                        setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var focus;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, DOM_js_1.default.getElement(".js-column-back")];
                                                    case 1:
                                                        focus = _a.sent();
                                                        focus.forEach(function (el) {
                                                            el === null || el === void 0 ? void 0 : el.click();
                                                        });
                                                        return [4 /*yield*/, refresh()];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 24000 + Math.floor(Math.random() * length * 1000));
                                        setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var focus;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, DOM_js_1.default.getElement(".column-type-icon")];
                                                    case 1:
                                                        focus = _a.sent();
                                                        focus.forEach(function (el) {
                                                            el === null || el === void 0 ? void 0 : el.click();
                                                        });
                                                        return [4 /*yield*/, refresh()];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 24000 + Math.floor(Math.random() * length * 1000));
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); }, 30000);
        return [2 /*return*/];
    });
}); };
setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DOM_js_1.default.getElement(".btd-clear-column-link")];
            case 1: return [2 /*return*/, (_a.sent()).forEach(function (el) {
                    el === null || el === void 0 ? void 0 : el.click();
                })];
        }
    });
}); }, 55000);
setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
    var translations, index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, DOM_js_1.default.getElement(".js-translate-call-to-action")];
            case 1:
                translations = _a.sent();
                index = 0;
                translations.forEach(function (el) {
                    if (index <= 5) {
                        el === null || el === void 0 ? void 0 : el.click();
                        index++;
                    }
                });
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DOM_js_1.default.getElement(".js-tweet-detail.tweet-detail-wrapper .js-tweet-translation-text.tweet-translation-text")];
                            case 1: return [2 /*return*/, (_a.sent()).forEach(function (el) {
                                    var position = el.getBoundingClientRect();
                                    if (position.top >= 0 &&
                                        position.bottom <= window.innerHeight) {
                                        el.scrollIntoView();
                                    }
                                })];
                        }
                    });
                }); }, 3000);
                return [2 /*return*/];
        }
    });
}); }, 15000);
await refresh();
