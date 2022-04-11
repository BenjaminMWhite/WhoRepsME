const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
//require("dotenv").config();
// boilerplate for node mailer

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
  });


  // this is our sending template

  const theEmail = {
   // from: ourgooglecloud@gmail.com,
   // to: concernedpoliticlady@gmail.com,
    subject: 'Election upcoming',
    text: 'Here is an update of your next election it will be on 6/24/2022'
  };

 
transporter.sendMail(theEmail), function (err, data) {
    if (err) {
      console.log('Error ' + err);
    } else {
      console.log('Email sent successfully');
    }
   };

   
//const port = 3001;
//app.listen(port, () => {
// console.log(`Server is running on port: ${port}`);
//});
   