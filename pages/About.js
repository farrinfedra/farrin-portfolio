import React from 'react'
import {Col, Row, Space} from "antd";
import AboutMe from "../Components/PagesX/AboutMe";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase, faBullseye, faCheckCircle, faHeartbeat} from '@fortawesome/free-solid-svg-icons'

const About = () => {
	return (
		<Row justify="center">
			<Col className="text-center pt-4" span={24}>
				<h2 className="title">About me</h2>
				<Space/>
			</Col>

			<Col className="mb-5" span={20}>
				<AboutMe/>
			</Col>

			<Col className='my-5 text-center' span={20}>
				<Row justify="center">
					<Col span={24}>
						<Row justify="center">
							<Col className="about-sections" xs={24} s={24} md={24} lg={12}>
								<FontAwesomeIcon className="about-icons" icon={faCheckCircle}/>
								<h4>Curious to Learn</h4>
								<p className="about__desc">I've always been committed to lifelong learning and sharing my
									knowledge
									with
									others</p>
							</Col>
							<Col xs={24} s={24} md={24} lg={12}>
								<FontAwesomeIcon className="about-icons" icon={faBullseye}/>
								<h4>Ambitious</h4>
								<p className="about__desc">Have a goal in my mind? <br/>I will work as hard as I can to achieve
									it
									<br/> Have a long-term goal in mind? I will plan ahead and never give up.
								</p>
							</Col>
							<Col xs={24} s={24} md={24} lg={12}>
								<FontAwesomeIcon className="about-icons" icon={faHeartbeat}/>
								<h4>TeamWork</h4>
								<p className="about__desc">I've been engaged in many group activities and projects which I've
									enjoyed
									so
									much,
									I've always also tried my best to do the best I can while working with others.
								</p>
							</Col>
							<Col xs={24} s={24} md={24} lg={12}>
								<FontAwesomeIcon className="about-icons" icon={faBriefcase}/>
								<h4>Reliable and Consistent</h4>
								<p className="about__desc">Given a responsibility or a task, I will plan ahead and dedicate
									enough
									time
									to
									make sure
									everything goes according to the plan. I've always enjoyed taking responsibilities.
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}
export default About
