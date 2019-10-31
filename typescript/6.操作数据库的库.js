var mysqlDb = /** @class */ (function () {
    function mysqlDb() {
        console.log('与数据库简历链接');
    }
    mysqlDb.prototype.add = function (info) {
        console.log(info);
        return false;
    };
    mysqlDb.prototype.delete = function (id) {
        return false;
    };
    mysqlDb.prototype.get = function (id) {
        console.log(id);
        var list = [
            {
                title: '111的title',
                desc: '111的desc'
            },
            {
                title: '222的title',
                desc: '222的desc'
            }
        ];
        return list;
    };
    mysqlDb.prototype.update = function (info, id) {
        return false;
    };
    return mysqlDb;
}());
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());
var u = new user();
u.userName = '老李';
u.passWord = '1234';
var oMysql = new mysqlDb();
oMysql.add(u);
var data = oMysql.get(6);
console.log(data);
