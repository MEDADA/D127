const giantUI = () => import(/* webpackChinkName: "group-LayoutDemo"*/'@/views/giantUI')
const LayoutDemo = () => import(/* webpackChinkName: "group-LayoutDemo"*/'@/views/LayoutDemo')
const ButtonDemo = () => import(/* webpackChinkName: "group-ButtonDemo"*/'@/views/ButtonDemo')
const PopupDemo = () => import(/* webpackChinkName: "group-ButtonDemo"*/'@/views/PopupDemo')
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
        },
        {
            name: 'LayoutDemo',
            path: '/LayoutDemo',
            meta: {
                title: 'LayoutDemo',
                keepalive: true
            },
            component: LayoutDemo,
        },
        {
            name: 'PopupDemo',
            path: '/PopupDemo',
            meta: {
                title: 'PopupDemo',
                keepalive: true
            },
            component: PopupDemo,
        }
    ]
}
