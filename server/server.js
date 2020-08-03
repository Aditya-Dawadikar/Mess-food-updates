//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var cors = require('cors');
var logger = require('morgan');
var passport = require('passport');

var app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//connect to database
const db_name = process.env.DB_NAME;
const db_password = process.env.DB_PASSWORD;
const uri = "mongodb+srv://" + db_name + ":" + db_password + "@cluster0.eayvl.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected to database");
    })

//require routes handlers
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const customerRoutes = require('./routes/customer');
const messRoutes = require('./routes/mess');
const oauthRoutes = require('./routes/oauth');

//routes
app.use('/', indexRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/oauth', oauthRoutes);
app.use('/customer', customerRoutes);
app.use('/mess', messRoutes);

app.listen(9000, () => {
    console.log("app running on port:" + 9000);
});