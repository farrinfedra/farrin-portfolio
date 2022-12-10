import React, {useEffect, useRef, useState} from 'react'
import {Layout, Row} from "antd";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeadData from "../../Components/HeadData";
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import {Parallax} from "react-scroll-parallax";

const HomeLayout = (props) => {
	const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.THREE = THREE
		}
		if (!vantaEffect) {
			setVantaEffect(NET({
				el: myRef.current,
				mouseControls: true,
				//height: '100%',
				spacing: 20,
				backgroundColor: 0x0,
				color: 0x49a9ff,
				points: 9

			}))
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

	return (
		<Row ref={myRef} className="home" justify="center" align="center">
			{props.children}
		</Row>
	)
}
export const getLayout = page => {
	return <HomeLayout>{page}</HomeLayout>
};
export default HomeLayout
