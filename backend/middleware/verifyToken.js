import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized - Token is missing' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ success: false, message: 'Unauthorized - Token is invalid' });
        req.userId = decoded.userId
        next()
    } catch (error) {
        console.log("error in verfiy token", error);

        return res.status(500).json({ success: false, message: 'sever error' });
    }
}