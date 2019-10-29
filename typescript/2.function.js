//1.函数的定义
//函数声明法
function run1() {
    return 'run';
}
//匿名函数
var fun1 = function () {
    return 123;
};
//传参  参数有类型 方法也有类型
function getInfo(name, age) {
    return name + "---" + age;
}
console.log(getInfo('张三', 20));
//没有返回值的方法
function run2() {
    console.log('没有rerun返回值');
}
//2.方法的可选参数
//ts方法中的是参合形参必须一样，否则需要配置  ?表示可以有也可以没有
function getInfo1(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u672A\u77E5";
    }
}
//注：可选参数必须写到传参中的最后面
//3.设置默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u672A\u77E5";
    }
}
//4.剩余参数
function sum(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4));
function getInfo3(str) {
    if (typeof str === 'string') {
        return '我的名字是' + str;
    }
    else if (typeof str === 'number') {
        return '我的年龄是' + str;
    }
}
//6.箭头函数
setTimeout(function () {
    console.log('1');
}, 1000);
