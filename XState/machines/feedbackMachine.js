import {assign, Machine, spawn, send} from "xstate";
import Router from 'next/router';

export const feedbackMachine = Machine({
	id: 'feedbackMachine',
	initial: 'idle',
	context: {
		values: null,
		circuit: null,
		data: null,
		error: null,
		message: null,
		reload: false,
		redirect: ''
	},
	states: {
		idle: {
			on: {
				POWERUP: {
					target: "pending",
					actions: [send("ACTIVATE", {
						to: (context) => context.circuit
					}),
						assign({
							values: (context, event) => {
								return event.data.values
							},
							reload: (context, event) => event.data.reload,
							redirect: (context, event) => event.data.redirect,
						})
					]
				}
			},
			exit: assign({
				circuit: (_context, event) => {
					return spawn(
						event.data.machine,
					)
				}
			}),
		},
		pending: {
			invoke: {
				id: 'asyncSig',
				src: 'asyncSignalCall',
				onDone: {
					actions: [
						send("SUCCESS", {to: (context) => context.circuit}),
						'setData'
					],
					target: "terminated"
				},
				onError: {
					actions: [
						send("FAILED", {to: (context) => context.circuit}),
						'setError'
					],
					target: "terminated"
				}
			}
		},
		terminated: {
			after: {
				5000: {target: 'idle', actions: 'cleanup'}
			}
		}
	}
}, {
	actions: {
		cleanup: assign((context, event) => {
			if (context.reload)
				Router.reload()
			else if (!!context.redirect) {
				console.log(context.redirect)
				Router.replace(context.redirect)
			}
			return {
				values: null,
				circuit: null,
				data: null,
				error: null,
				message: null,
				reload: false,
				redirect: ''
			}
		}),
		setData: assign({
			data: (context, event) => {
				return event.data.data
			},
			message: (context, event) => {
				return event.data.message
			}
		}),
		setError: assign((context, event) => {
			return {
				error: event.data.message || event.data || "something went wrong",
			}

		})
	}
})
