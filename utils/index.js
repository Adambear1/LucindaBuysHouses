require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.foreclosure = function (data) {
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
    to: data.email, // TODO: email receiver
    subject: `${data.address}`,
    html: ``,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return log("Email sent!!!");
  });
};
