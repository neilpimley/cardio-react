import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import mailer from './mailer'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/patientContact', (req, res) => {
  const { 
    patientEmail = '', 
    patientName = '', 
    patientPhone = '', 
    patientMessage = '' 
  } = req.body;

  const text = `Tel: "${patientPhone}" \n "${patientMessage}`;

  mailer({ email: patientEmail, name: patientName, text }).then(() => {
    console.log(`Sent the message "${patientMessage}" from <${patientName}> ${patientEmail}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${patientMessage}" from <${patientName}> ${patientEmail} with the error ${error && error.message}`);
    res.redirect('/#error');
  });
})

app.post('/gpContact', (req, res) => {
  const { 
    gpName = '',
    gpPhone = '',
    gpEmail = '',
    practiceName = '',
    patientName = '',
    patientPhone = '',
    patientEmail = '',
    gpMessage = ''
  } = req.body;
  const notes = `
    GP\n "${gpPhone}", Tel: "${gpPhone} \n"  
    Patient\n "${patientName}",\n Tel: "${patientPhone},  \n Email: ${patientEmail} \n\n"  
    Notes\n
    "${gpMessage}"
    `;

  mailer({ email: gpEmail, name: gpName, text: notes }).then(() => {
    console.log(`Sent the email from <${gpName}> ${gpEmail}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the email from <${gpName}> ${gpEmail} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
