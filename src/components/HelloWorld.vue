<template>
  <div class="hello">
    <img alt="Vue logo" class="h-64" src="../assets/twitter.jpg">
    <h1 class="capitalize text-3xl text-teal">Welcome To Twitter Sentiment</h1>
    <p class="p-2 text-xl w-1/2 m-auto">
      Pick a topic you wanna know the sentiment about, Twitter Sentiment will pick tweets with the keyword you entered and classify them into positive, negative and neutral and calculate the percentages and show it to you on a pie 🥧 chart 📊. 
    </p>
    <button @click="start()" class="mt-6 py-2 px-4 text-xl text-bold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white animate">
      Get Started
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    start() {
      this.$router.push('/twitter')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animate {
  transition: all 0.3s ease;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
