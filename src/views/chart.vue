<template>
    <div>
      <div ref="myEchart" :style="{height:height,width:width}"></div>

    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
      name: "chart",
      data(){
          return{
            chart:null,
            genderData:''
          }
      },
      props: {
        width: {
          type: String,
          default: '100%'
        },
        height: {
          type: String,
          default: '500px'
        }
      },
      mounted(){
        this.initChart()
      },
      beforeDestroy() {
        if (!this.chart) {
          return
        }
        this.chart.dispose();
        this.chart = null;
      },
      methods:{
        initChart() {
          this.chart = echarts.init(this.$refs.myEchart);
          // 把配置和数据放这里
          this.chart.setOption( {
            title : {
              text: 'e chart',
              subtext: '',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          })
        }
      }
    }
</script>

<style scoped>

</style>
