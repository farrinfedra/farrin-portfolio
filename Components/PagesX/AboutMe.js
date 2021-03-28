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
						I am Farrin Marouf Sofian, a sophomore student in Computer Engineering at Koç University
						Istanbul, Turkey. I dont know what else.
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
