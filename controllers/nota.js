const {nota} = require('../models/nota')

module.exports = {
    async tampilNota (connection, request, response) {
        
        let data = await nota(connection)
        
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