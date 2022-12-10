import {Card, Col, Row} from "antd";
import ProjectContainer from "../Components/Elements/ProjectContainer";

const Projects = () => {

	return (
		<Row>
			{
				projectData.map((project, index) => {
					return (
						<Col key={index} offset={1} span={10}>
							<ProjectContainer projectData={project}/>
						</Col>
					)
				})
			}
		</Row>
	)

}

export default Projects
