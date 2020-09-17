const CurrentMenu = require('../../models/currentMenus');

exports.getAllMenus = (req, res) => {
    CurrentMenu.find()
        .exec()
        .then(docs => {
            if(docs.length >=1){
                res.status(200).json({
                    message : "success",
                    CurrentMenu :docs
                })
            }
            else{
                res.status(200).json({
                    message : "success",
                    CurrentMenu : "no current menu available"
                })
            }
        }).catch(err => {
            res.status(500).json({
                message : "some error occured while fetching data",
                error :err
            })
        })

}

exports.getMenuById = (req, res) => {
    CurrentMenu.findById({
        _id:req.params.id
    }).exec()
    .then(doc => {
        res.status(200).json({
            message :"success",
            CurrentMenu:doc
        })
    }).catch(err => {
        res.status(500).json({
            message : "some error occured while fetching data",
            error :err
        })
    })

}

exports.postNewMenu = (req, res) => {
    const Menu=new CurrentMenu({
        messId: req.body.messId,
        menuId: req.body.menuId
    })
    Menu.save()
        .then(doc => {
           res.staus(200).json({
               message :"success",
               Menu:doc
           })
        }).catch(err => {
            res.status(500).json({
                message : "some error occured while storing data",
                error :err
            })
        })
}

exports.updateCurrentMenuById = (req, res) => {
    res.send("updating current menu by id:" + req.params.id);
}

exports.deleteCurrentMenuById = (req, res) => {
    CurrentMenu.findByIdAndDelete({
        _id:req.params.id
    }).then(result => {
        res.status(200).json({
            message :"success",
            CurrentMenu :result
        })
    }).catch(err => {
        res.status(500).json({
            message : "some error occured while deleting data",
            error :err
        })
    })
}