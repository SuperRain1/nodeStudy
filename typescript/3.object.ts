//一、es5里面的类
//     function Person() {
//         this.name='张三'
//         this.age='20'
//     }
//     let p = new Person()
//     console.log(p.name)
//2.构造函数和原型链里增加方法
//     function Person1() {
//         this.name='张三1'
//         this.age='20'
//         this.run = function () {
//             console.log(this.name + '的年龄是' +this.age)
//         }
//     }
//     //原型链上的属性会被多个实例共享，构造函数不会
//     Person1.prototype.sex='男'
//     Person1.prototype.work=function(){
//         console.log(this.name+'的工作是前端')
//     }
//     let p1 = new Person1()
//     p1.work()
//3.类里的静态方法
//     function Person2() {
//         this.name='张三2'
//         this.age='20'
//         this.run = function () {
//             console.log(this.name + '的年龄是' +this.age)
//         }
//     }
//     Person2.getInfor=function () {
//         console.log('我是静态方法')
//     }
//     Person2.getInfor()
//4.es5中的继承
    // 1、对象冒充继承  继承构造函数中的属性和方法，但是没法继承原型链上的属性和方法
    // function Person3() {
    //     this.name='张三3'
    //     this.age='20'
    //     this.run = function () {
    //         console.log(this.name + '的年龄是' +this.age)
    //     }
    // }
    // let p3 = new Person3()
    // Person3.prototype.sex = '男'
    // function Web() {
    //     Person3.call(this)//
    // }
    // let w = new Web()
    // w.run()//对象冒充可以继承构造函数中的属性和方法，
    // console.log(w.sex)//但是没法继承原型链上的属性和方法
    //2.原型链继承 可以继承构造函数中的属性和方法，也可以继承原型链上的属性和方法,但是实例化子类的时候没办法给父类传参
    // function Person4() {
    //     this.name='张三3'
    //     this.age='20'
    //     this.run = function () {
    //         console.log(this.name + '的年龄是' +this.age)
    //     }
    // }
    // let p4 = new Person4()
    // Person4.prototype.sex = '男'
    // function Web1() {
    //
    // }
    // Web1.prototype = new Person4()
    // let w1 = new Web1()
    // console.log(w1.name)
    //3.原型链+构造函数组合继承
    // function Person5(name,age) {
    //     this.name = name
    //     this.age = age
    //     this.run = function () {
    //         console.log(this.name + '的年龄是' +this.age)
    //     }
    // }
    // Person5.prototype.sex='女'
    // function web2(name,age) {
    //     Person5.call(this,name,age)
    // }
    // web2.prototype = Person5.prototype
    // let a = new web2('老赵',21)
    // console.log(a.name+a.age+a.sex)



//二、ts中定义类
    //1.ts定义类
   //  class Person{
   //      name:string;//属性
   //      constructor(name:string){//实例化类的时候触发的方法
   //          this.name = name
   //      }
   //      getName():string{
   //          return this.name
   //      }
   //      setName(name:string):void{
   //          this.name = name
   //      }
   //  }
   //  let p = new Person('张三ts')
   //  p.setName('我叫老张了')
   // console.log( p.getName())
    //2.ts继承 extends super
    // class Person{
    //     name:string;
    //     constructor(name:string){
    //         this.name = name
    //     }
    //     run(){
    //         return `${this.name}弹出来了`
    //     }
    // }
    // let p = new Person('老李')
    // class web extends Person{
    //     constructor(name:string){
    //         super(name)//初始化父类的构造函数
    //     }
    //     work(){
    //         return `${this.name}开炮`
    //     }
    //     run(){
    //         return `${this.name}开炮---子类`//先查看子类中是否有这个方法，如果没有去父类找
    //     }
    // }
    // let w = new web('秀琴')
    // console.log(w.run())
    //3.类里面的修饰符（如果不加修饰符，默认公有）
    // public：公有，子类方法、类里方法、类外方法都可以访问
    // protected：保护类型  子类方法、类里方法可以，类外方法无法访问
    // private：私有   子类方法和类外方法不可以    类里方法可以访问

    // class Person{
    //     public name:string;//属性的修饰符
    //     constructor(name:string){
    //         this.name = name
    //     }
    //     run(){
    //         return `${this.name}弹出来了`
    //     }
    // }
    // let p = new Person('老李')
    // class web extends Person{
    //     constructor(name:string){
    //         super(name)//初始化父类的构造函数
    //     }
    //     work(){
    //         return `${this.name}开炮`
    //     }
    //     run(){
    //         return `${this.name}开炮---子类`//先查看子类中是否有这个方法，如果没有去父类找
    //     }
    // }
    // let w = new web('秀琴')
    // console.log(w.run())
    // 4.静态方法&实例方法
    // class Person{
    //     public name:string;
    //     static age:number=20;
    //     constructor(name){
    //         this.name=name
    //     }
    //     run(){//实例方法
    //         console.log(`${this.name}你开炮啊`)
    //     }
    //     static Print(){ //静态方法,不能直接调用类里面的属性
    //         console.log('静态方法'+Person.age)
    //     }
    // }
    // var p =new Person('李云龙')//
    // p.run()
    // Person.Print()
    // console.log(Person.age)
    //5.多态（也属于继承，父类定义一个方法不去实现，让继承他的子类去实现，每一个子类都有不同的表现）
    // class Animal{
    //     name:string;
    //     constructor(name:string) {
    //         this.name=name;
    //     }
    //     eat(){//父类定义吃的方法，具体吃什么，由子类定义
    //         console.log('吃的方法')
    //     }
    // }
    // class Dog extends Animal{
    //     constructor(name:string){
    //         super(name)
    //     }
    //     eat(){
    //         return this.name+'大骨头'
    //     }
    // }
    // class Cat extends Animal{
    //     constructor(name:string){
    //         super(name)
    //     }
    //     eat(){
    //         return this.name+'猫粮'
    //     }
    // }
    //6.抽象类（abstract），提供其他类继承的基类，单不能直接被实例化
    // abstract class Animal {
    //     public name:string;
    //     constructor(name:string){
    //         this.name = name
    //     }
    //     abstract eat():any;//子类必须要实现的抽象方法
    // }
    // class Dog extends Animal{
    //     constructor(name:any){
    //         super(name)
    //     }
    //     //抽象类的子类  必须要实现抽象类里定义的抽象方法
    //     eat(){
    //         console.log(this.name+'吃骨头')
    //     }
    // }
    // var d = new  Dog('李云龙')
    // d.eat()


