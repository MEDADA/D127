const layoutDemo = () => import(/* webpackChinkName: "group-LayoutDemo"*/'@/views/LayoutDemo')
const giantUI = () => import(/* webpackChinkName: "group-LayoutDemo"*/'@/views/giantUI')
const ButtonDemo = () => import(/* webpackChinkName: "group-ButtonDemo"*/'@/views/ButtonDemo')
export default {
    name: 'giantUI',
    path: '/giantUI',
    meta: {
        title: 'giantUI',
        keepalive: true
    },
    component: giantUI,
    children:[
        {
            name: 'ButtonDemo',
            path: '/ButtonDemo',
            meta: {
                title: 'ButtonDemo',
                keepalive: true
            },
            component: ButtonDemo,
        }, {
            name: 'layoutDemo',
            path: '/layoutDemo',
            meta: {
                title: 'layoutDemo',
                keepalive: true
            },
            component: layoutDemo,
        }
    ]
}
