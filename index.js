import Good        from 'good'
import Inert       from 'inert'
import Vision      from 'vision'
import HapiSwagger from 'hapi-swagger'
import pack        from './package.json'
import server      from './server'

server.register([
	Inert,
	Vision,
	{
		options: {
			info: {
				title: 'Test API Documentation',
				version: pack.version
			}
		},
		register: HapiSwagger,
	}, {
		register: Good,
		options: {
			reporters: {
				console: [
					{
						module: 'good-squeeze',
						name: 'Squeeze',
						args: [{response: '*', log:'*'}]
					},
					{
						module: 'good-console'
					},
					'stdout'
				]
			}
		}
	}
], error => {
	if (error) throw error

	server.start((err) => {
		if (err) throw err

		server.log('info', `Server running at: ${server.info.uri}`)
	})
})
