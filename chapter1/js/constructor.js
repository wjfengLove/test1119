"use strict";
var City = /** @class */ (function () {
    // 构造函数
    function City(name, level) {
        this.cName = '';
        this.cLevel = 1;
        this.cName = name;
        this.cLevel = level;
    }
    // 成员方法
    City.prototype.about = function () {
        console.log("\u6B22\u8FCE\u6765\u5230" + this.cName + ",\u8FD9\u91CC\u5DE5\u4F5C\u73AF\u5883\u7CFB\u6570\u4E3A\uFF1A" + this.cLevel);
    };
    return City;
}());
// 创建对象
var c1 = new City('绿城', 8);
c1.about();
