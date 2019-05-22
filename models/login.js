module.exports = {
    login(conn, username, password) {

        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM tbl_login WHERE username = ?', [username], (error, results, fields) => {
                if (error) {
                    reject(error)
                }else {
                    resolve(results)
                }
            })

        })
      
    }
}