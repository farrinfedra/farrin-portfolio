import React from 'react'
import {Card, Col, List} from "antd";


const CoursesCard = ({cardData}) => {

	return cardData.map((title, i) => {
		return (
			<Col sm={24} md={12} lg={8} key={i}>
				<Card style={{'height': '100%'}} className="skill-card__info" title={`${title.titleIdx}   ${title.titleText}`}>
					<List.Item>{title.description}</List.Item>
				</Card>
			</Col>
		)
	})

}

export default CoursesCard;





















