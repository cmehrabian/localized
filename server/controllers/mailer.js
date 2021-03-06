const nodemailer = require('nodemailer');
const mailerConfig = require('config').get('mailer');
const { emailTemplate } = require('../views/email-template');

module.exports.inviteByEmail = (req, res) => {
  var { toEmail, fromEmail, fromFirst, fromLast } = req.query;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: mailerConfig.user,
      clientId: mailerConfig.clientId,
      clientSecret: mailerConfig.clientSecret,
      refreshToken: mailerConfig.refreshToken,
      accessToken: mailerConfig.accessToken
    }
  });

  var link = `http://welcomelocalized.herokuapp.com/signup?invitedBy=${fromEmail}&familyid=1&email=${toEmail}`;
  var email = emailTemplate(link);

  var mailOptions = {
    from: `${fromFirst} <${fromEmail}>`,
    to: `${toEmail}`,
    subject: `Join your family!`,
    html: `${email}`
  };

  var inviteByEmailCB = (bool) => {
    res.json(bool);
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
      inviteByEmailCB(false);
    } else {
      console.log('Email Sent');
      inviteByEmailCB(true);
    }
  });
};
