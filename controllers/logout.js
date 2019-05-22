module.exports = {
    cekLogout (connection, request, response) {
        request.session.username = '';
        request.session.loggedin = false
        request.session.level = '';
        response.redirect('/login');
    }
}