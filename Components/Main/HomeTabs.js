import {useParallax, useParallaxController} from "react-scroll-parallax";
import {useEffect} from "react";
import {currentTabAtom} from "../../State/Atoms/plxState";
import {useRecoilValue} from "recoil";

const HomeTabs = () => {

	const currTab = useRecoilValue(currentTabAtom)

	const tabsPrlx = useParallax({
		translateY: ['0vh', '5vh', 'easeOut'],
		scale: [1, 1.2],
		//opacity: [1, 0.2],
		speed: -10,
		onProgressChange: (progress) => {
			if (tabsPrlx?.element?.progress > 0.70) {
				tabsPrlx.ref.current.style.position = 'fixed'
				tabsPrlx.ref.current.style.top = '30px'

			} else {
				tabsPrlx.ref.current.style.position = 'relative'
				tabsPrlx.ref.current.style.top = '0px'
			}
		},
		shouldAlwaysCompleteAnimation: true,
	})


	return (
		<div ref={tabsPrlx.ref} className="t_main">
			<h5 style={{
				opacity: currTab === 'projects' ? 1 : 0.4,
			}}
			>Projects</h5>
			<h5 style={{
				opacity: currTab === 'experience' ? 1 : 0.4,
			}}
			>Experience</h5>
			<h5 style={{
				opacity: currTab === 'skills' ? 1 : 0.4,
			}}
			>Coding Skills</h5>
			<h5 style={{
				opacity: currTab === 'about' ? 1 : 0.4,
			}}
			>About Me</h5>
			<h5 style={{
				opacity: currTab === 'contact' ? 1 : 0.4,
			}}
			>Contact</h5>
		</div>
	)
}

export default HomeTabs
