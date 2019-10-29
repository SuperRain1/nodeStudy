const mysql = require('mysql')//操作数据库
const co = require('co-mysql')//操作数据库

let conn = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'20191017'
})
let db = co(conn)

module.exports = db