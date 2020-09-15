const mongoose = require('mongoose');

const savedMessSchema = {
    messId: mongoose.Schema.Types.ObjectId,
    messName: String
}


const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    phone: Number,
    savedMess: [savedMessSchema]
});

module.exports = mongoose.model('customer', customerSchema);