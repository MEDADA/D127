const chart = () => import(/* webpackChinkName: "group-chart"*/'@/view/chart');
export default {
  name: 'chart',
  path: '/chart',
  meta: {
    title: '数据图表',
    require: false,
    cache: false
  },
  component: chart,
  children:[

  ]
}

