const {nota} = require('../models/nota')
const {cetak} = require('../models/nota')
const {kode} = require('../models/nota')

module.exports = {

  async tampilNota(connection, request, response){        
    let data = await nota(connection)        
    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)  
      }
    })
  },
  
  async cetakNota(connection, request, response){       
    try {      
      let data = await cetak(connection)            
      return data     
    }catch(error){
      return error;
    }            
  },

  async kodeNota(connection, request, response){
    try {      
      let data = await kode(connection)            
      return data     
    }catch(error){
      return error;
    }      
  }

}