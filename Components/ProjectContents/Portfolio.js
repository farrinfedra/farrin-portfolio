import {portfolio} from "../../utils/content";
import TaskList from "../Content/TaskList";
import Abstract from "../Content/Abstract";

const Portfolio = () => {
	return (
		<div className='m-content' style={{height: "60%"}}>
			<span
				className="logo-span">.<h1>{'Portfolio Website'}</h1>
			</span>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
				<TaskList header="Tasks:" taskData={portfolio.taskData}/>
				<Abstract abstract={portfolio.abstract}/>
			</div>
		</div>
	)
}

export default Portfolio;