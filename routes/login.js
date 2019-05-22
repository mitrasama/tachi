var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
require('../models/connection').connection()
const {login} = require('../models/login')
const {cekLogin} = require('../controllers/login')


var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
	if(!req.session.loggedin){
		res.render('index')
	} else {		
		if (req.session.level == '1'){
            res.redirect('admin');
		}else if(req.session.level == '2'){
			res.redirect('petugas');
		}
	}
    // res.render('index')
});

router.post('/auth', function(request, response) {

  cekLogin(connection,request,response)

});

router.get('/', function(request, response) {
	if (request.session.loggedin) {
		if(request.session.level = '1'){
            response.redirect('/admin');
        } else if(request.session.level = '2'){
            response.redirect('/petugas');
        }
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

module.exports = router;