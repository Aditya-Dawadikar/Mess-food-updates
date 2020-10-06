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
        useUnifiedTopology: true,
        useFindAndModify: false
    }, () => {
        console.log("connected to database");
    })

//require routes handlers
const loginRoutes = require('./app/routes/entry/login');
const registerRoutes = require('./app/routes/entry/register');
const forgotPasswordRoutes = require('./app/routes/entry/forgotPassword')
const customerRoutes = require('./app/routes/users/customer');
const messRoutes = require('./app/routes/users/mess');
const oauthRoutes = require('./app/routes/entry/oauth');
const currentMenuRoutes = require('./app/routes/modules/currentMenu');
const menuRoutes = require('./app/routes/modules/menuList');
const subscriptionRoutes = require('./app/routes/modules/subscription');
//test routes handlers
//const testRoutes = require('./app/routes/index');

//routes
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/forgotpassword', forgotPasswordRoutes);
app.use('/api/oauth', oauthRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/mess', messRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/currentmenu', currentMenuRoutes);
app.use('/api/subscription', subscriptionRoutes);
//test routes
//app.use('/emailtest', testRoutes);

app.listen(9000, () => {
    console.log("app running on port:" + 9000);
});