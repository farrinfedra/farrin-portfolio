import Avatar from "../Components/Elements/Avatar";
import {Card} from "antd";
import DownloadPDF from "../Components/Elements/DownloadPDF";
import {useParallax} from "react-scroll-parallax";
import {getSVG} from "../utils/svgCreate";
import {useSetRecoilState} from "recoil";
import {currentTabAtom} from "../State/Atoms/plxState";

const AboutMePage = () => {
	const setCurrTab = useSetRecoilState(currentTabAtom)
	const aboutPlx = useParallax(
		{
			translateY: ['210vh', '10vh', 'easeOut'],
			// scale: [1, 1.2],
			opacity: [1, 0.2],
			speed: -10,
			shouldAlwaysCompleteAnimation: true,
			onProgressChange: (progress) => {
				if (aboutPlx?.element?.progress > 0.30 && aboutPlx?.element?.progress < 0.70) {
					setCurrTab('about')
				}
			}
		}
	)

	return (
		<div ref={aboutPlx.ref} className="about-me">
			<Card className="about-me__card" hoverable bordered>
				<div className="left_about">
					<Avatar/>
					<div>
						<a target="blank"
						   href={'https://www.linkedin.com/in/farrin-marouf-sofian/'}>{getSVG('linkedin', {class: 'mx-3'})}</a>
						<a target="blank"
						   href={'https://github.com/farrinfedra'}>{getSVG('github', {class: 'mx-3'})}</a>
					</div>
					<div style={{textAlign: 'center'}}>
						<DownloadPDF/>
					</div>
				</div>
				<div className="right_about">
					<div className="about-me__card--info">
						<p style={{width: "100%"}}>
							I'm Farrin Marouf Sofian, a sophomore student studying Computer Engineering at Koç
							University
							Istanbul, Turkey. I enjoy inventing new things and starting creative projects, this is why I
							chose
							my career path as computer engineering to integrate different majors with my degree to
							implement
							intriguing projects.
							This is my personal website. I have developed this website to share useful
							content and connect with people around the world. Please take your time and explore!
						</p>
					</div>
					<div className="about-me__card--extra">
						<div className="about-me__card--skills">
							<h4>Skills</h4>
							Python - Java - Pytorch - TensorFlow - C - JavaScript
						</div>
						<div className="about-me__card--langs">
							<h4>Languages</h4>
							Persian (Native) - English (Fluent) - Turkish (Fluent)
						</div>
						<div className="about-me__card--honors">
							<h4>Honors</h4>
							Vehbi Koç Scholars for outstanding academic performance for 4+ semesters.
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default AboutMePage;