const CurrentMenu = require('../../models/currentMenus');

exports.getAllMenus = (req, res) => {
    res.send("sending all available menus");
}

exports.getMenuById = (req, res) => {
    res.send("sending available menu by id:" + req.params.id);
}

exports.postNewMenu = (req, res) => {
    res.send("posting new menus");
}

exports.updateCurrentMenuById = (req, res) => {
    res.send("updating current menu by id:" + req.params.id);
}

exports.deleteCurrentMenuById = (req, res) => {
    res.send("delete current menu by id:" + req.params.id);
}