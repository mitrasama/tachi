const {produk, addproduk} = require('../models/produk')
// const {addproduk} = require('../models/produk')

module.exports = {
    async tampilProduk (connection, request, response) {
        
      let data = await produk(connection)
        
      return new Promise((resolve, reject) => {
        try {
            resolve(data)
        } catch (error) {
            reject(error)  
        }
      })
      
      // console.log(data)
        
    },
    
    async tambahProduk (connection, request, response) {
       
        try {

            let data = await addproduk(connection)
            // data.forEach(data => {
            //     console.log(data.nama)
            // });
            
            return data     
        } catch (error) {
            return error;
        }    

        // response.send('ok')
        // console.log(data)
        
    }
}