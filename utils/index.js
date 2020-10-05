require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.email = function (data) {
  //Email
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL, // TODO: your gmail account
      pass: process.env.PASS, // TODO: your gmail password
    },
  });
  let mailOptions = {
    from: process.env.EMAIL, // TODO: email sender
    to: process.env.EMAIL, // TODO: email receiver
    subject: `NEW INQUIRE: ${data.address}`,
    html: `
    NAME: ${data.name}
    EMAIL: ${data.email}
    PHONE: ${data.phoneNumber}
    ADDRESS: ${data.address}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return log("Email sent!!!");
  });
};
