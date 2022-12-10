import {useParallax} from "react-scroll-parallax";
import {useSetRecoilState} from "recoil";
import {currentTabAtom} from "../State/Atoms/plxState";
import {Card, Col, Row, Timeline} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import React from "react";

const ExperiencePage = () => {
	const setCurrTab = useSetRecoilState(currentTabAtom)
	const expPrlx = useParallax({
		translateY: ['180vh', '10vh', 'easeOut'],
		scale: [1, 1.2],
		//opacity: [1, 0.2],
		speed: -10,
		shouldAlwaysCompleteAnimation: true,
		onProgressChange: (progress) => {
			console.log(expPrlx?.element?.progress)
			if (expPrlx?.element?.progress > 0.30 && expPrlx?.element?.progress < 0.40) {
				setCurrTab('experience')
			} else if (expPrlx?.element?.progress < 0.30) {
				setCurrTab('projects')
			}
		}
	})

	const resPrlx = useParallax({
		translateX: ['0vw', '-90vw', 'easeOut'],
		translateY: ['0vh', '60vh', 'easeOut'],
		opacity: [1, 0.4],
		speed: -10,
		//shouldAlwaysCompleteAnimation: true,
	})
	const workPrlx = useParallax({
		translateX: ['0vw', '90vw', 'easeOut'],
		translateY: ['0vh', '60vh', 'easeOut'],
		opacity: [1, 0.4],
		speed: -10,
		//shouldAlwaysCompleteAnimation: true,
	} )

	return (
		<div ref={expPrlx.ref} className="c_experience">
			<Row justify="center" gutter={8}>
				<Col ref={resPrlx.ref} span={24}>
					<Card title="Research" className="experience-card" boredered={false}>
						<div className="experience-card-info">
							<Timeline>
								<Timeline.Item color="green">
									2019 - Present
									Education
									<h5 style={{fontWeight: 'bold'}}>Koç University - Istanbul, Turkey</h5>
									<p>Bachelor's degree in Computer Engineering</p>
								</Timeline.Item>
								<Timeline.Item color="green">
									10-2020
									<h5 style={{fontWeight: 'bold'}}>Joined ACM Club</h5>
									<p>Assisted in coordinating and organizing Hackathons in the Team</p>
									<p>Helped arranging and directing workshops and mock interviews with various
										companies.</p>
								</Timeline.Item>
								<Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon"/>}
								               color="red">
									02-2021
									<h5 style={{fontWeight: 'bold'}}>Section Leader</h5>
									<p>Section Leader for Advanced programming in java course</p>
									<p>Graded student's lab assignments and helped them during lab sessions</p>

								</Timeline.Item>
								{/*<Timeline.Item color="green">*/}
								{/*    2019 - Freshman*/}
								{/*    Semester 1 Courses*/}
								{/*    <h5 style={{fontWeight: 'bold'}}>something good </h5>*/}

								{/*</Timeline.Item>*/}


							</Timeline>
						</div>
					</Card>
				</Col>
				<Col className="testf" ref={workPrlx.ref} span={24}>
					<Card title="Research" className="experience-card" boredered={false}>
						<div className="experience-card-info">
							<Timeline>
								<Timeline.Item color="green">
									2019 - Present
									Education
									<h5 style={{fontWeight: 'bold'}}>Koç University - Istanbul, Turkey</h5>
									<p>Bachelor's degree in Computer Engineering</p>
								</Timeline.Item>
								<Timeline.Item color="green">
									10-2020
									<h5 style={{fontWeight: 'bold'}}>Joined ACM Club</h5>
									<p>Assisted in coordinating and organizing Hackathons in the Team</p>
									<p>Helped arranging and directing workshops and mock interviews with various
										companies.</p>
								</Timeline.Item>
								<Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon"/>}
								               color="red">
									02-2021
									<h5 style={{fontWeight: 'bold'}}>Section Leader</h5>
									<p>Section Leader for Advanced programming in java course</p>
									<p>Graded student's lab assignments and helped them during lab sessions</p>

								</Timeline.Item>
								{/*<Timeline.Item color="green">*/}
								{/*    2019 - Freshman*/}
								{/*    Semester 1 Courses*/}
								{/*    <h5 style={{fontWeight: 'bold'}}>something good </h5>*/}

								{/*</Timeline.Item>*/}


							</Timeline>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default ExperiencePage;