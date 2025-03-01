import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
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
        console.log('email send successsuccessfully', response)
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
            subject: "Welcome to our platform",
            html: `Hello ${name}, welcome to our platform!`,
            category: "Welcome email"
        })
        console.log('email send successfully', response)
    } catch (error) {

    }
}