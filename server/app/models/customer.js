const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    phone: Number
});

module.exports = mongoose.model('customer', customerSchema);