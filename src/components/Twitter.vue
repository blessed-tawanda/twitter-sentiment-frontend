<template>
  <div>
    <h1 class="capitalize text-3xl text-teal mb-4">Twitter Sentiment</h1>
    <div>
      <input type="text" @keypress.enter="search" name="query" class="border shadow hover:shadow-md focus:shadow-md animate rounded-full p-4 w-1/2 text-black" v-model="query" placeholder="Search..." id="">
    </div>
    <div v-if="loading" class="mt-4 lds-ripple"><div></div><div></div></div>
    <div v-if="showchart" class="chart-area">
      <h3 class="capitalize"> Twitter Sentiment Analysis For {{query}} </h3>
      <chart v-if="showchart" :chart-data="chartdata" :options="options"></chart>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import chart from './Chart'
export default {
  components: {
    chart
  },
  data() {
    return {
      loading: false,
      showchart: false,
      chartdata: null,
      query: '',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        pieceLabel: {
          mode: 'percentage',
          precision: 1
        }
      }
    }
  },
  methods: {
    search() {
      this.loading = true
      var data = {
        query: this.query,
        count: 5000
      }
      axios.post('https://nameless-cove-87213.herokuapp.com/twittersentiment', data)
      .then((res) => {
        this.loading = false
        this.chartdata = {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [
              {
                label: `Twitter Data: ${this.query}`,
                backgroundColor: ['#43A047', '#E53935', '#18FFFF'],
                data: [res.data.positiveTweets.percentage, res.data.negativeTweets.percentage, res.data.neutralTweets.percentage]
              }
            ]
        }
        this.showchart = true
      })
    }
  }
}
</script>

<style lang="postcss">
.animate {
  transition: all 0.3s ease;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid black;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

.chart-area {
  @apply mt-4 
}


</style>
