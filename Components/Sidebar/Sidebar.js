import React from 'react'
import {Layout, Menu, Row} from 'antd'
import Link from 'next/link'

const Sidebar = (props) => {
	return (
		<Row>
			<div className="logo logo-style">
				Farrin<span className="logo-span">.</span>
			</div>
			<Menu mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1">
					<Link href="/">

						Home

					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link href="/About">

						About

					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link href="/Experience">

						Experience

					</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link href="/Projects">

						Projects

					</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link href="/Skills">

						Skills & Languages

					</Link>
				</Menu.Item>
				<Menu.Item key="6">
					<Link href="/Courses">

						Courses

					</Link>
				</Menu.Item>
				<Menu.Item key="7">
					<Link href="/Contact">

						Contact

					</Link>

				</Menu.Item>
			</Menu>

		</Row>
	)
}

export default Sidebar
