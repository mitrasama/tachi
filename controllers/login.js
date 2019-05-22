const bcrypt = require('bcrypt');
const {login} = require('../models/login');

module.exports = {
    cekLogin (connection, request, response) {

        let username = request.body.username;
        let password = request.body.password;

        if (username && password) {

            let callLogin = async () => {
                try {
                    let data = await login(connection, username, password)

                    let passlg = request.body.password;
                    
                    let passdb = request.session.password = data[0].password;

                    if(bcrypt.compareSync(passlg, passdb)) {
                          // response.send('Ok')
                          request.session.loggedin = true;
                          request.session.username = data[0].username;
                          request.session.level = data[0].level
                          console.log(data)

                          if(request.session.level == '1'){
                              response.redirect('/admin');
                          } else if(request.session.level == '2'){
                              response.redirect('/petugas');
                              // response.send('Pe')
                          }
                      } else {
                          // response.redirect('/login')
                          response.redirect('/login')
                      }
                        
                } catch (err) {
                    console.log(err)
                    response.redirect('/')
                }
            }
            callLogin()
    
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    }
}