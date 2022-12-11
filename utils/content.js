import {Tag, Tooltip} from "antd";
import {getSVG} from "./svgCreate";
import ReferenceItem from "../Components/Elements/ReferenceItem";


export const birdsOfIst = {
	cardImg: '/static/BirdSongs/logo-birdsOfIstanbul.png',
	cardTitle: 'Bird Songs',
	modalTitle: 'Undergraduate Research Assistant in Bird Songs',
	taskData: [
		'Trained transformer-based models on bird songs to detect active singing in recordings',
		'Experimented with self-supervised transformer-based models and CNNs',
		'Fine-tuned the model on 270k bird recordings (400 species) in Turkey for Birds of Istanbul mobile application',
		'Gathered and modified meta-data for 600k bird songs',
		'Applied several pre-prossesing steps such as sound separation on the recordings',
		'Trained models on High Performance Computing clusters and contributed on writing documentation on how to use HPC clusters for graduate students'
	],
	abstract: <div style={{
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		fontSize: '1rem',
		textAlign: 'left',

	}}>
		<p>
			We have all heard birds singing out in the nature, but have you thought which bird is it that you are
			hearing?
			What are the similarities between the songs that they are singing? Are they commonly found birds or were you
			lucky
			to stumble upon one of the rare ones?
		</p><p>
		To address some of these questions, we conducted a collaborative research project between the department of
		psychology and KUIS AI Lab at Koç University. In this project, we classified common, rare or occasionaly
		extinct
		birds around the world. Obtaining promissing results, I started collecting and preprocessing to fine-tuning
		the model on 400+ species in Turkey. This model, after a year of my research in KUIS AI Lab, achieved
		compelling
		results, and was chosen as the back bone model in the Birds of Istanbul mobile application.
	</p><br/>
	</div>,
	modalStyle: {
		modalHeight: '80vh',
		modalWidth: '80vw'
	},
	modalFooter:
		<div className="bird-footer">
			<div className='footer-links'>
				<h6>Github Link:</h6>
				<a target="_blank" href='https://github.com/farrinfedra/BirdsOfIstanbul' className='git-link-container'>
					{getSVG('github', {class: 'github-icon'})}
					<span>
						BirdsOfIstanbul
					</span>
				</a>

			</div>
			<div className='bird-footer-tech'>
				<h6>Technologies & Tools:</h6>
				<Tag icon={getSVG('python', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('wandb', {class: 'tagIcon'})}/>
				<Tag style={{
					height: '28px',
					scale: '1.3'
				}
				} icon={getSVG('pytorch', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('ffmpeg', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('teslat4', {class: 'tagIcon'})}/>
			</div>
		</div>
	,
	tags: <div className='footer-tags'>
		<Tag>Deep Learning</Tag>
		<Tag>Audio classification</Tag>
		<Tag>iOS</Tag>
	</div>,
	expModels: [
		<ReferenceItem
			key={0}
			txt={'Self-Supervised Audio Spectrogram Transformers'}
			referenceTxt={'Gong, Y., Chung, Y.-A., and Glass, J. Ast: Audio spec-trogram transformer, 2021a'}
			referenceIdx={'1'}
		/>,
		<ReferenceItem
			key={1}
			txt={'Audio Spectrogram Transformers'}
			referenceTxt={'Gong, Y., Lai, C. J., Chung, Y., and Glass, J. R. SSAST: self-supervised audio spectrogram transformer. CoRR, abs/2110.09784, 2021b'}
			referenceIdx={'2'}
		/>,
		<ReferenceItem
			key={2}
			txt={'Google research - Sound separation model'}
			referenceTxt={' Denton, T., Wisdom, S., and Hershey, J. R. Improving bird classification with unsupervised sound separation, 2021'}
			referenceIdx={'3'}
		/>,
		'ResNet-50'
	],
	outcomes: [`An iOS application that classifies birds songs in different regions of Turkey, along with the corresponding discriptions of the resulting bird, its spectrogram and the location where it was captured. The model also gatheres data (with permission) from the bird watchers by asking several questions about the observed bird. `]
}
export const audioImageProject =
	{
		cardImg: '/static/audioImageEdit/modal_diffusion.jpeg',
		cardTitle: 'Audio-based Image Editing',
		modalTitle: 'Research',
		taskData: [
			' Training unconditional latent diffusion model on nature and outdoor datasets.',
			' Researching and experimenting on image reconstruction in latent diffusion models.',
			' Experimenting with StyleGAN and various Audio encoder models, Researching on integrating Adapters.'
		],
		abstract: <div style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			fontSize: '1rem',
			textAlign: 'left',
		}}>
			<p>
				Recently, Diffusion models have shown us their power in generating diverse and high resolution images.
				Moving to a multi-modal domain, can help us generate interesting images conditioned on audio or text.
			</p><p>
			In this new project, in KUIS AI lab, my teammate and I are making use of the performance of latent diffusion
			models to generate images conditioned on audio.
		</p><br/>
			<p>Stay tuned for the results after publication!</p>
			<p>But for now, here are some breath-taking results from text-to-image LDM models!
			</p>
		</div>,
		modalStyle: {
			modalHeight: '80vh',
			modalWidth: '80vw'
		},
		modalFooter: null,
		tags:

			<div className='footer-tags'>
				<Tag>On-going research</Tag>
				<Tag>Multi-modal generative models</Tag>
				<Tag>latent diffusion models</Tag>
				<Tag>audio processing</Tag>
			</div>
		,

	}

export const birdConv = {
	cardImg: '/static/BirdSongConv/two-birds-card.jpeg',
	cardTitle: 'Bird Songs Re-synthesis and sound conversion',
	modalTitle: 'Project: Bird Song Re-synthesis and Sound Identification',
	taskData: [
		'Trained different components of the baseline model on speech datasets such as LJSpeech and LibriLight.',
		'Gathered and preprocessed a dataset of 100 hours of bird recordings',
		'Trained and extracted species’ sound embeddings from transformer model [4]. Moreover, trained the model to detect' +
		' bird call in 10 second frames. Integrated the results with sound separation model to enhance the obtained embeddings.',
		'Experimented with VQ-VAE and HiFi-GAN models as content encoder and vocoder, respectively',
		'Evaluated the model and conducted comparison between the performance of the baseline model trained on speech' +
		' dataset and the one trained and modified for bird songs.',
		'Performed extensive literature study to understand and identify the best suitable model for converting voice of a species into another one.'
	],
	abstract: <div style={{
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		fontSize: '1rem',
		textAlign: 'left',

	}}>
		<p>
			Nature is filled with species that learn to sing other species’ songs by simply listening to the a nearby
			bird and immitating it. Inspired by this mesmerising phenomena, my teammember and I wondered how would it sound
			like if we could convert sound of a species into that of another species.
		</p><p>
		After an extensive literature search and reading, as our course project, we decided to choose Bird Song
		Re-synthesis from Self-Supervised Representations paper by (Polyaket al., 2021). We experimented with different
		components offered by the original model, trained them on 100 hours of bird songs, as well as LJSpeech
		and LibriLight speech datasets, and compared the results with the baseline model
	</p><br/>
	</div>,
	modalStyle: {
		modalHeight: '80vh',
		modalWidth: '80vw'
	},
	modalFooter:
		<div className="bird-footer">
			<div className='footer-links'>
				<h6>Github Link:</h6>
				<a target="_blank" href='https://github.com/farrinfedra/BirdsOfIstanbul' className='git-link-container'>
					{getSVG('github', {class: 'github-icon'})}
					<span>
						BirdsOfIstanbul
					</span>
				</a>
			</div>
			<div className='bird-footer-tech'>
				<h6>Technologies & Tools:</h6>
				<Tag icon={getSVG('python', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('tensor', {class: 'tagIcon'})}/>
				<Tag style={{
					height: '28px',
					scale: '1.3'
				}
				} icon={getSVG('pytorch', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('ffmpeg', {class: 'tagIcon'})}/>
			</div>
		</div>
	, tags: <div className='footer-tags'>
		<Tag>Self-Supervised Learning</Tag>
		<Tag>Audio classification</Tag>
		<Tag>Speech resynthesis</Tag>
	</div>,
	expModels: [
		'Hifi-GAN',
		'VQ-VAE',
		<ReferenceItem
			key={2}
			txt={'Audio Spectrogram Transformer'}
			referenceTxt={'Gong, Y., Chung, Y. and Glass, J., 2021. AST: Audio Spectrogram Transformer. In Interspeech.'}
			referenceIdx={'4'}
		/>,
		<ReferenceItem
			key={2}
			txt={'Google sound separation'}
			referenceTxt={'Denton, T., Wisdom, S., and Hershey, J. R. Improving bird classification with unsupervised sound separation, 2021. URL https://arxiv.org/abs/2110.03209'}
			referenceIdx={'6'}
		/>,
	],
	datasets: [
		'LibriLight',
		'LJSpeech',
		<ReferenceItem referenceTxt={'canto Foundation, X., 2022. URL https://xeno-canto.org.'}
		               referenceIdx={'5'}
		               txt={'Custom dataset obtained from Xeno-Canto'}
		/>
	],
}


export const portfolio =
	{
		cardImg: '/static/portfolio/portfolio.jpg',
		cardTitle: 'Portfolio Website',
		modalTitle: 'Web Development',
		taskData: [
			'Utilized concepts learned from software engineering and data-structures and algorithms courses to build' +
			' efficient and “sizable” website',
			'Developed using cutting-edge frameworks such as React for front-end, Next.js and Node.js for back-end',
			'Learned to deploy on Vercel App and actively use version control',
			'Designed using “popular” libraries such as ant design and scss'
		],
		abstract: <div style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			fontSize: '1rem',
			textAlign: 'left',
		}}>
			<p>
				CV’s can briefly demonstrate our course of life, but it can not demonstrate visual aspects of it! That’s
				why I have decided to create this website to both connect with others, and give a little more information
				than the old-school CV’s.
			</p>
		</div>,
		modalStyle: {
			modalHeight: '60vh',
			modalWidth: '80vw'
		},
		modalFooter: <div className="bird-footer">

			<div className='bird-footer-tech'>
				<h6>Technologies & Tools:</h6>
				<Tag icon={getSVG('next', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('react', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('node', {class: 'tagIcon'})}/>
				<Tag icon={getSVG('vercel', {class: 'tagIcon'})}/>
			</div>
		</div>,
		tags:
			<div className='footer-tags'>
				<Tag>Serverless Web-Dev</Tag>
				<Tag>MERN Stack</Tag>
			</div>
		// expModels: null
	}