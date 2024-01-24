const { withRNV } = require('@rnv/engine-rn-next');
const { NormalModuleReplacementPlugin } = require('webpack');

const config = {
    compress: false,
    webpack: (webpackConfig, { isServer }) => {
        if (!isServer) {
            webpackConfig.resolve.fallback = {
                os: false,
                url: false,
                https: false,
                http: false,
                fs: false,
                path: false,
                assert: false,
                zlib: false,
                tls: false,
                net: false,
                constants: false,
                util: require.resolve('util'),
                process: require.resolve('process/browser'),
                stream: require.resolve('stream-browserify'),
                buffer: require.resolve('buffer'),
                console: require.resolve('console-browserify'),
                crypto: require.resolve('crypto-browserify'),
                https: require.resolve('https-browserify')
            };
            webpackConfig.plugins = [
                ...webpackConfig.plugins,
                new NormalModuleReplacementPlugin(/^node:/, resource => {
                    const internalModuleName = resource.request.replace(/^node:/, '');
                    resource.request = internalModuleName;
                })
            ];
        }
        return webpackConfig;
    }
};

module.exports = withRNV(config);
