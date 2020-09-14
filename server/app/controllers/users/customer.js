const Customer=require('../../models/customer')

exports.getCustomerPage = (req, res) => {
    res.send("customer page");
}

exports.getAllCustomers = (req, res) => {
    console.log("Hi")
   Customer.find()
        .exec()
        .then(docs =>{
            console.log(docs)
        })
}

exports.getCustomerById = (req, res) => {
    res.send('sending customer by id:' + req.params.id);
}

exports.getCustomerByEmail = (req, res) => {
    res.send('sending customer by email:' + req.params.email);
}

exports.updateCustomerById = (req, res) => {
    res.send('updating customer by id:' + req.params.id);
}

exports.deleteCustomerById = (req, res) => {
    res.send('delete Customer by id:' + req.params.id);
}