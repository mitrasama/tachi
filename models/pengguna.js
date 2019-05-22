module.exports = {
  pengguna(conn) {

      return new Promise((resolve, reject) => {
          conn.query('SELECT * FROM tbl_login ORDER BY id_login ASC', (error, results, fields) => {
              if (error) {
                  reject(error)
              }else {
                  resolve(results)
              }
          })

      })
    
  }

}