//1.函数的定义
    //函数声明法
    function run1():string {
        return 'run'
    }
    //匿名函数
    let fun1 = function ():number{
        return 123
    }
    //传参  参数有类型 方法也有类型
    function getInfo(name:string,age:number):string {
        return `${name}---${age}`
    }
    console.log(getInfo('张三',20))
    //没有返回值的方法
    function run2():void {
        console.log('没有rerun返回值')
    }
//2.方法的可选参数
    //ts方法中的是参合形参必须一样，否则需要配置  ?表示可以有也可以没有
    function getInfo1(name:string,age?:number):string {
        if(age){
            return `${name}---${age}`
        }else{
            return `${name}---年龄未知`
        }
    }
    //注：可选参数必须写到传参中的最后面
//3.设置默认参数
    function getInfo2(name:string,age:number=20):string {
        if(age){
            return `${name}---${age}`
        }else{
            return `${name}---年龄未知`
        }
    }
//4.剩余参数
    function sum(a:number,...result:number[]):number {
        let sum = 0
        for(let i = 0;i<result.length;i++){
            sum+=result[i]
        }
        return sum
    }
    console.log(sum(1,2,3,4))

//5.函数重载
    //     通过为同一个函数提供多个函数类型定义来实现多种功能的目的
    function getInfo3(name:any):any;
    function getInfo3(age:number):number;
    function getInfo3(str:any):any {
        if(typeof str==='string'){
            return '我的名字是'+str
        }else if(typeof  str ==='number'){
            return '我的年龄是'+str
        }
    }
//6.箭头函数
    setTimeout(()=>{
        console.log('1')
    },1000)




