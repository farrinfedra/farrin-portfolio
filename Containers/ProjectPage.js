import {useParallax} from "react-scroll-parallax";
import {birdConv, birdsOfIst, audioImageProject, portfolio} from "../utils/content";
import {Row} from "antd";
import ProjectContainer from "../Components/Elements/ProjectContainer";
import LilBirdies from "../Components/ProjectContents/LilBirdies";
import AudioImageEdit from "../Components/ProjectContents/AudioImageEdit";
import LilBirdConv from "../Components/ProjectContents/LilBirdConv";
import Portfolio from "../Components/ProjectContents/Portfolio";
import {useSetRecoilState} from "recoil";
import {currentTabAtom} from "../State/Atoms/plxState";


const ProjectPage = () => {
	const setCurrTab = useSetRecoilState(currentTabAtom)
	const pj1Plx = useParallax({
		translateY: ['100vh', '-10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		shouldAlwaysCompleteAnimation: true,
	})
	const pj2Plx = useParallax({
		translateY: ['100vh', '-10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		shouldAlwaysCompleteAnimation: true,
	})
	const pj3Plx = useParallax({
		translateY: ['110vh', '-10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		shouldAlwaysCompleteAnimation: true,
	})
	const pj4Plx = useParallax({
		translateY: ['110vh', '-10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		onChange: (progress) => {
			if (progress.progress > 0.20 && progress.progress < 0.80) {
				setCurrTab('projects')
			}
		},
		shouldAlwaysCompleteAnimation: true,
	})


	return (
		<div className="p_cont">
			<Row>
				<ProjectContainer r={pj1Plx.ref} projectData={birdsOfIst}>
					<LilBirdies/>
				</ProjectContainer>
				<ProjectContainer r={pj2Plx.ref} projectData={audioImageProject}>
					<AudioImageEdit/>
				</ProjectContainer>
				<ProjectContainer r={pj3Plx.ref} projectData={birdConv}>
					<LilBirdConv/>
				</ProjectContainer>
				<ProjectContainer r={pj4Plx.ref} projectData={portfolio}>
					<Portfolio/>
				</ProjectContainer>
			</Row>
		</div>
	)
}

export default ProjectPage;