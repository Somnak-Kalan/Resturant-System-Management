"use strict";
exports.__esModule = true;
<<<<<<< HEAD
exports.CalendarManager = void 0;
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.books = [];
    }
    CalendarManager.prototype.addEvent = function (book) {
        this.books.push(book);
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
=======
exports.CalendarManagers = void 0;
var CustomerBook_1 = require("./CustomerBook");
var CalendarManagers = /** @class */ (function () {
    function CalendarManagers() {
        this.books = [];
    }
    CalendarManagers.prototype.addBook = function () {
        var allBook = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allBook[_i] = arguments[_i];
        }
        this.books = this.books.concat(allBook);
    };
    CalendarManagers.prototype.addBookCheck = function (book) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var bookId = _a[_i];
            if (book[CustomerBook_1.roomID.roomID].getRoomId() !== bookId[CustomerBook_1.roomID.roomID].getRoomId()) {
                this.books.push(book);
                return bookId[CustomerBook_1.roomID.roomID];
            }
            ;
            return 'This room has been Order';
        }
    };
    CalendarManagers.prototype.getAllBooksByCustomer = function () {
        return this.books;
    };
    return CalendarManagers;
}());
exports.CalendarManagers = CalendarManagers;
>>>>>>> 4c8782a4b4d30fca48974c3f15db90c7675fe06c
