import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, {
        httpOnly: true, // this prevent xss attacks
        secure: process.env.NODE_ENV === "production" ? true : false, // this prevent csrf attacks
        sameSite: "strict", // this prevent csrf attacks
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return token
}