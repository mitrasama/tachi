module.exports = {
  jumlahpelanggan(conn) {
    return new Promise((resolve, reject) => {
      conn.query('SELECT COUNT(*) AS jumlahpelanggan FROM tbl_pelanggan', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  jumlahtransaksi(conn) {
    return new Promise((resolve, reject) => {
      conn.query('SELECT COUNT(*) AS jumlahtransaksi FROM tbl_nota', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  jumlahproduk(conn) {
    return new Promise((resolve, reject) => {
      conn.query('SELECT COUNT(*) AS jumlahproduk FROM tbl_produk', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },
// ----------------------------------------------------------------------------------------------
  januari(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-01-01" AND "'+n+'-01-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  februari(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-02-01" AND "'+n+'-02-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  maret(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-03-01" AND "'+n+'-03-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  april(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-04-01" AND "'+n+'-04-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  mei(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-05-01" AND "'+n+'-05-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  juni(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-06-01" AND "'+n+'-06-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  juli(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-07-01" AND "'+n+'-07-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  agustus(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-08-01" AND "'+n+'-08-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  september(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-09-01" AND "'+n+'-09-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  oktober(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-10-01" AND "'+n+'-10-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  november(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-11-01" AND "'+n+'-11-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  },

  desember(conn) {
    return new Promise((resolve, reject) => {
      var d = new Date();
      var n = d.getFullYear();
      conn.query('SELECT COUNT(*) AS januari FROM tbl_nota WHERE tanggal BETWEEN "'+n+'-12-01" AND "'+n+'-12-31"', (error, results, fields) => {
        if (error) {
            reject(error)
        }else {
            resolve(results)
        }
      })
    })    
  }

}