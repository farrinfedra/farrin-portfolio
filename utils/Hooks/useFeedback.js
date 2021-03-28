import {useMachine} from "@xstate/react";
import {feedbackMachine} from "../../XState/machines/feedbackMachine";

export const useFeedback = (machine, asyncSignal, reload = false, redirect = '') => {
	const [voltageB, wire2] = useMachine(feedbackMachine, {
		services: {
			asyncSignalCall: (context, event) => asyncSignal(context.values)
		}
	})
	let exists
	const {circuit} = voltageB.context
	const {error, data, message} = voltageB.context
	let feedback = null
	const activate = (values) => wire2({type: "POWERUP", data: {machine, values, reload, redirect}})
	if (!!circuit) {
		exists = true
		switch (circuit.state.value.open) {
			case 'loading':
				feedback = {
					state: circuit.state.value.open,
					message: "Please wait..."
				}
				break;
			case 'success':
				feedback = {
					state: circuit.state.value.open,
					message,
					data
				}
				break;
			case 'failure':
				feedback = {
					state: circuit.state.value.open,
					message: error
				}
				break;
			default:
				console.log('defalult', circuit.state.value)
				break;
		}
	}
	return [activate, feedback, exists]
}
