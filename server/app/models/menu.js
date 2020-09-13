//this is the schema for mess menus, reference to this schema will be given in the mess schema

const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    menuName: String,
    menuItem: [{
        type: String,
        required: true
    }],
    price: Number,
    tag: [
        { type: String }
    ]
});

module.exports = mongoose.model('menu', menuSchema);