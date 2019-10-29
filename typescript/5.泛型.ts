//typescript中的泛型

//1.泛型的定义：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
// 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时，为你提供了十分灵活的功能。
// 在像C#和Java这样的语言中， 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据，这样用户就可以以自己的数据类型来使用组件。
// 通俗理解就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持
//2.泛型函数
//     传入参数和返回的参数一致   T 表示泛型，具体是什么类型是由调用这个方法来决定
//     function getData<T>(value:T):T {
//         return value
//     }
//     getData<number>(123)
//     getData<string>('123')
//3.泛型类
//     class MinNumber {
//         public list:number[]=[];
//         add(num:number){
//             this.list.push(num)
//         }
//         min(){
//             let minMum = this.list[0]
//             for (let i = 0;i<this.list.length;i++){
//                 if(minMum>this.list[i]){
//                     minMum = this.list[i]
//                 }
//             }
//             return minMum
//         }
//     }
//     var m = new MinNumber()
//     m.add(3)
//     m.add(32)
//     m.add(1)
//     console.log(m.min())
    //类的泛型
    // class MinClass<T> {
    //     public list:T[]=[]
    //     add(value:T):void{
    //         this.list.push(value)
    //     }
    //     min():T{
    //         let minMum = this.list[0]
    //         for (let i = 0;i<this.list.length;i++){
    //             if(minMum>this.list[i]){
    //                 minMum = this.list[i]
    //             }
    //         }
    //         return minMum
    //     }
    // }
    // let m1 = new MinClass<number>()//s实例化类，并指定类的T代表的类型是number
    // m1.add(12)
    // m1.add(6)
    // m1.add(31)
    // console.log(m1.min())
    // let m2 = new MinClass<string>()//s实例化类，并指定类的T代表的类型是string
    // m2.add('d')
    // m2.add('b')
    // m2.add('z')
    // console.log(m2.min())
//4.泛型接口
    //①.函数类型接口
    // interface ConfigFn {
    //     (value1:string,value2:string):string
    // }
    // let setData:ConfigFn = function (value1:string,value2:string):string {
    //     return value1+value2
    // }
    // setData('name:','老李')
    //②.泛型接口
    //     方法1
        // interface ConfigFn {
        //     <T>(value:T):T
        // }
        // let getData:ConfigFn = function<T>(value:T):T{
        //     return value
        // }
        // getData<string>('张三')
        // getData<number>(123)
    //  方法二
    //     interface ConfigFn<T> {
    //         (value:T):T
    //     }
    //     function getData<T>(value:T):T{
    //         return value
    //     }
    //     let myGetData:ConfigFn<string> = getData
    //     myGetData('20')
// 例子：把类作为参数来约束数据传入的类型
//     class User{
//         username:string | undefined;
//         password:string | undefined;
//     }
//     class MysqlDb {
//         add(user:User):boolean{
//             console.log(user)
//             return true
//         }
//     }
//     let u = new User();
//     u.username='老李'
//     u.password='123'
//     let db = new MysqlDb();
//     db.add(u)
// 例子：

    //只写一个类  操作数据库的泛型类
    class MysqlDb<T>{
        add(info:T):boolean{
            console.log(info)
            return true
        }
    }
    //①.定义一个user类 和数据库进行映射
    // class User{
    //     username:string | undefined;
    //     password:string | undefined;
    // }
    // let u = new User();
    // u.username='老李'
    // u.password='123'
    // let Db = new MysqlDb<User>();
    // Db.add(u)
    //②.定义一个ArticleCate类 和数据库进行映射
    class ArticleCate{
        title:string | undefined;
        desc:string | undefined;
        status:number | undefined;
        constructor(params:{
            title:string | undefined;
            desc:string | undefined;
            status?:number | undefined;
        }){
            this.title =params.title
            this.desc =params.desc
            this.status =params.status
        }
    }
    let a = new ArticleCate({
        title:'分类',
        desc:'1111',
        status:1,
    })
    let Db = new MysqlDb<ArticleCate>()
    Db.add(a)

