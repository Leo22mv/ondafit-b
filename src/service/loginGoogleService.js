import { OAuth2Client } from 'google-auth-library';

exports.validateToken = async (token) => {
    const clientId = process.env.CLIENT_ID;
    const client = new OAuth2Client(clientId);
    try {
        const verifiy = await client.verifyIdToken(
            {
                idToken: token,
                audience: clientId
            }
        )
        const user = verifiy.getPayload();
        return user;
    } catch (error) {
        return error;
    }
};

exports.saveUserBD = () => {
    return true;
}

exports.generateJwt = (user) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    const payload = { email: user.email, user: user.name, id: user.id };
    const jwtService = require('jsonwebtoken');
    const accesToken = jwtService.sign(payload, JWT_SECRET, { expiresIn: '24h' });
    return accesToken;
}