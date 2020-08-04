exports.getMessPage = (req, res) => {
    res.send("mess page");
}

exports.getAllMess = (req, res) => {
    res.send("sending all mess data");
}

exports.getMessById = (req, res) => {
    res.send('sending mess id:' + req.params.id);
}

exports.getMessByEmail = (req, res) => {
    res.send('sending mess by email:' + req.params.email);
}

exports.updateMessById = (req, res) => {
    res.send('updating mess id:' + req.params.id);
}

exports.deleteMessById = (req, res) => {
    res.send('deleting mess of id:' + req.params.id);
}