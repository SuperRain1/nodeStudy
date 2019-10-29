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

    //2.函数类型接口  对方法传入的参数和返回值进行约束  批量约束
        //加密的函数类型接口
        // interface encrypt {
        //     (key:string,value:string):string
        // }
        // let md5:encrypt = function (key:string,value:string):string {
        //     return key+value
        // }
        // console.log(md5('name','zhangsan'))

    //3.可索引接口 数组or对象的约束 （不常用）
        //数组
        // interface userArr {
        //     [index:number]:string
        // }
        // let arr:userArr=['123','234']
        // console.log(arr[0])
        //对象
        // interface userObj {
        //     [index:string]:string
        // }
        // let arr:userObj ={name:'20'}
    //4.类类型接口 对类的约束 和 抽象类有点相似
    //     interface animal {
    //         name:string;
    //         eat(str:string):void
    //     }
    //     class Dog implements animal{
    //         name:string
    //         constructor(name:string){
    //             this.name = name
    //         }
    //         eat(){
    //             console.log(this.name+'晚饭')
    //         }
    //     }
    //     let d =new Dog('狗子吃')
    //     d.eat()
    //     class cat implements animal{
    //         name:string
    //         constructor(name:string){
    //             this.name = name
    //         }
    //         eat(food: string) {
    //             console.log(this.name+food)
    //         }
    //     }
    //     let c = new cat('小猫')
    //     c.eat('吃老鼠')
    //5.接口扩展 接口继承接口
        interface animal {
            eat():void
        }
        interface person extends animal{
            work():void
        }
        class programmer {//程序员的类
            public name:string
            constructor(name){
                this.name = name
            }
            coding(code:string){
                console.log(this.name+code)
            }
        }
        class web extends programmer implements person{
            constructor(name:string){
                super(name)
            }
            eat(): void {
                console.log(this.name+'馒头')
            }
            work(): void {
                console.log(this.name+'敲代码')
            }
        }
        let w = new web('李云龙')
        w.eat();
        w.coding('写ts代码')