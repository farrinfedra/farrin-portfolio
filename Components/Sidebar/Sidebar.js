import React from 'react'
import {Layout, Menu, Row} from 'antd'
import Link from 'next/link'

const Sidebar = (props) => {
	return (
		<Row>
			<div className="logo">
				Farrin
			</div>
			<Menu mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1">
					<Link href="/">
						<a>
							Home
						</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link href="/About">
						<a>
							About
						</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link href="/Experience">
						<a>
							Experience
						</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link href="/Skills">
						<a>
							Skills & Languages
						</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link href="/Contact">
						<a>
							Contact
						</a>
					</Link>

				</Menu.Item>
			</Menu>

		</Row>
	)
}

export default Sidebar
