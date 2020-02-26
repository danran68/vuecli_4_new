# vuecli_4_new

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/zh/config/).
### vuecli4

###     vue.config.js 配置  借鉴
        http://xiaowiba.com/archives/1074/

##      less使用和需要按照的部分    
        patterns: [path.resolve(__dirname, './src/assets/less/base.less')]
        可看 https://www.jianshu.com/p/9b2b14267a39

##      element-ui 运用和配置 https://element.eleme.cn/#/zh-CN/component/quickstart
        同时 babel.config.js中配置（暂时全复制）
        module.exports = {
            presets: [
                '@vue/app', [
                '@babel/preset-env', {
                    modules: false
                }
                ]
            ],
            plugins: [
                [
                'component',
                {
                    'libraryName': 'element-ui',
                    'styleLibraryName': 'theme-chalk'
                }
                ]
            ]
        }
##      Vue Cli3.0 使用jquery
        可看： https://blog.csdn.net/ai520587/article/details/84098601


