module.exports = {
    devServer: {
        port: '1277',
        proxy: {
            '/common/*': {
                target: 'http://localhost:3000', //开发
                changeOrigin: true,
                pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/common': ''
                }
            },
            '/images/*': {
                target: 'http://localhost:3000', //开发
                changeOrigin: true,
                pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/images': ''
                }
            },
            '/users/*': {
                target: 'http://localhost:3000', //开发
                changeOrigin: true,
                pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/users': '/users'
                }
            },
            '/blog/*': {
                target: 'http://localhost:3000', //开发
                changeOrigin: true,
                pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/blog': '/blog'
                }
            },
            '/serviceEgg/*': {
                target: 'http://localhost:7001', //开发
                changeOrigin: true,
                pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/serviceEgg': ''
                }
            },
            '/faceDescriptors/*': {
                target: 'http://localhost:3000', //开发
                changeOrigin: true,
                pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/faceDescriptors': '/faceDescriptors'
                }
            },
        }
    }
}