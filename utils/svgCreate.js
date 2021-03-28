import React from "react";
import * as ui from '../assets/svgs'


const getSVG = (name, ...theArgs) => {
	let SVG = ui[name];

	return (
		<SVG className={theArgs[0].class}/>
	);

}
export {getSVG};
