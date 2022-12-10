import {audioImageProject} from "../../utils/content";
import TaskList from "../Content/TaskList";
import Abstract from "../Content/Abstract";

const AudioImageEdit = () => {

	return (
		<div className='m-content' style={{height: "60%"}}>
			<div style={{
				display: "flex",
				height: "100%",
			}}>
				<img style={{
					objectFit: "contain",
					height: "100%",
				}}
				     alt="Audio Based Image Fusion" src={'/static/audioImageEdit/ldmModel.png'}/>
				<img style={{
					objectFit: "contain",
					height: "100%",
				}}
				     alt="Audio Based Image Fusion" src={'/static/audioImageEdit/ldmModelCreepy.png'}/>
			</div>

			<span
				className="logo-span">.<h1>{'Undergraduate Research Assistant in Bird Songs'}</h1>
			</span>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
				<TaskList header="Tasks:" taskData={audioImageProject.taskData}/>
				<Abstract abstract={audioImageProject.abstract}/>
			</div>
			<div style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
				<p>
					Prompt: “a lion reading book by the beach, oil on canvas”
				</p>
				<img
					style={{objectFit: "contain", width: "100%", height: "100%"}}
					alt="Audio Prompt Results" src={'/static/audioImageEdit/audio-image-lion.png'}/>
			</div>
		</div>
	)

}

export default AudioImageEdit