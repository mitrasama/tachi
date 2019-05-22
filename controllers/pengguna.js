const {pengguna} = require('../models/pengguna')

module.exports = {
    async tampilPengguna (connection, request, response) {
        
        try {
            let data = await pengguna(connection)
            return data
        } catch (error) {
            return error;
        }    
        
        // console.log(data)
        
    }

}