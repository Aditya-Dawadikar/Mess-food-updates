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
const uri = "mongodb+srv://messfood:messfood@cluster0.eayvl.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected to database");
    })

//require routes handlers
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/entry/login');
const registerRoutes = require('./routes/entry/register');
const customerRoutes = require('./routes/users/customer');
const messRoutes = require('./routes/users/mess');
const oauthRoutes = require('./routes/entry/oauth');

//routes
app.use('/', indexRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/oauth', oauthRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/mess', messRoutes);

app.listen(9000, () => {
    console.log("app running on port:" + 9000);
});