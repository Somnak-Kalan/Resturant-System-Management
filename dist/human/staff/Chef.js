"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Chef = void 0;
var Staff_1 = require("./Staff");
/**
 * A nurse manage patient checks
 */
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(name, age, category, gender) {
        return _super.call(this, name, age, category, gender, Staff_1.Salary.CHEIF_SALARY) || this;
    }
    return Chef;
}(Staff_1.Staff));
exports.Chef = Chef;