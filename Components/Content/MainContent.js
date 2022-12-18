import React from 'react'

import {Col} from 'antd';
import InfoContainer from "../MainContainers/InfoContainer";
import ProjectPage from "../../Containers/ProjectPage";
import ExperiencePage from "../../Containers/ExperiencePage";
import AboutMePage from "../../Containers/AboutMePage";
import ContactMePage from "../../Containers/ContactMePage";



const MainContent = (props) => {
    return (
        <Col className="c_main" span={24}>
            <InfoContainer/>
            <ProjectPage/>
            <ExperiencePage/>
            <AboutMePage/>
            <ContactMePage/>
        </Col>
    )
}


export default MainContent;
