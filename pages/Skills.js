import React from 'react'
import {Card, Col, Progress, Row, Space, Tabs} from "antd";
import SkillCard from "../Components/PagesX/SkillCard";
import dynamic from "next/dynamic";

const QAnim = dynamic(() => import('rc-queue-anim'), {
	ssr: false
})
const {TabPane} = Tabs
const Skills = (props) => {
	const arrayOfTitles = [
		{
			titleIdx: '01',
			titleText: 'C Programming Language',
			description: 'Took Comp132, Advanced programming course and Comp201, Computer Systems & Programming ' +
				'classes at the university. Learned about basics of C programming languages, implemented Floyd–Warshall ' +
				'algorithm in C to find the shortest path between given set of cities, implemented a mock supermarket' +
				'queue representing stack and queue.'

		}, {
			titleIdx: '02',
			titleText: 'Java Programming Language',
			description:'Learn about basics of Java programming in comp131 - Introduction to programming class. In this class' +
				'basic principles and general rules about coding were taught. In my second semester I took comp132- Advanced Programming course' +
				'Where I learned object oriented programming in java, Graphical User Interfaces, Lambdas and streams, and error handling'
		}, {
			titleIdx: '03',
			titleText: 'Assembly',
			description:'Took comp201 - Computer Systems & Programming course. I learned about fundamental assembly' +
				'instructions such as data movement, arithmetic and logic operations, and loops. I got learned most common ' +
				'security vulnerabilities such as buffer overflows and code injections.' +
				'Cache Memories and Memory organizations, linkin and code optimizations were also taught.'
		}, {
			titleIdx: '04',
			titleText: 'JavaScript',
			description:'In summer 2020 I started learning JavaScript and building small projects such as weather podcasting web app.  '
		}, {
			titleIdx: '05',
			titleText: 'React.js',
			description:'After working with JavaScript, I discovered React library and its amazing functionality, I have developed' +
                ' many of my projects with react some of which are mentioned in experiences section. '
		}, {
			titleIdx: '06',
			titleText: 'Node.js',
			description:'I have used Node.js in my portfolio page along with my other web development projects'
		}, {
			titleIdx: '07',
			titleText: 'Next.js',
			description:'Started my journey with Next.js in summer for my server-side rendering web applications'
		}, {
			titleIdx: '08',
			titleText: 'Sass',
			description:'I used Sass in 2 of my projects including my portfolio website. '
		}, {
			titleIdx: '09',
			titleText: 'Microsoft Office',
			description:'I took Computer Proficiency Assessment Program (CPAP) test at university for advanced Excel and' +
				' Powerpoint skills '
		}, {
			titleIdx: '10',
			titleText: 'Git / Github VCS',
			description:'I had basic knowledge of version control systems when I first started coding, but after taking comp201 course' +
				'at university, I learned about Git and Github in more details and since then I have been using it while' +
				'building my projects'
		},
		{
			titleIdx: '11',
			titleText: 'Video editing',
			description:'My journey in video editing and production started in high school where I joined a competition' +
				'and starting creating stop motion videos. Since then I have been creating short videos.'
		},
		{
			titleIdx: '12',
			titleText: 'NOSQL MongoDB',
			description:'I have started learning about MongoDB from MongoDB university website. After finishing the basics' +
				'I will start learning about its cluster administration and data modeling '
		},
	]
	return (
		<Tabs className="skills-tab">
			<TabPane tab={<div className="parent"><span className="hover hover-1">Skills</span></div>} key="1">
				<Row gutter={[32, 32]}>
					<SkillCard cardData={arrayOfTitles}/>
				</Row>
			</TabPane>
			<TabPane tab={<div className="parent"><span className="hover hover-1">Languages</span></div>} key="2">
				<div style={{margin: '0 auto'}} className="pt-5 text-align">
					<QAnim delay={300} className="queue-simple text-align">
						<div style={{width: '50vw', display: "flex"}} key="c">
							<span className="mx-3">Persian</span>
							<Progress
								strokeColor={{
									'0%': '#108ee9',
									'100%': '#87d068'
								}}
								status="active"
								percent={100}
								showInfo={false}
								strokeWidth={13}

							/>
							<span className="mx-3">Native</span>
						</div>
						<div style={{width: '50vw', display: "flex"}} key="a">
							<span className="mx-3">English</span>
							<Progress
								strokeColor={{
									'0%': '#108ee9',
									'100%': '#87d068'
								}}
								status="active"
								percent={90}
								showInfo={false}
								strokeWidth={13}

							/>
							<span className="mx-3">Fluent</span>
						</div>
						<div style={{width: '50vw', display: "flex"}} key="b">
							<span className="mx-3">Turkish</span>

							<Progress
								strokeColor={{
									'0%': '#108ee9',
									'95%': '#87d068'
								}}
								status="active"
								percent={100}
								showInfo={false}
								strokeWidth={13}

							/>

							<span className="mx-3">Fluent</span>
						</div>

						<div style={{width: '50vw', display: "flex"}} key="d">
							<span className="mx-3">German</span>
							<Progress
								strokeColor={{
									'0%': '#108ee9',
									'100%': '#87d068'
								}}

								percent={20}
								showInfo={false}
								strokeWidth={13}

							/>
							<span className="mx-3">Beginner</span>
						</div>
					</QAnim>
				</div>
			</TabPane>
			{/*<TabPane tab={<div className="parent"><span className="hover hover-1">Courses</span></div>} key="3">*/}
			{/*	<p>There are people leaving here</p>*/}
			{/*	<p>3 AM mind</p>*/}
			{/*	/!*<p>Content of Tab Pane 3</p>*!/*/}
			{/*</TabPane>*/}
		</Tabs>

	)
}

export default Skills
