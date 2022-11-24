import React from 'react'
import {Card, Col, Progress, Row, Space, Tabs} from "antd";
import dynamic from "next/dynamic";

const QAnim = dynamic(() => import('rc-queue-anim'), {
	ssr: false
})
const {TabPane} = Tabs
const Skills = (props) => {

	return (
		<Tabs>
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
