const mongoose = require('mongoose');
const CurrentMenu = require('../../models/currentMenus');
const Mess = require('../../models/mess');

exports.getAllMenus = async(req, res) => {
    let currentMessArray = [];
    let finalMenuArray = [];
    await CurrentMenu.find()
        .exec()
        .then(docs => {
            if (docs.length >= 1) {
                //find the required documents using id
                currentMessArray = docs;
            } else {
                res.status(200).json({
                    message: "success",
                    CurrentMenu: "no current menu available"
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })

    try {
        for (let i = 0; i < currentMessArray.length; i++) {
            let menuObject = {};
            await Mess.findById({ _id: currentMessArray[i].messId })
                .then(doc => {
                    //extract menu by id
                    let tempMenuArray = doc.MenuList;
                    for (let j = 0; j < tempMenuArray.length; j++) {
                        if (String(tempMenuArray[j]._id) === String(currentMessArray[i].menuId)) {
                            menuObject = {
                                messDetails: doc.messDetails,
                                menu: tempMenuArray[j]
                            }
                            finalMenuArray.push(menuObject)
                            break;
                        }
                    }
                })
        }

        res.status(200).json({
            message: "success",
            availableMenus: finalMenuArray
        })
    } catch (error) {
        res.status(500).json({
            message: "some error occured while fetching data",
            error: error
        })
    }
}

exports.getMenuById = (req, res) => {
    CurrentMenu.findById({
            _id: req.params.id
        }).exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                CurrentMenu: doc
            })
        }).catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })

}

exports.postNewMenu = (req, res) => {
    const menu = new CurrentMenu({
        messId: req.body.messId,
        menuId: req.body.menuId,
        _id: new mongoose.Types.ObjectId,
    })
    menu.save()
        .then(doc => {
            res.status(200).json({
                message: "success",
                Menu: doc
            })
        }).catch(err => {
            res.status(500).json({
                message: "some error occured while storing data",
                error: err
            })
        })
}

exports.updateCurrentMenuById = (req, res) => {
    var updateOps = req.body;

    for (const ops in updateOps) {
        updateOps[ops.propName] = ops.value;
    }
    CurrentMenu.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps })
        .exec()
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

exports.deleteCurrentMenuById = (req, res) => {
    CurrentMenu.findByIdAndDelete({
        _id: req.params.id
    }).then(result => {
        res.status(200).json({
            message: "success",
            CurrentMenu: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "some error occured while deleting data",
            error: err
        })
    })
}