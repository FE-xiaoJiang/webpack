import SuperAgent from 'superagent'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import noCache from 'superagent-no-cache'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const request = SuperAgent{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const HttpClient = {
  get: (path, requestConfig) => new Promise((resolve, reject) => {
    request
      .get(path)
      .use(noCache)
      .query(requestConfig)
      .accept('application/json')
      .timeout(15000)
      .end((err, res) => {
        if (err) {
          reject(err){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        } else {
          resolve(res.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }),

  post: (path, requestConfig) => new Promise((resolve, reject) => {
    request
      // .post(`${path}?_fs_token=${fsToken}`)
      .post(`${path}`)
      .use(noCache)
      .send(requestConfig)
      .accept('application/json')
      .timeout(15000)
      .end((err, res) => {
        if (err) {
          reject(err){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        } else {
          resolve(res.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }),

  postWithForm: (path, requestConfig) => new Promise((resolve, reject) => {
    request
      .use(noCache)
      .type('form')
      .send(requestConfig)
      .accept('application/json')
      .timeout(15000)
      .end((err, res) => {
        if (err) {
          reject(err){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        } else {
          resolve(res.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }),

}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default HttpClient{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
