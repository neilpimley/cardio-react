import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Godaddy',
  host: "smtpout.europe.secureserver.net",  
  secureConnection: true,
  port: 465,
  
  auth: {
      user: "website@drpetermckavanagh.com",
      pass: "Card10Lurgan" 
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'mckavanagh@doctors.org.uk',
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
