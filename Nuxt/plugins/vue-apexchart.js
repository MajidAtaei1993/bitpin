import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'



Vue.use(VueApexCharts, {
    chart: {
        width: '100%',
        height: '100%',
        toolbar: {
            show: false,
            tools: {
                download: false
            }
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '15px',
            color: '#000000'
        },
        offsetY: -1,
        plotOptions: {
            treemap: {
                enableShades: false,
                colorScale: {
                    ranges: [{
                            from: -6,
                            to: 0,
                            color: '#CD363A'
                        },
                        {
                            from: 0.001,
                            to: 20,
                            color: '#52B12C'
                        }
                    ]
                }
            }
        },
        colors: ["#000000", "#bf360c"],
    },
    yaxis: {
        show: true
    },
    tooltip: {
        enabled: true,
        offsetX: 0,
    }
})