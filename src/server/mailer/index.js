import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Godaddy',
  host: process.env.SMTP_HOST,  
  secureConnection: process.env.SMTP_SECURE,
  port: process.env.SMTP_PORT,
  
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: process.env.PERSONAL_ADDRESS,
    subject: `New message from ${name} sent via your website`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
