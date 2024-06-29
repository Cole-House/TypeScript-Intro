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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//we are creating a menu, and a class for each item on menu
// We are going to try use decorators to assign ids to our classes 
function MenuItem(value) {
    //since this decorator is being applied to a class, it must also return a class as its VALUE
    //whatever is returned here will be applied to the classes that are being decorated. Here we are setting the ids for the classs to abc
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = "abc";
            return _this;
        }
        return class_1;
    }(value));
}
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza = __decorate([
        MenuItem //you mount a decorator ON TOP of the class as so
    ], Pizza);
    return Pizza;
}());
var Burger = /** @class */ (function () {
    function Burger() {
    }
    return Burger;
}());
console.log(new Pizza().id);
