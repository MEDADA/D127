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
                    '/components/button',
                    '/components/dialog',
                    '/components/form',
                    '/components/table',
                ]
            }
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': '../../..'
            }
        }
    }
};