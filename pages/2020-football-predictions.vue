<template>
  <v-layout>
    <v-flex >
      
      <h1>2020 Football Season Predictions</h1>
      <hr>
      <div class="post">
      <p>More content to follow</p>
</div>


    </v-flex>
  </v-layout>
</template>


<script>
export default {
  head () {
    return {
      title: 'Predictions for the 2020 football season',
      meta: [
        { hid: 'description', name: 'description', content: 'Opinions and predictions for the new football season' }
      ]
    }
  }
}
</script>

<style>
hr {margin:20px;}
.post {margin-left:1pc;margin-right:1pc}
p {
font-size:18px;
}
</style>
