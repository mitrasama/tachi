module.exports = {
    produk(conn) {

        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM tbl_produk ORDER BY id_produk ASC', (error, results, fields) => {
                if (error) {
                reject(error)
                }else {
                    resolve(results)
                }
            })

        })
      
    },

    addproduk(conn) {

        return new Promise((resolve, reject) => {

            let data = {
              nama: request.body.nama, 
              jenis: request.body.jenis,
              harga: request.body.harga,
              stok: request.body.stok,
              deskripsi: request.body.deskripsi
            };

            conn.query('INSERT INTO tbl_produk SET ?', data, (error, results, fields) => {
                if (error) {
                reject(error)
                }else {
                    resolve(results)
                }
            })

        })
      
    }
}