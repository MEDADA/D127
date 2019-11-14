const chart = () => import(/* webpackChinkName: "group-chart"*/'@/views/chart');
export default {
  name: 'chart',
  path: '/chart',
  meta: {
    title: '数据图表',
    require: false,
    keepalive: false
  },
  component: chart,
  children:[

  ]
}

