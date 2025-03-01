import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error('All fields are required')
        }
        const userAlreadyExists = await User.findOne({ email: email })
        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: 'User already exists' })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = generateVerificationToken();

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        })
        await user.save()
        generateTokenAndSetCookie(res, user._id)

        await sendVerificationEmail(user.email, verificationToken)

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                ...user._doc,
                password: undefined
            }

        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const verifyEmail = async (req, res) => {

    // 1 2 3 4 5 6
    const { code } = req.body;
    try {
        const user = await User.findOne(
            { verificationToken: code },
            { verificationTokenExpiresAt: { $gt: Date.now() } }
        )
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid verification code or expired verification code' })
        }
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name)


    } catch (error) {

    }
}
export const login = async (req, res) => {
    res.send('login route')
}


export const logout = async (req, res) => {
    res.send('logouts route')
}

