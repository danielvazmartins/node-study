'use strict'

let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'danielvazmartins@gmail.com',
        pass: 'XXXXXXXX'
    }
});
  
let mailOptions = {
    from: 'danielvazmartins@gmail.com',
    to: 'p000dmartins@prservicos.com.br',
    subject: 'Sending Email using Node.js',
    //text: 'That was easy!'
    html: `
        <center>
            <h1>Nodemailer</h1>
        </center>
        <p>Texto no formato <b>HTML</b></p>
    `
};
  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});