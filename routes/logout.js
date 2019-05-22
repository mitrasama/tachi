var express = require('express');
var router = express.Router();
require('../models/connection').connection();
const {cekLogout} = require('../controllers/logout');

var app = express();

router.get('/', function(request, response) {

	cekLogout(connection,request,response)

});

module.exports = router;