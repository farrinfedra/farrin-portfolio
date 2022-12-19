import {getMessages, sendEmail} from "../utils/utilFunctions";
import {Button, Col, Input, Row} from "antd";
import React, {useState} from "react";
import {useFeedback} from "../utils/Hooks/useFeedback";
import {modalMachine} from "../State/machines/modalMachine";
import {useParallax} from "react-scroll-parallax";
import {useSetRecoilState} from "recoil";
import {currentTabAtom} from "../State/Atoms/plxState";

const ContactMePage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [activate, feedback, exists] = useFeedback(modalMachine, sendEmail, false, '/')
	const handleSubmit = (e) => {
		e.preventDefault();
		let values = {
			name, email, subject, message
		}
		activate(values)
	}
	const setCurrTab = useSetRecoilState(currentTabAtom)
	const contactPlx = useParallax({
		translateY: ['100vh', '50vh'],
		opacity: [0, .8],
		speed: -10,
		shouldAlwaysCompleteAnimation: true,
		onProgressChange: (progress) => {
			if (contactPlx?.element?.progress > 0.30 && contactPlx?.element?.progress < 0.80) {
				setCurrTab('contact')
			}
		}
	})

	return (
		<div ref={contactPlx.ref} className="my-5 contact ">
			{exists && getMessages(feedback, exists, 3)}
			<Row justify="center">
				<Col span={5} offset={2}>
					<div>
						<h3>Get In Touch</h3>
						<p>I would like to hear from you. Feel free to send me a message or an <a
							href="mailto:farrinfedra@gmail.com">Email</a>.</p>
					</div>
				</Col>
				<Col span={12} offset={5}>
					<form onSubmit={handleSubmit}>
						<Input.Group size="large">
							<Row className="my-2" gutter={8}>
								<Col span={5}>
									<Input onChange={(e) => setName(e.target.value)}
									       value={name}
									       className="z-depth-1a" type="text" placeholder="Your Name"/>
								</Col>
								<Col span={12}>
									<Input onChange={(e) => setEmail(e.target.value)}
									       value={email}
									       className="z-depth-1a" type="email" placeholder="Your Email"/>
								</Col>
							</Row>
						</Input.Group>
						<Row className="my-2" gutter={8}>
							<Col span={17}>
								<Input
									size="large"
									onChange={(e) => setSubject(e.target.value)}
									value={subject}
									className="z-depth-1a"
									type="text"
									placeholder="Subject"
								/>
							</Col>
						</Row>
						<Row className="my-2" gutter={8}>
							<Col span={17}>
								<Input.TextArea
									autoSize={{
										minRows: 5,
										maxRows: 8
									}}
									size="large"
									onChange={(e) => setMessage(e.target.value)}
									value={message}
									className="z-depth-1a"
									showCount
									maxLength={300}
									placeholder="Message"
								/>
							</Col>
						</Row>
						<Row>
							<Button size="large" htmlType='submit' type="danger" shape="round">
								Send Message
							</Button>
						</Row>
					</form>
				</Col>
			</Row>
		</div>
	)
}

export default ContactMePage;