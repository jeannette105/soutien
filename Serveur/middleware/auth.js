const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentification requise.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.cli = {
            username: decoded.username,
            password: decoded.password,
            confirmpassword: decoded.confirmpassword
        };

        req.pres = {
            username: decoded.username,
            speciality: decoded.speciality,
            password: decoded.password,
            confirmpassword: decoded.confirmpassword
        };

        req.client = {
            username: decoded.username,
            firstname: decoded.firstname,
            email: decoded.email,
            tel: decoded.tel,
            city: decoded.city
        };

        req.prestataire = {
            username: decoded.username,
            firstname: decoded.firstname,
            email: decoded.email,
            city: decoded.city,
            tel: decoded.tel,
            speciality: decoded.speciality,
            serviceType: decoded.serviceType,
            message: decoded.message
        };

        next();
    } catch (error) {
        res.status(403).json({ message: 'Token invalide.' });
    }
};
