const TaskList = ({subHeader,divided, header, classN, taskData}) => {
	const elements = taskData.map((task, index) => {
		return (
			<ul key={index}>
				<li>{task}</li>
			</ul>
		)
	})
	return (
		<div style={{
			borderRight: divided ? "1px solid rgb(1,1,1,0.3)" : "none",
		}}
		     className={classN}>
			<h5>{header}</h5>
			{!!subHeader && subHeader}
			{elements}
		</div>
	)
}

export default TaskList;