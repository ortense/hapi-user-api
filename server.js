import Hapi from 'hapi'

const server = new Hapi.Server()

server.connection({
	port: 3000
})

server.route({
	method: 'GET',
	path: '/{name?}',
	handler(request, reply) {
		const name = request.params.name || 'Hapi'
		reply(`Hello, ${name}!`)
	},
	config: {
		description: 'Say Hello',
		notes: 'The user parameter defaults to \'Hapi\' if unspecified',
		tags: ['api', 'tutorial']
	}
})

export default server
