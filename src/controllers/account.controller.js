async function signup(_req, _res) {
    return _res.status(200)
        .send('User account created');
}

module.exports = {
    signup
};