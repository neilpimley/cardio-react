require('dotenv').config();
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');

const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
});

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
