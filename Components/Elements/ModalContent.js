const ModalContent = ({title, desc, imgPath}) => {

	return (
		<div className='m-content' style={{height: "100%"}}>
			<img alt="test" src={imgPath}/>
			<h1>{title}
				<span className="logo-span">.</span>
			</h1>
			<p>
				{desc}
			</p>
		</div>
	)
}

export default ModalContent
