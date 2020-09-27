//references to all the selected menus will be inserted in this collection
const mongoose = require('mongoose');

const currentMenuSchema = mongoose.Schema({
    messId: mongoose.Types.ObjectId,
    menuId: mongoose.Types.ObjectId,
    _id: mongoose.Types.ObjectId,
}, { timestamps: true })

//expires in 60 seconds
//currentMenuSchema.index({ createdAt: 1 }, { expireAfterSeconds: 21600 });

module.exports = mongoose.model('currentMenu', currentMenuSchema);