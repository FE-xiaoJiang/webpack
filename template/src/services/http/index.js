import http from './HttpClient'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import urlConfig from './urlConfig'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const interfaceMap = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/**
 * http函数名定义重名检测
 * @param  {[type]} subConfig [description]
 * @return {[type]}           [description]
 */
function duplicateCheck(subConfig) {
  for (const methodKey in subConfig) {
    if (interfaceMap[methodKey]) {
      console.warn(`http请求函数名${methodKey}定义重复!!!`){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }
}
for (const cName in urlConfig) {
  const subConfig = urlConfig[cName]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  duplicateCheck(subConfig){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  _.merge(interfaceMap, subConfig){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

/**
 * 业务报错处理
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function onError(response) {
  if (response.errCode !== 0 || !response.data) {
    console.log('接口报错了，拦截一下'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  return response{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
/**
 * 系统错误，网络错误处理
 * @return {[type]} [description]
 */
function onSystemError(response) {
  console.log(response){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

const ApiService = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.globalUseCache = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// eslint-disable-next-line
// todo 错误处理机制
for (const _interface in interfaceMap) {
  const item = interfaceMap[_interface]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const method = !item.type ? http.post : http.get{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // 新增缓存机制
  //   将接口名、请求参数、响应数据缓存起来；下次调用时，假如满足接口名、请求参数在缓存均有数据时，就把缓存数据返回。
  ApiService[_interface] =
  (requestConfig = item.default, extraConfig = {}) => {
    return (window.globalUseCache && extraConfig.useCache && util.sessionStorage(_interface) && JSON.stringify(_.find(util.sessionStorage(_interface), { request: requestConfig }).request) == JSON.stringify(requestConfig)) ?
      (new Promise((resolve) => { resolve(_.find(util.sessionStorage(_interface), { request: requestConfig }).response){{#if_eq lintConfig "airbnb"}};{{/if_eq}} }))
      : method(item.url, requestConfig).then(onError).then((response) => {
        if (response.errCode == 0 && window.globalUseCache && extraConfig.useCache) {
          const sessionStorageValue = util.sessionStorage(_interface) || []{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          sessionStorageValue.push({
            request: requestConfig,
            response,
          }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          util.sessionStorage(_interface, sessionStorageValue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
        return response{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }).catch(onSystemError){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // ApiService[_interface] = (requestConfig = item.default) => http.post(item.url, requestConfig).then(response => response).catch(onError){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // ApiService[_interface] = (requestConfig = item.default) => method(item.url, requestConfig).then(onError).catch(onSystemError){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export default ApiService{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
