/**
 * @description 扩展application
 * @author still
 */

import { Application } from "egg"
import axios, { AxiosInstance} from 'axios'

const AXIOS = Symbol('Application#axios')

export default {
  // 扩展方法：输出一段字符串
  echo(msg: string) {
    const that = this as Application
    return `hello ${msg} ${that.config.name}`
  },

  // 扩展属性：返回axios实例
  get axiosInstance(): AxiosInstance {
    if(!this[AXIOS]) {
      this[AXIOS] = axios.create({
        baseURL: 'https://dog.ceo/',
        timeout: 5000
      })
    }
    return this[AXIOS]
  }
}