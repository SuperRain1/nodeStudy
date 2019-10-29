console.log('hello ts')
//安装typescript:  npm i -g typescript  (mac: sudo npm i -g typescript)
//编译ts代码为es5/es6代码  tsc 1.dataType.ts

//  定义ts变量的时候需要制定数据的类型 ;类型校验
//string 布尔类型 number
let flag:boolean = true;
// flag = 123 //错误
flag = false//正确

//array
let arr1:number[]=[11,22,33,44] //所有的数据都是数字类型
let arr2:Array<number>=[11,22,33,44]//第二种定义数组的方式
let arr3:any[]=[11,22,'33','44']//第三种定义数组的方式

//元组类型tuple（属于数组的一种）
let arr4:[number,string]=[11,'22'] //一一对应

//枚举类型enum
enum state {success=1,error=2}
let s:state = state.success; //如果没有赋值，它的值就是下标
console.log(s)

//任意类型any
let any1:any=123
any1 = 'str'
let oBox:any = document.getElementById('box')
oBox.style.color = 'red';

//null和undefined 其他数据(never类型)类型的子类型
//  | 设置多个类型
let num:undefined | number
console.log(num)

//void 表示没有任何类型，一般用于定义方法的时候方法没有返回值
function run():void {
    console.log('run')
}
//方法没有返回任何类型 用void
//如果方法返回类型
function run1():number {
    console.log('run')
    return 123
}

//never类型 包括null undefined 代表从不会出现的值
let a:never
a=(()=>{
   throw new Error('错误')
})()







