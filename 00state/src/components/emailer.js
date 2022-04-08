
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
    }
  });


  // this is our sending template

  //const sendMail = {
    //from: ourgooglecloud@gmail.com,
   // to: concernedpoliticlady@gmail.com,
   // subject: 'Election upcoming',
   // text: 'Here is an update of your next election it will be on 6/24/2022'
 // };