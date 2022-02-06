/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/kng.nz/' : '',
  // https://github.com/vercel/next.js/discussions/11267#discussioncomment-1758
  webpack: (config) => {
    const rules = config.module.rules.find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use))

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (/css-loader\/(?:cjs|dist|src)/.test(moduleLoader.loader)) {
          if (typeof moduleLoader.options.modules === 'object') {
            moduleLoader.options.modules = {
              ...moduleLoader.options.modules,
              exportLocalsConvention: 'camelCaseOnly', // https://github.com/webpack-contrib/css-loader#exportlocalsconvention
            }
          }
        }
      })
    })

    return config
  },
}
