const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})

module.exports = {
    // 配置反向代理
    devServer: {
        proxy: {
            '/api': {
                target: 'https://testboss.imeduplus.com/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        host: '192.168.0.108',
        // host: '172.31.14.49', // can be overwritten by process.env.HOST
        port: 8080 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    },
    // 隐藏source map
    productionSourceMap: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        }
    }
}
