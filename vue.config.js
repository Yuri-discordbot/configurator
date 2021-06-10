module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Yuri Configurator";
          return args;
        })
  }
}