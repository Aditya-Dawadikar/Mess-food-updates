//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var cors = require('cors');
var logger = require('morgan');
var passport = require('passport');
var dotenv = require('dotenv');
dotenv.config();

var app = express();

//middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//connect to database
const uri = process.env.DB_CONNECTION_STRING;
mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected to database");
    })

//require routes handlers
const indexRoutes = require('./app/routes/index');
const loginRoutes = require('./app/routes/entry/login');
const registerRoutes = require('./app/routes/entry/register');
const customerRoutes = require('./app/routes/users/customer');
const messRoutes = require('./app/routes/users/mess');
const oauthRoutes = require('./app/routes/entry/oauth');

const testRoutes = require('./app/routes/index');

//routes
app.use('/', indexRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/oauth', oauthRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/mess', messRoutes);
app.use('/emailtest', testRoutes);

app.listen(9000, () => {
    console.log("app running on port:" + 9000);
});