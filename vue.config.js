module.exports = {
    // 基本路径
    publicPath: './',
    // 输出路径
    outputDir: 'h5',
    // 静态资源
    assetsDir: './',
    // eslint-loader是否在保存时候检查
    lintOnSave: true,
    // 服务项配置
    devServer: {
        host: 'localhost',
        port: 8888,
        https: false,
        open: true,
        proxy: null, // 设置代理
    }
}
