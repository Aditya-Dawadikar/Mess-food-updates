const Mess = require('../../models/mess');

exports.getMyMenus = async(req, res) => {
    console.log("send all menus from");
}

//addNewMenu to the mess document
exports.addNewMenu = async(req, res) => {
    let originalMenuList = [];
    let newMenu = req.body;

    //fetch document by id
    await Mess.findById({ _id: req.params.messid })
        .exec()
        .then(doc => {
            console.log(doc);
            originalMenuList = doc.MenuList;
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while updating data",
                error: err
            })
        })

    //push new menu to the original array
    originalMenuList.push(newMenu);

    //update the document
    await Mess.findByIdAndUpdate(req.params.messid, { MenuList: originalMenuList }, (err, doc) => {
        if (err) {
            res.status(500).json({
                message: "some error occured while updating data",
                error: err
            })
        } else if (doc) {
            res.status(200).json({
                message: "success",
                doc: doc
            })
        }
    })
}

exports.updateMenuById = async(req, res) => {
    console.log("updating menu");
    console.log(req.params.messid, req.params.menuid);
}

exports.deleteMenuById = async(req, res) => {
    console.log("deleting menu");
    console.log(req.params.messid, req.params.menuid);
}