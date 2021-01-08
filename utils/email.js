const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //send token to user's email
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //Mail info to user
  let mailOptions = {
    to: options.email,
    from: "EyeConic Cinema koblastavio@gmail.com",
    subject: `${options.subject} - EyeConic Cinema`,
    html: options.message,
  };
  console.log("mail", mailOptions);
  // Send email finally to user
  await smtpTransport.sendMail(mailOptions, (err) => {
    console.log(err);
  });
};

module.exports = sendEmail;
