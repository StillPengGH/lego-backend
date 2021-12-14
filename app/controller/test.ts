import { Controller } from 'egg'
import { UserProps } from '../model/user'

export default class TestController extends Controller {
	// request mapping get /
	async index() {
		const { ctx } = this
		// 获取query
		const queryInfo = ctx.request.query
		// 获取params
		const params = ctx.params
		// 获取body
		const bodyInfo = ctx.request.body
		const baseUrl = this.config.baseUrl

		// console.log(this.app.echo('still'))
		// const dogAxiosInstance = this.app.axiosInstance
		// const axiosRes = await dogAxiosInstance.get('/api/breeds/image/random')
		// console.log('axiosRes', axiosRes.data)

		// ctx.logger.debug('debug info')
		// ctx.logger.info('info')
		// ctx.logger.warn('warning')
		// ctx.logger.error(new Error('error'))
    
    const user: UserProps = {
      username: 'still',
      password: '123456',
      type: 'email',
      createAt: new Date(),
      updateAt: new Date(),
    }
    const result = await ctx.model.User.create(user)

		const resp = {
			queryInfo,
			params,
			bodyInfo,
			baseUrl,
      user: result,
		}

		this.ctx.helper.success({ ctx, res: resp })

		// this.ctx.response.body = {
		// 	queryInfo,
		// 	params,
		// 	bodyInfo,
		// 	baseUrl,
		// }
		// this.ctx.response.status = 200
	}

	// request mapping get /dog
	async getDog() {
		const resp = await this.service.dog.show()
		await this.ctx.render('test.nj', { url: resp.message })
		// this.ctx.body = resp
		// this.ctx.status = 200
	}
}
