//all the selected menus will be inserted in this collection

const mongoose = require('mongoose');

const currentMenuSchema = mongoose.Schema({
    messId: mongoose.Types.ObjectId,
    menuIndex: Number
})

module.exports = mongoose.model('currentMenu', currentMenuSchema);