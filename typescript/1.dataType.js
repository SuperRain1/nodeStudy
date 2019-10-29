console.log('hello ts');
//安装typescript:  npm i -g typescript  (mac: sudo npm i -g typescript)
//编译ts代码为es5/es6代码  tsc 1.dataType.ts
//  定义ts变量的时候需要制定数据的类型 ;类型校验
//string 布尔类型 number
var flag = true;
// flag = 123 //错误
flag = false; //正确
//array
var arr1 = [11, 22, 33, 44]; //所有的数据都是数字类型
var arr2 = [11, 22, 33, 44]; //第二种定义数组的方式
var arr3 = [11, 22, '33', '44']; //第三种定义数组的方式
//元组类型tuple（属于数组的一种）
var arr4 = [11, '22']; //一一对应
//枚举类型enum
var state;
(function (state) {
    state[state["success"] = 1] = "success";
    state[state["error"] = 2] = "error";
})(state || (state = {}));
var s = state.success; //如果没有赋值，它的值就是下标
console.log(s);
//任意类型any
var any1 = 123;
any1 = 'str';
var oBox = document.getElementById('box');
oBox.style.color = 'red';
//null和undefined 其他数据(never类型)类型的子类型
//  | 设置多个类型
var num;
console.log(num);
//void 表示没有任何类型，一般用于定义方法的时候方法没有返回值
function run() {
    console.log('run');
}
//方法没有返回任何类型 用void
//如果方法返回类型
function run1() {
    console.log('run');
    return 123;
}
//never类型 包括null undefined 代表从不会出现的值
var a;
a = (function () {
    throw new Error('错误');
})();
