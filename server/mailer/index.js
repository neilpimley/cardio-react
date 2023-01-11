const nodemailer  = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,  
  port: process.env.SMTP_PORT,
  
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from: process.env.VERIFIED_EMAIL_ADDRESS,
    to: process.env.PERSONAL_ADDRESS,
    subject: `New message from ${from} sent via your website`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send
