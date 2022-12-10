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
		translateY: ['110vh', '10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		shouldAlwaysCompleteAnimation: true,
	})
	const pj2Plx = useParallax({
		translateY: ['110vh', '10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		shouldAlwaysCompleteAnimation: true,
	})
	const pj3Plx = useParallax({
		translateY: ['120vh', '10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		shouldAlwaysCompleteAnimation: true,
	})
	const pj4Plx = useParallax({
		translateY: ['120vh', '10vh', 'easeOut'],
		opacity: [0.3, 1],
		speed: -20,
		onProgressChange: (progress) => {
			console.log(pj4Plx?.element.progress)
			if (pj4Plx?.element.progress > 0.10 && pj4Plx?.element.progress < 0.30) {
				setCurrTab('projects')
			} else if (pj4Plx?.element.progress < 0.10) {
				setCurrTab('home')
			}
		},
		shouldAlwaysCompleteAnimation: true,
	})


	return (
		<div id="projects" className="p_cont">
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