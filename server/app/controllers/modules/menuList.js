const Mess = require('../../models/mess');
const CurrentMenu = require('../../models/currentMenus');

exports.getMyMenus = async(req, res) => {
    Mess.findById({
            _id: req.params.messid
        }).exec()
        .then(doc => {
            res.status(200).json({
                messsage: "success",
                Mess: doc.MenuList
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
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
    let menuArray = []
    await Mess.findById({
        _id: req.params.messid
    }).then(doc => {
        menuArray = doc.MenuList
    })
    let ind = menuArray.findIndex(menu => {
        console.log(menu._id)
        return String(menu._id) === String(req.params.menuid)
    })
    menuArray.splice(ind, 1, req.body)
    await Mess.findByIdAndUpdate({ _id: req.params.messid }, { MenuList: menuArray })
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while updating data",
                error: err
            })
        })
}

exports.deleteMenuById = async(req, res) => {
    let menuArray = []
    await Mess.findById({
        _id: req.params.messid
    }).then(doc => {
        menuArray = doc.MenuList
    })

    //remove inconsistency by deleting the redundent document from currentmenu collection
    await CurrentMenu.findOneAndDelete({ messId: req.params.messid, menuId: req.params.menuid }, { useFindAndModify: false })
        .then(doc => {
            console.log("inconsistency removed");
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while removing data",
                error: err
            })
        })

    //remove the menu from mess owner collection
    let ind = menuArray.findIndex(menu => {
        console.log(menu._id)
        return String(menu._id) === String(req.params.menuid)
    })
    menuArray.splice(ind, 1)
    Mess.findByIdAndUpdate({ _id: req.params.messid }, { MenuList: menuArray })
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while updating data",
                error: err
            })
        })
}