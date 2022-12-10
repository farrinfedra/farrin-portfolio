import React from 'react'

import Image from 'next/image'
import {Avatar as AntAvatar} from 'antd'

const Avatar = (props) => {
	return (
		<div>
			<AntAvatar size={150} icon={
				<Image
					width={250}
					height={250}
					objectFit="cover"
					src="/static/Farrin.JPG" alt="Farrin Marouf Sofian"/>
			}/>


		</div>
	)
}

export default Avatar
