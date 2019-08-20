<template>
 <v-app id="inspire">
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
    
      <v-card class="posts" v-for="x in posts" :key="x.link" >
        <div style="display:flex;">
        <v-card-title style="color:#1976d2 ;" class="headline"><a style="text-decoration: none;" :href="x.link">{{x.title}}</a></v-card-title>
        <v-spacer></v-spacer>
        <v-avatar style="margin:20px"> 
      <img :src="x.img" alt="avatar">
    </v-avatar>
        </div>
              
        <v-card-text>
          <p>{{x.summary}}</p>
          
        
 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color="primary" flat nuxt :to="x.link">READ</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </v-app>
</template>




<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      posts: [{ title: 'Build your own sensory board',
        summary: 'How we saved money building our own sensory board (aka busy board)',
        link: '/build-sensory-busy-board',
        img: '/v.png'
      }
      ],
      dialog: false,
      page: 1,
      max: 20,
      id: '',
      name: '',
      desc: ''
    }
  },

  mounted () {
    axios
      .get('posts.json')
      .then(response => {
        var x = response.data
        this.posts = x
      })
  }
}
</script>



<style>

.posts {

margin:15px;


}

</style>
