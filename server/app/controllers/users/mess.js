const Mess = require('../../models/mess');
exports.getMessPage = (req, res) => {
    res.send("mess page");
}

exports.getAllMess = (req, res) => {
    Mess.find()
        .exec()
        .then(docs => {
            if (docs.length >= 1) {
                res.status(200).json({
                    message: "success",
                    Mess: docs
                });
            } else {
                res.status(200).json({
                    message: "success",
                    Mess: "no mess available yet"
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
}

exports.getMessById = (req, res) => {
    id = req.params.id;
    Mess.find({ _id: id })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                Mess: doc
            });
        })
        .catch(err => {
            res.status(400).json({
                message: "no data found",
                error: err
            })
        })
}

exports.getMessByEmail = (req, res) => {
    Mess.find({ email: req.body.email })
        .exec()
        .then(doc => {
            if (doc.length === 1) {
                res.status(200).json({
                    message: "success",
                    Mess: doc
                });
            } else {
                res.status(400).json({
                    message: "no mess found",
                    Mess: null
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
}

exports.updateMessById = (req, res) => {
    var updateOps = req.body;

    for (const ops in updateOps) {
        updateOps[ops.propName] = ops.value;
    }
    Mess.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps })
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

exports.deleteMessById = (req, res) => {
    Mess.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while deleting data",
                error: err
            });
        })
}

//addNewMenu to the mess document
exports.addNewMenu = async(req, res) => {
    let originalMenuList = [];
    let newMenu = req.body;

    //fetch document by id
    await Mess.findById({ _id: req.params.id })
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
    await Mess.findByIdAndUpdate(req.params.id, { MenuList: originalMenuList }, (err, doc) => {
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

//find only saved mess