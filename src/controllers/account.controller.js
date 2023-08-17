async function signup(_req, _res) {
    return _res.status(200)
        .json({message: 'User account created'});
}

module.exports = {
    signup
};