<template>
	<v-app>
		<v-main>
      <AppHeader />
			<section class="heat-map-section pl-4">
          <v-row class="ma-0" align="center">
              <v-col class="d-flex" cols="8">
                  <div class="col-5">
                      <v-select hide-details="" height="40" color="white" outlined class="rounded-lg font-md col-5" flat background-color="#3f4348" :items="showList" v-model="showMode" @change="getMarketCaps" dark label="نمایش" :menu-props="{offsetY:true}">
                          <template v-slot:item="{ item }">
                              <v-list dense min-width="100%">
                                  <v-list-item>
                                      <v-list-item-content>
                                          <v-list-item-title class="font-lg white--text">{{ item.text }}</v-list-item-title>
                                      </v-list-item-content>
                                      <v-spacer />
                                      <v-list-item-icon>
                                          <v-checkbox dense hide-details="" :value="item.value" color="white" />
                                      </v-list-item-icon>
                                  </v-list-item>
                              </v-list>
                          </template>
                      </v-select>
                  </div>
                  <div class="col-4 mx-2">
                      <v-select hide-details="" height="40" color="white" outlined class="rounded-lg font-md col-2" flat background-color="#3f4348" :items="volumes" v-model="volumeMode" @change="getMarketCaps" dark label="نوع" :menu-props="{offsetY:true}">
                          <template v-slot:item="{ item }">
                              <v-list dense min-width="100%">
                                  <v-list-item>
                                      <v-list-item-content>
                                          <v-list-item-title class="font-lg white--text">{{ item.text }}</v-list-item-title>
                                      </v-list-item-content>
                                      <v-spacer />
                                      <v-list-item-icon>
                                          <v-checkbox dense hide-details="" :value="item.value" color="white" />
                                      </v-list-item-icon>
                                  </v-list-item>
                              </v-list>
                          </template>
                      </v-select>
                  </div>
                  <div class="col-3">
                      <v-select hide-details="" height="40" color="white" outlined class="rounded-lg font-md col-2" flat background-color="#3f4348" :items="sortList" v-model="sortMode" @change="getMarketCaps" dark label="نمایش بر اساس" :menu-props="{offsetY:true}">
                          <template v-slot:item="{ item }">
                              <v-list dense min-width="100%">
                                  <v-list-item>
                                      <v-list-item-content>
                                          <v-list-item-title class="font-lg white--text">{{ item.text }}</v-list-item-title>
                                      </v-list-item-content>
                                      <v-spacer />
                                      <v-list-item-icon>
                                          <v-checkbox dense hide-details="" :value="item.value" color="white" />
                                      </v-list-item-icon>
                                  </v-list-item>
                              </v-list>
                          </template>
                      </v-select>
                  </div>
              </v-col>
              <v-spacer />
              <v-col cols="auto" class="pt-0 pb-0">
                  <div class="coin-table-grid-tools">
                      نمایش
                      <v-btn icon class="mx-1">
                          <v-icon size="30">mdi-format-list-bulleted</v-icon>
                      </v-btn>
                      <v-btn icon :color="activeGrid">
                          <v-icon size="30">mdi-widgets</v-icon>
                      </v-btn>
                  </div>
              </v-col>
          </v-row>
          <apexchart v-if="series" class="mt-n7 pl-1" type="treemap" width="100%" height="100%" :options="chartOptions" :series="series"/>
      </section>
		</v-main>
	</v-app>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue'
  export default {
    name: 'App',
	  components: {
      AppHeader
    },
    data(){
        return{
            showMode:null,
            volumeMode:null,
            sortMode:null,
            sortList:[
                { text:'تتر', value:'0' },
                { text:'تومان', value:'1' },
            ],
            volumes:[
                { text:'حجم بازار ', value:'0' },
                { text:' حجم معاملات', value:'1' },

            ],
            showList:[
                { text:'همه', value:'0' },
                { text:' ۲۰ رمزارز سودده', value:'1' },
                { text:' ۵۰ رمزارز سودده', value:'2' },
                { text:' ۲۰ رمزارز زیان ده', value:'3' },
                { text:' ۵۰ رمزارز زیان ده', value:'4' }
            ],
            activeGrid:'secondary',
            search:'',
            series: null,
            chartOptions:{
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
                        fontSize: '8px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                    },
                    formatter: function(text, op) {
                        return [text, op.value+'%']
                    },
                    offsetY: -1,
                    // colors: ["#CD363A", "#52B12C"],
                },
                plotOptions: {
                    treemap: {
                        enableShades: false,
                        shadeIntensity: 0.5,
                        reverseNegativeShade: true,
                        colorScale: {
                            ranges: [{
                                    from: -1000,
                                    to: -2.59,
                                    color: '#d05c5c'
                                },
                                {
                                    from: -2.6,
                                    to: 0,
                                    color: '#ef8686'
                                },
                                {
                                    from: 0.001,
                                    to: 2.59,
                                    color: '#91ca91'
                                },
                                {
                                    from: 2.6,
                                    to: 2000,
                                    color: '#42764b'
                                }
                            ]
                        }
                    }
                },
                yaxis: {
                    show: true
                },
                tooltip: {
                    enabled: true,
                    offsetX: -1,
                    style: {
                      fontSize: '12px',
                      fontFamily: undefined,
                      color: '#000000'
                    },
                }
            }
        }
    },
    mounted(){
        this.getMarketCaps()
        this.showMode = 0
    },
    methods:{
        getMarketCaps(){
            let temp = []
            let seriesCopy = [
              {
                  data: []
              }
            ]
            this.$store.dispatch('getMarketCaps')
            .then(resp=>{
                if (this.volumeMode == 0) {
                    for (let i = 0; i < resp.market_cap.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })
                    }
                    temp.sort(function(a, b) {
                      return b.market_cap - a.market_cap;
                    });
                    seriesCopy[0].data = temp
                }
                if (this.volumeMode == '1') {
                    for (let i = 0; i < resp.volume.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })
                        
                    }
                    temp.sort(function(a, b) {
                      return b.column - a.column;
                    });
                    seriesCopy[0].data = temp

                }
                if (this.showMode == 0) {
                    for (let i = 0; i < resp.market_cap.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            change_24h: el.change_24h,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })
                    }
                    temp.sort(function(a, b) {
                      return b.change_24h - a.change_24h;
                    });
                    seriesCopy[0].data = temp
                }
                if (this.showMode == 1) {
                    for (let i = 0; i < resp.market_cap.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            change_24h: el.change_24h,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })
                    }
                    temp.sort(function(a, b) {
                      return b.change_24h - a.change_24h;
                    });
                    seriesCopy[0].data = temp.slice(0, 20)
                }
                if (this.showMode == 2) {
                    for (let i = 0; i < resp.market_cap.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            change_24h: el.change_24h,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })
                    }
                    temp.sort(function(a, b) {
                      return b.change_24h - a.change_24h;
                    });
                    seriesCopy[0].data = temp.slice(0, 50)
                }
                if (this.showMode == 3) {
                    for (let i = 0; i < resp.market_cap.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            change_24h: el.change_24h,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })                            
                    }
                    temp.sort(function(a, b) {
                      return a.change_24h - b.change_24h;
                    });
                    seriesCopy[0].data = temp.slice(0, 20)
                }
                if (this.showMode == 4) {
                    for (let i = 0; i < resp.market_cap.length; i++) {
                        const el = resp.market_cap[i];
                        temp.push({
                            x:el.code,
                            y: `${el.change_24h.toFixed(2)+'%'}`,
                            change_24h: el.change_24h,
                            price: String(parseFloat(el.price)),
                            color:el.color,
                            column:el.volume,
                            market_cap:el.market_cap
                        })                            
                    }
                    temp.sort(function(a, b) {
                      return a.change_24h - b.change_24h;
                    });
                    seriesCopy[0].data = temp.slice(0, 50)
                }

                this.series = seriesCopy
                setTimeout(() => {
                    this.getMarketCaps()
                }, 1500);
            })
            .catch(err=>{
                console.log(err)
            })
        },
    },
    computed: {
        sortedArray: function() {
            function compare(a, b) {
              if (a.y < b.y)
                  return -1;
              if (a.y > b.y)
                  return 1;
              return 0;
            }
            return this.series[0].data.sort(compare);
        },

        apexchart() {
            return () => {
                if (process.client) {
                    return import('vue-apexcharts')
                }
            }
        }
    },
    
  }
</script>
