/*
 * @Author: linjianxi
 * @Date: 2020-12-09 14:13:11
 * @LastEditTime: 2020-12-09 14:49:51
 * @Description: file content
 */
let path = require('path')
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {
    webpackChain(chain) {     
      chain.merge({
        optimization: {
          usedExports: true,
        },
        module: {
          rules: [
            {
              include: path.resolve('node_modules', 'taro-ui'),
              sideEffects: false
            }
          ]
        }
      })
    }
  },
  h5: {}
}
