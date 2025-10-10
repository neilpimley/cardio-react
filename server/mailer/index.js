const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');
const nodemailer  = require('nodemailer')

const HOST = process.env.SMTP_HOST || 'smtp.mailsend.net';
const PORT = Number(process.env.SMTP_PORT || 587);
const USER = process.env.EMAIL_USER; // e.g. SMTP username
const PASS = process.env.EMAIL_PASS; // e.g. SMTP password

// sanity checks so we don't silently hit localhost defaults
if (!HOST || HOST === 'localhost') throw new Error('SMTP_HOST is missing.');
if (!USER || !PASS) throw new Error('EMAIL_USER / EMAIL_PASS are missing.');

const transporter = nodemailer.createTransport({
  host: HOST,          // 'smtp.mailsend.net'
  port: PORT,          // 587 (TLS) or 465 (SSL)
  secure: PORT === 465, // true if 465, else false
  auth: { user: USER, pass: PASS },
  family: 4,
  tls: { servername: HOST }
});

const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
});

const sendMail = ({ msg }) => {
  const mailOptions = {
    from:'"Website Contact Form" <peter@belfastcardiologist.com>',
    to: process.env.VERIFIED_EMAIL_ADDRESS,
    subject: 'Belfast Cardiology Patient Contact',
    text: msg
  };

  return transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email sent:', info.messageId);
      return info;
    })
    .catch(error => {
      console.error('Error sending email:', error);
      throw error;
    });
}

const send = ({ msg }) => {
  const sentFrom = new Sender("peter@belfastcardiologist.com", "Website Contact Form");

  const recipients = [
      new Recipient(process.env.VERIFIED_EMAIL_ADDRESS)
  ];

  const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("Belfast Cardiology Patient Contact")
      .setText(msg);

  return mailerSend.email.send(emailParams);
}

module.exports = send;
