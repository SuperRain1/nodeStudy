interface DBI<T> {
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
class mysqlDb implements DBI<T>{
    constructor(){
        console.log('与数据库简历链接')
    }
    add(info: T): boolean {
        console.log(info)
        return false;
    }
    delete(id: number): boolean {
        return false;
    }
    get(id: number): any[] {
        console.log(id)
        let list=[
            {
                title:'111的title',
                desc:'111的desc'
            },
            {
                title:'222的title',
                desc:'222的desc'
            }
        ]
        return list;
    }
    update(info: T, id: number): boolean {
        return false;
    }
}
class user {
    userName:string | undefined;
    passWord:string | undefined
}
let u = new user();
u.userName = '老李';
u.passWord = '1234';
let oMysql = new mysqlDb<user>()
oMysql.add(u)
let data = oMysql.get(6)
console.log(data)


