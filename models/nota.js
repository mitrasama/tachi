module.exports = {

  nota(conn) {
    return new Promise((resolve, reject) => {
      conn.query('SELECT tbl_nota.id_nota, tbl_nota.no_nota, tbl_nota.tanggal, tbl_pelanggan.nama FROM tbl_nota, tbl_pelanggan WHERE tbl_nota.id_pelanggan = tbl_pelanggan.id_pelanggan ORDER BY tbl_nota.id_nota DESC', (error, results, fields) => {
        if (error) {
        reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  cetak(conn) {
    return new Promise((resolve, reject, request) => {
      let nonota = request.body.no_nota;
      conn.query('SELECT tbl_nota.id_nota, tbl_nota.no_nota, tbl_nota.tanggal, tbl_pelanggan.nama, tbl_detail_nota.nama_produk, tbl_detail_nota.jumlah_beli, tbl_detail_nota.harga_satuan, tbl_detail_nota.diskon FROM tbl_nota, tbl_pelanggan, tbl_detail_nota WHERE tbl_nota.id_pelanggan = tbl_pelanggan.id_pelanggan AND tbl_nota.no_nota = tbl_detail_nota.no_nota AND tbl_nota.no_nota="'+ request.body.no_nota +'" ORDER BY tbl_nota.id_nota', (error, results, fields) => {
        if (error) {
        reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  kode(conn) {
    return new Promise((resolve, reject, request) => {
      conn.query('SELECT MAX(id_nota) AS kode FROM tbl_nota', (error, results, fields) => {
        if (error) {
        reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  }
  
}