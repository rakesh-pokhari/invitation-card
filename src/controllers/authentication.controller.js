var jwt = require('jsonwebtoken');
//TODO: To be moved to github secret or Parameter store
const TOKEN_KEY = 'TEAM3-KEY';
async function login(_req, _res) {
    const { email, password } = _req.body;
    // Validate user input
    if (!(email && password)) {
        _res.status(400).send('Required details not provided');
        return;
    }
    if(!(email === 'admin@gmail.com' && password === 'admin')) {
        _res.status(401).send('Invalid Credentials');
        return;
    }
    try {
        const token = await jwt.sign(
            { user_name: email },
            TOKEN_KEY,
            {
                expiresIn: '4h',
            }
        );
        if (token) {
            _res.cookie('jwt-token', token, { httpOnly: true }).send('Logged in');
        } else {
            _res.status(500).send('Token not generated');
        }
    } catch (err) {
        _res.status(500).send('Error in token creation');
    }
}

async function logout(_req, res) {
    return res
        .clearCookie('jwt-token')
        .status(200)
        .send('Successfully logged out');
}

module.exports = {
    login,
    logout,
};