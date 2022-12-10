import ProjectCard from "../ProjectCard";
import ModalContent from "./ModalContent";


const ProjectContainer = ({r, projectData, children}) => {
	return (

		<ProjectCard r={r} imgPath={projectData.cardImg} projectTitle={projectData.cardTitle}
		             styleCfg={{
			             width: projectData.cardSize,
			             height: projectData.cardHeight,
			             margin: projectData.cardMargin || '16px',
			             modalHeight: projectData.modalStyle.modalHeight,
			             modalWidth: projectData.modalStyle.modalWidth,
		             }}
		             footer={projectData.modalFooter}
		             tags={projectData.tags}
		>
			{/*<ModalContent title={projectData.modalTitle} desc={projectData.modalDesc}*/}
			{/*              imgPath={projectData.modalImg}/>*/}
			{children}
		</ProjectCard>
	)
}

export default ProjectContainer
