<!--  https://blog.csdn.net/xm_w_xm/article/details/81982933 -->
<template>
  <div class="">
    <div id="myChart" style="width:500px; height:500px"></div>
  </div>
</template>
<script>
export default {
  name: 'maps',
  data () {
    return {
      chartData: {
        months: ['上班没精神1', '上班稍微好', '上班幸福桥', '盼望下班', '期待周末兴奋', '熬夜追加', '无心上班'],
        listD: [
          { value: 335, name: '上班没精神1' },
          { value: 310, name: '上班稍微好' },
          { value: 234, name: '上班幸福桥' },
          { value: 135, name: '盼望下班' },
          { value: 1548, name: '期待周末兴奋' },
          { value: 2348, name: '熬夜追加' },
          { value: 3248, name: '无心上班' }
        ]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.echartsList('main')
    })
  },
  methods: {
    echartsList () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: this.chartData.months
        },
        series: [
          {
            name: '虚假来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.chartData.listD
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
