// ajax请求模块
// 导入 axios
import axios from 'axios'
// 调用 axios.create()方法,创建axios实例
const instance = axios.create({
// 设置请求根地址
  baseURL: 'http://www.liulongbin.top:8000'
})

// 向外共享模块
export default instance
