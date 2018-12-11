const pictureFactory = () => import(/* webpackChinkName: "group-pictureFactory"*/'@/view/pictureFactory');
export default {
    name: 'pictureFactory',
    path: '/pictureFactory',
    meta: {
      title: '图片工厂',
      require: false,
      cache: false
    },
    component: pictureFactory,
    children:[

    ]
}

