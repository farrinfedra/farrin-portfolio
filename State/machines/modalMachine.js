import {Machine, sendUpdate} from "xstate";


export const modalMachine = Machine({
	id: 'modalMachine',
	initial: 'closed',
	states: {
		closed: {
			on: {
				ACTIVATE: {
					target: 'open'
				}
			},
			exit:sendUpdate()
		},
		open: {
			initial: 'loading',
			states: {
				loading: {
					on: {
						SUCCESS: {
							target: 'success'
						},
						FAILED: {
							target: "failure"
						}
					},
				},
				success: {
					type: "final"
				},
				failure: {
					type: 'final'
				}
			}
		}
	}
})
