const Mess = require('../../models/mess');
const Customer = require('../../models/customer');

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

exports.deleteMessById = async(req, res) => {
    //remove inconsitency
    let subArray = [];
    await Mess.findById({ _id: req.params.id })
        .then(doc => {
            subArray = doc.subscribers;
        })
        .catch(err => {
            console.log("first");
            console.log(err);
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            });
        })

    //removing this mess from all subscribers
    for (let i = 0; i < subArray.length; i++) {
        let customer = subArray[i];
        console.log(subArray[i]);
        let savedMessTempArray = [];
        await Customer.findById({ _id: customer.customerId })
            .then(doc => {
                savedMessTempArray = doc.savedMess;
            })
            .catch(err => {
                console.log("second");
                res.status(500).json({
                    message: "some error occured while fetching data",
                    error: err
                });
            })

        let ind = savedMessTempArray.findIndex(mess => {
            return String(mess.messId) === String(req.param.id);
        })
        savedMessTempArray.splice(ind, 1);

        await Customer.findByIdAndUpdate({ _id: customer.customerId }, { savedMess: savedMessTempArray })
            .then(doc => {
                console.log(doc)
            })
            .catch(err => {
                res.status(500).json({
                    message: "some error occured while updating data",
                    error: err
                });
            })
    }
    //end of remove inconsistency


    await Mess.findByIdAndDelete({ _id: req.params.id })
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

exports.getMessByQuery = async(req, res) => {
    await Mess.find( /*some code goes here */ )
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