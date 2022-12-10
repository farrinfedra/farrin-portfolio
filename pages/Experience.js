import React from 'react'
import {Timeline, Card, Col, Row, Space} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';

const Experience = () => {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <h2 className=" experience-title title">Experiences</h2>
                    <Space/>
                </Col>
            </Row>
            <div className="site-card-wrapper">
                <Row gutter={8}>
                    <Col sm={24} md={12} lg={12} span={12}>
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
                    <Col sm={24} md={12} lg={12} span={12}>
                        <Card title="Job" className="experience-card" boredered={false}>
                            <div className="experience-card-info">
                                <Timeline>
                                    <Timeline.Item color="green">
                                        Summer 2020
                                        <h5 style={{fontWeight: 'bold'}}>Web Development</h5>
                                        <p>Stepped into creative world of web development</p>
                                        <p>
                                            Started learning cutting-edge libraries such as Next.js React.js
                                            Node.js and used unique styling in Sass and component designs such as
                                            Ant Design.
                                            Explored different APIs and used them in creating small web apps such as
                                            personalized newsletter and To-do lists.
                                        </p>
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        2020

                                        <h5 style={{fontWeight: 'bold'}}>Burger Builder React and Node.js based Project</h5>
                                        <p>
                                            Building a burger based on the ingredients that clients add and
                                            rendering the burger on the screen as the ingredients are added.
                                            Showing the cost of each ingredient and calculating the total cost of
                                            customized burger.
                                        </p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green">
                                        2021
                                        <h5 style={{fontWeight: 'bold'}}>Portfolio Website</h5>
                                        <p>Created my own portfolio website using cutting-edge libraries and languages
                                        such as <u>React.js</u>, <u>Node.js</u>, <u>Next.js</u>, <u>Node-mailer</u>, <u>axios</u>,
                                            <u>Saas</u> and <u>Ant Design</u>.</p>
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
