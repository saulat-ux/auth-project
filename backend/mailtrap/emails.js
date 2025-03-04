import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];


    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email verification"
        })
        console.log('email send successfully', response)
    } catch (error) {
        console.log(`error sending verification email: ${error}`)
        throw new Error(`error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "6e16a893-64ef-4334-9f7b-00c981b93b00",
            template_variables: {
                "company_info_name": "Test_Company_info_name",
                "saulat": "Test_Saulat"
            },
        })
        console.log(' welcome Email send successfully', response)
    } catch (error) {
        console.log(`error sending welcome email: ${error}`);
        throw new Error(`error sending welcome email: ${error}`);

    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",

        })
    } catch (error) {
        console.log(`error sending password reset email: ${error}`);
        throw new Error(`error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        })
        console.log("Password resent email sent successfully", response)
    } catch (error) {
        console.log("Error sending password reset success email", error);
        throw new Error("Error sending password reset success email", error);
    }
}