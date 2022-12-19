import {useParallax} from "react-scroll-parallax";
import {useSetRecoilState} from "recoil";
import {currentTabAtom} from "../State/Atoms/plxState";
import {Card, Col, List, Row, Timeline} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import React from "react";

const ExperiencePage = () => {
	const setCurrTab = useSetRecoilState(currentTabAtom)
	const expPrlx = useParallax({
		translateY: ['210vh', '30vh', 'easeOut'],

		opacity: [1, 0.6],
		speed: -10,
		onChange: (progress) => {
			if (progress.progress > 0.40 && progress.progress < 0.70) {
				setCurrTab('experience')
			}
		},
		shouldAlwaysCompleteAnimation: true,
	})

	const resPrlx = useParallax({
		// translateX: ['0vw', '-90vw', 'easeOut'],
		translateY: ['-50vh', '0vh', 'easeOut'],
		opacity: [1, 0.6],
		speed: -10,
		shouldAlwaysCompleteAnimation: true,
	})
	// const workPrlx = useParallax({
	// 	// translateX: ['0vw', '90vw', 'easeOut'],
	// 	translateY: ['100vh', '60vh', 'easeOut'],
	// 	opacity: [1, 0],
	// 	speed: -20,
	// 	shouldAlwaysCompleteAnimation: true,
	// } )

	return (
		<div ref={expPrlx.ref} className="c_experience">
			<Row justify="center" gutter={8}>
				<Col ref={resPrlx.ref} offset={2} span={18}>
					<Card title="Internships" className="experience-card" boredered={false}>
						<div className="experience-card-info">
							<Timeline>
								<Timeline.Item color="white">
									2019 - Present
									Education
									<h5 style={{fontWeight: 'bolder'}}>Machine Learning Engineer Intern - RadiusAI</h5>
									<p style={{
										fontSize: '1rem',
										fontStyle: 'italic',
										fontWeight: 'bold'
									}}>Worked as a Machine learning engineer in the Research and Development team to
										work on camera calibration using static features in the images.
									</p>
									<br/>
									<ul className="experience-card-info-list">
										<li>Researched and proposed deep learning solutions for camera calibration
											based on scene geometry.
										</li>
										<li>Evaluated the effectiveness of deep learning as well as other
											traditional methods to solve the problem.
										</li>
										<li>Created the company’s first fully automated camera calibration, reducing
											the company’s reliance on expensive annotators.
										</li>
									</ul>

								</Timeline.Item>
								<Timeline.Item color="white">
									2019 - Present
									<h5 style={{fontWeight: 'bolder'}}>Software Engineering - Digitopia</h5>
									<p style={{
										fontSize: '1rem',
										fontStyle: 'italic',
										fontWeight: 'bold'
									}}>Worked as a backend developer in the Development team to
										create dynamic pdf generator to illustrate enterprise statistics.
									</p>
									<br/>
									<ul className="experience-card-info-list">
										<li>Designed the company’s main product for providing marketing analytics for large enterprises.</li>
										<li>Created a dynamic PDF generator from user dashboard results using Handlebars, JavaScript and
										Node.js.</li>
										<li>Participated in Agile workflow as part of the development team.</li>
										
									</ul>
								</Timeline.Item>
							</Timeline>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default ExperiencePage;
