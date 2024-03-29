import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import 'react-h5-audio-player/lib/styles.css';
import HomeLayout from "../Containers/Layout/HomeLayout";
import Script from "next/script" ;
import {ParallaxProvider} from "react-scroll-parallax";
import {RecoilRoot} from "recoil";
import {ConfigProvider, theme} from "antd";
import Head from "next/head";


function MyApp({Component, pageProps}) {
	//
	const getLayout = Component.getLayout || (page => <HomeLayout children={page}/>)

	return (

		<ParallaxProvider>
			<Head>	
                <meta name="viewport" content="width=device-width, initial-scale=1.0, 
				maximum-scale=1.0,user-scalable=0" />
            </Head>
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
