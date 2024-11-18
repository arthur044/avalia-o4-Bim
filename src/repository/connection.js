import mysql from 'mysql2'


let con = await mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_data
})
console.log('bd-connection')
export default con