import express from "express"
import http from 'http'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname + '/client')))

const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/client'))
})

app.post('/send_email', (request, response) => {
    const email = request.body.email
    const subject = request.body.subject
    const text = request.body.text

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "jaronshoulars4@gmail.com",
            pass: "qutwiqoldcwjzidw ",
        },
    });

    const mailOptions = {
        from: email,
        to: 'jaronshoulars@gmail.com',
        subject: subject,
        text: text
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email Sent ' + info.response)
        }
        
        response.redirect('/')
    })
})

app.listen(PORT, () => {
    console.log(`SERVER running on PORT ${PORT}`)
})

module.exports = app