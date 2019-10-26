const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

module.exports = {
    publicPath: './',

    css: {
        // 是否使用css分离插件 ExtractTextPlugin Default: 生产环境下是 true，开发环境下是 false
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,

        loaderOptions: {
            postcss: {
                plugins: [
                    pxtorem({
                        rootValue: 37.5, // 换算的基数
                        // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                    autoprefixer({ broswer: 'last 5 versions' }) //CSS3前缀添加s
                ]
            },
            less: {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                }]
            }
        }
    },
}