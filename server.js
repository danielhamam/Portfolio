const express = require('express');
// const path = require('path')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require('dotenv').config()

// console.log(process.env)

const PORT = process.env.PORT || 3001;
console.log(PORT)

app.use(express.static('build'));

app.post('/api/form', (req, res) => {
    let data = req.body
    let transport = nodemailer.createTransport({
    // port: 465,               // true for 465, false for other ports
    port: 587, // port for secure SMTP
    host: "smtp-mail.outlook.com", // hostname
    auth: {
            user: 'danielhamam@outlook.com',
            pass: process.env.API_PASSWORD
        },
    tls: {
        ciphers:'SSLv3'
    }
    // secure: true,
    });
    // console.log("good so far")
    let mailOptions = {
        from: 'danielhamam@outlook.com', // outlook doesn't let you send email from an account you don't own
        to: 'danielhamam@outlook.com',
        subject: `Message from ${data.name}`,
        html: `
        
        <p> You've received a new message! </p>
        <h3> Contact Information: </h3>
            <ul>
            <li> Name: ${data.name} </li>
            <li> Email: ${data.email} </li>
            <li> Subject: ${data.subject} </li>
            </ul>
        <h3> New Message: </h3>
        <p> ${data.message} </p>
        `
    }

    transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
            res.send(error);
        }
        else {
            console.log("Success")
            res.send('Success');
        }
    })
    transport.close();
});

app.listen(PORT, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    }
    else {
        console.log(`Server starting on port ${PORT}`);
    }
})