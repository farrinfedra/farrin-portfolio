import React from 'react'
import {Timeline, Card, Col, Row, Space} from 'antd';

const Experience = () => {
	return (
		<div>
			<Row>
				<Col span={24}>
					<h2 className="title">Experiences</h2>
					<Space/>
				</Col>
			</Row>
			<div className="site-card-wrapper">
				<Row gutter={16}>
					<Col span={12}>
						<Card className="experience-card" boredered={false}>
							<div className="experience-card-info">
								<Timeline>
									<Timeline.Item color="green">
										2019 - Present
										Education
										<h5 style={{fontWeight: 'bold'}}>Koç University - Istanbul, Turkey</h5>
										<p>Bachelor's degree in Computer Engineering</p>
									</Timeline.Item>
									<Timeline.Item color="green">
										2019 - Freshman
										Semester 1 Courses
										<h5 style={{fontWeight: 'bold'}}>something good </h5>

									</Timeline.Item>
									<Timeline.Item color="green">
										2020 - Freshman
										Semester 2 Courses
										<h5 style={{fontWeight: 'bold'}}>dont know what </h5>

									</Timeline.Item>
									<Timeline.Item color="green">
										2020 - Sophomore
										Semester 3 Courses
										<h5 style={{fontWeight: 'bold'}}>Izmir, Turkey</h5>
										<p>something in engr200</p>
									</Timeline.Item>
									<Timeline.Item color="green">
										2021 - Sophomore
										Semester 4 Courses
										<h5 style={{fontWeight: 'bold'}}>title heree</h5>
										<p>something in comp202</p>
									</Timeline.Item>

								</Timeline>
							</div>
						</Card>
					</Col>
					<Col span={12}>
						<Card className="experience-card" boredered={false}>
							<div className="experience-card-info">
								<Timeline>
									<Timeline.Item color="green">
										10-2020
										<h5 style={{fontWeight: 'bold'}}>Joined ACM Club</h5>
										<p>Assisted in coordinating and organizing Hackathons in the Team</p>
										<p>Helped arranging and directing workshops and mock interviews with various
											companies.</p>
									</Timeline.Item>
									<Timeline.Item color="red">
										02-2021
										<h5 style={{fontWeight: 'bold'}}>Section Leader</h5>
										<p>Section Leader for Advanced programming course</p>
										<p>Graded student's lab assignments</p>

									</Timeline.Item>
								</Timeline>
							</div>
						</Card>
					</Col>

				</Row>
			</div>
		</div>
	)
}

export default Experience
