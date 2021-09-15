/** @type {import('next').NextConfig} */

const path = require('path')
const withSass = require ('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
  webpack5: false,
  cssModules : true,
  // basePath: '/',         // 배포시에 필요한 기본경로
  // assetPrefix: '/*/',    // 배포시에 필요한 기본경로
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
})
