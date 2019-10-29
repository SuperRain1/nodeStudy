//typescript中的接口
//1.属性类的接口
// 对参数进行约束
// function printLabel(label:string):void {
//     console.log(label)
// }
// printLabel('李云龙')
// 对json的约束
// function printLabel(labelInfo:{label:string}):void {
//     console.log(labelInfo)
// }
// let myObj = {size:10,label:'Size 10 Object'}
// printLabel(myObj)
//对批量方法传入参数进行约束----->接口
// interface FullName{
//     //必须传入对象:firstName  secondName
//     firstName:string;
//     secondName:string;
// }
// function printName(name:FullName) {
//     console.log(name.firstName + name.secondName)
// }
// function printInfo(name:FullName) {
//     console.log(name.firstName + name.secondName)
// }
// let obj = {//对象中可以包含别的参数
//     age:20,
//     firstName:'李',
//     secondName:'云龙'
// }
// printName(obj)//如果直接写这儿，则只能包含约束的参数。
// printInfo(obj)
//接口：可选属性（?）
// interface FullName {
//     firstName:string;
//     secondName?:string;
// }
// function getName(name:FullName) {
//     console.log(name)
// }
// getName({
//     firstName:'李云龙'
// })
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var programmer = /** @class */ (function () {
    function programmer(name) {
        this.name = name;
    }
    programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return programmer;
}());
var web = /** @class */ (function (_super) {
    __extends(web, _super);
    function web(name) {
        return _super.call(this, name) || this;
    }
    web.prototype.eat = function () {
        console.log(this.name + '馒头');
    };
    web.prototype.work = function () {
        console.log(this.name + '敲代码');
    };
    return web;
}(programmer));
var w = new web('李云龙');
w.eat();
w.coding('写ts代码');
