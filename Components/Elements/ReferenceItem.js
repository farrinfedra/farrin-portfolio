import React from "react";
import ReactTooltip from "react-tooltip";


const ReferenceItem = ({txt, referenceTxt, referenceIdx, position}) => {
	return (
		<React.StrictMode>
			<span data-tip={referenceTxt}>{txt}[{referenceIdx}]</span>
			<ReactTooltip place={position} type="dark" effect="solid"/>
		</React.StrictMode>

	)
}

export default ReferenceItem


