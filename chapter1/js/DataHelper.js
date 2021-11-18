"use strict";
// 创建一个DataHelper类，负责操作localstorage
var DataHelper = /** @class */ (function () {
    // let dh = new DataHelper('plData','id');
    function DataHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    DataHelper.prototype.readData = function () {
        // 读取本地数据 根据dataKey
        var strData = localStorage.getItem(this.dataKey);
        // 将读取的json数组字符串转成数组对象
        // 返回数组对象
    };
    return DataHelper;
}());
