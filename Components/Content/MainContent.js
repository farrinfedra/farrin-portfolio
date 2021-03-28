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
								'Computer Engineer', 1000, 'Developer', 500, 'Writer',400
							]
						}
					/>
				</p>
				<div>
					<a target="blank" href={'https://www.linkedin.com/in/farrin-marouf-sofian/'}>{getSVG('linkedin', {class: 'mx-3'})}</a>
					<a target="blank" href={'https://github.com/farrinfedra'}>{getSVG('github', {class: 'mx-3'})}</a>
				</div>
			</Col>
		</Row>
	)
}


export default MainContent;
