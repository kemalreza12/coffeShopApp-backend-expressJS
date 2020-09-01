<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  mounted () {
    this.renderChart(
      {
        labels: [
          'Jan',
          'Feb',
          'March',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'Data',
            backgroundColor: 'pink',
            data: [
              100000,
              2050000,
              1000000,
              3200000,
              3300000,
              5000000,
              5300000,
              4000000,
              5000000,
              6000000,
              5000000,
              3000000
            ]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>

<style lang="scss" scoped>
</style>
