const { merge } = require("webpack-merge");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const esbuild = require("esbuild");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const config = require("./webpack.config");
const HappyPack = require("happypack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = merge(config, {
  mode: "production",
  plugins: [
    // new HappyPack({
    //   id: "babel", // 唯一标识符
    //   // 使用的loader配置改写到happypack的配置项中
    //   use: ["babel-loader"],
    // }),

    new ParallelUglifyPlugin({
      // 压缩js的一些配置
      uglifyJS: {
        output: {
          beautify: false, // 不需要格式化，以最紧凑的方式输出
          comments: false, // 删除注释
        },
        warnings: false, // 删除未使用一些代码时引起的警告
        compress: {
          // 删除所有console.log
          drop_console: true,
          // 是否内嵌虽定义，但只使用了一次的变量
          collapse_vars: true,
          // 提出多次出现但没定义的变量，将其变成静态值；
          reduce_vars: true,
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // new CssMinimizerPlugin(),
      new ESBuildMinifyPlugin({
        target: "es2015",
        legalComments: "none", // 去除注释
        css: true, // 压缩 css
        implementation: esbuild, // 自定义 esbuild instance 实现
      }),
    ],
  },
});
