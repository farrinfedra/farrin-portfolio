import React from 'react';
import {Button} from "antd";
import { DownloadOutlined } from '@ant-design/icons';

const DownloadPDF = (props) => {

	return (
		<a href="/static/farrin-resume.pdf">
			<Button type="primary" icon={<DownloadOutlined />} shape="round">
				Download CV
			</Button>
		</a>

	)
}

export default DownloadPDF
