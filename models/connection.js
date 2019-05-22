const mysql = require('mysql')
const cf = require('../config')

module.exports = {
    connection() {
        connection = mysql.createConnection({
            host     : cf.db.host,
            user     : cf.db.user,
            password : cf.db.password,
            database : cf.db.database
        });

        connection.connect((err) => {
            if(err) {
                throw err
            }
            console.log('Konek')
        })
    }
}