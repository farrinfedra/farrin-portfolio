import TaskList from "../Content/TaskList";
import Abstract from "../Content/Abstract";
import {birdConv} from "../../utils/content";
import H5AudioPlayer from "react-h5-audio-player";
import {getSVG} from "../../utils/svgCreate";
import ReferenceItem from "../Elements/ReferenceItem";

const LilBirdConv = () => {
	return (
		<div className='m-content' style={{height: "100%"}}>
			<img alt="Bird song re-synthesis project" src={'/static/BirdSongConv/modal-birdsong-resynthesis.jpeg'}/>
			<div style={{
				textAlign: 'center',
			}}>
				<ReferenceItem txt={'Image Source '} referenceIdx={'2'}
				               referenceTxt={'Photo by McGill Library on Unsplash'}
				/>
			</div>
			<span
				className="logo-span">.<h1>{'Project: Bird Song Re-synthesis and Sound Identification'}</h1>
			</span>
			<span className="px-3"
			      style={{
				      marginTop: "-0.5rem",
				      marginBottom: "1rem",
			      }}
			>An extended course project inspired by speech re-synthesis models. Addressed two tasks: bird song
				re-synthesis and converting the voice of one species into another.</span>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
				<TaskList divided={true} classN='outcomes' header="Tasks:" taskData={birdConv.taskData}/>
				<Abstract abstract={birdConv.abstract}/>
			</div>
			<div style={{
				marginBottom: '2rem', width: '100%', textAlign: 'left', display: "flex",
				flexDirection: "column", marginTop: '1rem'
			}}>
				<h4>Modified model architecture:</h4>
				<h5>Samples</h5>
				<img alt={'Modified model architecture'} src={'/static/BirdSongConv/resynthesis-model.png'}/>
				<div style={{
					textAlign: 'center',
				}}>
					<ReferenceItem txt={'Our modified model architecture based on '} referenceIdx={'3'}
					               referenceTxt={'Polyak, A., Adi, Y., Copet, J., Kharitonov, E., Lakhotia, K., Hsu, W.-N., Mohamed, A., and Dupoux, E. Speech resynthesis from discrete disentangled self-supervised representations, 2021.'}
					/>
				</div>
				<div className="sample-container">
					<p>
						Re-synthesis results:
						<br/><span style={{
						fontSize: "1.1rem",
						marginTop: "0.5rem",
					}}
					>Original sound: (Lesser redpoll)</span>
					</p>
					<H5AudioPlayer src="/static/BirdSongConv/orig_gt_resynth.wav"
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
					>Re-synthesis sound:</span>
					<H5AudioPlayer src="/static/BirdSongConv/resynth_gen_multi.wav"
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
				flexDirection: "column",
			}}>
				<h6>Corresponding spectrogram: (Lesser redpoll)</h6>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginBottom: "1rem",
					}}
				>
					<div style={{
						display: "flex",
						flexDirection: "column",
						flexBasis: "50%",
					}}>
						<span>Original:</span>
						<img style={{
							width: "50%",
							marginTop: "0.5rem",
							marginBottom: "0.5rem",
							height: "auto",
							objectFit: "contain",
						}}
						     alt={'Original spectrogram'} src={'/static/BirdSongConv/specOrig.png'}/>
					</div>
					<div style={{
						display: "flex",
						flexDirection: "column",
						flexBasis: "50%",
					}}>
						<span>Re-synthesis spectrogram:</span>
						<img style={{
							width: "50%",
							marginTop: "0.5rem",
							marginBottom: "0.5rem",
							height: "auto",
							objectFit: "contain",
						}}
						     alt={'Re-synthesis spectrogram'} src={'/static/BirdSongConv/specResyn.png'}/>
					</div>
				</div>
				<div style={{
					marginBottom: '2rem', width: '100%', textAlign: 'left', display: "flex",
					flexDirection: "column", marginTop: '1rem'
				}}>
					<div className="sample-container">
						<h4>Sound conversion results:</h4>
						<span style={{
							fontSize: "1.1rem",
							marginTop: "0.5rem",
						}}>Ground truth song:</span>
						<H5AudioPlayer src="/static/BirdSongConv/conversion_gt.wav"
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
						>Prospective sound for conversion:</span>
						<H5AudioPlayer src="/static/BirdSongConv/sound_owner_gt.wav"
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
						>Conversion result:</span>
						<H5AudioPlayer src="/static/BirdSongConv/conversion_result.wav"
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
					marginBottom: '2rem', width: '100%', textAlign: 'left', display: "flex",
					justifyContent:'space-between'
				}}
				>
					<TaskList
						subHeader={<h6>Speech resynthesis from discrete disentangled self-supervised representations</h6>}
						header="Experimented models:" taskData={birdConv.expModels}/>
					<TaskList classN={'outcomes'} header="Datasets:" taskData={birdConv.datasets}/>
				</div>


			</div>
		</div>
	)
}

export default LilBirdConv;