const {jumlahpelanggan, jumlahtransaksi, jumlahproduk, januari, februari, maret, april, mei, juni, juli, agustus, september, oktober, november, desember} = require('../models/index')

module.exports = {

  async tampiljumPelanggan (connection, request, response) {        
    let data = await jumlahpelanggan(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampiljumTransaksi (connection, request, response) {        
    let data = await jumlahtransaksi(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampiljumProduk (connection, request, response) {        
    let data = await jumlahproduk(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampiljanuari (connection, request, response) {        
    let data = await januari(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilfebruari (connection, request, response) {        
    let data = await februari(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilmaret (connection, request, response) {        
    let data = await maret(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilapril (connection, request, response) {        
    let data = await april(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilmei (connection, request, response) {        
    let data = await mei(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampiljuni (connection, request, response) {        
    let data = await juni(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampiljuli (connection, request, response) {        
    let data = await juli(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilagustus (connection, request, response) {        
    let data = await agustus(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilseptember (connection, request, response) {        
    let data = await september(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampiloktober (connection, request, response) {        
    let data = await oktober(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampilnovember (connection, request, response) {        
    let data = await november(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },

  async tampildesember (connection, request, response) {        
    let data = await desember(connection)      
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  }

}