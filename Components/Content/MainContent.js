import React, {useEffect} from 'react'

import {Col} from 'antd';
import InfoContainer from "../MainContainers/InfoContainer";
import ProjectPage from "../../Containers/ProjectPage";
import ExperiencePage from "../../Containers/ExperiencePage";



const MainContent = (props) => {

	return (
		<Col className="c_main" span={24}>
			<InfoContainer/>
			<ProjectPage/>
			<ExperiencePage />
		</Col>
	)
}


export default MainContent;
