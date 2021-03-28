import React from 'react'
import Avatar from "../Elements/Avatar";
import {Col, Row, Typography} from 'antd';
import Typical from 'react-typical'
import {getSVG} from "../../utils/svgCreate";

const {Title} = Typography;

const MainContent = (props) => {


	return (
		<Row className="home" style={{textAlign: 'center'}} justify="center">
			<Col span={24}>
				<Avatar/>
				<Title>Farrin Marouf Sofian</Title>
				<p>I'm a {' '}
					<Typical
						loop={Infinity}
						wrapper="b"
						steps={
							[
								'developer', 1000, 'computer engineer', 1000,
							]
						}
					/>
				</p>
				<div>
					{getSVG('linkedin', {class: 'mx-3'})}
					{getSVG('github', {class: 'mx-3'})}
				</div>
			</Col>
		</Row>
	)
}


export default MainContent;
