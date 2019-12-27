module.exports = {
    title:'GIANT',
    description:'this giant',
    base:'/',
    port:'4143',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Language', items: [
                    {text: 'Chinese', link: 'language/chinese'},
                    {text: 'English', link: 'language/english'}
                ]
            },
            {text: 'External', link: '/external'}
        ],
        sidebar:[
            {
                title:'组件',
                children:[
                    '/guide/table',
                    '/guide/button',
                    '/guide/layout',
                    '/guide/form',
                    '/guide/dialog',
                    '/guide/list'
                ]
            },
            {
                title:'插件',
                children:[
                    '/guide/face-api'
                ]
            }
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': '../../../src'
            }
        }
    }
};