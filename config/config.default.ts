import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {

	const config = {} as PowerPartial<EggAppConfig>

	// override config from framework / plugin
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1638432525261_914'

	// add your egg config in here
  config.middleware = []
	// config.middleware = ['myLogger']

	// close csrf
	config.security = {
		csrf: {
			enable: false,
		},
	}

  // logger config
  config.logger = {
    consoleLevel: 'DEBUG'
  }

	// default view render
	config.view = {
		defaultViewEngine: 'nunjucks',
	}

  // egg-mongoose config
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/still_lego',
    options: {},
  }

	// add your special config in here
	const bizConfig = {
		sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
		myLogger: {
			allowedMethod: ['POST'],
		},
    baseUrl: 'base.url'
	}

	// the return config will combines to EggAppConfig
	return {
		...config as {},
		...bizConfig,
	}
}
