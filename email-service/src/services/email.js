const nodemailer = require("nodemailer");

exports.sendEmail = async (mailData) => {
  try {
    const { recipient } = mailData;

    // const account = await nodemailer.createTestAccount();
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: account.user,
    //     pass: account.pass,
    //   },
    // });

    // const { messageId } = await transporter.sendMail({
    //   from: "adidas@testemail.com",
    //   to: recipient,
    //   subject: "Subscription",
    //   text: "Subscription successful",
    //   html: "<b>Subscription successful</b>",
    // });

    // This can be replaced by the email id
    return `Email sent to ${recipient}`;
  } catch (error) {
    throw error;
  }
};
