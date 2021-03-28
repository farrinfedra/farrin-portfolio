import {message} from 'antd'
import axios from "axios";

export async function sendEmail(values) {
	try {
		const data = await axios.post('/api/message', {
			data: values,
		})
		if (!data.data.success) {
			return new Promise((resolve, reject) => reject(data.message))
		}
		return {data: {}, message: "Your message was Received. Thank you."}
	} catch (e) {
		console.log(e.response)
		return new Promise((resolve, reject) => reject(e.response.statusText))
	}
}

export const getMessages = (feedback, exists, duration = 2) => {
	message.loading({
		content: feedback.message, style: {
			marginTop: '20vh',
		}, key: 'updatable'
	})
	setTimeout(() => {
		if (feedback.state === 'success') {
			message.success({
				content: feedback.message, style: {
					marginTop: '20vh',
				}, key: 'updatable', duration
			}).then(value => {
				exists = false
			})
		} else if (feedback.state === 'failure') {
			message.error({
				content: feedback.message, style: {
					marginTop: '20vh',
				}, key: 'updatable', duration
			}).then(value => {
				exists = false
			})
		}
	}, 300)
}
