import React from 'react'
import {Card, Col} from "antd";


const SkillCard = ({cardData}) => {

	return cardData.map((title, i) => {
		return (
			<Col sm={24} md={12} lg={8} key={i}>
				<Card className="skill-card__info" title={`${title.titleIdx}   ${title.titleText}`}>
				</Card>
			</Col>
		)
	})

}

export default SkillCard;





















