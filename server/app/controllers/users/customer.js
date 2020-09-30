const customer = require('../../models/customer');
const Customer = require('../../models/customer')
const Mess = require('../../models/mess')

exports.getCustomerPage = (req, res) => {
    res.send("customer page");
}

exports.getAllCustomers = (req, res) => {
    Customer.find()
        .exec()
        .then(docs => {
            if (docs.length >= 1) {
                res.status(200).json({
                    message: "succcess",
                    Customer: docs
                })
            } else {
                res.status(200).json({
                    message: "success",
                    Customer: "no customer available yet"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
}

exports.getCustomerById = (req, res) => {
    Customer.findById({
            _id: req.params.id
        }).exec()
        .then(doc => {
            res.status(200).json({
                messsage: "success",
                Customer: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
}

exports.getCustomerByEmail = (req, res) => {
    Customer.find({
            email: req.body.email
        }).exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                Customer: doc
            })
        }).catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
}

exports.updateCustomerById = (req, res) => {
    var updateOps = req.body;

    for (const ops in updateOps) {
        updateOps[ops.propName] = ops.value;
    }
    Customer.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps })
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

exports.deleteCustomerById = async(req, res) => {
    //remove inconsistency
    let savedMessArray = [];
    await Customer.findById({ _id: req.params.id })
        .then(doc => {
            savedMessArray = doc.savedMess;
        })
        .catch(err => {
            console.log("first");
            console.log(err);
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            });
        })

    //removing this subsciber from all mess
    for (let i = 0; i < savedMessArray.length; i++) {
        let mess = savedMessArray[i];
        console.log(savedMessArray[i]);
        let subscriberArray = [];
        await Mess.findById({ _id: mess.messId })
            .then(doc => {
                subscriberArray = doc.subscribers;
            })
            .catch(err => {
                console.log("second");
                res.status(500).json({
                    message: "some error occured while fetching data",
                    error: err
                });
            })

        let ind = subscriberArray.findIndex(customer => {
            return String(customer.customerId) === String(req.param.id);
        })
        subscriberArray.splice(ind, 1);

        await Mess.findByIdAndUpdate({ _id: mess.messId }, { subscribers: subscriberArray })
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

    Customer.findByIdAndDelete({
        _id: req.params.id
    }).then(result => {
        res.status(200).json({
            message: "success",
            Customer: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "some error occured while deleting data",
            error: err
        })
    })
}