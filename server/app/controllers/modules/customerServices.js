const Customer = require('../../models/customer');
const Mess = require('../../models/mess');
const Subscription = require('../../models/relations/subscription');


//save mess feature
exports.saveMess = async(req, res) => {
    let tempArray = [];
    let savedMessObject = {
        messId: req.params.messId,
        messName: ""
    }

    await Mess.findById({ _id: req.params.messId })
        .then(doc => {
            savedMessObject.messName = doc.messDetails.messName;
        })
        .catch(err => {
            //console.log("first", err);
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })

    await Customer.findById({ _id: req.params.custId })
        .then(doc => {
            tempArray = doc.savedMess;
        })
        .catch(err => {
            //console.log("second", err);
            res.status(500).json({
                message: "some error occured while removing data",
                error: err
            })
        })

    tempArray.push(savedMessObject);
    //console.log(tempArray);

    //map to mess doc
    let tempObj = {
        customerId: req.params.custId
    }
    let tempSubscriberArray = []

    await Mess.findById({ _id: req.params.messId })
        .then(doc => {
            tempSubscriberArray = doc.subscribers
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })

    tempSubscriberArray.push(tempObj);
    console.log("custid from params ", req.params.custId);
    console.log("tempobj", tempObj);

    await Mess.findByIdAndUpdate({ _id: req.params.messId }, { subscribers: tempSubscriberArray })
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while updating data",
                error: err
            })
        })

    //end of map to mess doc

    //update query here
    await Customer.findByIdAndUpdate({ _id: req.params.custId }, { savedMess: tempArray })
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

//delete mess feature
exports.removeMess = async(req, res) => {
    let tempArray = [];
    await Customer.findById({ _id: req.params.custId })
        .then(doc => {
            tempArray = doc.savedMess;
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                error: err
            })
        })

    let ind = tempArray.findIndex(mess => {
        return String(mess.messId) === String(req.params.messId);
    })
    tempArray.splice(ind, 1);
    console.log(tempArray);
    await Customer.findByIdAndUpdate({ _id: req.params.custId }, { savedMess: tempArray })
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