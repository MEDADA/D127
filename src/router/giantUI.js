const giantUI = () => import(/* webpackChinkName: "group-LayoutDemo"*/'@/views/giantUI')
const LayoutDemo = () => import(/* webpackChinkName: "group-LayoutDemo"*/'@/views/LayoutDemo')
const ButtonDemo = () => import(/* webpackChinkName: "group-ButtonDemo"*/'@/views/ButtonDemo')
const PopupDemo = () => import(/* webpackChinkName: "group-PopupDemo"*/'@/views/PopupDemo')
const GiantFormDemo = () => import(/* webpackChinkName: "group-GiantFormDemo"*/'@/views/GiantFormDemo')
const GiantListDemo = () => import(/* webpackChinkName: "group-GiantListDemo"*/'@/views/GiantListDemo')
const GiantTableDemo = () => import(/* webpackChinkName: "group-GiantTableDemo"*/'@/views/GiantTableDemo')
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
        },
        {
            name: 'GiantFormDemo',
            path: '/GiantFormDemo',
            meta: {
                title: 'GiantFormDemo',
                keepalive: true
            },
            component: GiantFormDemo,
        },
        {
            name: 'GiantListDemo',
            path: '/GiantListDemo',
            meta: {
                title: 'GiantListDemo',
                keepalive: true
            },
            component: GiantListDemo,
        },
        {
            name: 'GiantTableDemo',
            path: '/GiantTableDemo',
            meta: {
                title: 'GiantTableDemo',
                keepalive: true
            },
            component: GiantTableDemo,
        }
    ]
}
