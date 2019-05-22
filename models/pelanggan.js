module.exports = {
  pelanggan(conn) {

      return new Promise((resolve, reject) => {
          conn.query('SELECT * FROM tbl_pelanggan ORDER BY id_pelanggan ASC', (error, results, fields) => {
              if (error) {
              reject(error)
              }else {
                  resolve(results)
              }
          })

      })
    
  }

}