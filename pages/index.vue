<template>
 <v-app id='inspire'>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
    <h1>Dan Harrington</h1>
      <v-card class='posts' v-for='x in posts' :key='x.link' >
        <div style='display:flex;'>
        <v-card-title style='color:#1976d2 ;' class='headline'><a style='text-decoration: none;' :href='x.link'>{{x.title}}</a></v-card-title>
        <v-spacer></v-spacer>
        <v-avatar style='margin:20px'> 
      <img :src='x.img' alt='avatar'>
    </v-avatar>
        </div>
              
        <v-card-text>
          <p>{{x.summary}}</p>
          
        
 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color='primary' flat nuxt :to='x.link'>READ</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </v-app>
</template>




<script>
/* eslint-disable*/
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      posts:[     { 'title': 'Premier League Teams Points Per Game',
    'summary': 'A dataviz showing the history of points per game by season',
    'link': '/manager-points-per-game-premier-league-charts/',
    'img': '/v.png'
  },
        { 'title': 'Premier League Managers - Head to Head',
    'summary': 'A dataviz showing the history of managers competing against each other',
    'link': '/premier-league-manager-head-to-head-record/',
    'img': '/v.png'
  },
  { 'title': 'Charts tracking my weight',
    'summary': 'How has embracing a \'whole foods plant based\' diet changed my weight?',
    'link': '/tracking-personal-weight/',
    'img': '/v.png'
  },
  { 'title': 'Alternative Premier League Table',
  'summary': 'Also known as Cann tables, these tables are a great way of seeing just how points are distributed across a league.',
  'link': '/alternative-league-tables/',
  'img': '/v.png'
},
{ 'title': 'Latest Fantasy Football Standings',
  'summary': 'A private league - standings visualised',
  'link': '/fantasy-football-standings/',
  'img': '/v.png'
},{ 'title': 'Build your own sensory board',
    'summary': 'How we saved money building our own sensory board (aka busy board)',
    'link': '/build-sensory-busy-board/',
    'img': '/sensory-busy-board-small.jpg'
  }, { 'title': 'An example sleep schedule for 12 month old baby',
    'summary': 'A timeline showing an example sleep schedule for a 12 month old baby',
    'link': '/12-month-baby-sleep-schedule/',
    'img': '/v.png'
  }, { 'title': 'Things to consider when creating a new website',
    'summary': 'There are many options to choose from when creating a new website or blog.  In this article I cover some options I\'ve used in the past',
    'link': '/creating-new-website-things-to-consider/',
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
  ],
      dialog: false,
      page: 1,
      max: 20,
      id: '',
      name: '',
      desc: ''
    }
  },

  beforeMount () {
    axios
      .get('https://danharrington.netlify.com/posts.json')
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
