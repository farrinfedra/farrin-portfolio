import nextConnect from 'next-connect'

const mailer = require("nodemailer");
const handler = nextConnect()
const sendEmail = (req, res, emailData) => {
	const smtpTransport = mailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		requireTLS: true,
		auth: {
			user: "farrinfedra@gmail.com",
			pass: process.env.GMAIL_APP_PASS
		},
		tls: {
			ciphers: "SSLv3",
		},
	})


	return smtpTransport.sendMail(emailData)
}
const orderEmailData = (from, to, clientUrl, subject, message, email, name) => {
	return {
		from: from,
		to: to,
		subject: subject,
		html: `
			<h3>Request from ${name} </h3>
			<p>A User has sent a message from email ${email}</p>
			<p> ${message} </p>
			<br/>
			<hr/>
			<br/>
			<p>This email may contain sensitive information</p>
         <p>https://farrinfedra.vercel.app </p> 
		`
	}
}
const userEmailData = (from, to, clientUrl) => {
	return {
		from: from,
		to: to,
		subject: 'Email Received',
		html: `
		<h3>Thank you for your interest</h3>
		<br />
		<p>This is an automated email. </p> 
		<p>Thanks for reaching out! I have received your email and I will contact you as soon as possible</p>
		<br/>
		<hr/>
		<br/>
		<p>Farrin Marouf Sofian</p>
		<p>https://farrinfedra.vercel.app </p> 
		`
	}

}
handler.post(async (req, res) => {
	try {
		const {data} = req.body
		console.log(data)
		const emailData = orderEmailData('farrinfedra@gmail.com',
			'farrinfedra@gmail.com', process.env.NEXT_PUBLIC_VERCEL_URL,
			data.subject, data.message, data.email, data.name
		)
		const sendToUserEmailData = userEmailData('farrinfedra@gmail.com',
			data.email, process.env.NEXT_PUBLIC_VERCEL_URL)
		sendEmail(req, res, emailData).then(async (sent) => {
			sendEmail(req, res, sendToUserEmailData).then(async (sentToUserInfo) => {
				return res.json({
					success: true,
					message: `Emails were sent successfully.`
				})
			})
		})
	} catch (e) {
		console.log(e)
		res.json({
			e: e,
			message: "something went wrong"
		})
	}
})

export default handler
