exports.getLoginPage = (req, res) => {
    res.send("login page");
}

exports.customerLogin = (req, res) => {
    res.send('handling customer login');
}

exports.messLogin = (req, res) => {
    res.send('handling mess login');
}