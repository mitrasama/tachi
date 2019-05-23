const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');
const multer = require('multer');
const upload = multer({ dest: './public/images/tachi' });
const port = require('./config').port
var hbs = require('handlebars');
var moment = require('moment');

// Route Files
const home = require('./routes/index');
const admin = require('./routes/admin');
const petugas = require('./routes/petugas');
const login = require('./routes/login');
const logout = require('./routes/logout');

// Init App
const app = express();

// Body Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handle Sessions
app.use(session({
    secret              : 'secret',
    saveUninitialized   : true,
    resave              : true
}));

// Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        let namespace   = param.split('.')
        , root          = namespace.shift()
        , formParam     = root;
        
        while(namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param   : formParam,
            msg     : msg,
            value   : value
        };
    }
}));

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'login'}));
app.set('view engine', 'handlebars');
hbs.registerHelper('eq', function () { // untuk if else pada halaman view
  const args = Array.prototype.slice.call(arguments, 0, -1);
  return args.every(function (expression) {
      return args[0] === expression;
  });
});
hbs.registerHelper('formatTime', function (date, format) {
  var mmnt = moment(date);
  return mmnt.format(format);
});

// Connect Flash
app.use(flash());

app.use('/', home);
app.use('/admin', admin);
app.use('/petugas', petugas);
app.use('/login', login);
app.use('/logout', logout);

// App Listen
// app.set('port', (process.env.PORT));

app.listen(port, function(){
    console.log('Server started on port: ' + port);
});