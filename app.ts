/**
 * @description 启动自定义模块
 * @author still
 */
// import { Application, IBoot } from 'egg'

// export default class AppBoot implements IBoot {
//   private readonly app: Application
//   constructor(app: Application) {
//     this.app = app
//   }

//   // 此时 config 文件已经被读取并合并（baseconfig和dev or prod config合并），但是还未生效
//   // 这里是应用层修改配置的最后时机
//   // 此时可以获取内置中间件，以及添加自定义中间件（这里只是获取和添加中间件名称，而不是具体的实现）
//   configWillLoad() {
//     // console.log('===configWillLoad====')
//     // // 证明配置文件已经读取并合并s
//     // console.log('config', this.app.config.baseUrl)
//     // // 获取默认中间件
//     // console.log('enable middleware', this.app.config.coreMiddleware)
//     // // 添加自定义中间件
//     // this.app.config.coreMiddleware.unshift('myLogger')
//   }

//   // 此时配置文件和插件已经加载完毕
//   configDidLoad() {
//     // console.log('===configDidLoad====')
//     // console.log(this.app.config.coreMiddleware)
//     // console.log(this.app.plugins)
//   }

//   // 应用启动完毕
//   async didReady() {
//     // console.log('===didReady====')
//     // // 创建上下文对象
//     // const ctx = this.app.createAnonymousContext()
//     // const res = await ctx.service.test.sayHi('still')
//     // console.log('did ready res', res)
//     // console.log(this.app.middleware)
//   }
// }