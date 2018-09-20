module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    mock: {
      type: "confirm",
      message: "use mock middleware?",
    },
    util: {
      type: 'confirm',
      message: 'setup thirdparty utilities tool',
    },
    utilConfig: {
      when: 'util',
      type: 'list',
      choices: [
        {
          name: 'lodash',
          value: 'lodash',
          short: 'lodash',
        },
        {
          name: 'underscore',
          value: 'underscore',
          short: '_',
        },
      ],
    },
    h5uitools: {
      type: 'confirm',
      message: 'setup H5 UI',
    },
    h5uitoolsConfig: {
      when: 'h5uitools',
      type: 'list',
      choices: [
        {
          name: 'delta-meta',
          value: 'delta-meta',
          short: 'delta-meta',
        },
        {
          name: 'mint-ui',
          value: 'mint-ui',
          short: 'mint-ui',
        },
      ],
    },
    webuitools: {
      type: 'confirm',
      message: 'setup web UI',
    },
    webuitoolsConfig: {
      when: 'webuitools',
      type: 'list',
      choices: [
        {
          name: 'element-ui',
          value: 'element-ui',
          short: 'element-ui',
        },
      ],
    },
    http: {
      type: 'confirm',
      message: 'setup http tool',
    },
    httpConfig: {
      when: 'http',
      type: 'list',
      choices: [
        {
          name: 'superagent',
          value: 'superagent',
          short: 'superagent',
        },
        {
          name: 'axios(暂不支持)',
          value: 'axios',
          short: 'axios',
        },
        {
          name: 'fetch(暂不支持)',
          value: 'fetch',
          short: 'fetch',
        },
      ],
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    ".mock.js": "mock",
    "src/service/http/**/*": "http",
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
