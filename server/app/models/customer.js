const mongoose = require('mongoose');

const savedMessSchema = {
    subscriptionId: mongoose.Types.ObjectId
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