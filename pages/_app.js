import 'antd/dist/antd.min.css'
import '../styles/global.css'
import HomeLayout from "../Containers/Layout/HomeLayout";
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({Component, pageProps}) {

	const getLayout = Component.getLayout || (page => <HomeLayout children={page}/>)
	return (
		getLayout(<Component {...pageProps} />)
	)
}

export default MyApp
