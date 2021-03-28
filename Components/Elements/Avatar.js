import React from 'react'

import Image from 'next/image'
import {Avatar as AntAvatar} from 'antd'

const Avatar = (props) => {
	return (
		<div>
			<AntAvatar size={150} icon={
				<Image
					width={150}
					height={150}
					objectFit="cover"
					src="/static/Farrin.JPG"/>
			}/>


		</div>
	)
}

export default Avatar
