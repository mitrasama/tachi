module.exports = {

  nota(conn) {
    return new Promise((resolve, reject) => {
      conn.query('SELECT tbl_nota.id_nota, tbl_nota.no_nota, tbl_nota.tanggal, tbl_pelanggan.nama FROM tbl_nota, tbl_pelanggan WHERE tbl_nota.id_pelanggan = tbl_pelanggan.id_pelanggan', (error, results, fields) => {
        if (error) {
        reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  }
  
}