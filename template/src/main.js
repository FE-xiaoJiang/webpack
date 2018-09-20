{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import util from './services/util'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.util = util{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#util}}
{{#if_eq utilConfig "lodash"}}
import _ from 'lodash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq utilConfig "underscore"}}
import _ from 'underscore'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
window._ = _{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/util}}

{{#http}}
import http from './services/http'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.http = http{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/http}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
