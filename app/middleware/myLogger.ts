import { Context, Application, EggAppConfig } from 'egg'
import { appendFileSync } from 'fs'

/**
 * 记录日志中间件
 */
export default (options: EggAppConfig['myLogger'], app: Application) => {
	return async (ctx: Context, next: () => Promise<any>) => {
		console.log(options)
		console.log(app)
		// 开始时间（毫秒）
		const startTime = Date.now()
		// 请求时间（用于组装log message）
		const requestTime = new Date()
		// 执行下一步
		next()
		// 其他中间件逻辑都处理完毕，记录总共花费时间(ms)
		const endTime = Date.now() - startTime
		// 组装log日志信息
		const logMessage = `${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${endTime}ms`
    // 只记录POST请求日志
		if (options.allowedMethod.includes(ctx.method)) {
			// 将日志输出到log.txt中
			appendFileSync('./log.txt', logMessage + '\n')
		}
	}
}
