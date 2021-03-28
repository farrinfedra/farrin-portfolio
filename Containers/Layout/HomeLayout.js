import React from 'react'
import {Layout} from "antd";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeadData from "../../Components/HeadData";

const {Sider, Content} = Layout
const HomeLayout = (props) => {

	return (
		<div style={{height: "100%"}}>
			<HeadData />
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
