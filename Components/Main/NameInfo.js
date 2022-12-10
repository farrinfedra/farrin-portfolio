import Typical from 'react-typical'
import {getSVG} from "../../utils/svgCreate";
import {Typography} from "antd";
import {useParallax} from "react-scroll-parallax";
const {Title} = Typography;

const NameInfo = ({props}) => {
	const infoPlx = useParallax({
		translateY: ['0', '150', 'easeOut'],
		scale: [1, 0.8],
		opacity: [1, 0.1],
		speed: -10,
		shouldAlwaysCompleteAnimation: true,
	})
	return (
		<div className="b_main">
			<div ref={infoPlx.ref}>
				<Title>Farrin Marouf Sofian</Title>
			</div>
			<p>I'm a {' '}
				<Typical
					loop={Infinity}
					wrapper="b"
					steps={
						[
							'Computer Engineer', 1000, 'Developer', 500, 'Writer', 500
						]
					}
				/>
			</p>
			<div>
				<a target="blank"
				   href={'https://www.linkedin.com/in/farrin-marouf-sofian/'}>{getSVG('linkedin', {class: 'mx-3'})}</a>
				<a target="blank" href={'https://github.com/farrinfedra'}>{getSVG('github', {class: 'mx-3'})}</a>
			</div>
		</div>
	)
}

export default NameInfo
