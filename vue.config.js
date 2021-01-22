const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: (config) => {
        // @scss是你取的静态资源路径别名
        config.resolve.alias.set('@', resolve('src'));
        config.resolve.alias.set('@scss', resolve('src/styles'));
        // 若需要配置多个别名，后续紧跟着设置set即可
        /* config.resolve.alias.set('@scss', resolve('src/static/scss')).set('@',resolve('src'))
    */
    },
    configureWebpack: {

        module: {
            rules: [{
                test: /\.less$/,
                use: [{
                    loader: "less-loader", options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    },
                }],
            }],
        },
        // Configuration applied to all builds
    },

    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: true
        }
    },

    transpileDependencies: [
        'quasar'
    ]
};
