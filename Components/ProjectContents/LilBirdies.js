import TaskList from "../Content/TaskList";
import Abstract from "../Content/Abstract";
import {birdsOfIst} from "../../utils/content";
import H5AudioPlayer from "react-h5-audio-player";
import {getSVG} from "../../utils/svgCreate";


const LilBirdies = () => {
	return (
		<div className='m-content' style={{height: "100%"}}>
			<img alt="birds of Istanbul App Logo" src={'/static/BirdSongs/istanbul-birds.jpeg'}/>
			<span
				className="logo-span">.<h1>{'Undergraduate Research Assistant in Bird Songs'}</h1>
			</span>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
				<TaskList header="Tasks:" taskData={birdsOfIst.taskData}/>
				<Abstract abstract={birdsOfIst.abstract}/>
			</div>
			<div style={{marginBottom: '2rem'}}>
				<h5>Samples</h5>
				<div className="sample-container">
					<p>
						An example of sound separation preprocessing using the sound separation model from Google research
						<br/><span style={{
						fontSize: "1.1rem",
						marginTop: "0.5rem",
					}}
					>Original audio:</span>
					</p>
					<H5AudioPlayer src="/static/BirdSongs/bird_audio.wav"
					               showSkipControls={false}
					               showJumpControls={false}
					               layout={'horizontal-reverse'}
					               customIcons={{
						               play: getSVG('birdPause', {class: 'birdIcon'}),
						               pause: getSVG('bird', {class: 'birdIcon'})
					               }}
					/>
					<span style={{
						fontSize: "1.1rem",
						marginTop: "0.5rem",
					}}
					>Sound separated audio:</span>
					<H5AudioPlayer src="/static/BirdSongs/seperated_soundscapes_source3.wav"
					               showSkipControls={false}
					               showJumpControls={false}
					               layout={'horizontal-reverse'}
					               customIcons={{
						               play: getSVG('birdPause', {class: 'birdIcon'}),
						               pause: getSVG('bird', {class: 'birdIcon'})
					               }}
					/>
				</div>
			</div>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
				<TaskList header="Experimented models:" taskData={birdsOfIst.expModels}/>
				<TaskList classN={'outcomes'} header="Outcomes:" taskData={birdsOfIst.outcomes}/>
			</div>
		</div>
	)
}

export default LilBirdies;