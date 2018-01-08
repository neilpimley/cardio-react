const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const mailer = require('./mailer');
const app = express();
const PORT = process.env.PORT || 4000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/patientContact', function (req, res) {
  console.log(req.body);

  const { 
    patientEmail = '', 
    patientName = '', 
    patientPhone = '', 
    patientMessage = '' 
  } = req.body;

  const text = `
    Patient\n "${patientName}",\n Tel: "${patientPhone},  \n Email: ${patientEmail} \n\n"  
    Notes\n
    "${patientMessage}"
    `;

  mailer({ email: patientEmail, name: patientName, text }).then(() => {
    console.log(`Sent the message "${patientMessage}" from <${patientName}> ${patientEmail}.`);
      res.set('Content-Type', 'application/json');
      res.send('{"success": true, "error": "" }');
  }).catch((error) => {
    console.log(`Failed to send the message "${patientMessage}" from <${patientName}> ${patientEmail} with the error ${error && error.message}`);
    res.set('Content-Type', 'application/json');
    res.send('{"success": false, "error": "Failed to send the message" }');
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

  const text = `
    GP\n "${gpPhone}", Tel: "${gpPhone} \n"  
    Patient\n "${patientName}",\n Tel: "${patientPhone},  \n Email: ${patientEmail} \n\n"  
    Notes\n
    "${gpMessage}"
    `;

  mailer({ email: gpEmail, name: gpName, text }).then(() => {
    console.log(`Sent the email from <${gpName}> ${gpEmail}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the email from <${gpName}> ${gpEmail} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
