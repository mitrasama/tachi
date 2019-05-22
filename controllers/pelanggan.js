const {pelanggan} = require('../models/pelanggan')

module.exports = {
    async tampilPelanggan (connection, request, response) {
        
        let data = await pelanggan(connection)
        
        return new Promise((resolve, reject) => {
          try {
              resolve(data)
          } catch (error) {
              reject(error)  
          }
        })
        
        // console.log(data)
    }
}