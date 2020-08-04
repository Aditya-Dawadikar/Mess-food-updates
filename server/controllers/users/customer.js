exports.getCustomerPage = (req, res) => {
    res.send("customer page");
}

exports.getAllCustomers = (req, res) => {
    res.send('sending all customers');
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