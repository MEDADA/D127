const pictureFactory = () => import(/* webpackChinkName: "group-pictureFactory"*/'@/views/pictureFactory');
export default {
    name: 'pictureFactory',
    path: '/pictureFactory',
    meta: {
      title: '图片工厂',
      require: false,
      keepalive: false
    },
    component: pictureFactory,
    children:[

    ]
}

