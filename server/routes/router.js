const express = require('express');
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req, res) => {
    const { email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
        });
          const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Test Email',
            text: 'This is a test email sent from Node.js using nodemailer.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.status(201).json({status:201, info});
            }
        });
    } catch (error) {
        res.status(201).json({status:401, error});
    }
})

module.exports = router;