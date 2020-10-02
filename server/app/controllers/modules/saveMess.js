const Customer = require('../../models/customer');
const Mess = require('../../models/mess');
const Subscription = require('../../models/relations/subscription');

exports.subscribe = (req, res) => {
    const subsciptionObject = new Subscription({
        messId: req.params.messId,
        customerId: req.params.custId
    })
    subsciptionObject.save()
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })
}

exports.unsubscribe = (req, res) => {
    //inconsistency removal background process

    Subscription.findByIdAndDelete({ _id: req.params.subId })
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
            })
        })
}

function cleanUpAfterDeleteCustomer(custId) {
    /*
        1. find the mess associated with me customer
        2. delete refs from associated mess
        3. delete doc
    */
}

function cleanUpAfterDeleteMess(messId) {
    /*
        1. find the mess associated with me mess
        2. delete refs from associated customer
        3. delete doc
    */
}


/*
1. unsubscribe (mess, customer delete ref O(1), delete doc from subs collection)
2. clean up after deleted customer(associated mess delete ref o(n), delete doc from subs collection)
3. clean up after deleted mess(associated customer delete ref o(n), delete doc from subs collection)
*/