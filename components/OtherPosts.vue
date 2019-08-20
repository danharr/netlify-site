<template>
 <div>
   
   <v-app id="inspire">
   <hr>
<h3>Other posts you might like:</h3>
<div  v-for="x in others" :key="x.link">
<v-alert
outline
   
     color="blue"
     icon="turned_in"
      elevation="2"
      style="display:flex;"
    >
     <a style="text-decoration:none;" :href="x.link">{{x.title}}</a> : <span style="color:black;">{{x.summary}}</span>
    </v-alert>
  
  </div>
</v-app>
   </div>
</template>



<script>
import axios from 'axios'

export default {
  name: 'other',
  data () {
    return {
      posts: [{ 'title': 'Build your own sensory board',
        'summary': 'How we saved money building our own sensory board (aka busy board)',
        'link': '/build-sensory-busy-board',
        'img': '/sensory-busy-board-small.jpg'
      }, { 'title': 'An example sleep schedule for 12 month old baby',
        'summary': 'A timeline showing an example sleep schedule for a 12 month old baby',
        'link': '/12-month-baby-sleep-schedule',
        'img': '/v.png'
      }, { 'title': 'Things to consider when creating a new website',
        'summary': 'There are many options to choose from when creating a new website or blog.  In this article I cover some options I\'ve used in the past',
        'link': '/creating-new-website-things-to-consider',
        'img': '/v.png'
      }, { 'title': '2019/20 Football Season Predictions',
        'summary': 'My thoughts on the upcoming football season',
        'link': '/2020-football-predictions',
        'img': '/v.png'
      },
      { 'title': 'Nest Outdoor IQ Camera',
        'summary': '1 month after purchase I review the Nest Outdoor IQ camera, £329 from John Lewis',
        'link': '/nest-outdoor-iq-review',
        'img': '/nest outdoor iq.png'
      },
      { 'title': 'My career timeline',
        'summary': 'Where have I worked so far in my career.  We also look at how the timeline component in Vuetify works',
        'link': '/career-vuetify-timeline-cv',
        'img': '/v.png'
      },
      { 'title': 'Continuous Deployment',
        'summary': 'A little test of github webhooks',
        'link': '/continuous-deployment',
        'img': '/v.png'
      },
      { 'title': 'New blog',
        'summary': 'A short introduction to this new blog of mine',
        'link': '/first-post',
        'img': '/v.png'
      }
      ]
    }
  },
  computed: {
    others () {
      return this.posts.sort(function () {
        return 0.5 - Math.random()
      }).slice(0, 6)
    }
  },

  beforeMount () {
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
 
</style>
