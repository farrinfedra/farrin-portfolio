import {Button, Col, Modal, Row, Tag} from "antd";
import {useState} from "react";
import {getSVG} from "../utils/svgCreate";

const ProjectCard = ({tags, r, imgPath, children, projectTitle, styleCfg, footer}) => {
	const [visible, setVisible] = useState(false);
	return (

		<Col ref={(el) => {
			r.current = el
		}} span={11}>
			<div style={styleCfg} className="p_card">
				<img alt="test" src={imgPath}/>
				<div className="info">
					<Button onClick={() => setVisible(!visible)}>
						Read More
					</Button>
					<Modal
						className="p_modal"
						closeIcon={null}
						centered
						open={visible}
						onOk={() => setVisible(false)}
						onCancel={() => setVisible(false)}
						width={styleCfg.modalWidth}
						height={styleCfg.modalHeight}
						footer={footer}
					>
						{children}
					</Modal>
				</div>
				<div className="desc">
					<h6>
						{projectTitle}
					</h6>
					{tags}
				</div>
			</div>
		</Col>
	)
}

export default ProjectCard
