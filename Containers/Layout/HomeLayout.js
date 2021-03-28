import React from 'react'
import {Layout} from "antd";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Head from 'next/head'

const {Sider, Content} = Layout
const HomeLayout = (props) => {

	return (
		<div style={{height: "100%"}}>
			<Head>
				<title>Farrin Marouf Sofian Portfolio App </title>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="format-detection" content="telephone=no"/>
				<meta name="apple-mobile-web-app-capable" content="yes"/>
				<meta name="author" content="Farrin"/>
				<meta name="keywords"
				      content="Farrin Marouf Sofian Portfolio"/>
				<meta name="description"
				      content="Farrin Marouf Sofian Portfolio App. Computer Science and Web Development enthusiast"/>
			</Head>
			<Layout style={{height: '100%'}}>
				<Layout style={{height: '100%'}}>
					<Sider className="sidebar">
						<Sidebar/>
					</Sider>
					<Content>
						{props.children}
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}
export const getLayout = page => {
	return <HomeLayout>{page}</HomeLayout>
};
export default HomeLayout
