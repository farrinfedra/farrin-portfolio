import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import 'react-h5-audio-player/lib/styles.css';
import HomeLayout from "../Containers/Layout/HomeLayout";
import Script from "next/script" ;
import {ParallaxProvider} from "react-scroll-parallax";
import {RecoilRoot} from "recoil";
import {ConfigProvider, theme} from "antd";


function MyApp({Component, pageProps}) {
	//
	const getLayout = Component.getLayout || (page => <HomeLayout children={page}/>)

	return (

		<ParallaxProvider>
			<RecoilRoot>
				<Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
				        strategy="beforeInteractive"/>
				<Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js" strategy="afterInteractive"/>
				<ConfigProvider theme={{
					algorithm: theme.darkAlgorithm
				}}>

					{getLayout(<Component {...pageProps} />)}
				</ConfigProvider>
			</RecoilRoot>
		</ParallaxProvider>

	)
}

export default MyApp
