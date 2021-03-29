import React from 'react'
import Avatar from "../Elements/Avatar";
import {Card} from 'antd'
import DownloadPDF from "../Elements/DownloadPDF";

const AboutMe = () => {
	return (
		<div className="about-me">
			<Avatar/>
			<Card className="about-me__card" hoverable bordered>
				<div className="about-me__card--info">
					<p style={{width: "100%"}}>
						I am Farrin Marouf Sofian, a sophomore student studying Computer Engineering at Koç University
						Istanbul, Turkey. I enjoy inventing new things and starting creative projects, this is why I chose
						my career path as computer engineering to integrate different majors with my degree to implement
						intriguing projects.
						This is my personal website. I have developed this website to share useful
						content and connect with people around the world. Please take your time and explore!
					</p>
					<div style={{textAlign:'center'}}>
						<DownloadPDF/>
					</div>
				</div>
			</Card>

		</div>
	)
}
export default AboutMe
