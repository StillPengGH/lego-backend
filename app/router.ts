import { Application } from 'egg'

export default (app: Application) => {
	const { controller, router } = app

	const myLogger = app.middleware.myLogger(
		{
			allowedMethod: ['GET'],
		},
		app
	)

	router.get('/', controller.home.index)
	router.get('/test', controller.test.index)
	router.get('/test/:id', controller.test.index)
	router.post('/test/:id', controller.test.index)
	router.get('/dog', myLogger, controller.test.getDog)
}
